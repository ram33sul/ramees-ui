import React, { useMemo } from "react";
import styles from "./Icon.module.css";
import { Props } from "./Icon.types";
import { icons } from "./Icon.util";

export default function Icon({
  icon,
  colorType = "same",
  style = {},
  size = 30,
  onClick = () => {},
  isClickable = false,
}: Props) {

  const color =
    colorType === "opposite" ? "white" : "black";
  const sizeInPx = `${size}px`;
  const iconImage = useMemo(() => icons[icon][color], [icon, color]);

  return (
    <img
      onClick={onClick}
      src={iconImage}
      alt={icon}
      className={`${styles.image} ${isClickable ? styles.hover : ""}`}
      style={{
        maxWidth: sizeInPx,
        maxHeight: sizeInPx,
        cursor: isClickable ? "pointer" : "unset",
        ...style,
      }}
    />
  );
}
