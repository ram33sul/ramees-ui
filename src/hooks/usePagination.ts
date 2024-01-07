import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  fetch: ({
    page,
    pageSize,
    setLoading,
  }: {
    page: number;
    pageSize: number;
    setLoading: Dispatch<SetStateAction<boolean>>;
  }) => any;
  doFetch?: boolean;
  dependencies?: unknown[];
};

export default function usePagination({
  fetch,
  doFetch = true,
  dependencies = [],
}: Props) {
  const [datas, setDatas] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [page, setPage] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const fetchHelper = async ({
    doReset = false,
    pageSize = 12,
  }: {
    doReset?: boolean;
    pageSize?: number;
  }) => {
    if (isCompleted && !doReset) return;
    try {
      const [response, error] = await fetch({
        page: doReset ? 0 : page,
        pageSize,
        setLoading,
      });
      if (error) return setError(error);
      if (response?.length < pageSize) {
        setIsCompleted(true);
      }
      if (doReset) return setDatas(response);
      return setDatas((prev: unknown[]) => [...prev, ...response]);
    } catch (error) {
      setError(error);
    }
  };

  const resetAndFetch = async () => {
    setPage(0);
    setDatas([]);
    setIsCompleted(false);
    fetchHelper({ doReset: true });
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (!doFetch) return;
    fetchHelper({});
  }, [doFetch, page]);

  useEffect(() => {
    resetAndFetch();
  }, dependencies);

  return [datas, loading, error, loadMore, resetAndFetch, isCompleted];
}
