import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/class-match-react/', // GitHub Pages用のベースパスに変更
  plugins: [react()],
})
