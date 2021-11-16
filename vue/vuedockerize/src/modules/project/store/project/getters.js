// export const myGetter = (state) => {
    // return state.any
// }
export const getprojectsByTerm = (state) => (term = '') => {
    if(term == '') return state.projects

    return state.projects.filter( item => item.name.toLowerCase().includes(term.toLowerCase()))
}

export const getProjectById = (state) => ( id ) => {
    const project = state.projects.find( item => {
        return item.id == id
    } )

    if(!project) return

    return { ...project }
}