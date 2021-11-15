<template >
    <span>Access</span>
    <form @submit.prevent="onSubmit">

        <input v-model="userForm.email" type="email" placeholder="Email" required>

        <input v-model="userForm.password" type="password" placeholder="Password" required>
        <button>Login</button>
    </form>
    <router-link :to="{ name: 'register'}">Create new account</router-link>
</template>
<script>
import { ref } from 'vue';
export default {
    setup() {

        const userForm = ref({
            email : '',
            password: '',
        })

        return {
            userForm,

            onSubmit: async() => {
                // TODO
            }
        }
    }
}
</script>
<style lang="scss" scoped>
  @import '../css/styles.scss';
</style>