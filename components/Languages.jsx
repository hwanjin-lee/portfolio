import React, { useState } from "react";
import Image from "next/image";
import { handleSeeMore, styleSeeMore, textSeeMore } from "./tools/seeMore";
import styles from "../styles/components/Languages.module.css";

const Languages = () => {
  const [display, setDisplay] = useState(0);

  return (
    <div>
      <div className="box">
        <div>Languages</div>
        <hr />
        <div className="flex">
          <Image src="/logos/html5.png" width="20px" height="20px" />
          <div>HTML</div>
        </div>
        <div className="flex">
          <Image src="/logos/css3.png" width="20px" height="20px" />
          <div>CSS</div>
        </div>
        <div className="flex">
          <Image src="/logos/javascript.png" width="20px" height="20px" />
          <div>JavaScript</div>
        </div>
        <div className="flex">
          <Image src="/logos/typescript.png" width="20px" height="20px" />
          <div>TypeScript</div>
        </div>
        <div className={styles.title}>Stack / Libraries</div>
        <hr />
        <div className="flex">
          <Image src="/logos/react.png" width="20px" height="20px" />
          <div>React.js</div>
        </div>
        <div className="flex">
          <Image src="/logos/nextjs.png" width="20px" height="20px" />
          <div>Next.js</div>
        </div>
        <div className="flex">
          <Image src="/logos/angular.png" width="20px" height="20px" />
          <div>Angular</div>
        </div>
        <div className={styleSeeMore(display, styles.show, styles.hide)}>
          <div className="flex">
            <Image src="/logos/postman.png" width="20px" height="20px" />
            <div>Postman</div>
          </div>
        </div>
        <div className={styleSeeMore(display, styles.show, styles.hide)}>
          <div className="flex">
            <Image src="/logos/git.png" width="20px" height="20px" />
            <div>Git</div>
          </div>
        </div>
        <div className={styleSeeMore(display, styles.show, styles.hide)}>
          <div className="flex">
            <Image src="/logos/mongoDB.png" width="20px" height="20px" />
            <div>MongoDB</div>
          </div>
        </div>
        <div className={styleSeeMore(display, styles.show, styles.hide)}>
          <div className="flex">
            <Image src="/logos/nodejs.png" width="20px" height="20px" />
            <div>Node.js</div>
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
