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
export const restarMembersLoading = (state) => {
    state.isLoadingMembers = true
}

export const setMembers = (state, members) => {
    state.members = [...members]
    state.isLoadingMembers = false
}