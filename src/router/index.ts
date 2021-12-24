import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { CreateRouterGuards } from '@/router/guards';
import { App } from 'vue';

const BaseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/layout/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/:path(.*)',
    name: '404',
    component: () => import('@/views/error/404.vue'),
  },
];

const Router = createRouter({
  history: createWebHashHistory(),
  routes: BaseRoutes,
});

export function mountRouter(app: App) {
  app.use(Router);
  CreateRouterGuards(Router);
}

export default Router;
