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
        I graduated with Graphic Arts and Design where I focused learning about
        print, digital UI designs, color sets, and more using mostly Adobe
        &apos;s creative cloud softwares. The school challenged me to explore
        many different direction of career paths that I could take. I knew I
        wanted to do something that involved creativity. That is why I have
        transitioned my career into web development.
      </div>
      <Likes onComment={onComment} />
    </div>
  );
};

export default Education;
