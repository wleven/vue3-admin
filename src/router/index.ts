import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

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
];

const Router = createRouter({
  history: createWebHashHistory(),
  routes: BaseRoutes,
});

export default Router;
