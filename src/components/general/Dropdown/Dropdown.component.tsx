import React from "react";
import { LegacyRef, forwardRef } from "react";
import styles from "./Dropdown.module.css";
import { Props } from "./Dropdown.types";

function DropdownComponent(
  { options = [], label = "Select", value = "", onChange = () => {} }: Props,
  ref: LegacyRef<HTMLSelectElement>
) {
  return (
    <select
      className={styles.select}
      onChange={onChange}
      value={value}
      ref={ref}
    >
      <option disabled selected>
        {label}
      </option>
      {options.map(({ value, label }, i) => {
        return (
          <option key={i} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
}

const Dropdown = forwardRef(DropdownComponent);
export default Dropdown;
