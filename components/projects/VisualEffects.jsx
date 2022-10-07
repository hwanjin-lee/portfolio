import React, { useState } from "react";
import UsedStacks from "../reusable/UsedStacks";
import Likes from "../reusable/Likes";
import Ellipsis from "../tools/Ellipsis";
import Image from "next/image";
import { styleOfFullPicture } from "../tools/seeMore";

const VisualEffects = ({ onComment }) => {
  const [src, setSrc] = useState("/img/projects/example/default.png");
  const [fullPicture, setFullPicture] = useState(0);

  const handleSrc = (newSrc) => {
    setSrc((src = newSrc));
    if (fullPicture == 0) {
      setFullPicture((fullPicture += 1));
    } else if (fullPicture == 1) {
      setFullPicture((fullPicture -= 1));
    }
  };

  const pictures = [
    "/img/projects/visualEffects/conceptart.png",
    "/img/projects/visualEffects/3dart.png",
    "/img/projects/visualEffects/intersect1.png",
    "/img/projects/visualEffects/intersect2.png",
    "/img/projects/visualEffects/intersect3.png",
    "/img/projects/visualEffects/intersect4.png",
  ];

  return (
    <div className="boxManualPadding">
      <div id="work"></div>
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
      <div className="descPadding">
        <div>
          Here are a few of my past creative projects where I had the
          opportunity to collaborate with other creatives.
        </div>
      </div>
      <div
        className={styleOfFullPicture(fullPicture)}
        onClick={() => handleSrc("/img/projects/example/default.png")}
      >
        <Image src={`${src}`} layout="fill" className="fullPictureImage" />
      </div>
      <div className="boxPicture">
        <div className="imageContainer" onClick={() => handleSrc(pictures[0])}>
          <Image src={pictures[0]} alt="" layout="fill" className="image" />
        </div>
        <div className="imageContainer" onClick={() => handleSrc(pictures[1])}>
          <Image src={pictures[1]} alt="" layout="fill" className="image" />
        </div>
        <div className="imageContainer" onClick={() => handleSrc(pictures[2])}>
          <Image src={pictures[2]} alt="" layout="fill" className="image" />
        </div>
        <div className="imageContainer" onClick={() => handleSrc(pictures[3])}>
          <Image src={pictures[3]} alt="" layout="fill" className="image" />
        </div>
        <div className="imageContainer" onClick={() => handleSrc(pictures[4])}>
          <Image src={pictures[4]} alt="" layout="fill" className="image" />
        </div>
        <div className="imageContainer" onClick={() => handleSrc(pictures[5])}>
          <Image src={pictures[5]} alt="" layout="fill" className="image" />
        </div>
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
