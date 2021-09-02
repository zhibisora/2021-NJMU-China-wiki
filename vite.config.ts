import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Team:NJMU-China/",
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        Members: resolve(__dirname, 'Members/index.html'),
        Modeling: resolve(__dirname, 'Modeling/index.html')
      }
    }
  }
})
