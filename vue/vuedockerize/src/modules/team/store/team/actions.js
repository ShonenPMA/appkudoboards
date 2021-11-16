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