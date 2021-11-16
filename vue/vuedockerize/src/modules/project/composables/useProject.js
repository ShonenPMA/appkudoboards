import { computed} from 'vue';
import { useStore } from 'vuex';
const useProject = ( ) => {
    const store = useStore()

    const loadProjects = async() => {
        const resp = await store.dispatch('project/loadProjects')
        return resp
    }

    const createProject = async(data) => await store.dispatch('project/createProject',data)
   
    return {

        loadProjects,
        createProject,
      
        isLoading: computed( () => store.state.project.isLoading),
        projectsByTerm: (term) => store.getters['project/getprojectsByTerm'](term),
    }
}

export default useProject