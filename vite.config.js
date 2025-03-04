import {
  fileURLToPath,
  URL
} from 'node:url'

import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/weatherFirst/'
    : '/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',
        import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets',
        import.meta.url)),
    }
  }
})