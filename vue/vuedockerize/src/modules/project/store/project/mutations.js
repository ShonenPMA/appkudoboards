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