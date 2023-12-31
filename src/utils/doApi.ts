import axiosInstance from "../axios/axiosInstance";

type DoApiProps = {
  url: string;
  data?: unknown;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  setLoading?: (state: boolean) => void;
};

const doApi = async ({
  url,
  data,
  method = "POST",
  setLoading = () => {},
}: DoApiProps) => {
  try {
    setLoading(true);
    const response = await axiosInstance()({
      url,
      data,
      method,
    });
    setLoading(false);
    return [response.data];
  } catch (error: any) {
    console.log(error);
    setLoading(false);
    return [null, error.response?.data ?? "Something went wrong"];
  }
};

export default doApi;
