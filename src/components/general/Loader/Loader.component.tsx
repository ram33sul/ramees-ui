import React from 'react';
import styles from "./Loader.module.css";
import { useEffect, useState } from "react";
import { Props } from "./Loader.types";
import loaderBlack from "./assets/loader_black.png";
import loaderWhite from "./assets/loader_white.png";

export default function Loader({ isWhite = false }: Props) {
  const [loaderImage, setLoaderImage] = useState("#");
  useEffect(() => {
    const loadImage = async () => {
      const image = isWhite ? loaderWhite : loaderBlack;
      setLoaderImage(image);
    };
    loadImage();
  }, [isWhite]);
  return (
    <div
      className={styles.loader}
      style={{
        backgroundImage: `url('${loaderImage}')`,
      }}
    ></div>
  );
}
