import { useEffect, useState } from "react";
import axiosInstance from "../axios/axiosInstance";
import { useSelector } from "react-redux";
import { objectToQueryParams } from "../utils/objectToQueryParams";

export default function useGetApi(
  url: string,
  {
    doFetch = true,
    defaultValue = null,
    dependencies = [],
    queryParams = {},
  } = {}
) {
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(doFetch);
  const [error, setError] = useState(null);

  const { tokens } = useSelector(
    (state: { tokens: { accessToken: string; refreshToken: string } }) => state
  );

  const fetch = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance(tokens?.accessToken)({
        url: url + objectToQueryParams(queryParams),
      });
      return setData(response.data);
    } catch (error: any) {
      return setError(
        error.response?.data ?? { message: "Something went wrong" }
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (doFetch) {
      fetch();
    }
  }, dependencies);

  return [data, loading, error, fetch];
}
