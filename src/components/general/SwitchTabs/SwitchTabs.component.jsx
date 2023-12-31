import styles from "./SwitchTabs.module.css";

export default function SwitchTabs({ tabs }) {
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
