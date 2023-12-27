import React from "react";
import styles from ".//Popup.module.css"
import { Props } from "./Popup.types";

export default function Popup({children, isVisible, onClose = () => {}}: Props) {

    return (
        !isVisible ? null :
        <div className={styles.container}>
            <div className={styles.content}>
            <div onClick={onClose} className={styles.close}>
                X
            </div>
                {children}
            </div>
        </div>
    )
}