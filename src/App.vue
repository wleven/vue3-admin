<template>
  <NConfigProvider :theme-overrides="theme">
    <router-view />
    <Notify />
  </NConfigProvider>
</template>

<script lang="ts" setup>
  import { GlobalThemeOverrides } from 'naive-ui';
  import Notify from '@/components/Notify/index.vue';

  const theme: GlobalThemeOverrides = {
    Layout: {
      // textColor:a.
      // siderBorderColor: "#000000"
    },
  };
</script>
