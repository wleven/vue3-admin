import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// 按需加载
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { initMockServe } from './mock';

export function initVitePlugins() {
  const plugins: Plugin[] = [];

  plugins.push(vue());

  plugins.push(vueJsx());

  plugins.push(
    Components({
      dts: true,
      resolvers: [NaiveUiResolver()],
    })
  );

  plugins.push(initMockServe());

  return plugins;
}
