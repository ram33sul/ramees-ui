import { ChangeEventHandler } from "react";
import styles from "./Textarea.module.css";
import React from 'react';

type Props = {
  rows: number,
  onChange?: ChangeEventHandler<HTMLTextAreaElement>,
  placeholder?: string,
  value?: string
}

export default function Textarea({
  rows = 5,
  onChange = () => {},
  placeholder = "Type here",
  value = "",
}: Props) {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      rows={rows}
      onChange={onChange}
      value={value}
    ></textarea>
  );
}
