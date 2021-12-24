import { Router } from 'vue-router';
import { useUserStore } from '@/store/user';

const whiteList = ['/login'];

export function CreateRouterGuards(router: Router) {
  router.beforeEach((to) => {
    if (!whiteList.includes(to.path)) {
      const userStore = useUserStore();
      if (!userStore.checkLogin()) {
        router.replace({
          path: '/login',
          query: { redirect: to.path === '/' ? undefined : to.path },
        });
      }
    }
  });

  router.onError((error) => {
    new Error('路由错误');
    window.$message?.error('路由错误');
    console.error(error);
  });
}
