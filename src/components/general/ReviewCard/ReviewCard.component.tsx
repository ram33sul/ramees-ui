import React from 'react';
import ProfileImage from '../ProfileImage/ProfileImage.component';
import Rating from '../Rating/Rating.component';
import styles from './ReviewCard.module.css';
import { Props } from './ReviewCard.types';

export default function ReviewCard({name, rating, review}: Props) {

    return (
        <div className={styles.container}>
            <div className={styles["profile-container"]}>
                <ProfileImage />
                <div className={styles["name-rating-container"]}>
                <div className={styles.name}>
                    {name}
                </div>
                <Rating rating={rating} sizeType='large' />
                </div>
            </div>
            <div className={styles.review}>
                {review}
            </div>
        </div>
    )
}