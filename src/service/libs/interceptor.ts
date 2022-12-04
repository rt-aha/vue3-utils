import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IInterceptor {
  reqSuccess: (config: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>
  reqFail: (error: any) => any
  resSuccess: (config: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>
  resFail: (error: any) => any
}

const interceptor: IInterceptor = {
  reqSuccess(config) {
    return config;
  },
  reqFail(error) {
    return Promise.reject(error);
  },
  resSuccess(response) {
    return response;
  },
  resFail(error) {
    return Promise.reject(error);
  },
};

export default interceptor;
