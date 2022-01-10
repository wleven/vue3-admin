import { Router } from 'vue-router';
import { useUserStore } from '@/store/user';
import useRouterStore from '@/store/router';

// 白名单(不需要登录检测)
const whiteList = ['/login'];

export function CreateRouterGuards(router: Router) {
  router.beforeEach((to) => {
    window.$NLoadingBar?.start();
    if (!whiteList.includes(to.path)) {
      // 如果没有登录 跳转到登录页页面
      const userStore = useUserStore();
      if (!userStore.checkLogin()) {
        router.replace({
          path: '/login',
          query: { redirect: to.path === '/' ? undefined : to.path },
        });
        return;
      }

      const route = useRouterStore();
      // 如果路由没有初始化 则初始化路由
      if (route.router.length === 0) {
        route.getAsyncRouter().forEach((item) => {
          router.addRoute(item);
        });
        router.replace(to);
        return;
      }
    }
  });

  router.afterEach(() => {
    window.$NLoadingBar?.finish();
  });

  router.onError((error) => {
    window.$NLoadingBar?.error();
    window.$NMessage?.error('路由错误');
    console.error(error);
  });
}
