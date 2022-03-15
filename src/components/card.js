import React from "react";
import * as styles from "./card.module.sass";

export default function Card({ title, description, children }) {
  return (
    <div className={styles.card}>
      {title && <h1>{title}</h1>}
      {description && <p className={styles.description}>{description}</p>}
      {children}
    </div>
  );
}
