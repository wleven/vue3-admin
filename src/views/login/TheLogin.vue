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
        <NButton :loading="logInLoading" class="w-full" type="primary" @click="handleLogin"
          >登录
        </NButton>
      </div>
    </NCard>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import type { FormInst, FormRules } from 'naive-ui';
  import { LockOutlined, UserOutlined } from '@vicons/antd';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/user';

  const formRef = ref<FormInst>();
  const logInLoading = ref(false);

  const formData = reactive({
    userName: '',
    passWord: '',
  });

  const formRule: FormRules = {
    userName: [{ required: true, message: '请填写用户名', trigger: 'blur' }],
    passWord: [{ required: true, message: '请填写密码', trigger: 'blur' }],
  };

  const router = useRouter();
  const route = useRoute();
  const userStore = useUserStore();

  async function handleLogin() {
    await formRef.value?.validate();

    logInLoading.value = true;
    userStore.login(formData).then(() => {
      window.$NMessage.success('登录成功');
      logInLoading.value = false;
      const { redirect = '/' } = route.query;
      router.replace({ path: redirect as string });
    });
  }
</script>
