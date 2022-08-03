import React from "react";
import styles from "../styles/components/ContactLinks.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { mailTo } from "./tools/MailTo";
import Link from "next/link";

const ContactLinks = () => {
  return (
    <div className={styles.container}>
      <Link href="https://www.linkedin.com/in/hwanjin-lee-a459a1242/">
        <a className={styles.links} target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className={styles.icons} />
        </a>
      </Link>
      <Link href="https://github.com/hwanjin-lee">
        <a className={styles.links} target="_blank">
          <FontAwesomeIcon icon={faGithub} className={styles.icons} />
        </a>
      </Link>
      <Link href="https://twitter.com/lee_hwanjin">
        <a className={styles.links} target="_blank">
          <FontAwesomeIcon icon={faTwitter} className={styles.icons} />
        </a>
      </Link>
      <a
        className={styles.links}
        onClick={() => {
          mailTo("no-reply@example.com");
        }}
      >
        <FontAwesomeIcon icon={faEnvelope} className={styles.icons} />
      </a>
      {/* <a className={styles.links}>
        <FontAwesomeIcon icon={faSquarePhone} className={styles.icons} />
      </a> */}
    </div>
  );
};

export default ContactLinks;
