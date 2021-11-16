// export const myAction = async(context) => {
// export const myAction = async({commit}) => {
// }
import generalApi from "@/api/generalApi"

export const loadProjects = async({commit}) => {
    try {
        const { data } = await generalApi.get('/project/indexFromAuthUser')

        if( !data.data)
        {
            commit('setProjects', [])
            return 
        }


        const projects = data.data

        commit('setProjects', projects)

        return { ok:true}
    } catch (error) {
        return { ok:false}
    }
    
}


export const createProject = async({commit}, projectForm) => {
    try {
        const { name } = projectForm

        const { data } = await generalApi.post('/project', {
            name
        })

        const project = data.data

        if(!data.data) return {ok: false}

        commit('addProject', project)

        return {ok: true}
    } catch (error) {
        return {ok: false}
    }
}