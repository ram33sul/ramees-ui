import axios from "axios";
import { getLocalStorage } from "../utils/localStorage";

const axiosInstance = (Authorization?: string) =>
  axios.create({
    baseURL: import.meta.env.VITE_API,
    headers: {
      Authorization: Authorization ?? getLocalStorage("tokens")?.accessToken,
      "Content-Type": "application/json",
      timeout: 5000,
    },
  });

export default axiosInstance;
