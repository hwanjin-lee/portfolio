import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/components/Navbar.module.css";
import ScrollHighlightNabbar from "../components/ScrollHighlightNabbar";

const NavBar = ({ onToggle, darkTheme, navHeader }) => {
  return (
    <div className={styles.container}>
      <div>
        <Image src="/img/logo.png" alt="" width="40px" height="40px" />
      </div>
      <ScrollHighlightNabbar navHeader={navHeader} />
      <div>
        {darkTheme !== undefined && (
          <form action="#">
            <label className="switch">
              <input type="checkbox" checked={darkTheme} onChange={onToggle} />
              <span className="slider"></span>
            </label>
          </form>
        )}
      </div>
    </div>
  );
};

export default NavBar;
