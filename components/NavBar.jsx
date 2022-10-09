import Image from "next/image";
import React from "react";
import styles from "../styles/components/Navbar.module.css";
import ScrollHighlightNabbar from "../components/ScrollHighlightNabbar";
import DarkMode from "./DarkMode";
import Link from "next/link";

const NavBar = ({ onToggle, darkTheme, navHeader }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/img/logo.png" alt="" width="40px" height="40px" />
        </Link>
      </div>
      <ScrollHighlightNabbar navHeader={navHeader} />
      <DarkMode darkTheme={darkTheme} onToggle={onToggle} />
    </div>
  );
};

export default NavBar;
