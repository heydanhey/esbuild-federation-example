import React from "react";

import styles from "./header.module.css";

export default function Header({ children }) {
  function handleClick() {
    console.log('hello')
  }
  return (
    <header className={styles.header}>
      <button onClick={handleClick}>clickfvfdsvdsvds</button>
      {children}
    </header>
  );
}
