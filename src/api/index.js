import axios from 'axios';
import { getStorage } from '../utils/storage';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

const setInstanceHeaders = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = getStorage('jwt_token');
      return {
        ...config,
        headers: {
          authorization: token ? `bearer ${token}` : null,
        },
      };
    },
    (error) => Promise.reject(error.response)
  );
};

const baseApi = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

const authApi = (url, options) => {
  const instance = axios.create({
    baseURL: url,
    ...options,
  });
  setInstanceHeaders(instance);
  return instance;
};

export const baseInstance = baseApi(BASE_URL);
export const authInstance = authApi(BASE_URL);
