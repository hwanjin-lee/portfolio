import React from "react";
import NavBar from "./NavBar";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";
import MessageMe from "./MessageMe";
import styles from "../styles/Layout.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, onToggle, darkTheme, navHeader, minimizedState, setMinimizedState }) => {

  const notifySuccess = () => toast.success("Message Sent!");
  const notifyError = () => toast.error("Error Occured");

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
      <MessageMe minimizedState={minimizedState} setMinimizedState={setMinimizedState} notifySuccess={notifySuccess} notifyError={notifyError}/>
      <ToastContainer />
    </div>
  );
};

export default Layout;
