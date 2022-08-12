import React from "react";
import styles from "../styles/components/DarkMode.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DropDownNav = ({ darkTheme, onToggle }) => {
  const icon = () => {
    if (darkTheme == false) {
      return faMoon;
    } else if (darkTheme == true) {
      return faSun;
    }
  };

  const iconColor = () => {
    if (darkTheme == false) {
      return styles.moon;
    } else if (darkTheme == true) {
      return styles.sun;
    }
  };

  return (
    <div className={styles.container}>
      <div>
        {darkTheme !== undefined && (
          <form action="#">
            <label>
              <input
                type="checkbox"
                checked={darkTheme}
                onChange={onToggle}
                className="darkmodeInput"
              />
              <FontAwesomeIcon icon={icon()} className={iconColor()} />
            </label>
          </form>
        )}
      </div>
    </div>
  );
};

export default DropDownNav;
