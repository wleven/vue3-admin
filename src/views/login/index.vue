<template>
  <div class="w-screen h-screen bg-green-400">
    <div class="flex bg-white w" >
      <div>胖虎后台系统</div>
      <NForm ref="formRef" :label-width="80" :model="user">
        <NFormItem label="账号" path="user.name">
          <NInput v-model:value="user.name" placeholder="请输入账号" />
        </NFormItem>
        <NFormItem label="密码" path="user.passworld">
          <NInput v-model:value="user.passworld" placeholder="请输入密码" />
        </NFormItem>
        <NFormItem>
          <NButton attr-type="button" @click="handleLogin">登录</NButton>
        </NFormItem>
      </NForm>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue';
  const user = reactive({ name: '', passworld: '' });
  function handleLogin() {}
</script>
