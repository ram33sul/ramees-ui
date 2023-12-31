import { useEffect, useState } from "react";
import styles from "./Selections.module.css";

type SelectionType = {
  label: string,
  value: string | number
}

type Props = {
  selections: SelectionType[],
  onChange: (selections: (string | number)[]) => unknown;
  maxLimit: number,
  defaultValue: (string | number)[]
}

export default function Selections({
  selections = [],
  onChange = () => {},
  maxLimit = 1,
  defaultValue = [],
}: Props) {
  const [selectedSelections, setSelectedSelections] = useState<(string | number )[]>(defaultValue);

  const limitReached = selectedSelections.length === maxLimit;

  const handleSelect = (value: string | number) => () => {
    if (selectedSelections.includes(value)) {
      return setSelectedSelections(
        selectedSelections.filter((val) => val !== value)
      );
    }
    if (limitReached) return;
    setSelectedSelections((prev) => [...prev, value]);
  };

  useEffect(() => {
    onChange(selectedSelections);
  }, [selectedSelections]);

  return (
    <div className={styles.container}>
      {selections.map(({ label, value }) => {
        const isActive = selectedSelections.includes(value);
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
