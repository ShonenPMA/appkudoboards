import { computed} from 'vue';
import { useStore } from 'vuex';
const useKudoboard = ( ) => {
    const store = useStore()

    const loadKudoboards = async() => {
        const resp = await store.dispatch('kudoboard/loadKudoboards')
        return resp
    }

    const loadKudos = async(kudoboardId) => {
        const resp = await store.dispatch('kudoboard/loadKudos', kudoboardId)
        return resp
    }

    
    
    return {
        loadKudoboards,
        loadKudos,
        kudos: computed( () => store.state.kudoboard.kudos),

        kudoboardsByTerm: (term) => store.getters['kudoboard/getKudoboardsByTerm'](term),
        getKudoboardById: (kudoboardId) => store.getters['kudoboard/getKudoboardById'](kudoboardId),
        
        isLoading: computed( () => store.state.kudoboard.isLoading),
        isLoadingKudos: computed( () => store.state.kudoboard.isLoadingKudos),
    }
}

export default useKudoboard