import Image from "next/image";
import React, { useState } from "react";
import Ellipsis from "./tools/Ellipsis";
import Likes from "./reusable/Likes";
import Link from "next/link";
import UsedStacks from "./reusable/UsedStacks";

const Hydrocard = ({ onComment }) => {
  const [readMoreExpanded, setReadMoreExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleExpand = (index) => {
    setCurrentImageIndex(index);
    setIsExpanded(!isExpanded);
  };

  const pictures = [
    { src: "/img/projects/hydrocard/hydrocard4.png", alt: "" },
    { src: "/img/projects/hydrocard/hydrocard1.png", alt: "" },
    { src: "/img/projects/hydrocard/hydrocard2.png", alt: "" },
    { src: "/img/projects/hydrocard/hydrocard3.png", alt: "" },
  ];

  return (
    <div>
      <div id="work"></div>
      <div className="box">
        {isExpanded && (
          <div className="overlay" onClick={toggleExpand}>
            <div style={{ width: "90%", height: "90%", position: "relative" }}>
              <Image
                alt="Full-size Image"
                src={pictures[currentImageIndex].src}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        )}
        <div className="boxHeader">
          <div className="boxFlex">
            <div className="boxHeaderImg">
              <Image
                src="/img/projects/hydrocard/hydrocardLogo.png"
                alt=""
                width="36px"
                height="36px"
              />
            </div>
            <div className="boxHeaderTitle">
              <div className="boxPrimary">
                <Link href="https://hydrocard.app/">
                  <a target="_blank">
                    <div>Hydrocard (www.hydrocard.app)</div>
                  </a>
                </Link>
              </div>
              <div className="boxSecondary">
                Project: Prepaid balance management web app
              </div>
            </div>
          </div>
          <div>
            <Ellipsis />
          </div>
        </div>
        {/* <div className={readMoreExpanded ? "" : "readMoreReducedHeight"}> */}
        <div className={readMoreExpanded ? "" : "readMoreReducedHeight"}>
          <div>
            Self started user-friendly web application to digitize prepaid
            balance management, seizing the opportunity to improve upon the
            inefficient processes commonly used by water/ice stores. Developed
            with little to no money utilizing free tier of AWS for backend,
            authentication, and database
          </div>
          {pictures.map((pic, index) => (
            <Image
              key={index}
              src={pic.src}
              onClick={() => toggleExpand(index)}
              style={{ cursor: "pointer" }}
              alt=""
              title=""
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          ))}
          <div className="flex">
            <div>To read my story of how I started this project,</div>
            <div className="spaceLeft">
              <div className="links">
                <a href="#blog">click here</a>
              </div>
            </div>
          </div>
          <div className="flex">
            <div>Visit,</div>
            <div className="spaceLeft">
              <div className="links">
                <Link href="https://hydrocard.app/">
                  <a target="_blank">
                    <div>www.hydrocard.app</div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="readMoreButton"
          onClick={() =>
            readMoreExpanded
              ? setReadMoreExpanded(false)
              : setReadMoreExpanded(true)
          }
        >
          {readMoreExpanded ? "read less" : "read more"}
        </div>
        <hr />
        <div className="flexWrap">
          <UsedStacks title={"React"} />
          <UsedStacks title={"Javascript"} />
          <UsedStacks title={"AWS Amplify"} />
          <UsedStacks title={"AWS Cognito"} />
          <UsedStacks title={"AWS DynomoDB"} />
          <UsedStacks title={"AWS Lambda"} />
          <UsedStacks title={"AWS Gateway"} />
          <UsedStacks title={"Node.js"} />
          <UsedStacks title={"AWS S3"} />
          <UsedStacks title={"Twilio"} />
        </div>
        <Likes onComment={onComment} />
      </div>
    </div>
  );
};

export default Hydrocard;
