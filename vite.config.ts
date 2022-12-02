import { URL, fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: [
        'src/components/**',
        'src/layout/**',
      ],
      extensions: ['vue'],
      deep: true,

    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        // presets

        'vue',
        'vue-router',
        {
          'nanoid': ['nanoid', 'customAlphabet'],
          'lodash-es': ['debounce', 'cloneDeep', 'isNumber'],
        },
      ],
      dirs: [
        // './src/components/**',
        // './src/components/**',
        // './src/layout/**',
        // './src/layout/**',
        './src/**/*.vue',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/global/m.scss"; @import "@/styles/global/f.scss";',
      },
    },
  },
  server: {
    port: 8312,
  },
});
