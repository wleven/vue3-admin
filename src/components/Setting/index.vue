<template>
  <div
    class="fixed right-[2rem] bottom-[10rem] bg-primary rounded-[0.8rem] cursor-pointer text-zero"
    @click="handleOpenDrawer"
  >
    <NIcon class="m-[1rem]" color="white" size="40">
      <SettingTwotone />
    </NIcon>
  </div>
  <NDrawer v-model:show="showDrawer" placement="right" width="30rem">
    <NDrawerContent title="系统设置">
      <NSpace vertical>
        <NButton
          v-if="!settingStore.isConsole"
          class="w-full"
          size="small"
          type="primary"
          @click="handleConsole(true)"
          >打开调试
        </NButton>
        <NButton v-else class="w-full" size="small" type="primary" @click="handleConsole(false)"
          >关闭调试
        </NButton>
        <NButton class="w-full" size="small" type="primary" @click="handleRefresh"
          >刷新页面
        </NButton>
        <NButton class="w-full" size="small" type="primary" @click="handleClearLocalStorage"
          >清除LocalStorage
        </NButton>
        <NButton class="w-full" size="small" type="primary" @click="handleClearSessionStorage"
          >清除SessionStorage
        </NButton>
        <NButton class="w-full" size="small" type="primary" @click="handleClearCookie"
          >清除Cookie
        </NButton>
      </NSpace>
    </NDrawerContent>
  </NDrawer>
</template>

<script lang="ts" setup>
  import { SettingTwotone } from '@vicons/antd';
  import useSettingStore from '@/store/setting';
  import router from '@/router';
  import { clearCookie } from '@/utils/cookie';

  const showDrawer = ref(false);

  const settingStore = useSettingStore();

  onMounted(() => {
    settingStore.init();
  });

  // 打开设置弹窗
  function handleOpenDrawer() {
    showDrawer.value = true;
  }

  // 打开/关闭调试
  function handleConsole(value: boolean) {
    settingStore.setConsole(value);
    window.$NMessage.success(value ? '打开调试成功' : '关闭调试成功');
  }

  // 刷新页面
  function handleRefresh() {
    router.go(0);
    window.$NMessage.success('刷新成功');
  }

  // 清除本地缓存
  function handleClearLocalStorage() {
    localStorage.clear();
    window.$NMessage.success('LocalStorage清除成功');
  }

  // 清除绘画缓存
  function handleClearSessionStorage() {
    sessionStorage.clear();
    window.$NMessage.success('SessionStorage清除成功');
  }

  // 清除cookie
  function handleClearCookie() {
    clearCookie();
    window.$NMessage.success('Cookie清除成功');
  }
</script>
