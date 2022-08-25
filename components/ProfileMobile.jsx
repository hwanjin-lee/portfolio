import React from "react";
import Image from "next/image";
import styles from "../styles/components/ProfileMobile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ContactLinks from "./ContactLinks";

const ProfileMobile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImg}></div>
      <div className={styles.contents}>
        <div className={styles.contactCard}>
          <div className={styles.profileImg}>
            <Image src="/img/myself.jpg" alt="" width="200px" height="200px" />
          </div>
          <div className={styles.intro}>
            <div className={styles.name}>Hwanjin Lee</div>
            <div className={styles.contact}>
              <div>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                hwanjin.lee174@gmail.com
              </div>
              <div>
                <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                San-Diego, CA
              </div>
            </div>
            <div className={styles.quote}>
              <div className={styles.quoteWidth}>
                "I&apos;m a developer that love to build, learn, and find new
                opportunities to make things come to life!"
              </div>
            </div>
          </div>
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
  );
};

export default ProfileMobile;
