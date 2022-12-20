import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/components/Resume.module.css";

const Resume = () => {
  return (
    <div className="box">
      <a className={styles.container} href="/HwanjinLeeCV.pdf" target="_blank">
        <div className={styles.text}>View Resume</div>
        <FontAwesomeIcon icon={faDownload} className={styles.icons} />
      </a>
    </div>
  );
};

export default Resume;
