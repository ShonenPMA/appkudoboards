// export const myMutation = (state) => {
    // state.any
// }
export const setTeams = (state, teams) => {
    state.teams = [ ...teams]
    state.isLoading = false
}
