import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:4000/api/v1",
});

const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(
    (config) => {
      return config;
    },
    (e) => {
      return Promise.reject(e);
    }
  );
};

export default useAxiosSecure;
