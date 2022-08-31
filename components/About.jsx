import Image from "next/image";
import React from "react";
import styles from "../styles/components/About.module.css";
import Ellipsis from "./tools/Ellipsis";
import Likes from "./reusable/Likes";

const About = ({ onComment }) => {
  return (
    <div>
      <div id="about"></div>
      <div className="box">
        <div className="boxHeader">
          <div className="boxFlex">
            <div className="boxHeaderImg">
              <Image src="/img/myself.jpg" alt="" width="36px" height="36px" />
            </div>
            <div className="boxHeaderTitle">
              <div className="boxPrimary">Hwanjin Lee</div>
              <div className="boxSecondary">Front-End Web Developer</div>
            </div>
          </div>
          <div>
            <Ellipsis />
          </div>
        </div>
        <div>
          I&apos;m a front-end web developer with a background in visual
          graphics. My dev journey began when a hobby in web development grew
          into a passion that triggered a career transition. I think it&apos;s
          amazing to see how fast web development tools/stacks are advancing to
          make the web more useful and powerful. Libraries like React allow me
          to do something I love, which is to make components that are useful,
          appealing, and easy to use!
        </div>
        <Likes onComment={onComment} />
      </div>
    </div>
  );
};

export default About;
