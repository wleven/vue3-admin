import { AsyncRoutes, BaseRoutes, PageNotFound } from '@/router';
import { RouteRecordRaw } from 'vue-router';

interface IState {
  router: RouteRecordRaw[];
  asyncRouter: RouteRecordRaw[];
}

const useRouterStore = defineStore('router', {
  state: (): IState => {
    return {
      router: [],
      asyncRouter: [],
    };
  },

  getters: {
    asideMenus: (state) => {
      return state.asyncRouter.filter((item) => item.meta?.isAsideMenu);
    },
  },

  actions: {
    getAsyncRouter() {
      this.asyncRouter = [...AsyncRoutes, PageNotFound];
      this.router = BaseRoutes.concat(this.asyncRouter);
      return this.asyncRouter;
    },
  },
});

export default useRouterStore;
