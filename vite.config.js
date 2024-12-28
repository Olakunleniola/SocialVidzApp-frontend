import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    hmr: true, // Ensure this is enabled
    watch: {
      usePolling: true,
      interval: 100, // Adjust as needed
    },
  },
})
