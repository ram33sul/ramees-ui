import React from "react";
import Icon from "../Icon/Icon.component";
import styles from "./TimeLeftChip.module.css";
import { Props } from "./TimeLeftChip.types";

export default function TimeLeftChip({icon, timeLeft, text}: Props) {

    return (
        <div className={styles.container}>
        <Icon size={15} icon={icon} />
        <div className={styles["time-text"]}>
            <div className={styles.time}>
                {timeLeft}
            </div>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    </div>
    )
}