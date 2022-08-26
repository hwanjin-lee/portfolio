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
        {/* <div>
          I&apos;m a software engineer specialized in front-end development with
          background of visual graphic experiences. I got interested in coding
          when I was doing database computer tasking through company&apos;s
          website. It all started with a thought of how much more efficiently a
          task could be completed with better web design and functionality.
        </div> */}
        <div>
          I&apos;m a front-end focused web developer with visual graphic
          experiences. My interest in web triggered my dev journey starting from
          being a hobby outside work but I loved it so much that it quickly
          turned into a career transition! I think it's amazing to see how fast
          web development tool/stack are advancing to make web more useful and
          powerful. With libraries like React, I love to make components that
          are useful, appealing, and easy to use.
        </div>
        <Likes onComment={onComment} />
      </div>
    </div>
  );
};

export default About;
