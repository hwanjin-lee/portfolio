import React from "react";
import styles from "../../styles/components/tools/Textarea.module.css";

const Textarea = () => {
  return (
    <div className={styles.container}>
      <label>
        <textarea
          className={styles.textarea}
          placeholder="Say hello!"
          maxLength="1000"
        />
      </label>
    </div>
  );
};

export default Textarea;
