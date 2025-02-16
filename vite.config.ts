import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    reactivityTransform: true
  })],
  base: './', // Define caminhos relativos,
  build: {
    outDir: 'docs', // Define a pasta de saída para 'docs'
  },
})