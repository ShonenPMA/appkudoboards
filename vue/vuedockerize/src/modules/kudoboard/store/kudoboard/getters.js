// export const myGetter = (state) => {
    // return state.any
// }
export const getKudoboardsByTerm = (state) => (term = '') => {

    if(term == '') return state.kudoboards

    return state.kudoboards.filter( kudoboard => kudoboard.title.toLowerCase().includes(term.toLowerCase()))
}