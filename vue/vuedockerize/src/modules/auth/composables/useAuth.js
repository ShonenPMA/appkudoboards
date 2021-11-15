import { useStore } from "vuex"
import { computed } from 'vue';


const useAuth = () => {
    
    const store = useStore()

    const createUser = async(user) => {
        const resp = await store.dispatch('auth/createUser', user)
        return resp
    }
    const updateUser = async(user) => {
        const resp = await store.dispatch('auth/updateUser', user)
        return resp
    }
    const loginUser = async(user) => {
        console.log('dispatch login...')
        const resp = await store.dispatch('auth/signInUser', user)
        return resp
    }

    const logout = () => {
        store.commit('auth/logout')
    }
    const checkAuthStatus = async() => {
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
    }

    return {
        createUser,
        loginUser,
        updateUser,
        logout,
        checkAuthStatus,

        username: computed( () => store.getters['auth/username'])
    }
}

export default useAuth