/* eslint-disable */
import axios from 'axios';
import { getToken } from './auth';
import { formatResponse } from './formatResponse';
import interceptor from './interceptor';
import validate from './validate';
import { print } from 'graphql/language/printer';
import { isArray, get, isString, set } from 'lodash-es';

const toGraphqlPayload = (gqlSyntax, variables) => {
  return {
    query: print(gqlSyntax),
    variables,
  };
};

const toGraphqlPayloadWithFiles = (gqlSyntax, variables, files) => {
  const originFileList = files;
  const multiple = isArray(originFileList);

  if (!originFileList) {
    return null;
  }
  const form = new FormData();

  const fileList = [];

  for (let i = 0; i < originFileList.length; i += 1) {
    const file = originFileList[i];
    const newFile = new File([file], file.name, { type: file.type });
    fileList.push(newFile);
  }

  

  // 把 variables 中放置檔案的字段值為 null
  if (multiple) originFileList.fill(null);
  else set(variables, files, null);

  // operations
  form.append('operations', JSON.stringify(toGraphqlPayload(gqlSyntax, variables)));
  
  const { map, list } = fileList.reduce(
    (acc, file, idx) => {
      const { map: accMap, list: accList } = acc;

      return {
        map: { ...accMap, [idx]: multiple ? [`variables.${files}.${idx}`] : [`variables.${files}`] },
        list: [...accList, file],
      };
    },
    { map: {}, list: [] },
  );
  // map
  form.append('map', JSON.stringify(map));

  // file
  list.forEach((file, idx) => {
    form.append(idx, file);
  });
  return form;
};

/**
 *
 * @param {string} baseURL
 * @param {number} timeout optional, 預設 1000
 * @param {object} headers optional, 設定預設 headers
 * @param {version} string optional, 預設空字串 '', e.g. '/v1'
 * @param {useAuth} boolean optional, 預設true
 * @param {authFunc} function  optional, 取得token方式, 預設從localStorage取token
 * @param {formatResponse} function optional, request回傳格式, 預設回傳狀態碼與資料
 * @param {interceptor} object optional, 攔截器function {reqSuccess, reqFail, resSuccess, resFail}
 */
const graphql = ({
  baseURL = '',
  timeout = 1000,
  headers: defaultHeaders = {},
  version: ver = '',
  useAuth: auth = true,
  authFunc: getTokenFunc = getToken,
  formatResponse: formatResponseFunc = formatResponse,
  interceptor: interceptorFunc = interceptor,
}) => {
  if (!validate('baseURL', baseURL)) return;

  const xhr = axios.create({
    baseURL,
    timeout,
    headers: defaultHeaders,
  });

  xhr.interceptors.request.use(interceptorFunc.reqSuccess, interceptorFunc.reqFail);
  xhr.interceptors.response.use(interceptorFunc.resSuccess, interceptorFunc.resFail);

  return async ({
    headers = {},
    method = 'post',
    url = '',
    params = {},
    data = {},
    version = ver,
    authFunc = getTokenFunc,
    useAuth = auth,
    formatResponse = formatResponseFunc,
    files = null, // 這個值是自定義的不是 axios 原本提供的
    ...rest
  }) => {
    if (!validate('method', method)) return;

    // 合併預設headers和特定headers
    headers = {
      ...defaultHeaders,
      ...headers,
    };

    if (useAuth) {
      headers = authFunc(headers);
    }

    const formatData = () => {
      console.log('files', files);
      console.log('data', data.payload);
      if (files) {
        return toGraphqlPayloadWithFiles(data.query, data.payload, files);
      }

      return toGraphqlPayload(data.query, data.payload);
    };

    try {
      const res = await xhr.request({
        headers,
        method,
        url: '',
        params: params || {},
        // data: toGraphqlPayload(data.query, data.payload),
        data: formatData(),
        ...rest,
      });

      return formatResponse(res);
    } catch (err) {
      return new Error(err);
    }
  };
};

export default graphql;
