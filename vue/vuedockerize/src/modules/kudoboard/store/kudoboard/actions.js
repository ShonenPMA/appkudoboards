// export const myAction = async(context) => {
// export const myAction = async({commit}) => {
// }
import generalApi from "@/api/generalApi"

export const loadKudoboards = async({commit}) => {

    const { data } = await generalApi.get('/kudoboards')

    if( !data.data)
    {
        commit('setKudoboards', [])
        return 
    }


    const kudoboards = data.data

    commit('setKudoboards', kudoboards)
}

export const loadKudos = async({commit}, kudoboardId) => {
    commit('restarKudoLoading')
    const { data } = await generalApi.get(`/kudo/indexFromKudoboard/${kudoboardId}`)
    const { data: kudos } = data

    if(kudos)
    {
        commit('setKudos', [])
    }

    commit('setKudos', kudos)
}

export const loadMembers = async({commit}) => {
    const { data } = await generalApi.get('/user/indexExceptAuth')
    const members = data.data
    
    if( !members)
    {
        commit('setMembers', [])
        return 
    }  

    commit('setMembers', members)
}
export const loadProjectMembers = async({commit}, kudoboardId) => {
    const { data } = await generalApi.get(`/user/indexFromProject/${kudoboardId}`)
    const members = data.data
    
    if( !members)
    {
        commit('setMembers', [])
        return 
    }  

    commit('setMembers', members)
}

export const loadTeamMembers = async({commit}, kudoboardId) => {
    const { data } = await generalApi.get(`/user/indexFromTeam/${kudoboardId}`)
    const members = data.data
    
    if( !members)
    {
        commit('setMembers', [])
        return 
    }  

    commit('setMembers', members)
}


export const sendKudo = async({commit}, kudo) =>{
    try {
        const { description, memberSelected, kudoboardId } = kudo

        await generalApi.post('/kudo',{
            description,
            kudoboard_id: kudoboardId,
            user_receiver_id: memberSelected.id
        })
        return { ok: true }
    } catch (error) {
        return { ok: false }
    }
}