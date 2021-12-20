import axios, { AxiosRequestConfig, Canceler } from 'axios';
import qs from 'qs';

function getKey(config: AxiosRequestConfig) {
  return [config.method, config.url, qs.stringify(config.params), qs.stringify(config.data)].join(
    '&'
  );
}

// axios取消请求配置
export class AxiosCanceler {
  private cancelerMap: Map<string, Canceler>;

  constructor() {
    this.cancelerMap = new Map([]);
  }

  public addCanceler(config: AxiosRequestConfig) {
    this.removeCanceler(config);
    config.cancelToken = new axios.CancelToken((canceler) => {
      this.cancelerMap.set(getKey(config), canceler);
    });
  }

  public removeCanceler(config: AxiosRequestConfig) {
    const key = getKey(config);
    if (this.cancelerMap.has(key)) {
      const cancel = this.cancelerMap.get(key);
      cancel && cancel('AxiosCanceler');
      this.cancelerMap.delete(key);
    }
  }

  public removeAllCanceler() {
    this.cancelerMap.forEach((cancel) => {
      cancel && cancel();
    });
    this.cancelerMap.clear();
  }
}
