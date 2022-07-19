import Image from "next/image";
import React from "react";
import styles from "../../styles/components/tools/Ellipsis.module.css";

const Ellipsis = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ellipsis}>...</div>
    </div>
  );
};

export default Ellipsis;
