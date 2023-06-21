import React, { useState } from "react";
import UsedStacks from "../reusable/UsedStacks";
import Likes from "../reusable/Likes";
import Ellipsis from "../tools/Ellipsis";
import Image from "next/image";
import { styleOfFullPicture } from "../tools/seeMore";

const VisualEffects = ({ onComment }) => {
  const [readMoreExpanded, setReadMoreExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleExpand = (index) => {
    setCurrentImageIndex(index);
    setIsExpanded(!isExpanded);
  };

  const pictures = [
    { src: "/img/projects/visualEffects/conceptart.png", alt: "" },
    { src: "/img/projects/visualEffects/3dart.png", alt: "" },
    { src: "/img/projects/visualEffects/intersect1.png", alt: "" },
    { src: "/img/projects/visualEffects/intersect2.png", alt: "" },
    { src: "/img/projects/visualEffects/intersect3.png", alt: "" },
    { src: "/img/projects/visualEffects/intersect4.png", alt: "" },
  ];

  return (
    <div className="boxManualPadding">
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
      <div className="headerPadding">
        <div className="boxHeader">
          <div className="boxFlex">
            <div className="boxHeaderImg">
              {/* Input the Image here */}
              <Image
                src="/logos/blender.png"
                alt=""
                width="36px"
                height="36px"
              />
            </div>
            <div className="boxHeaderTitle">
              <div className="boxPrimary">Past jobs</div>
              <div className="boxSecondary">3D visual effects experiences</div>
            </div>
          </div>
          <div>
            <Ellipsis />
          </div>
        </div>
      </div>
      <div className={readMoreExpanded ? "" : "readMoreReducedHeight"}>
        <div className="descPadding">
          <div>
            Here are a few of my past creative projects where I had the
            opportunity to collaborate with other creatives.
          </div>
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
      <div className="descPadding">
        <hr />
        <div className="flexWrap">
          <UsedStacks title={"blender"} />
          <UsedStacks title={"photoshop"} />
          <UsedStacks title={"aftereffects"} />
          <UsedStacks title={"3Dsculpting"} />
          <UsedStacks title={"texturing"} />
          <UsedStacks title={"rigging"} />
          <UsedStacks title={"animating"} />
          <UsedStacks title={"rendering"} />
        </div>
      </div>
      <div className="footerPadding">
        <Likes onComment={onComment} />
      </div>
    </div>
  );
};

export default VisualEffects;
