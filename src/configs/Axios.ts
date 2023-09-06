import axios from "axios";

const AxiosLogout = axios.create({
  baseURL: "http://128.0.204.43:8000/api/",
});

const AxiosLogged = axios.create({
  baseURL: "http://128.0.204.43:8000/api/",
});

export { AxiosLogout, AxiosLogged };
