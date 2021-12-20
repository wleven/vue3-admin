import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import type { CreateAxios } from '@/utils/http/types';
import { Result } from '@/utils/http/types';
import { cloneDeep } from 'lodash';
import { AxiosCanceler } from '@/utils/http/cancel';

export class Request {
  private axiosInstance: AxiosInstance;
  private config: CreateAxios;
  private canceler: AxiosCanceler;

  constructor(config: CreateAxios) {
    this.config = config;
    this.axiosInstance = axios.create(config);
    this.canceler = new AxiosCanceler();
    this.setInterceptors();
  }

  public request<T = Result>(config: CreateAxios): Promise<T> {
    const conf = cloneDeep(config);
    const { RequestTransform, ResponseTransform } = this.getTransform();

    // 请求头合并
    conf.headers = conf.headers || {};
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
    const {
      RequestInterceptors,
      RequestInterceptorsError,
      ResponseInterceptors,
      ResponseInterceptorsError,
    } = this.getTransform();

    //请求拦截
    this.axiosInstance.interceptors.request.use((config) => {
      !this.config.requestConfig?.ignoreCancel && this.canceler.addCanceler(config);

      if (RequestInterceptors) {
        config = RequestInterceptors(config);
      }

      return config;
    }, RequestInterceptorsError);

    // 响应拦截
    this.axiosInstance.interceptors.response.use(async (res: AxiosResponse) => {
      res && this.canceler.removeCanceler(res.config);
      if (ResponseInterceptors) {
        res = await ResponseInterceptors(res, this.config.requestConfig || {});
      }
      return res;
    }, ResponseInterceptorsError);
  }
}
