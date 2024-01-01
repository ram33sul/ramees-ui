import React from "react";
import Loader from "../Loader/Loader.component";
import styles from "./Button.module.css";
import { Props } from "./Button.types";

export default function Button({
  onClick = () => {},
  children = null,
  loading = false,
  type = "primary",
  sizeType = "medium",
  isDisabled = false,
  style = {}
}: Props) {
  const whiteLoaders = ["primary"];
  if(isDisabled){
    style.opacity = 0.4
  }
  return (
    <button
      onClick={onClick}
      style={style}
      className={`${styles.button} ${loading ? styles.loading : ""} ${
        styles[type]
      } ${styles[sizeType]}`}
      disabled={isDisabled}
    >
      {children}
      {loading ? <Loader isWhite={whiteLoaders.includes(type)} /> : null}
    </button>
  );
}
