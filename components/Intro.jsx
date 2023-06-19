import React from "react";
import styles from "../styles/components/Intro.module.css";
import Ellipsis from "./tools/Ellipsis";
import Image from "next/image";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className="box">
        <div className="boxHeader">
          <div className={styles.postFlex}>
            <div className="boxHeaderImg">
              <Image src="/img/myself.jpg" alt="" width="36px" height="36px" />
            </div>
            <div className={styles.post}>
              <div className={styles.fakeInput}>
                Hello there! Welcome to my Portfolio. I am a...
              </div>
            </div>
          </div>
          <div className={styles.headerIcon}>
            <Ellipsis />
          </div>
        </div>
        <hr />
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.img}>
              <Image
                src="/icon/developer.png"
                alt=""
                width="36px"
                height="36px"
              />
            </div>
            <span>Web Developer</span>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <Image
                src="/icon/3dArtist.png"
                alt=""
                width="36px"
                height="36px"
              />
            </div>
            <span>Graphic Designer</span>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <Image
                src="/icon/graphic-designer.png"
                alt=""
                width="36px"
                height="36px"
              />
            </div>
            <span>UI Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
