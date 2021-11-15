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