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
        const resp = await store.dispatch('auth/signInUser', user)
        return resp
    }

    return {
        createUser,
        loginUser,
        updateUser,

        username: computed( () => store.getters['auth/username'])
    }
}

export default useAuth