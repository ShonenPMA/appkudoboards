// export const myAction = async(context) => {
// export const myAction = async({commit}) => {
// }
import generalApi from "@/api/generalApi"

export const loadTeams = async({commit}) => {
    try {
        const { data } = await generalApi.get('/team/indexFromAuthUser')

        if( !data.data)
        {
            commit('setTeams', [])
            return 
        }


        const teams = data.data

        commit('setTeams', teams)

        return { ok:true}
    } catch (error) {
        return { ok:false}
    }
    
}

export const createTeam = async({commit}, teamForm) => {
    try {
        const { name } = teamForm

        const { data } = await generalApi.post('/team', {
            name
        })

        const team = data.data

        if(!data.data) return {ok: false}

        commit('addTeam', team)

        return {ok: true}
    } catch (error) {
        return {ok: false}
    }
}
export const editTeam = async({commit}, {data, id}) => {
    try {
        const { data: response} = await generalApi.put(`/team/${id}`, {
            name: data
        })

        if(!response.data) return {ok:false}

        commit('updateTeam', response.data)
        return {ok: true}
    } catch (error) {
        return {ok: false}
    }
}

export const loadMembers = async({commit}, id) => {
    const { data } = await generalApi.get(`/teamUser/${id}`)
    const members = data.data
    
    if( !members)
    {
        commit('setMembers', [])
        return 
    }  

    commit('setMembers', members)
}
export const loadGeneralMembers = async({commit}) => {
    const { data } = await generalApi.get('/user/indexExceptAuth')
    const members = data.data
    
    if( !members)
    {
        commit('setGeneralMembers', [])
        return 
    }  

    commit('setGeneralMembers', members)
}
export const registerMember = async({commit}, {data, id})=> {
    const { memberSelected } = data

    try {
        const { data } = await generalApi.post('/teamUser',{
            team_id: id,
            user_id : memberSelected.id
        })

        if(!data.data) return {ok:false}

        commit('addMember', data.data)
        return {ok: true}
    } catch (error) {
        return {ok:false}
    }
}
export const deleteMember = async({commit}, id) => {
    
    await generalApi.delete(`/teamUser/${id}`)

    commit('removeMember', id)
}