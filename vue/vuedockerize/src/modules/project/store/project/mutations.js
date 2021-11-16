// export const myMutation = (state) => {
    // state.any
// }
export const setProjects = (state, projects) => {
    state.projects = [ ...projects]
    state.isLoading = false
}

export const addProject = (state, project) => {
    state.projects = [project, ...state.projects]
}

export const updateProject = (state, project) => {
    const idx = state.projects.map(e => e.id).indexOf(project.id)
    state.projects[idx] = project
}

export const removeProject = (state, id) => {
    state.projects = state.projects.filter( e => e.id !== id)
}

export const addMember = (state, member) => {
    state.members = [member, ...state.members]
}

export const setMembers = (state, members) => {
    state.members = [...members]
    state.isLoadingMembers = false
}
export const setGeneralMembers = (state, members) => {
    state.generalMembers = [...members]
    state.isLoadingGeneralMembers = false
}
export const removeMember = (state, id) => {
    state.members = state.members.filter( e => e.id !== id)
}