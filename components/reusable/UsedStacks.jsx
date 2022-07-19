import React from "react";
import styles from "../../styles/components/UsedStacks.module.css";

const UsedStacks = ({ title }) => {
  return (
    <div className={styles.container}>
      <div>#{title}</div>
    </div>
  );
};

export default UsedStacks;
