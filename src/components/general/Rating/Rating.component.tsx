import React from "react";
import Icon from "../Icon/Icon.component";
import styles from "./Rating.module.css";
import { Props } from "./Rating.types";
import { sizes } from "./Rating.util";

export default function Rating({
  rating,
  count = 0,
  sizeType = "medium",
}: Props) {
  const selectedSize = sizes[sizeType] ?? {
    size: 12,
    fontSize: "var(--very-small-font)",
  };

  return (
    <div
      className={styles.container}
      style={{ fontSize: selectedSize.fontSize }}
    >
      <div className={styles.rating}>
        <Icon colorType={"single"} icon={"star"} size={selectedSize.size} />
        <div className={styles["rating-text"]}>{rating.toFixed(1)}</div>
      </div>
      {count ? <div className={styles.count}>({count} ratings)</div> : null}
    </div>
  );
}
