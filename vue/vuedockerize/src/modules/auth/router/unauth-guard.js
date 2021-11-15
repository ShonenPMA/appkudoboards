import store from '@/store'
const isUnauthenticatedGuard = async(to, from, next) => {
    const { ok } = await store.dispatch('auth/checkAuthentication')

    if( !ok ) next()
    else next({ name: 'kudoboard-list' })
}

export default isUnauthenticatedGuard