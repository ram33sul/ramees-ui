import React from "react";
import { Props } from "./ProfileImage";
import styles from "./ProfileImage.module.css";

export default function ProfileImage({size = 40, imageUrl = null}: Props) {

    const sizeInPx = `${size}px`;
    const halfSizeInPx = `${size / 2}px`;

    return (
        <div className={styles.container} style={{width: sizeInPx, height: sizeInPx, minWidth: sizeInPx, minHeight: sizeInPx}}>
            {
            !imageUrl ?
                <>
                    <div className={styles.round} style={{width: halfSizeInPx, minHeight: halfSizeInPx}} />
                    <div className={styles.round} style={{width: sizeInPx, minHeight: sizeInPx}} />
                </> : <img src={imageUrl} alt="profile-image" className={styles.image} />
            }
        </div>
    )
}