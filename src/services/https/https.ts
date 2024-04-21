import {BASE_URL} from '@env';
import axios from 'axios';

const apiClientConfig = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const apiClient = axios.create(apiClientConfig);

apiClient.interceptors.response.use(
  function (response) {
    console.log({response})
    return response;
  },
  function (error) {
    console.log({error})
    return Promise.reject(error);
  },
);
