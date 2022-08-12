import React, { useState } from "react";
import Image from "next/image";
import { handleSeeMore, styleSeeMore, textSeeMore } from "./tools/seeMore";
import styles from "../styles/components/Languages.module.css";

const Languages = () => {
  const [display, setDisplay] = useState(0);

  return (
    <div className={styles.container}>
      <div className="box">
        <div>Languages</div>
        <hr />
        <div className={styles.stackContainer}>
          <div className="flex">
            <Image src="/logos/html5.png" width="20px" height="20px" />
            <div className="spaceLeft">HTML</div>
          </div>
        </div>
        <div className={styles.stackContainer}>
          <div className="flex">
            <Image src="/logos/css3.png" width="20px" height="20px" />
            <div className="spaceLeft">CSS</div>
          </div>
        </div>
        <div className={styles.stackContainer}>
          <div className="flex">
            <Image src="/logos/javascript.png" width="20px" height="20px" />
            <div className="spaceLeft">JavaScript</div>
          </div>
        </div>
        <div className={styles.stackContainer}>
          <div className="flex">
            <Image src="/logos/typescript.png" width="20px" height="20px" />
            <div className="spaceLeft">TypeScript</div>
          </div>
        </div>
        <div className={styles.title}>Stack / Libraries</div>
        <hr />
        <div className={styles.stackContainer}>
          <div className="flex">
            <Image src="/logos/react.png" width="20px" height="20px" />
            <div className="spaceLeft">React.js</div>
          </div>
        </div>
        <div className={styles.stackContainer}>
          <div className="flex">
            <Image src="/logos/nextjs.png" width="20px" height="20px" />
            <div className="spaceLeft">Next.js</div>
          </div>
        </div>
        <div className={styles.stackContainer}>
          <div className="flex">
            <Image src="/logos/angular.png" width="20px" height="20px" />
            <div className="spaceLeft">Angular</div>
          </div>
        </div>
        <div className={styleSeeMore(display, styles.show, styles.hide)}>
          <div className={styles.stackContainer}>
            <div className="flex">
              <Image src="/logos/postman.png" width="20px" height="20px" />
              <div className="spaceLeft">Postman</div>
            </div>
          </div>
        </div>
        <div className={styleSeeMore(display, styles.show, styles.hide)}>
          <div className={styles.stackContainer}>
            <div className="flex">
              <Image src="/logos/git.png" width="20px" height="20px" />
              <div className="spaceLeft">Git</div>
            </div>
          </div>
        </div>
        <div className={styleSeeMore(display, styles.show, styles.hide)}>
          <div className={styles.stackContainer}>
            <div className="flex">
              <Image src="/logos/mongoDB.png" width="20px" height="20px" />
              <div className="spaceLeft">MongoDB</div>
            </div>
          </div>
        </div>
        <div className={styleSeeMore(display, styles.show, styles.hide)}>
          <div className={styles.stackContainer}>
            <div className="flex">
              <Image src="/logos/nodejs.png" width="20px" height="20px" />
              <div className="spaceLeft">Node.js</div>
            </div>
          </div>
        </div>
        <hr />
        <div
          className={styles.pointer}
          onClick={() => handleSeeMore(display, setDisplay)}
        >
          {textSeeMore(display)}
        </div>
      </div>
    </div>
  );
};

export default Languages;
