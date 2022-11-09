import React from "react";
import styles from "../styles/components/SideBarLeft.module.css";
import Profile from "./Profile";
import Resume from "./tools/Resume";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <Profile />
      <Resume />
    </div>
  );
};

export default SideBar;
