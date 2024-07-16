import axios from "axios";

const axiosCommon = axios.create({
  baseURL: "http://localhost:4000/api/v1",
});

const useAxiosCommon = () => {
  return axiosCommon;
};

export default useAxiosCommon;
