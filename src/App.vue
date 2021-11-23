<template>
  <NConfigProvider :theme-overrides="theme">
    <router-view/>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import {GlobalThemeOverrides} from "naive-ui";

const theme: GlobalThemeOverrides = {
  Layout: {
    // textColor:a.
    // siderBorderColor: "#000000"
  }
}
</script>
