<template>
  <h1 v-if="authStatus === 'authenticating'">{{ authStatus }}</h1>
  <template v-else>
    <Navbar v-if="username" />

    <router-view />
  </template>
</template>
<style>
body
{
  margin: 0;
  padding:0;
}

*{
  font-family: Arial, Helvetica, sans-serif;
}

:root{
  --blue : #1E3A8A;
  --orange: #FBBF24;
  --white: #EFF6FF; 
  --purple: #312E81;
  --green: #34D399;
  --red: #7F1D1D;
  --pink: #F472B6;
  --skyblue: #93C5FD;
  --indigo: #A5B4FC;
  --black : #111827;
}
</style>
<script>
import { defineAsyncComponent } from 'vue'
import useAuth from './modules/auth/composables/useAuth';

export default {
  components: {
    Navbar : defineAsyncComponent( () => import('./components/Navbar.vue'))
  },
  setup() {
    window.Echo.private('hello')
      .listen('TestEvent', (e) => {
        console.log(e)
      })

    const { 
      username,
      authStatus,
      checkAuthStatus } = useAuth()

    checkAuthStatus()

    return {
      username,
      authStatus
    }
  }
}
</script>
