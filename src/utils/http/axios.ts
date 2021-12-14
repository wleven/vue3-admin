import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import type { CreateAxios } from '@/utils/http/types';
import { Result } from '@/utils/http/types';
import { cloneDeep } from 'lodash';

export class Request {
  private axiosInstance: AxiosInstance;
  private config: CreateAxios;

  constructor(config: CreateAxios) {
    this.config = config;
    this.axiosInstance = axios.create(config);
    this.setInterceptors();
  }

  public request<T = Result>(config: AxiosRequestConfig): Promise<T> {
    const conf = cloneDeep(config);
    const { RequestTransform, ResponseTransform } = this.getTransform();

    // 请求头合并
    Object.assign(conf.headers, this.config.headers);

    // 请求数据处理
    if (Array.isArray(RequestTransform) && RequestTransform.length > 0) {
      Object.assign(conf, { transformRequest: RequestTransform });
    }

    // 响应数据处理
    if (Array.isArray(ResponseTransform) && ResponseTransform.length > 0) {
      Object.assign(conf, { transformResponse: ResponseTransform });
    }

    return this.axiosInstance.request<AxiosRequestConfig, AxiosResponse<T>>(conf).then((res) => {
      return res as unknown as T;
    });
  }

  private getTransform() {
    return this.config.transform || {};
  }

  // 拦截器
  private setInterceptors() {
    const transform = this.getTransform();
    if (!transform) {
      return;
    }
    //请求拦截
    this.axiosInstance.interceptors.request.use(
      transform.RequestInterceptors,
      transform.RequestInterceptorsError
    );
    // 响应拦截
    this.axiosInstance.interceptors.response.use(
      transform.ResponseInterceptors,
      transform.ResponseInterceptorsError
    );
  }
}
