import generalApi from "@/api/generalApi"
import { notify } from "@kyvg/vue3-notification"
// export const myAction = async(context) => {
export const createUser = async( {commit}, user) => {
    const { name, email, password, password_confirmation, birth_date } = user

    try {
        const { data } = await generalApi.post('/auth/register', {
            name,
            email,
            password,
            password_confirmation,
            birth_date
        })
    
        const { token } = data.data

        delete user.password
        delete user.password_confirmation
        commit('loginUser', {
            user,
            token,
        })

        return { ok: true }
    } catch (error) {
        return { ok: false}
    }
}

export const signInUser = async( {commit}, user) => {
    const { email, password } = user

    try {
        const { data } = await generalApi.post('/auth/login', {
            email,
            password
        })

        delete user.password
        const { token, user: userAuth } = data.data
        user.name = userAuth.name
        user.birth_date = userAuth.birth_date
        commit('loginUser', {
            user,
            token
        })
        return { ok: true }
    } catch (error) {
        return { ok: false }
    }
}

export const checkAuthentication = async({commit}) => {
    const token = localStorage.getItem('token')

    if(!token) {
        commit('logout')
        return { ok : false}
    }

    try {
         const { data } = await generalApi.get('/auth/currentUser')
         const {  user } = data.data
         commit('loginUser', { user, token })

         if(!localStorage.getItem('ws'))
         {
            localStorage.setItem('ws','loaded')
            window.Echo.private('hello')
            .listen('TestEvent', (e) => {
              console.log('testEvent',e)
            })
        
            window.Echo.private(`kudo.sent.${user.id}`)
            .listen('KudoSent', (e) => {
                console.log('kudo received', e)            
   
               notify({
                   title: e.sender.name+" has send you a Kudo 🎉",
                   text: e.message,
                   type: 'info'
               });
            })
         }


         return { ok:true}
        
    } catch (error) {
        commit('logout')
        return { ok:false}
    }
}

export const updateUser = async( {commit}, user) => {
    const { name, email, password, password_confirmation, birth_date } = user

    let formData = {
        name,
        email,
        password,
        password_confirmation,
        birth_date
    }

    if(password == '')
    {
        formData = {
            name,
            email,
            birth_date
        }
    }

    try {
        const { data } = await generalApi.post('/auth/editProfile', formData)

        const { logout } = data.data

        delete user.password
        delete user.password_confirmation
        commit('updateUser', {
            user
        })

        if(logout)
        {
            commit('logout')
            return { ok : false, logout}
        }

        return { ok: true, logout }
    } catch (error) {
        return { ok: false}
    }
}