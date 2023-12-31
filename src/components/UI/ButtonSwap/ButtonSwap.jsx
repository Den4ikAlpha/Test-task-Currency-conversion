import React from "react";
import styles from './ButtonSwap.module.scss'

const ButtonSwap = ({ onClick }) => {
    return (
        <button className={styles["swap-button"]} onClick={onClick}>
           <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="50px"
      width="50px"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm12 4v2h-4v2h4v2l3.5-3L15 7zM9 17v-2h4v-2H9v-2l-3.5 3L9 17z" />
    </svg>
    </button>
    );
  }
  
  export default ButtonSwap;