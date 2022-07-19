import React from "react";
import styles from "../styles/components/SideBarRight.module.css";
import Languages from "./Languages";

const SideBarRight = () => {
  return (
    <div className={styles.container}>
      <Languages />
    </div>
  );
};

export default SideBarRight;
