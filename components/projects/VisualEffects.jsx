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
          Here are some of the jobs I&apos;ve done as visual effects artists in
          the past. It&apos;s not related to programming but I thought it would
          be interesting to share some other type of creative jobs I&apos;ve
          done in the past. It was amazing experience working with other
          creative and passionate individuals collaborating the skills into big
          projects.
        </div>
      </div>
      <div className="boxPicture">
        <div className="imageContainer">
          <Image
            src="/img/projects/visualEffects/conceptart.png"
            layout="fill"
            className="image"
          />
        </div>
        <div className="imageContainer">
          <Image
            src="/img/projects/visualEffects/3dart.png"
            layout="fill"
            className="image"
          />
        </div>
        <div className="imageContainer">
          <Image
            src="/img/projects/visualEffects/intersect1.png"
            layout="fill"
            className="image"
          />
        </div>
        <div className="imageContainer">
          <Image
            src="/img/projects/visualEffects/intersect2.png"
            layout="fill"
            className="image"
          />
        </div>
        <div className="imageContainer">
          <Image
            src="/img/projects/visualEffects/intersect3.png"
            layout="fill"
            className="image"
          />
        </div>
        <div className="imageContainer">
          <Image
            src="/img/projects/visualEffects/intersect4.png"
            layout="fill"
            className="image"
          />
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
