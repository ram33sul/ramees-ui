import React,{ ReactNode } from 'react';
import styles from './SingleSection.module.css';
import { colorTypes } from './SingleSection.util';

type Props = {
    children: ReactNode,
    colorType?: keyof typeof colorTypes
}

export default function SingleSection({children, colorType = "none"}: Props) {

    return (
        <div className={styles.container} style={{backgroundColor: colorTypes[colorType]}} >
            {children}
        </div>
    )
}