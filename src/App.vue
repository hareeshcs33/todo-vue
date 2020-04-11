<template>
  <div id="app">
    <div class="app-page">
      <display-todo-layout></display-todo-layout>
      <router-view/>
    </div>
  </div>
</template>

<script>
import DisplayTodoLayout from '@/components/display-todo-layout.vue'
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    DisplayTodoLayout,
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
