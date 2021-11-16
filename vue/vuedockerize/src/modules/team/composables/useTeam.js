import { computed} from 'vue';
import { useStore } from 'vuex';
const useTeam = ( ) => {
    const store = useStore()

    const loadTeams = async() =>await store.dispatch('team/loadTeams')
    const loadMembers = async(id) => await store.dispatch('team/loadMembers', id)
    const loadGeneralMembers = async() => await store.dispatch('team/loadGeneralMembers')
    const createTeam = async(data) => await store.dispatch('team/createTeam',data)
    const deleteTeam = async(id) => await store.dispatch('team/removeTeam', id)
    const registerMember = async(data, id) => await store.dispatch('team/registerMember', {data, id})
    const deleteMember = async(id) => await store.dispatch('team/deleteMember', id)
    const editCurrentTeam = async(data, id) => await store.dispatch('team/editTeam', {data,id})
   
    return {

        createTeam,
        deleteTeam,
        loadMembers,
        loadGeneralMembers,
        registerMember,
        deleteMember,
        editCurrentTeam,
        members: computed( () => store.state.team.members),
        generalMembers: computed( () => store.state.team.generalMembers),
        getTeamById: (id) => store.getters['team/getTeamById'](id),
        
        teamsByTerm: (term) => store.getters['team/getTeamsByTerm'](term),
        loadTeams,
        isLoading: computed( () => store.state.team.isLoading),
    }
}

export default useTeam