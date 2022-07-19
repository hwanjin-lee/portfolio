import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/components/MessageMe.module.css";
import Input from "./tools/Input";
import Textarea from "./tools/Textarea";
import { handleSeeMore, styleSeeMore, textSeeMore } from "./tools/seeMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { iconSelector } from "./tools/iconSelector";

const MessageMe = ({ minimizedState, setMinimizedState }) => {
  // const [minimizedState, setMinimizedState] = useState(0);

  const faAngle = () => {
    return minimizedState == 0 ? faAngleUp : faAngleDown;
  };

  // const iconSelector = (icon) => {
  //   if (icon) {
  //     return <FontAwesomeIcon icon={icon} />;
  //   }
  // };

  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        onClick={() => handleSeeMore(minimizedState, setMinimizedState)}
      >
        <div className={styles.messageMe}>
          <div className={styles.profileImg}>
            <div>
              <Image src="/img/myself.jpg" alt="" width="30px" height="30px" />
              <div className={styles.online}></div>
            </div>
          </div>
          <div>Message me!</div>
        </div>
        <div>
          <FontAwesomeIcon icon={faAngle()} className="icon" />
        </div>
      </div>
      <div className={styleSeeMore(minimizedState, styles.show, styles.hide)}>
        <div className={styles.content}>
          <form action="/" method="post">
            <div className={styles.input}>
              <Input
                placeholder="Name"
                helper="first or full name"
                icon={iconSelector(faUser)}
              />
            </div>
            <div className={styles.input}>
              <Input
                placeholder="Email"
                helper="email@example.com"
                icon={iconSelector(faEnvelope)}
              />
            </div>
            <div className={styles.textarea}>
              <Input placeholder="Subject" helper="" icon="" />
            </div>
            <Textarea />
            <button type="submit" className={styles.submitBtn}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageMe;
