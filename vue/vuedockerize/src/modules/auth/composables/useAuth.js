import { useStore } from "vuex"
import { computed } from 'vue';


const useAuth = () => {
    
    const store = useStore()

    const createUser = async(user) =>  await store.dispatch('auth/createUser', user)
    const updateUser = async(user) => await store.dispatch('auth/updateUser', user)
    const loginUser = async(user) => await store.dispatch('auth/signInUser', user)

    const logout = () => {
        store.commit('auth/logout')
        store.reset()
    }
    const checkAuthStatus = async() => await store.dispatch('auth/checkAuthentication')

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