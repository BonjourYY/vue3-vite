import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import VueDevtools from 'vite-plugin-vue-devtools';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command, mode }) => ({
  root: process.cwd(),
  base: '/v23/',
  mode: 'production',
  // 定义全局常量
  define: {
    APPNAME: '"XRENDER"',
  },
  plugins: [vue(), basicSsl()],
  publicDir: 'public2',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
    dedupe: [],
    conditions: [],
  },
  css: {
    modules: {},
    postcss: {},
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/style/variables.scss';",
      },
    },
  },
  esbuild: {},
  clearScreen: false,
  server: {
    host: true,
    https: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {},
      },
    },
    cors: true,
    headers: {
      APPNAME: 'XRENDER',
    },
  },
  build: {
    target: 'modules',
    cssCodeSplit: false,
    sourcemap: true,
    rollupOptions: {},
    commonjsOptions: {},
    dynamicImportVarsOptions: {},
    // lib: { entry: {}, name: '', formats: [], fileName: (formats, entryName) => {} },
    manifest: 'manifest',
    ssrManifest: 'ssrmanifest',
    emptyOutDir: false,
    copyPublicDir: true,
    reportCompressedSize: true,
  },
  preview: {},
  optimizeDeps: {
    force: true,
  },
  ssr: {},
  worker: {},
}));
