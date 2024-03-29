import React, { useState } from "react";
import UsedStacks from "../reusable/UsedStacks";
import Likes from "../reusable/Likes";
import Ellipsis from "../tools/Ellipsis";
import Image from "next/image";
import { styleOfFullPicture } from "../tools/seeMore";

const NextjsProject = ({ onComment }) => {
  const [readMoreExpanded, setReadMoreExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleExpand = (index) => {
    setCurrentImageIndex(index);
    setIsExpanded(!isExpanded);
  };
  const pictures = [
    { src: "/img/projects/nextjsProject/photo3.png", alt: "" },
    { src: "/img/projects/nextjsProject/photo1.png", alt: "" },
    { src: "/img/projects/nextjsProject/photo2.png", alt: "" },
    { src: "/img/projects/nextjsProject/photo4.png", alt: "" },
  ];

  return (
    <>
      <div>
        <div id="work"></div>
        <div className="box">
          {isExpanded && (
            <div className="overlay" onClick={toggleExpand}>
              <div
                style={{ width: "90%", height: "90%", position: "relative" }}
              >
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
                  src="/logos/nextjs.png"
                  alt=""
                  width="36px"
                  height="36px"
                />
              </div>
              <div className="boxHeaderTitle">
                <div className="boxPrimary">
                  Hannah, permanent makeup website
                </div>
                <div className="boxSecondary">Project: Scheudling web app</div>
              </div>
            </div>
            <div>
              <Ellipsis />
            </div>
          </div>
          {/* <div className={readMoreExpanded ? "" : "readMoreReducedHeight"}> */}
          <div className={readMoreExpanded ? "" : "readMoreReducedHeight"}>
            <div>
              As I learned more deeply into web development, I aimed to expand
              my knowledge beyond static web designs, with the purpose to
              enhance my understanding of cloud databases.
            </div>
            <br />
            <div>
              The website for this project allows customers to schedule
              appointments online based off of available time slots. Once
              booked, these appointments are integrated into the business
              owner&apos;s scheduling table, ensuring effortless readability.
              Moreover, the website features interfaces that gives owners
              ability to make updates to their store&apos;s information,
              including pricing details and operating hours.
            </div>
            <br />
            <div>
              This project served as a valuable learning experience, allowing me
              to gain proficiency in working with read/write APIs and
              establishing connections with cloud databases. It was exciting to
              create websites that was more dynamic in nature.
            </div>
            <br />
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
            <div className="videoplayer">
              <video width="100%" controls>
                <source
                  src="/img/projects/nextjsProject/nextjsprojectshowcase.mp4"
                  type="video/mp4"
                ></source>
              </video>
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
            <UsedStacks title={"html"} />
            <UsedStacks title={"css"} />
            <UsedStacks title={"javascript"} />
            <UsedStacks title={"react.js"} />
            <UsedStacks title={"next.js"} />
            <UsedStacks title={"mongoDB"} />
            <UsedStacks title={"postman"} />
          </div>
          <Likes onComment={onComment} />
        </div>
      </div>
    </>
  );
};

export default NextjsProject;
