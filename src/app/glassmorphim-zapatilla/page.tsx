"use client";
import { useState } from "react";
import styles from "./styles/style.module.scss";
import Image from "next/image";
import { tallas, colores } from "@/lib/constants/zapatilllas";

const PageIconosGlassmorphinZpatilla = () => {
  const [imageSrc, setImageSrc] = useState("/zapatillas/airJordan-negro.png");

  const changeImageSrc = (src: string) => {
    setImageSrc(src);
  };

  return (
    <div className={styles.pageBody}>
      <div className={styles.container}>
        <ul className={styles.thumb}>
          {colores.map((color: string) => (
            <li
              key={color}
              onClick={() =>
                changeImageSrc(`/zapatillas/airJordan-${color}.png`)
              }
            >
              <Image
                src={`/zapatillas/airJordan-${color}.png`}
                alt={`Air Jordan ${color}`}
                width={100}
                height={100}
              />
            </li>
          ))}
        </ul>

        <div className={styles.imgBox}>
          <h2>Nike Air Jordan</h2>
          <Image src={imageSrc} alt="Air Jordan" width={100} height={100} />

          <ul className={styles.size}>
            <span>Size</span>
            {tallas.map((size: string) => (
              <li key={size}>{size}</li>
            ))}
          </ul>

          <a href="#" className={styles.btn}>
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageIconosGlassmorphinZpatilla;
