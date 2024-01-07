import React from "react";
import styles from "./Input.module.css";
import { Props } from "./Input.types";

export default function Input({
  value = "",
  onChange = () => {},
  error = "",
  label = "Type here",
  type = "text",
  style = {},
}: Props) {

  return (
    <div className={styles.container} style={style}>
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        style={!label ? { paddingTop: "12px" } : {}}
        type={type}
        required
        onWheel={e => e.preventDefault()}
      />
      <label
        className={`${styles.label} ${error ? styles.error : ""}`}
      >
        {error || label}
      </label>
    </div>
  );
}
