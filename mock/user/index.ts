import { MockMethod } from 'vite-plugin-mock';

const api: MockMethod[] = [
  {
    url: '/mock/user/login',
    method: 'get',
    timeout: 1000,
    response: {
      code: '00000',
      data: { token: '❤❤❤❤❤❤❤❤❤' },
      msg: null,
    },
  },
];

export default api;
