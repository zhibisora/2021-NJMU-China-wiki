<template class="font-sans selection:bg-gray-400">
  <transition name="mynav">
    <div v-if="count">
      <MyNav></MyNav>
    </div>
  </transition>
  <div class="font-sans selection:bg-gray-400">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import MyNav from './components/MyNav.vue'
import { computed, ComputedRef } from 'vue'
import { useStore } from './store'
const store = useStore()
let count = computed(() => {
  return store.state.count
})
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: #2070a5; */
}
html {
  scroll-behavior: smooth;
}
/* MyNav transition */
.mynav-enter-from,
.mynav-leave-to {
  opacity: 0;
}
.mynav-enter-active,
.mynav-leave-active {
  transition: all 0.4s ease;
}
</style>
