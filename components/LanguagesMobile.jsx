import Image from "next/image";
import React from "react";
import styles from "../styles/components/LanguagesMobile.module.css";
import Ellipsis from "./tools/Ellipsis";
import Likes from "./reusable/Likes";

const LanguagesMobile = ({ onComment }) => {
  return (
    <div className={styles.container}>
      <div className="box">
        <div className="boxHeader">
          <div className="boxFlex">
            <div className="boxHeaderImg">
              <Image
                src="/icon/programming.png"
                alt=""
                width="36px"
                height="36px"
              />
            </div>
            <div className="boxHeaderTitle">
              <div className="boxPrimary">Tech Stack</div>
              <div className="boxSecondary">
                Often used Languages / Libraries
              </div>
            </div>
          </div>
          <div>
            <Ellipsis />
          </div>
        </div>
        <div className={styles.content}>
          Here are the list of tools I love to use when coding. They make my
          life a little easier!
        </div>
        <div className={styles.stack}>
          <div className={styles.individualStack}>
            <Image src="/logos/html5.png" width="20px" height="20px" />
            <div className="spaceLeft">HTML</div>
          </div>
          <div className={styles.individualStack}>
            <Image src="/logos/css3.png" width="20px" height="20px" />
            <div className="spaceLeft">CSS</div>
          </div>
          <div className={styles.individualStack}>
            <Image src="/logos/javascript.png" width="20px" height="20px" />
            <div className="spaceLeft">JavaScript</div>
          </div>
          <div className={styles.individualStack}>
            <Image src="/logos/typescript.png" width="20px" height="20px" />
            <div className="spaceLeft">TypeScript</div>
          </div>
          <div className={styles.individualStack}>
            <Image src="/logos/react.png" width="20px" height="20px" />
            <div className="spaceLeft">React.js</div>
          </div>
          <div className={styles.individualStack}>
            <Image src="/logos/nextjs.png" width="20px" height="20px" />
            <div className="spaceLeft">Next.js</div>
          </div>
          {/* <div className={styles.individualStack}>
            <Image src="/logos/angular.png" width="20px" height="20px" />
            <div className="spaceLeft">Angular</div>
          </div> */}
          <div className={styles.individualStack}>
            <Image src="/logos/postman.png" width="20px" height="20px" />
            <div className="spaceLeft">Postman</div>
          </div>
          <div className={styles.individualStack}>
            <Image src="/logos/git.png" width="20px" height="20px" />
            <div className="spaceLeft">Git</div>
          </div>
          <div className={styles.individualStack}>
            <Image src="/logos/mongoDB.png" width="20px" height="20px" />
            <div className="spaceLeft">MongoDB</div>
          </div>
          <div className={styles.individualStack}>
            <Image src="/logos/nodejs.png" width="20px" height="20px" />
            <div className="spaceLeft">Node.js</div>
          </div>
        </div>

        <Likes onComment={onComment} />
      </div>
    </div>
  );
};

export default LanguagesMobile;
