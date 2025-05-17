import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/classMatchSystem/', // baseはそのまま
  build: {
    outDir: '../dist', // 出力先をclass-match-react外に変更
  },
  plugins: [react()],
});
