import { Login } from '@/api/login';
import { CookieNameEnum, getCookie, setCookie } from '@/utils/cookie';

interface ILoginParams {
  userName: string;
  passWord: string;
}

interface IState {
  token: string | null;
}

export const useUserStore = defineStore('user', {
  state: (): IState => {
    return {
      token: null,
    };
  },
  actions: {
    // 登录
    login(params: ILoginParams) {
      return Login(params)
        .then((res) => {
          const { token } = res.data;

          this.token = token;
          setCookie(CookieNameEnum.Token, token, 1000 * 10);

          return Promise.resolve();
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    },

    // 检查登录
    checkLogin() {
      if (this.token) {
        return true;
      }

      const _token = getCookie(CookieNameEnum.Token);
      if (_token) {
        this.token = _token;
        return true;
      }

      return false;
    },
  },
});
