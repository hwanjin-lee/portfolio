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
        <div>
          I received my Bachelor of Science in Graphic Design through Graphic
          Information Technology program from Arizona State University in 2017.
          Throughout my studies, I focused on the production and utilization of
          digital and physical products using Adobe software and other tools
          like Maya for 3D digital asset studies.
        </div>
        <br />
        <div>
          While I had initially limited knowledge of software development, I
          have always been drawn to careers that allow me to be creative. I am
          excited to bring that creativity to my work as a developer and believe
          that my background in design will be a valuable asset in this field. I
          am eager to begin my career in software development and make use of my
          skills and experience in this industry.
        </div>
      </div>
      <Likes onComment={onComment} />
    </div>
  );
};

export default Education;
