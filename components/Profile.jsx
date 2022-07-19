import React from "react";
import Image from "next/image";
import styles from "../styles/components/Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ContactLinks from "./ContactLinks";

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
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <div>hwanjin.lee174@gmail.com</div>
            </div>
            <div className={styles.secondary}>
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
              <div>San-Diego, CA</div>
            </div>
            <div className={styles.quote}>
              "I'm a developer that love to build, learn, and find new
              opportunities to make things come to life!"
            </div>
            <hr />
            <div className={styles.interests}>
              <div className={styles.interestBox}>#cars</div>
              <div className={styles.interestBox}>#gunpla</div>
              <div className={styles.interestBox}>#leagueoflegends</div>
              <div className={styles.interestBox}>#snowboard</div>
              <div className={styles.interestBox}>#three.js</div>
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
