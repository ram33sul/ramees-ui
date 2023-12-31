import styles from "./CloseButton.module.css";
import { Props } from "./CloseButton.types";
import { colorTypesMap } from "./CloseButton.util";

export default function CloseButton({
  colorType = "same",
  style = {},
  onClick = () => {},
}: Props) {
  const colorTypeData = colorTypesMap[colorType] ?? {};

  return (
    <div
      style={{
        backgroundColor: colorTypeData.backgroundColor,
        borderColor: colorTypeData.borderColor,
        ...style,
      }}
      className={styles.container}
      onClick={onClick}
    >
      X
    </div>
  );
}
