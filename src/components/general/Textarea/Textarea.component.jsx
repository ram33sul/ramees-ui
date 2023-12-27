import styles from "./Textarea.module.css";

export default function Textarea({
  rows = 5,
  onChange,
  placeholder = "Type here",
  value,
}) {
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
