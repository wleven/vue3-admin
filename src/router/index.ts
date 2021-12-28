import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { App } from 'vue';
import { CreateRouterGuards } from '@/router/guards';

export const PageNotFound: RouteRecordRaw = {
  path: '/:path(.*)',
  name: '404',
  component: () => import('@/views/error/PageNotFind.vue'),
};

export const BaseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/layout/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/TheLogin.vue'),
  },
];

export const AsyncRoutes: RouteRecordRaw[] = [];

const Router = createRouter({
  history: createWebHashHistory(),
  routes: BaseRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0, behavior: 'smooth' }),
});

export function mountRouter(app: App) {
  app.use(Router);
  CreateRouterGuards(Router);
}

export default Router;
