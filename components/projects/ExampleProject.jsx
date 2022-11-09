import React, { useState } from "react";
import UsedStacks from "../reusable/UsedStacks";
import Likes from "../reusable/Likes";
import Ellipsis from "../tools/Ellipsis";
import Image from "next/image";
import { styleOfFullPicture } from "../tools/seeMore";

const ExampleProject = ({ onComment }) => {
  const [src, setSrc] = useState("/img/projects/example/default.png");
  const [fullPicture, setFullPicture] = useState(false);

  const handleSrc = (newSrc) => {
    setSrc((src = newSrc));
    if (fullPicture === false) {
      setFullPicture(true);
    } else if (fullPicture === true) {
      setFullPicture(false);
    }
  };

  const pictures = [
    { src: "/img/projects/example/exampleScreenshot1.png", alt: "" },
    { src: "/img/projects/example/exampleScreenshot2.png", alt: "" },
    { src: "/img/projects/example/exampleScreenshot3.png", alt: "" },
    { src: "/img/projects/example/exampleScreenshot4.png", alt: "" },
  ];

  return (
    <div className="boxManualPadding">
      <div id="work"></div>
      <div className="headerPadding">
        <div className="boxHeader">
          <div className="boxFlex">
            <div className="boxHeaderImg">
              <Image
                src="/logos/javascript.png"
                alt=""
                width="36px"
                height="36px"
              />
            </div>
            <div className="boxHeaderTitle">
              <div className="boxPrimary">Project Title</div>
              <div className="boxSecondary">
                Project: short project description
              </div>
            </div>
          </div>
          <div>
            <Ellipsis />
          </div>
        </div>
      </div>
      <div className="descPadding">
        <div>
          project explanation. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Libero ipsum distinctio in, quos corrupti animi
          deleniti dicta aut ut eaque!
        </div>
      </div>
      <div
        className={styleOfFullPicture(fullPicture)}
        onClick={() => handleSrc("/img/projects/example/default.png")}
      >
        <Image src={`${src}`} layout="fill" className="fullPictureImage" />
      </div>
      <div className="boxPicture">
        <div
          className="imageContainer"
          onClick={() => handleSrc(pictures[0].src)}
        >
          <Image
            src={pictures[0].src}
            alt={pictures[0].alt}
            layout="fill"
            className="image"
          />
        </div>
        <div
          className="imageContainer"
          onClick={() => handleSrc(pictures[1].src)}
        >
          <Image
            src={pictures[1].src}
            alt={pictures[0].alt}
            layout="fill"
            className="image"
          />
        </div>
        <div
          className="imageContainer"
          onClick={() => handleSrc(pictures[2].src)}
        >
          <Image
            src={pictures[2].src}
            alt={pictures[0].alt}
            layout="fill"
            className="image"
          />
        </div>
        <div
          className="imageContainer"
          onClick={() => handleSrc(pictures[3].src)}
        >
          <Image
            src={pictures[3].src}
            alt={pictures[0].alt}
            layout="fill"
            className="image"
          />
        </div>
      </div>
      <div className="descPadding">
        <hr />
        <div className="flexWrap">
          <UsedStacks title={"html"} />
          <UsedStacks title={"css"} />
          <UsedStacks title={"javascript"} />
          <UsedStacks title={"and so on"} />
        </div>
      </div>
      <div className="footerPadding">
        <Likes onComment={onComment} />
      </div>
    </div>
  );
};

export default ExampleProject;
