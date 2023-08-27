import axios from "axios";
import { baseUrl } from "../apis/baseUrl";

export const apiInstance = axios.create({
  baseURL: baseUrl,
});
apiInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);