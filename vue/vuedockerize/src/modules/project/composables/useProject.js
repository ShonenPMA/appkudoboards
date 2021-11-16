import { computed} from 'vue';
import { useStore } from 'vuex';
const useProject = ( ) => {
    const store = useStore()

    const loadProjects = async() =>await store.dispatch('project/loadProjects')
    const loadMembers = async(id) => await store.dispatch('project/loadMembers', id)
    const loadGeneralMembers = async() => await store.dispatch('project/loadGeneralMembers')
    const createProject = async(data) => await store.dispatch('project/createProject',data)
    const deleteProject = async(id) => await store.dispatch('project/removeProject', id)
    const registerMember = async(data, id) => await store.dispatch('project/registerMember', {data, id})
    const deleteMember = async(id) => await store.dispatch('project/deleteMember', id)
    const editCurrentProject = async(data, id) => await store.dispatch('project/editProject', {data,id})
   
    return {

        loadProjects,
        createProject,
        deleteProject,
        loadMembers,
        loadGeneralMembers,
        registerMember,
        deleteMember,
        editCurrentProject,
        members: computed( () => store.state.project.members),
        generalMembers: computed( () => store.state.project.generalMembers),
        isLoading: computed( () => store.state.project.isLoading),
        projectsByTerm: (term) => store.getters['project/getprojectsByTerm'](term),
        getProjectById: (id) => store.getters['project/getProjectById'](id),
    }
}

export default useProject