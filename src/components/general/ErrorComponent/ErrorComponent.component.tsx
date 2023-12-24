import React from "react";
import styles from "./ErrorComponent.module.css";
import { Props } from "./ErrorComponent.types";

export default function ErrorComponent({
  status = 500,
  message = "Something Went Wrong!",
  description = "It looks like something is not working properly, Please try again later.",
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.status}>{status}</div>
      <div className={styles.message}>{message}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
