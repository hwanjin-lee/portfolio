import React, { useRef, useState } from "react";
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
import emailjs from "@emailjs/browser";

const MessageMe = ({
  minimizedState,
  setMinimizedState,
  notifySuccess,
  notifyError,
}) => {
  const [msgName, setMsgName] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [msgSubject, setMsgSubject] = useState("");
  const [msgContext, setMsgContext] = useState("");

  const handleNameChange = (event) => {
    setMsgName((msgName = event.target.value));
  };
  const handleEmailChange = (event) => {
    setMsgEmail((msgEmail = event.target.value));
  };
  const handleSubjectChange = (event) => {
    setMsgSubject((msgSubject = event.target.value));
  };
  const handleContextChange = (event) => {
    setMsgContext((msgContext = event.target.value));
  };

  const clearMessageBox = () => {
    setMsgName((msgName = ""));
    setMsgEmail((msgEmail = ""));
    setMsgSubject((msgSubject = ""));
    setMsgContext((msgContext = ""));
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o2w7tss",
        "template_wynn9tk",
        form.current,
        "oRGvb5Un5-GG662JD"
      )
      .then(
        (result) => {
          console.log(result.text);
          notifySuccess();
          handleSeeMore(minimizedState, setMinimizedState);
          clearMessageBox();
        },
        (error) => {
          console.log(error.text);
          notifyError();
        }
      );
  };

  const faAngle = () => {
    return minimizedState == 0 ? faAngleUp : faAngleDown;
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        draggable="true"
        onDragStart={() => handleSeeMore(minimizedState, setMinimizedState)}
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
          {/* =Form======================================================= */}
          <form ref={form} onSubmit={sendEmail}>
            <div className={styles.input}>
              <Input
                placeholder="Name"
                helper="first or full name"
                icon={iconSelector(faUser)}
                name="user_name"
                type="text"
                onChangeFunc={handleNameChange}
                state={msgName}
              />
            </div>
            <div className={styles.input}>
              <Input
                placeholder="Email"
                helper="email@example.com"
                icon={iconSelector(faEnvelope)}
                name="user_email"
                type="email"
                onChangeFunc={handleEmailChange}
                state={msgEmail}
              />
            </div>
            <div className={styles.textarea}>
              <Input
                placeholder="Subject"
                helper=""
                icon=""
                name="subject"
                type="text"
                onChangeFunc={handleSubjectChange}
                state={msgSubject}
              />
            </div>
            <Textarea
              name="message"
              onChangeFunc={handleContextChange}
              state={msgContext}
            />

            <div>
              <button type="submit" className={styles.submitBtn} value="Send">
                Send
              </button>
            </div>
          </form>
          {/* ============================================================ */}
        </div>
      </div>
    </div>
  );
};

export default MessageMe;
