import React from "react";
import styles from "../../styles/components/tools/Textarea.module.css";

const Textarea = ({ name, onChangeFunc, state }) => {
  return (
    <div className={styles.container}>
      <label>
        <textarea
          name={name}
          className={styles.textarea}
          placeholder="Say hello!"
          maxLength="1000"
          onChange={onChangeFunc}
          value={state}
          required
        />
      </label>
    </div>
  );
};

export default Textarea;
