import { doApi } from "../../..";
import usePagination from "../../../hooks/usePagination";
import { objectToQueryParams } from "../../../utils/objectToQueryParams";
import Button from "../Button/Button.component";
import Loader from "../Loader/Loader.component";
import styles from "./PaginatedList.module.css";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

type Props = {
  CardComponent: FC,
  endPoint: string,
  queryParams: {
    [key: string]: string
  },
  resetDependencies: unknown[],
  onSelect: (data: unknown) => unknown,
  inActiveIds: Set<number>
}

export default function PaginatedList({
  CardComponent,
  endPoint,
  queryParams = {},
  resetDependencies = [],
  onSelect = () => {},
  inActiveIds,
}: Props) {
  const [isForcefulReset, setIsForcefulReset] = useState(false);
  const [
    datas,
    datasLoading,
    datasError,
    datasLoadMore,
    datasResetAndFetch,
    datasIsCompleted,
  ] = usePagination({
    fetch: async ({ page, pageSize, setLoading }: {page: number, pageSize: number, setLoading: Dispatch<SetStateAction<boolean>>}) => {
      const queryParamsString = objectToQueryParams({
        ...queryParams,
        page,
        pageSize,
      });
      return doApi({
        url: `${endPoint}${queryParamsString}`,
        method: "GET",
        setLoading,
      });
    },
  });

  const handleClick = (data: unknown) => () => {
    onSelect(data);
  };

  useEffect(() => {
    if (isForcefulReset) {
      datasResetAndFetch();
    } else {
      setIsForcefulReset(true);
    }
  }, resetDependencies);

  return datasError ? (
    <div className={styles.error}>Something went wrong, try again later</div>
  ) : (
    <>
      {datas.map((data: any, i: number) => (
        <CardComponent
          {...data}
          key={i}
          inActive={inActiveIds.has(data.id)}
          onClick={handleClick(data)}
        />
      ))}
      {datasIsCompleted ? (
        <div className={styles.completed}>No more datas</div>
      ) : datasLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <Button
          style={{
            width: "200px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10px",
          }}
          onClick={datasLoadMore}
          type="cancel"
        >
          Load More
        </Button>
      )}
    </>
  );
}
