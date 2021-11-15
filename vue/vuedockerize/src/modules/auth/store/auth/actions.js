import generalApi from "@/api/generalApi"

// export const myAction = async(context) => {
export const createUser = async( {commit}, user) => {
    const { name, email, password, password_confirmation, birth_date } = user

    try {
        const { data } = await generalApi.post('/auth/register', {
            name,
            email,
            password,
            password_confirmation,
            birth_date
        })
    
        const { token } = data.data

        delete user.password
        delete user.password_confirmation
        commit('loginUser', {
            user,
            token,
        })

        return { ok: true }
    } catch (error) {
        return { ok: false}
    }
}