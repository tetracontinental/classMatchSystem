import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/classMatchSystem/',
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
})
