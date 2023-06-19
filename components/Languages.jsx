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
        <hr />
        <div className="iconSectionTitle">Languages &amp; Tools</div>
        {/* <div className="flex">
          <div className="spaceRight">Favorite:</div>
          <Image src="/logos/star.png" width="16px" height="16px" alt="html" />
        </div>
        <div className="flex">
          <div className="spaceRight">Learning:</div>
          <Image
            src="/logos/pencil.png"
            width="16px"
            height="16px"
            alt="html"
          />
        </div> */}
        {/* =========================================================================== */}
        <Link href="https://reactjs.org/">
          <a className={styles.stackContainer} target="_blank">
            <div className="flex">
              <Image
                src="/logos/react.png"
                width="20px"
                height="20px"
                alt="html"
              />
              <div className="spaceLeftRight">React.js</div>
              <Image
                src="/logos/star.png"
                width="20px"
                height="20px"
                alt="html"
              />
            </div>
          </a>
        </Link>
        <Link href="https://aws.amazon.com/">
          <a className={styles.stackContainer} target="_blank">
            <div className="flex">
              <div className="whiteBackground">
                <Image
                  src="/logos/aws.png"
                  width="20px"
                  height="20px"
                  alt="html"
                />
              </div>
              <div className="spaceLeftRight">AWS Services</div>
              <Image
                src="/logos/star.png"
                width="20px"
                height="20px"
                alt="html"
              />
            </div>
          </a>
        </Link>
        <Link href="https://www.postman.com/">
          <a className={styles.stackContainer} target="_blank">
            <div className="flex">
              <Image
                src="/logos/postman.png"
                width="20px"
                height="20px"
                alt="html"
              />
              <div className="spaceLeftRight">Postman</div>
              <Image
                src="/logos/star.png"
                width="20px"
                height="20px"
                alt="html"
              />
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
              <div className="spaceLeftRight">JavaScript</div>
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
              <div className="spaceLeftRight">TypeScript</div>
            </div>
          </a>
        </Link>
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
                <div className="spaceLeftRight">Git</div>
              </div>
            </a>
          </Link>
          <Link href="https://www.mongodb.com/">
            <a className={styles.stackContainer} target="_blank">
              <div className="flex">
                <Image
                  src="/logos/mongodb.png"
                  width="20px"
                  height="20px"
                  alt="html"
                />
                <div className="spaceLeftRight">MongoDB</div>
              </div>
            </a>
          </Link>
          <Link href="https://nodejs.org/en/">
            <a className={styles.stackContainer} target="_blank">
              <div className="flex">
                <Image
                  src="/logos/nodejs.png"
                  width="20px"
                  height="20px"
                  alt="html"
                />
                <div className="spaceLeftRight">Node.js</div>
              </div>
            </a>
          </Link>
          <Link href="https://nextjs.org/">
            <a className={styles.stackContainer} target="_blank">
              <div className="flex">
                <div className="whiteBackground">
                  <Image
                    src="/logos/nextjs.png"
                    width="20px"
                    height="20px"
                    alt="html"
                  />
                </div>
                <div className="spaceLeftRight">Next.js</div>
              </div>
            </a>
          </Link>
          <Link href="https://www.w3schools.com/html/">
            <a className={styles.stackContainer} target="_blank">
              <div className="flex">
                <Image
                  src="/logos/html5.png"
                  width="20px"
                  height="20px"
                  alt="html"
                />
                <div className="spaceLeftRight">HTML</div>
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
                <div className="spaceLeftRight">CSS</div>
              </div>
            </a>
          </Link>
          <hr />
          <div className="iconSectionTitle">AWS Services</div>
          <Link href="https://aws.amazon.com/amplify/">
            <a className={styles.stackContainer} target="_blank">
              <div className="flex">
                <Image
                  src="/logos/awsLogos/amplify.png"
                  width="20px"
                  height="20px"
                  alt="html"
                />
                <div className="spaceLeftRight">Amplify</div>
              </div>
            </a>
          </Link>
          <Link href="https://aws.amazon.com/cognito/">
            <a className={styles.stackContainer} target="_blank">
              <div className="flex">
                <Image
                  src="/logos/awsLogos/cognito.png"
                  width="20px"
                  height="20px"
                  alt="html"
                />
                <div className="spaceLeftRight">Cognito</div>
              </div>
            </a>
          </Link>
          <Link href="https://aws.amazon.com/dynamodb/">
            <a className={styles.stackContainer} target="_blank">
              <div className="flex">
                <Image
                  src="/logos/awsLogos/dynamoDB.png"
                  width="20px"
                  height="20px"
                  alt="html"
                />
                <div className="spaceLeftRight">Dynamo DB</div>
              </div>
            </a>
          </Link>
          <Link href="https://aws.amazon.com/s3/">
            <a className={styles.stackContainer} target="_blank">
              <div className="flex">
                <Image
                  src="/logos/awsLogos/s3.png"
                  width="20px"
                  height="20px"
                  alt="html"
                />
                <div className="spaceLeftRight">S3</div>
              </div>
            </a>
          </Link>
          <Link href="https://aws.amazon.com/lambda/">
            <a className={styles.stackContainer} target="_blank">
              <div className="flex">
                <Image
                  src="/logos/awsLogos/lambda.png"
                  width="20px"
                  height="20px"
                  alt="html"
                />
                <div className="spaceLeftRight">Lambda</div>
              </div>
            </a>
          </Link>
          <Link href="https://aws.amazon.com/api-gateway/">
            <a className={styles.stackContainer} target="_blank">
              <div className="flex">
                <Image
                  src="/logos/awsLogos/apiGateway.png"
                  width="20px"
                  height="20px"
                  alt="html"
                />
                <div className="spaceLeftRight">API Gateway</div>
              </div>
            </a>
          </Link>
          <hr />
          <div className="iconSectionTitle">Other</div>
          <Link href="https://www.twilio.com/en-us">
            <a className={styles.stackContainer} target="_blank">
              <div className="flex">
                <Image
                  src="/logos/twilio.png"
                  width="20px"
                  height="20px"
                  alt="html"
                />
                <div className="spaceLeftRight">Twilio</div>
              </div>
            </a>
          </Link>
          <Link href="https://stripe.com/">
            <a className={styles.stackContainer} target="_blank">
              <div className="flex">
                <Image
                  src="/logos/stripe.png"
                  width="20px"
                  height="20px"
                  alt="html"
                />
                <div className="spaceLeftRight">Stripe</div>
                <Image
                  src="/logos/pencil.png"
                  width="20px"
                  height="20px"
                  alt="html"
                />
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
