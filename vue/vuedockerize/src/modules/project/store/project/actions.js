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

export const editProject = async({commit}, {data, id}) => {
    
    try {
        const { data: response} = await generalApi.put(`/project/${id}`, {
            name: data
        })

        if(!response.data) return {ok:false}

        commit('updateProject', response.data)
        return {ok: true}
    } catch (error) {
        return {ok: false}
    }
}

export const removeProject = async({commit}, id) => {
    await generalApi.delete(`/project/${id}`)
    commit('removeProject', id)
}

export const loadMembers = async({commit}, id) => {
    const { data } = await generalApi.get(`/projectUser/${id}`)
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
        const { data } = await generalApi.post('/projectUser',{
            project_id: id,
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
    
    await generalApi.delete(`/projectUser/${id}`)

    commit('removeMember', id)
}