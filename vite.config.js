import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevtools from 'vite-plugin-vue-devtools';
// import imagemin from 'unplugin-imagemin/vite';
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'node:path';

export default defineConfig(({ command, mode }) => {
  return {
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
      },
    },
    server: {},
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
      { ...VueDevtools(), apply: 'serve' },
      vue({
        template: {
          compilerOptions: {
            isCustomElement(tag) {
              return tag.startsWith('ion-');
            },
          },
        },
      }),
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
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    experimental: {
      renderBuiltUrl(fileName, { hostId, hostType, type }) {
        console.log(fileName, hostId, hostType, type);
        if (type === 'public') {
          return 'https://www.baidu.com/' + fileName;
        }
      },
    },
  };
});
