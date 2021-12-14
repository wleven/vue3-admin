import { MockMethod } from 'vite-plugin-mock';

const api: MockMethod[] = [
  {
    url: '/mock/user/login',
    method: 'get',
    response: {
      code: '00000',
      data: { name: '登录成功' },
      msg: null,
    },
  },
];

export default api;
