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
        Model: resolve(__dirname, 'Model/index.html'),
        Description: resolve(__dirname, 'Description/index.html'),
        Design: resolve(__dirname, 'Design/index.html'),
        Safety: resolve(__dirname, 'Safety/index.html'),
        Parts: resolve(__dirname, 'Parts/index.html'),
        Partnership: resolve(__dirname, 'Partnership/index.html'),
        Engineering: resolve(__dirname, 'Engineering/index.html'),
        Results: resolve(__dirname, 'Results/index.html'),
        Proof_Of_Concept: resolve(__dirname, 'Proof_Of_Concept/index.html'),
        Contribution: resolve(__dirname, 'Contribution/index.html'),
      }
    }
  }
})
