<template >
    <span>Edit Profile</span>
    <form @submit.prevent="onSubmit">
        <input v-model="userForm.name" type="text" placeholder="Username" required>
        <input v-model="userForm.email" type="email" placeholder="Email" required>
        <input v-model="userForm.birth_date" type="date" placeholder="Año de nacimiento" required>
        <input v-model="userForm.password" type="password" placeholder="Password" >
        <input v-model="userForm.password_confirmation" type="password" placeholder="Password confirmation" >
        <button type="submit">Update profile</button>
    </form>
</template>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore} from 'vuex';
import useAuth from '../composables/useAuth';

export default {
    setup() {

        const router = useRouter()
        const store = useStore()

        const userForm = ref({
            email : store.state.auth.user.email,
            name: store.state.auth.user.name,
            password: '',
            password_confirmation: '',
            birth_date: store.state.auth.user.birth_date
        })

        const { updateUser } = useAuth()

        return {
            userForm,

            onSubmit: async() => {
                const { ok,  logout  } = await updateUser(userForm.value)
                if(logout) router.push({ name: 'login'})
                if(ok) router.push({ name: 'kudoboard-list'})
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../css/styles.scss';
</style>