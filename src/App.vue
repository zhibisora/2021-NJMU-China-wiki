<template class="font-sans selection:bg-gray-400">
  <MyNav></MyNav>
  <div class="font-sans selection:bg-gray-400">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import MyNav from './components/MyNav.vue'
import MyFooter from './components/MyFooter.vue'
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  scroll-behavior: smooth;
}
</style>
