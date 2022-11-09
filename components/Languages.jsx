import React, { useState } from "react";
import Image from "next/image";
import { handleSeeMore, styleSeeMore, textSeeMore } from "./tools/seeMore";
import styles from "../styles/components/Languages.module.css";
import Link from "next/link";

const Languages = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div className={styles.container}>
      <div className="box">
        <div>Languages</div>
        <hr />
        {/* =========================================================================== */}
        <Link href="https://www.w3schools.com/html/">
          <a className={styles.stackContainer} target="_blank">
            <div className="flex">
              <Image
                src="/logos/html5.png"
                width="20px"
                height="20px"
                alt="html"
              />
              <div className="spaceLeft">HTML</div>
            </div>
          </a>
        </Link>
        <Link href="https://www.w3schools.com/css/">
          <a className={styles.stackContainer} target="_blank">
            <div className="flex">
              <Image
                src="/logos/css3.png"
                width="20px"
                height="20px"
                alt="html"
              />
              <div className="spaceLeft">CSS</div>
            </div>
          </a>
        </Link>
        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <a className={styles.stackContainer} target="_blank">
            <div className="flex">
              <Image
                src="/logos/javascript.png"
                width="20px"
                height="20px"
                alt="html"
              />
              <div className="spaceLeft">JavaScript</div>
            </div>
          </a>
        </Link>
        <Link href="https://www.typescriptlang.org/">
          <a className={styles.stackContainer} target="_blank">
            <div className="flex">
              <Image
                src="/logos/typescript.png"
                width="20px"
                height="20px"
                alt="html"
              />
              <div className="spaceLeft">TypeScript</div>
            </div>
          </a>
        </Link>
        {/* =========================================================================== */}
        <div className={styles.title}>Libraries / Tools</div>
        <hr />
        <Link href="https://reactjs.org/">
          <a className={styles.stackContainer} target="_blank">
            <div className="flex">
              <Image
                src="/logos/react.png"
                width="20px"
                height="20px"
                alt="html"
              />
              <div className="spaceLeft">React.js</div>
            </div>
          </a>
        </Link>
        <Link href="https://nextjs.org/">
          <a className={styles.stackContainer} target="_blank">
            <div className="flex">
              <Image
                src="/logos/nextjs.png"
                width="20px"
                height="20px"
                alt="html"
              />
              <div className="spaceLeft">Next.js</div>
            </div>
          </a>
        </Link>
        <div className={styleSeeMore(display, styles.show, styles.hide)}>
          <Link href="https://www.postman.com/">
            <a className={styles.stackContainer} target="_blank">
              <div className="flex">
                <Image
                  src="/logos/postman.png"
                  width="20px"
                  height="20px"
                  alt="html"
                />
                <div className="spaceLeft">Postman</div>
              </div>
            </a>
          </Link>
        </div>
        <div className={styleSeeMore(display, styles.show, styles.hide)}>
          <Link href="https://git-scm.com/">
            <a className={styles.stackContainer} target="_blank">
              <div className="flex">
                <Image
                  src="/logos/git.png"
                  width="20px"
                  height="20px"
                  alt="html"
                />
                <div className="spaceLeft">Git</div>
              </div>
            </a>
          </Link>
        </div>
        <div className={styleSeeMore(display, styles.show, styles.hide)}>
          <Link href="https://www.mongodb.com/">
            <a className={styles.stackContainer} target="_blank">
              <div className="flex">
                <Image
                  src="/logos/mongodb.png"
                  width="20px"
                  height="20px"
                  alt="html"
                />
                <div className="spaceLeft">MongoDB</div>
              </div>
            </a>
          </Link>
        </div>
        <div className={styleSeeMore(display, styles.show, styles.hide)}>
          <Link href="https://nodejs.org/en/">
            <a className={styles.stackContainer} target="_blank">
              <div className="flex">
                <Image
                  src="/logos/nodejs.png"
                  width="20px"
                  height="20px"
                  alt="html"
                />
                <div className="spaceLeft">Node.js</div>
              </div>
            </a>
          </Link>
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
