<template>
  <div class="w-screen h-screen flex justify-center items-center bg-teal-700">
    <NCard class="w-[400px]">
      <NForm ref="formRef" :model="formData" :rules="formRule" :show-label="false">
        <NFormItem path="userName">
          <NInput v-model:value="formData.userName" placeholder="用户名">
            <template #prefix>
              <NIcon>
                <UserOutlined />
              </NIcon>
            </template>
          </NInput>
        </NFormItem>
        <NFormItem path="passWord">
          <NInput v-model:value="formData.passWord" placeholder="密码">
            <template #prefix>
              <NIcon>
                <LockOutlined />
              </NIcon>
            </template>
          </NInput>
        </NFormItem>
      </NForm>
      <div class="text-center">
        <NButton class="w-full" type="primary" @click="handleLogin">登录</NButton>
      </div>
    </NCard>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import type { FormInst, FormRules } from 'naive-ui';
  import { LockOutlined, UserOutlined } from '@vicons/antd';
  import { Login } from '@/api/login';
  import { useRouter } from 'vue-router';

  const formRef = ref<FormInst>();

  const formData = reactive({
    userName: null,
    passWord: null,
  });

  const formRule: FormRules = {
    userName: [{ required: true, message: '请填写用户名', trigger: 'blur' }],
    passWord: [{ required: true, message: '请填写密码', trigger: 'blur' }],
  };

  const router = useRouter();

  function handleLogin() {
    formRef.value?.validate().then(() => {
      Login(formData).then(() => {
        window.$message.success('登录成功');
        router.replace({ path: '/' });
      });
    });
  }
</script>
