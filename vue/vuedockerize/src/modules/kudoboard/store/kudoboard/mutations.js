// export const myMutation = (state) => {
    // state.any
// }
export const setKudoboards = (state, kudoboards) => {
    state.kudoboards = [ ...kudoboards]
    state.isLoading = false
}