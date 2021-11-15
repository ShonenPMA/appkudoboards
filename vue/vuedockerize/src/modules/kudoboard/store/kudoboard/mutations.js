// export const myMutation = (state) => {
    // state.any
// }
export const setKudoboards = (state, kudoboards) => {
    state.kudoboards = [ ...kudoboards]
    state.isLoading = false
}
export const setKudos = (state, kudos) => {
    state.kudos = [ ...kudos]
    state.isLoadingKudos = false
}
export const restarKudoLoading = (state) => {
    state.isLoadingKudos = true
}