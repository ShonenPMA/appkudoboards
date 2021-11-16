// export const myGetter = (state) => {
    // return state.any
// }
export const getTeamsByTerm = (state) => (term = '') => {
    if(term == '') return state.teams

    return state.teams.filter( item => item.name.toLowerCase().includes(term.toLowerCase()))
}

export const getTeamById = (state) => ( id ) => {
    const team = state.teams.find( item => {
        return item.id == id
    } )

    if(!team) return

    return { ...team }
}