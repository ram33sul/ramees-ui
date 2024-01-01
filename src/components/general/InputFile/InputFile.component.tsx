import { ChangeEventHandler, useMemo, useRef } from "react";
import styles from "./InputFile.module.css";
import { getFileName, getFileUrl } from "../../../utils/urlUploadFile";
import { accepts } from "./InputFile.util";
import React from 'react';

type Props = {
  value: string | File,
  onChange: ChangeEventHandler<HTMLInputElement>,
  label: string,
  type: "video" | "image" | "pdf",
  isMultiple: boolean
}

export default function InputFile({
  value,
  onChange,
  label = "Select Video",
  type = "pdf",
  isMultiple = false,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleContainerClick = () => {
    if(inputRef.current){
      inputRef.current.click();
    }
  };
  const fileUrl = useMemo(
    () => (type === "pdf" ? getFileName(value) : getFileUrl(value)),
    [value]
  );

  const fileTypeComponents = {
    video: <video src={fileUrl} className={styles.file} />,
    image: <img src={fileUrl} className={styles.file} />,
    pdf: <span className={styles.pdf}>{fileUrl}</span>,
  };
  const FileTypeComponent = fileTypeComponents[type] ?? (
    <>Input type doesn't match</>
  );

  return (
    <div className={styles.container} onClick={handleContainerClick}>
      <input
        ref={inputRef}
        type="file"
        accept={accepts[type]}
        className={styles.input}
        onChange={onChange}
      />
      {value ? (
        FileTypeComponent
      ) : (
        <div className={styles["label-plus"]}>
          <div className={styles.plus}>+</div>
          <div className={styles.label}>{label}</div>
        </div>
      )}
    </div>
  );
}
