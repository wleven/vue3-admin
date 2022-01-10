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
  ResponseInterceptors(response, config) {
    const { data, headers } = response;

    if (config.isReturnNativeResponse) {
      return Promise.resolve(response);
    }

    if (headers['content-type'] === 'application/json') {
      if (data.code === '00000') {
        return Promise.resolve(response.data);
      }

      window.$NMessage.error(response.data.msg || '未知错误');
      return Promise.reject(response);
    }

    return Promise.resolve(response);
  },

  // 响应错误
  ResponseInterceptorsError(error) {
    if (error.response) {
      window.$NMessage.error(error.response.data.msg || '未知错误');
    } else if (error.message !== 'AxiosCanceler') {
      window.$NMessage.error(error.message);
    }
    return Promise.reject(error);
  },
};

const Http = new Request({
  baseURL: import.meta.env.VITE_API as string,
  timeout: 10 * 1000,
  headers: { 'Content-Type': ContentTypeEnum.JSON },
  requestConfig: {
    ignoreCancel: false,
    isReturnNativeResponse: false,
  },
  transform,
});

export default Http;
