<template>
  <div id="app">
    <div class="app-page">
      <h1>Online shopping cart</h1>

      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
