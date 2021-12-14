import { Request } from './axios';
import { AxiosTransform, ContentTypeEnum } from '@/utils/http/types';
import JsonBigInit from 'json-bigint';

const transform: AxiosTransform = {
  // 请求数据处理
  RequestTransform: [],

  // 响应数据处理
  ResponseTransform: [
    function (data, headers) {
      if (headers?.['content-type'] === 'application/json') {
        try {
          const format = JsonBigInit({ storeAsString: true });
          return format.parse(data);
        } catch (e) {}
      }

      return data;
    },
  ],

  // 响应拦截
  ResponseInterceptors(response) {
    const { data, headers } = response;
    console.log(response);
    if (headers['content-type'] === 'application/json') {
      if (data.code === '00000') {
        return Promise.resolve(response.data);
      }

      window.$message.error(response.data.msg || '未知错误');
      return Promise.reject(response);
    }
    return Promise.resolve(response);
  },

  // 响应错误
  ResponseInterceptorsError(error) {
    console.error('ResponseInterceptorsError');
    if (error.response) {
      window.$message.error(error.response.data.msg || '未知错误');
    } else {
      window.$message.error(error.message);
    }
    return Promise.reject(error);
  },
};

const Http = new Request({
  baseURL: import.meta.env.VITE_API as string,
  timeout: 10 * 1000,
  headers: { 'Content-Type': ContentTypeEnum.JSON },
  transform,
});

export default Http;
