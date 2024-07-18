import { AUTH_GATE_API } from '@/constants';
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import qs from 'qs';

export const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  console.info(`[request] [${JSON.stringify(config)}]`);
  return config;
};

export const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

export const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.info(`[response] [${JSON.stringify(response)}]`);
  if (response.data) return response.data;
  return response;
};

// eslint-disable-next-line no-unused-vars
export const onResponseError = (
  error: AxiosError,
  cb?: (error: AxiosError) => void
): Promise<AxiosError> => {
  console.error(`[response error] [${JSON.stringify(error)}]`);
  cb?.(error);
  return Promise.reject(error);
};

export const axiosClient = axios.create({
  baseURL: AUTH_GATE_API,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: function (params) {
    return qs.stringify(params, { arrayFormat: 'brackets' });
  },
});

axiosClient.interceptors.request.use(onRequest, onRequestError);
axiosClient.interceptors.response.use(onResponse, onResponseError);

export default axiosClient;
