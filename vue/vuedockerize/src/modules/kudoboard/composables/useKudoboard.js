import { computed, ref} from 'vue';
import { useStore } from 'vuex';
const useKudoboard = () => {
    const store = useStore()

    const loadKudoboards = async() => {
        const resp = await store.dispatch('kudoboard/loadKudoboards')
        return resp
    }
    return {
        loadKudoboards,

        isLoading: computed( () => store.state.kudoboard.loading),
        kudoboardsByTerm: (term) => store.getters['kudoboard/getKudoboardsByTerm'](term)
    }
}

export default useKudoboard