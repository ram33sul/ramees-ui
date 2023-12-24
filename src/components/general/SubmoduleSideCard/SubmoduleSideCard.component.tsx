import React from "react";
import { getDurationString } from "../../../utils/formatting";
import Icon from "../Icon/Icon.component";
import styles from "./SubmoduleSideCard.module.css";
import { Props } from "./SubmoduleSideCard.types";

export default function SubmoduleSideCard({
  contentType,
  title,
  duration,
  isActive = false,
  isDisabled = true,
  onClick = () => {},
}: Props) {

  if(isDisabled){
    onClick = () => {}
  }
  return (
    <div
      className={`${styles.container} ${isActive ? styles.active : ""} ${
        isDisabled ? styles["not-allowed"] : ""
      }`}
      onClick={onClick}
    >
      <Icon size={15} icon={contentType} />
      <div className={styles["title-duration-container"]}>
        <div className={styles.title}>
          {contentType}: {title}
        </div>
        {duration ? (
          <div className={styles.duration}>{getDurationString(duration)}</div>
        ) : null}
      </div>
    </div>
  );
}
