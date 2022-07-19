import React, { useState } from "react";
import Ellipsis from "./tools/Ellipsis";
import Image from "next/image";
import styles from "../styles/components/Skills.module.css";

const Skills = () => {
  const [displayStyling, setDisplayStyling] = useState(0);

  const handleClick = () => {
    console.log("clicked");
    if (displayStyling === 0) {
      setDisplayStyling((displayStyling = 1));
    } else if (displayStyling === 1) {
      setDisplayStyling((displayStyling = 0));
    }
    console.log(displayStyling);
  };

  const displayStatus = () => {
    if (displayStyling === 0) {
      return styles.hidden;
    } else if (displayStyling === 1) {
      return styles.show;
    }
  };

  const seeMore = () => {
    if (displayStyling === 0) {
      return "See more";
    } else if (displayStyling === 1) {
      return "See less";
    }
  };

  return (
    <div>
      <div className="boxManualPadding">
        <div className="headerPadding">
          <div className="boxHeader">
            <div className="boxFlex">
              <div className="boxHeaderImg">
                <Image
                  src="/img/myself.jpg"
                  alt=""
                  width="36px"
                  height="36px"
                />
              </div>
              <div className="boxHeaderTitle">
                <div className="boxPrimary">Hwanjin Lee</div>
                <div className="boxSecondary">My Skills</div>
              </div>
            </div>
            <div>
              <Ellipsis />
            </div>
          </div>
        </div>
        <div className="descPadding">
          <div>
            These are some of the languages and libraries I use every day.
          </div>
        </div>
        <div className="boxPicture">
          <div className={styles.logoBox}>
            <Image src="/logos/html5.png" alt="" width="160px" height="160px" />
          </div>
          <div className={styles.logoBox}>
            <Image src="/logos/css3.png" alt="" width="160px" height="160px" />
          </div>
          <div className={styles.logoBox}>
            <Image
              src="/logos/javascript.png"
              alt=""
              width="160px"
              height="160px"
            />
          </div>
          <div className={styles.logoBox}>
            <Image src="/logos/react.png" alt="" width="160px" height="160px" />
          </div>
          <div className={styles.logoBox}>
            <Image src="/logos/git.png" alt="" width="160px" height="160px" />
          </div>
          <div className={styles.logoBox}>
            <Image
              src="/logos/postman.png"
              alt=""
              width="160px"
              height="160px"
            />
          </div>
          <div className={styles.logoBox}>
            <Image
              src="/logos/mongodb.png"
              alt=""
              width="160px"
              height="160px"
            />
          </div>
          <div className={styles.logoBox}>
            <Image
              src="/logos/nextjs.png"
              alt=""
              width="160px"
              height="160px"
            />
          </div>
          <div className={displayStatus()}>
            {" "}
            <Image
              src="/logos/typescript.png"
              alt=""
              width="160px"
              height="160px"
            />
          </div>
          <div className={displayStatus()}>
            {" "}
            <Image
              src="/logos/bootstrap.png"
              alt=""
              width="160px"
              height="160px"
            />
          </div>
          <div className={displayStatus()}>
            {" "}
            <Image
              src="/logos/graphql.png"
              alt=""
              width="160px"
              height="160px"
            />
          </div>
          <div className={displayStatus()}>
            {" "}
            <Image
              src="/logos/tailwind.png"
              alt=""
              width="160px"
              height="160px"
            />
          </div>
          <div className={displayStatus()}>
            {" "}
            <Image
              src="/logos/angular.png"
              alt=""
              width="160px"
              height="160px"
            />
          </div>
          <div className={displayStatus()}>
            {" "}
            <Image
              src="/logos/nodejs.png"
              alt=""
              width="160px"
              height="160px"
            />
          </div>
          <div className={displayStatus()}></div>
          <div className={displayStatus()}></div>
        </div>
        <hr />
        <div className={styles.seeMore}>
          <span onClick={() => handleClick()}>{seeMore()}</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
