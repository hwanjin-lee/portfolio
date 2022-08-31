import React from "react";
import Ellipsis from "./tools/Ellipsis";
import Image from "next/image";
import Likes from "./reusable/Likes";

const Education = ({ onComment }) => {
  return (
    <div className="box">
      <div className="boxHeader">
        <div className="boxFlex">
          <div className="boxHeaderImg">
            <Image src="/logos/ASU.png" alt="" width="36px" height="36px" />
          </div>
          <div className="boxHeaderTitle">
            <div className="boxPrimary">Arizona State University</div>
            <div className="boxSecondary">Education</div>
          </div>
        </div>
        <div>
          <Ellipsis />
        </div>
      </div>
      <div>
        In 2017, I graduated with a Bachelors of Science in Graphic Information
        Technology. During my time at Arizona State University, I explored
        general ways to produce and effectively use digital assets and physical
        products. To create these assets, I mainly used Adobe software.
      </div>
      <br />
      <div>
        During this stage of my life, I did not know much about web development.
        However, it became clear to me that I wanted to pursue a career that
        allowed me to be creative. Now, I hope to use that creativity as a web
        developer.
      </div>
      <Likes onComment={onComment} />
    </div>
  );
};

export default Education;
