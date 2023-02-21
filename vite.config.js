import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 导入压缩图片插件
import imagemin from 'unplugin-imagemin/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    imagemin({
      mode: 'squoosh',
      compress: {
        jpg: {
          quality: 0,
        },
        jpeg: {
          quality: 70,
        },
        png: {
          quality: 70,
        },
        webp: {
          quality: 70,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
