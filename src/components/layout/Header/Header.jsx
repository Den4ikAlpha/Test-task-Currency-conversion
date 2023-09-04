import React from "react";
import styles from './Header.module.scss'


const Header = () => {
  return (
    <header className={styles.header}>
        <p className={styles["header__text"]}>Test task: currency conversion</p> 
    </header>
  )
}

export default Header;
