<template >
    <span>Register</span>
    <form @submit.prevent="onSubmit">
        <input v-model="userForm.name" type="text" placeholder="Username" required>
        <input v-model="userForm.email" type="email" placeholder="Email" required>
        <input v-model="userForm.birth_date" type="date" placeholder="Año de nacimiento" required>
        <input v-model="userForm.password" type="password" placeholder="Password" required>
        <input v-model="userForm.password_confirmation" type="password" placeholder="Password confirmation" required>
        <button type="submit">Create account</button>
    </form>
    <router-link :to="{ name: 'login'}">Already have an account?</router-link>
</template>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuth from '../composables/useAuth';

export default {
    setup() {

        const router = useRouter()

        const userForm = ref({
            email : '',
            name: '',
            password: '',
            password_confirmation: '',
            birth_date: ''
        })

        const { createUser } = useAuth()

        return {
            userForm,

            onSubmit: async() => {
                const { ok  } = await createUser(userForm.value)

                if(ok) router.push({ name: 'kudoboard-list'})
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../css/styles.scss';
</style>