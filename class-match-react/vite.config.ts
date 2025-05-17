import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/classMatchSystem/', // serve時はルート、build時はgithub pages上のパス
  build: {
    outDir: '../dist', // 出力先をclass-match-react外に変更
  },
  plugins: [react()],
}));

