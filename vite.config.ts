import { defineConfig } from 'vite';
import { initVitePlugins } from './build/vite/plugins';
import path from 'path';

export default defineConfig({
  plugins: initVitePlugins(),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
