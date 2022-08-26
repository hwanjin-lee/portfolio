import React from "react";
import UsedStacks from "../reusable/UsedStacks";
import Likes from "../reusable/Likes";
import Ellipsis from "../tools/Ellipsis";
import Image from "next/image";

const VisualEffects = ({ onComment }) => {
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
              <div className="boxPrimary">Past Visual Effects jobs</div>
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
          Here are some of the projects I was worked on of during my time with
          visual effects
        </div>
      </div>
      <div className="boxPicture">
        <div className="picture">
          {" "}
          <Image
            src="/img/projects/example/exampleScreenshot1.png"
            alt=""
            width="340px"
            height="340px"
          />
        </div>
        <div className="picture">
          {" "}
          <Image
            src="/img/projects/example/exampleScreenshot2.png"
            alt=""
            width="340px"
            height="340px"
          />
        </div>
        <div className="picture">
          {" "}
          <Image
            src="/img/projects/example/exampleScreenshot3.png"
            alt=""
            width="340px"
            height="340px"
          />
        </div>
        <div className="picture">
          {" "}
          <Image
            src="/img/projects/example/exampleScreenshot4.png"
            alt=""
            width="340px"
            height="340px"
          />
        </div>
      </div>
      <div className="descPadding">
        <hr />
        <div className="flex">
          <UsedStacks title={"blender"} />
          <UsedStacks title={"photoshop"} />
          <UsedStacks title={"aftereffects"} />
          <UsedStacks title={"substancepainter"} />
        </div>
      </div>
      <div className="footerPadding">
        <Likes onComment={onComment} />
      </div>
    </div>
  );
};

export default VisualEffects;
