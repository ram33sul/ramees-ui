import React from "react";
import styles from "./Logo.module.css";
import { Props } from "./Logo.types";

export default function Logo({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
