import { CSSProperties, MouseEventHandler } from "react";

export type Props = {
  colorType: "same" | "opposite";
  onClick: MouseEventHandler<HTMLDivElement>;
  style: CSSProperties;
};
