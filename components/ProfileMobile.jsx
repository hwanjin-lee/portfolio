import React from "react";
import Image from "next/image";
import styles from "../styles/components/ProfileMobile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ContactLinks from "./ContactLinks";
import { mailTo } from "./tools/MailTo";
import Resume from "./tools/Resume";

const ProfileMobile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <div className={styles.backgroundImg}></div>
        <div className={styles.contents}>
          <div className={styles.contactCard}>
            <div className={styles.profileImg}>
              <Image
                src="/img/myself.jpg"
                alt=""
                width="200px"
                height="200px"
              />
            </div>
            <div className={styles.intro}>
              <div className={styles.name}>Hwanjin Lee</div>
              <div className={styles.contact}>
                <div
                  className="email"
                  onClick={() => {
                    mailTo("hwanjin.lee174@gmail.com");
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                  hwanjin.lee174@gmail.com
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className={styles.icon}
                  />
                  Phoenix, AZ
                </div>
              </div>
              <div className={styles.quote}>
                <div className={styles.quoteWidth}>
                  &quot;I&apos;m a developer that loves to build, learn, and
                  find new opportunities to make things come to life!&quot;
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
      <Resume />
    </div>
  );
};

export default ProfileMobile;
