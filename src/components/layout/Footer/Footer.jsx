import React from "react";
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles['footer__text']}>Created by Denys Parastiuk</p>
    </footer>
  );
}

export default Footer;
