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

    const loadMembers = async() => {
        const resp = await store.dispatch('kudoboard/loadMembers')
        return resp
    }

    const sendKudo = async(kudoForm) => {
        const resp = await store.dispatch('kudoboard/sendKudo', kudoForm)
        return resp
    }
    
    return {
        loadKudoboards,
        loadKudos,
        loadMembers,
        sendKudo,
        kudos: computed( () => store.state.kudoboard.kudos),
        members: computed( () => store.state.kudoboard.members ),

        kudoboardsByTerm: (term) => store.getters['kudoboard/getKudoboardsByTerm'](term),
        getKudoboardById: (kudoboardId) => store.getters['kudoboard/getKudoboardById'](kudoboardId),
        
        isLoading: computed( () => store.state.kudoboard.isLoading),
        isLoadingKudos: computed( () => store.state.kudoboard.isLoadingKudos),
    }
}

export default useKudoboard