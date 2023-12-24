import axiosInstance from "../axios/axiosInstance";

const postApi = async (
  url: string,
  data?: { [key: string | number]: unknown }
) => {
  try {
    const response = await axiosInstance()({
      url,
      data,
      method: "POST",
    });
    return [response.data];
  } catch (error: any) {
    return [null, error.response?.data ?? "Something went wrong"];
  }
};

export default postApi;
