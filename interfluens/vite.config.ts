import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      '/upgrade': 'http://localhost:3080',
      '/update': 'http://localhost:3080',
    }
  }
})
