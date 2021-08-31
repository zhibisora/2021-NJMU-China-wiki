import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'  // ./xxx = ./xxx/index
import { store, key } from './store'

createApp(App).use(store, key).use(router).mount('#app')
