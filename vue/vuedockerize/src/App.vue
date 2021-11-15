<template>
  <Navbar v-if="username" />

  <router-view />
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
    const { username } = useAuth()
    
    return {
      username
    }
  }
}
</script>
