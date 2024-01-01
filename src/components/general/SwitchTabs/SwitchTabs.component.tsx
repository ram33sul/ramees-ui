import { MouseEventHandler } from "react";
import styles from "./SwitchTabs.module.css";
import React from 'react';

type Props = {
  tabs: {
    label: string, 
    onClick: MouseEventHandler<HTMLDivElement>,
    isActive: boolean
  }[]
}

export default function SwitchTabs({ tabs }: Props) {
  return (
    <div className={styles.container}>
      {tabs.map(({ label, onClick, isActive }) => {
        return (
          <div
            key={label}
            onClick={onClick}
            className={`${styles.label} ${isActive ? styles.active : ""}`}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
}
