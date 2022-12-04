import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { IInterceptor } from './interceptor';
import interceptor from './interceptor';
import validate from './validate';

interface IInitSetting {
  apiUrlDomain: string
  timeout?: number
  headers?: { [key: string]: any }
  version?: string
  getToken?: () => string
  formatResponse?: (responseData: any) => any
  interceptor?: IInterceptor
}

interface IRequestSetting extends AxiosRequestConfig {
  url: string
}

type TRestful = (initSetting: IInitSetting) => (requestSetting: Omit<IRequestSetting, 'apiUrlDomain'>) => Promise<any>;

/**
 * @param {string} apiUrlDomain
 * @param {number} timeout optional, 預設 1000
 * @param {object} headers optional, 設定預設 headers
 * @param {string} version optional, 預設空字串 '', e.g. '/v1'
 * @param {function} getToken  optional, 取得token方式, 預設從localStorage取token
 * @param {function} formatResponse optional, request回傳格式, 預設回傳狀態碼與資料
 * @param {object} interceptor optional, 攔截器function {reqSuccess, reqFail, resSuccess, resFail}
 */
const restful: TRestful = (initSetting: IInitSetting) => {
  const {
    apiUrlDomain,
  } = initSetting;
  validate('apiUrlDomain', apiUrlDomain);

  const axiosInstance = axios.create(initSetting);

  if (initSetting.interceptor) {
    axiosInstance.interceptors.request.use(interceptor.reqSuccess, interceptor.reqFail);
    axiosInstance.interceptors.response.use(interceptor.resSuccess, interceptor.resFail);
  }

  return async (requestSetting: IRequestSetting) => {
    const setting = {
      ...initSetting,
      ...requestSetting,
    };

    const {
      headers,
      method = 'get',
      version = '',
      url,
      params = {},
      data = {},
      getToken,
      formatResponse,
      ...rest
    } = setting;

    validate('method', method);

    // 合併預設headers和特定headers
    let requestHeaders = headers;

    if (getToken) {
      const token = getToken();

      requestHeaders = {
        ...requestHeaders,
        Authorization: token,
      };
    }

    const fullUrl = apiUrlDomain + version + url;

    try {
      const res = await axiosInstance.request({
        ...rest,
        headers: requestHeaders,
        method,
        url: fullUrl,
        params,
        data,

      });

      if (formatResponse) {
        return formatResponse(res);
      }
      return res;
    }
    catch (err: any) {
      return new Error(err);
    }
  };
};

export default restful;
