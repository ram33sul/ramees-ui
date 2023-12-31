import { ReactNode } from "react";
import styles from "./DoubleSection.module.css";

type Props = {
  children: ReactNode
}

export function DoubleSection({ children }: Props) {
  return (
    <div className={`${styles.container} ${styles["no-subheader"]}`}>
      {children}
    </div>
  );
}

export function LeftSection({ children }: Props) {
  return <div className={styles["left-section"]}>{children}</div>;
}

export function RightSection({ children }: Props) {
  return <div className={styles["right-section"]}>{children}</div>;
}
