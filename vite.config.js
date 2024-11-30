import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://www.freetestapi.com/api/v1/books', 
        changeOrigin: true,             
        rewrite: (path) => path.replace(/^\/api/, ''), 
      }
    }
  },
  plugins: [react()],
});
