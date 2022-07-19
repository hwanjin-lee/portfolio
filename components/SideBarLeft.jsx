import React from "react";
import styles from "../styles/components/SideBarLeft.module.css";
import Profile from "./Profile";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <Profile />
    </div>
  );
};

export default SideBar;
