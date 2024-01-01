import React, { ReactNode, useRef } from "react";
import styles from "./DoubleSection.module.css";
import CloseButton from "../../general/CloseButton/CloseButton.component";
import Hamburger from "../../general/Hamburger/Hamburger.component";

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
  const closeButtonRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleOpenCloseStyles = (type: "open" | "close") => {
    const section = sectionRef.current?.style;
    const closeButton = closeButtonRef.current?.style;
    const openButton = openButtonRef.current?.style;
    if (section && closeButton && openButton) {
      [
        openButton.display,
        closeButton.display,
        section.right,
        section.backgroundColor,
        section.boxShadow,
      ] =
        type === "open"
          ? [
              "none",
              "flex",
              "0",
              "rgb(var(--background-color))",
              "0 0 50px rgba(var(--foreground-color), 0.5)",
            ]
          : [
              "flex",
              "none",
              "calc(100% - 50px)",
              "rgba(var(--foreground-color), 0.05)",
              "0 0 0",
            ];
    }
  };

  const handleOpen = () => {
    handleOpenCloseStyles("open");
  };

  const handleClose = () => {
    handleOpenCloseStyles("close");
  };

  return (
    <div ref={sectionRef} className={styles["left-section"]}>
      <div
        ref={closeButtonRef}
        className={`${styles["left-toggle-button"]} ${styles["left-close-button"]}`}
        style={{ display: "none" }}
        onClick={handleClose}
      >
        <CloseButton />
      </div>
      <div
        ref={openButtonRef}
        onClick={handleOpen}
        className={`${styles["left-toggle-button"]} ${styles["left-hamburger"]}`}
      >
        <Hamburger />
      </div>
      {children}
    </div>
  );
}

export function RightSection({ children }: Props) {
  return <div className={styles["right-section"]}>{children}</div>;
}
