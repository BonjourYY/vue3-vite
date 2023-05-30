import { fileURLToPath, URL } from 'node:url';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevtools from 'vite-plugin-vue-devtools';
// 导入压缩图片插件
// import imagemin from 'unplugin-imagemin/vite';
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'node:path';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  // base: process.env.VITE_OBS_URL,
  build: {
    // lib: {
    //   entry: resolve(__dirname, 'lib/main.js'),
    //   name: 'MyLib',
    //   fileName: 'my-lib',
    //   // manualChunks: {
    //   //   images: ['src/assets/image/*.png'],
    //   // },
    // },
  },
  server: {
    proxy: {
      '/data': {
        target: 'https://jsonplaceholder.typicode.com/todos',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/data/, ''),
      },
      '/img': {
        target: 'https://prod-xrender-market-static.obs.cn-east-3.myhuaweicloud.com/xrender/latest-activity/async-component',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/img/, ''),
      },
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  plugins: [
    // VueDevtools(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement(tag) {
            return tag.startsWith('ion-');
          },
        },
      },
    }),
    // copy({
    //   targets: [{ src: '/public/assets', dest: 'dist/assets' }],
    // }),
    // imagemin({
    //   mode: 'squoosh',
    //   compress: {
    //     jpg: {
    //       quality: 0,
    //     },
    //     jpeg: {
    //       quality: 70,
    //     },
    //     png: {
    //       quality: 70,
    //     },
    //     webp: {
    //       quality: 70,
    //     },
    //   },
    // }),
    // legacy({
    //   targets: ['defaults', 'not IE 11'],
    // }),
    // splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      components: fileURLToPath(new URL('./src/components', import.meta.url)),
      '@obs': 'https://prod-xrender-market-static.obs.myhuaweicloud.com/xrender',
      // '@image': 'https://prod-xrender-market-static.obs.myhuaweicloud.com/xrender',
    },
  },
});
