import { ChangeEventHandler } from "react";

export type Props = {
  options?: { value: string; label: string }[];
  label?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};
