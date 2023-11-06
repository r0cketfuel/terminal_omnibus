import { useAuthStore } from "@component/component/stores/auth";
import axios from "axios";

const AxiosLogout = axios.create({
  baseURL: "http://128.0.204.43:8000/",
});

const AxiosLogged = axios.create({
  baseURL: "http://128.0.204.43:8000/",
});

AxiosLogged.interceptors.request.use(
  function (config) {
    const { tokens } = useAuthStore.getState();
    if (tokens) {
      config.headers.Authorization = `Bearer ${tokens.access}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { AxiosLogout, AxiosLogged };
