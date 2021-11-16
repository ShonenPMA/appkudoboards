// export const myMutation = (state) => {
    // state.any
// }
export const setProjects = (state, projects) => {
    state.projects = [ ...projects]
    state.isLoading = false
}