// export const myMutation = (state) => {
    // state.any
// }
export const setTeams = (state, teams) => {
    state.teams = [ ...teams]
    state.isLoading = false
}

export const addTeam = (state, team) => {
    state.teams = [team, ...state.teams]
}

export const updateTeam = (state, team) => {
    const idx = state.teams.map(e => e.id).indexOf(team.id)
    state.teams[idx] = team
}

export const removeTeam = (state, id) => {
    state.teams = state.teams.filter( e => e.id !== id)
}

export const setMembers = (state, members) => {
    state.members = [...members]
    state.isLoadingMembers = false
}

export const addMember = (state, member) => {
    state.members = [member, ...state.members]
}
export const removeMember = (state, id) => {
    state.members = state.members.filter( e => e.id !== id)
}

export const setGeneralMembers = (state, members) => {
    state.generalMembers = [...members]
    state.isLoadingGeneralMembers = false
}