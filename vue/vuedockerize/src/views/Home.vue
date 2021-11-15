<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hello World</h1>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: { },
  setup() {
    console.log(process.env.VUE_APP_API_URL)
  }
}
</script>
