<template>
  <NConfigProvider :locale="zhCN" :theme-overrides="Theme">
    <NLoadingBarProvider>
      <NMessageProvider>
        <NDialogProvider>
          <NNotificationProvider>
            <slot></slot>
            <AppProviderContent />
            <Setting />
          </NNotificationProvider>
        </NDialogProvider>
      </NMessageProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
  import { zhCN } from 'naive-ui';
  import AppProviderContent from './AppProviderContent';
  import Theme from '@/theme';
  import Setting from '@/components/Setting/Setting.vue';

  import useSettingStore from '@/store/setting';

  const settingStore = useSettingStore();
  settingStore.init();
</script>
