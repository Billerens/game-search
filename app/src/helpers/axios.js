import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api/";

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;
