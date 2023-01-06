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
          <div>
            As a self-taught software developer with a strong background in
            visual graphics, I discovered a passion for web development that
            inspired me to transition into a career in the field. I have had the
            opportunity to learn from a variety of online courses and tutorials,
            as well as collaborate with other passionate programmers through
            various online communities.
          </div>
          <br />
          <div>
            I was able to map out a path towards becoming a developer without
            the need for an expensive bootcamp by seeking guidance from others
            in the field. I also enjoyed the freedom to choose the most helpful
            tutorial courses and invest in my knowledge without the constraints
            of a traditional college classroom.
          </div>
          <br />
          <div>
            Through self-guided project work, I gained a deep understanding of
            modern web stacks and the ability to bring my creative ideas to life
            with minimal financial investment. My experience with cloud
            databases such as MongoDB sparked an interest in cloud computing,
            and I am currently studying AWS to further expand my knowledge of
            cloud architecture.
          </div>
        </div>
        <Likes onComment={onComment} />
      </div>
    </div>
  );
};

export default About;
