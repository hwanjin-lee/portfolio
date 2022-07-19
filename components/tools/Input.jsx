import React from "react";
import styles from "../../styles/components/tools/Input.module.css";

//For Icon, import fontawesome in parent, return it inside a function, then reference it.
const Input = ({ placeholder, helper, icon }) => {
  return (
    <div className={styles.container}>
      <label>
        <input className={styles.input} maxlength="100" required />
        <span className={styles.placeholder}>{placeholder}</span>
        <span className={styles.helper}>{helper}</span>
        <div className={styles.inputIcon}>{icon}</div>
      </label>
    </div>
  );
};

export default Input;
