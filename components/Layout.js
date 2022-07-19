import React from "react";
import NavBar from "./NavBar";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";
import MessageMe from "./MessageMe";
import styles from "../styles/Layout.module.css";

const Layout = ({ children, onToggle, darkTheme, navHeader, minimizedState, setMinimizedState }) => {
  return (
    <div className={styles.container}>
      <NavBar onToggle={onToggle} darkTheme={darkTheme} navHeader={navHeader}/>
      <div className={styles.flex}>
        <div className={styles.left}>
          <SideBarLeft />
        </div>
        <div className={styles.contents}>{children}</div>
        <div className={styles.right}>
          <SideBarRight />
        </div>
      </div>
      <MessageMe minimizedState={minimizedState} setMinimizedState={setMinimizedState}/>
    </div>
  );
};

export default Layout;
