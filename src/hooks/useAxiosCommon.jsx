import axios from "axios";

const axiosCommon = axios.create({
  baseURL: "https://mkash-server.vercel.app/api/v1",
});

const useAxiosCommon = () => {
  return axiosCommon;
};

export default useAxiosCommon;
