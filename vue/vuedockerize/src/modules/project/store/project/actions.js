// export const myAction = async(context) => {
// export const myAction = async({commit}) => {
// }
import generalApi from "@/api/generalApi"

export const loadProjects = async({commit}) => {

    const { data } = await generalApi.get('/project/indexFromAuthUser')

    if( !data.data)
    {
        commit('setProjects', [])
        return 
    }


    const projects = data.data

    commit('setProjects', projects)
}
