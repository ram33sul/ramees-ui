import React from "react";
import styles from ".//Popup.module.css"
import { Props } from "./Popup.types";

export default function Popup({children, isVisible}: Props) {

    return (
        !isVisible ? null :
        <div className={styles.container}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}