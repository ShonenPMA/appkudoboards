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