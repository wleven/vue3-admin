<template>
  <NMessageProvider>
    <slot></slot>
    <MessageContent />
  </NMessageProvider>
</template>

<script lang="ts" setup>
  import MessageContent from '@/components/Notify/MessageContent.vue';
</script>
