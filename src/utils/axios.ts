/**
 * axios setup to use mock service
 */

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_SSO_URL } from 'constants/index';
import qs from 'qs';

const axiosServices = axios.create();

// interceptor for http
axiosServices.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services')
);

export const axiosClient = axios.create({
    baseURL: BASE_SSO_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'brackets' });
    }
});

export const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
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

export const onResponseError = (error: AxiosError, cb?: (error: AxiosError) => void): Promise<AxiosError> => {
    console.error(`[response error] [${JSON.stringify(error)}]`);
    cb?.(error);
    return Promise.reject(error);
};

axiosClient.interceptors.request.use(onRequest, onRequestError);
axiosClient.interceptors.response.use(onResponse, onResponseError);

export default axiosServices;
