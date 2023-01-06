import React from "react";
import Image from "next/image";
import styles from "../styles/components/Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ContactLinks from "./ContactLinks";
import { mailTo } from "./tools/MailTo";

const Profile = () => {
  return (
    <div className={styles.size}>
      <div className={styles.box}>
        <div className={styles.container}>
          <div className={styles.backgroundImg}></div>
          <div className={styles.profileImg}>
            <Image src="/img/myself.jpg" alt="" width="72px" height="72px" />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>Hwanjin Lee</div>
            <div className={styles.secondary}>
              <div
                className="email"
                onClick={() => {
                  mailTo("hwanjin.lee174@gmail.com");
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                <div>hwanjin.lee174@gmail.com</div>
              </div>
            </div>
            <div className={styles.secondary}>
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
              <div>San-Diego, CA</div>
            </div>
            <div className={styles.quote}>
              "As a developer with a passion for building, learning, and
              bringing ideas to life, I am always seeking new opportunities to
              grow and make a positive impact."
            </div>
            <hr />
            <div className={styles.interests}>
              <div className={styles.interestBox}>#road trips</div>
              <div className={styles.interestBox}>#cats</div>
              <div className={styles.interestBox}>#snowboarding</div>
              <div className={styles.interestBox}>#surfing</div>
              <div className={styles.interestBox}>#hiking</div>
              <div className={styles.interestBox}>#gunpla</div>
            </div>
            <hr />
            <ContactLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
