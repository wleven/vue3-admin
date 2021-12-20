import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestTransformer,
  AxiosResponse,
  AxiosResponseTransformer,
} from 'axios';

// 数据处理
export interface AxiosTransform {
  // 请求前数据处理
  RequestTransform?: AxiosRequestTransformer[];
  // 请求拦截
  RequestInterceptors?: (res: AxiosRequestConfig) => AxiosRequestConfig;
  // 请求失败
  RequestInterceptorsError?: (e: AxiosError) => Promise<never>;
  // 响应数据处理
  ResponseTransform?: AxiosResponseTransformer[];
  // 响应拦截
  ResponseInterceptors?: (res: AxiosResponse, config: RequestConfig) => Promise<AxiosResponse>;
  // 响应错误
  ResponseInterceptorsError?: (e: AxiosError) => Promise<never>;
}

export interface CreateAxios extends AxiosRequestConfig {
  transform?: AxiosTransform;
  requestConfig?: RequestConfig;
}

export interface RequestConfig {
  // 是否忽略取消请求 默认不忽略
  ignoreCancel?: boolean;
  // 是否返回原生响应数据
  isReturnNativeResponse?: boolean;
}

// 接口返回数据类型
export interface Result<D = OBJ> {
  code: string;
  data: D;
  msg: string;
}

export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // json
  TEXT = 'text/plain;charset=UTF-8',
  // form-data 一般配合qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  上传
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
