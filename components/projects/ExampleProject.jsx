import React from "react";
import UsedStacks from "../reusable/UsedStacks";
import Likes from "../reusable/Likes";
import Ellipsis from "../tools/Ellipsis";
import Image from "next/image";

const ExampleProject = ({ onComment }) => {
  return (
    <div className="boxManualPadding">
      <div id="work"></div>
      <div className="headerPadding">
        <div className="boxHeader">
          <div className="boxFlex">
            <div className="boxHeaderImg">
              {/* Input the Image here */}
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
