import React from 'react';
import { MouseEventHandler } from "react";
import styles from "./Hamburger.module.css";

type Props = {
  onClick?: MouseEventHandler<HTMLDivElement>
}


export default function Hamburger({ onClick }: Props) {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
    </div>
  );
}
