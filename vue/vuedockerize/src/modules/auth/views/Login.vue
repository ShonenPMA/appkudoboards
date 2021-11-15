<template >
    <span>Access</span>
    <form @submit.prevent="onSubmit">

        <input v-model="userForm.email" type="email" placeholder="Email" required>

        <input v-model="userForm.password" type="password" placeholder="Password" required>
        <button type="submit">Login</button>
    </form>
    <router-link :to="{ name: 'register'}">Create new account</router-link>
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
            password: '',
        })

        const { loginUser } = useAuth()

        return {
            userForm,

            onSubmit: async() => {
                const { ok } = await loginUser(userForm.value)

                if(ok) router.push({ name: 'kudoboard-list'})
            }
        }
    }
}
</script>
<style lang="scss" scoped>
  @import '../css/styles.scss';
</style>