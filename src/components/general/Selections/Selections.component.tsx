import styles from "./Selections.module.css";

type Props = {
  selections?: {
    label: string,
    value: string | number
  }[],
  onChange?: (callback: (string | number)[]) => unknown,
  maxLimit?: number,
  values?: (string | number)[]
}

export default function Selections({
  selections = [],
  onChange = () => {},
  maxLimit = 1,
  values = [],
}: Props) {
  const limitReached = values.length === maxLimit;

  const handleSelect = (value: string | number) => () => {
    if (values.includes(value)) {
      return onChange(values.filter((val) => val !== value));
    }
    if (limitReached) return;
    onChange([...values, value]);
  };

  return (
    <div className={styles.container}>
      {selections.map(({ label, value }) => {
        const isActive = values.includes(value);
        return (
          <div
            onClick={handleSelect(value)}
            className={`${styles.selection} ${
              limitReached ? styles.inactive : ""
            } ${isActive ? styles.active : ""}`}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
}
