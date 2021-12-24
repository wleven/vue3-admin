<template>
  <NConfigProvider :theme-overrides="theme">
    <Notify>
      <router-view />
    </Notify>
    <Setting />
  </NConfigProvider>
</template>

<script lang="ts" setup>
  import Notify from '@/components/Notify/index.vue';
  import Setting from '@/components/Setting/index.vue';

  import Theme from '@/theme';

  const theme = Theme;
</script>
