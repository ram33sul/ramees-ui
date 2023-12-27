import { Button } from "ramees-ui";
import styles from "./AcceptRejectCard.module.css";
import { useMemo } from "react";

export default function AcceptRejectCard({
  isAccepted,
  isRejected,
  allowAction = false,
  onAccept,
  onReject,
  children,
  onClick,
}) {
  let state = useMemo(
    () =>
      !(isAccepted || isRejected)
        ? "pending"
        : isAccepted
        ? "accepted"
        : "rejected",
    [isAccepted, isRejected]
  );

  return (
    <div className={styles.container}>
      <div className={styles.children} onClick={onClick}>
        {children}
      </div>
      <div className={styles.actions}>
        {allowAction ? (
          <div className={styles["buttons-container"]}>
            <Button onClick={onAccept} type={"accept"}>
              Accept
            </Button>
            <Button onClick={onReject} type={"reject"}>
              Reject
            </Button>
          </div>
        ) : (
          <div className={`${styles.label} ${styles[state]}`}>{state}</div>
        )}
      </div>
    </div>
  );
}
