import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  test: {
    // 在這邊加入設定
    include: ['**/*.spec.js'],
    environment: 'jsdom',
  },
});
