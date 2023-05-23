import Image from "next/image";
import React from "react";
import Ellipsis from "./tools/Ellipsis";
import Likes from "./reusable/Likes";

const Hydrocard = ({ onComment }) => {
  return (
    <div>
      <div id="about"></div>
      <div className="box">
        <div className="boxHeader">
          <div className="boxFlex">
            <div className="boxHeaderImg">
              <Image
                src="/img/projects/hydrocard/hydrocard.png"
                alt=""
                width="36px"
                height="36px"
              />
            </div>
            <div className="boxHeaderTitle">
              <div className="boxPrimary">Hydrocard</div>
              <div className="boxSecondary">
                Digitalize prepaid balance management web app
              </div>
            </div>
          </div>
          <div>
            <Ellipsis />
          </div>
        </div>
        <div>www.hydrocard.app</div>
        <div>currently in development</div>
        <Likes onComment={onComment} />
      </div>
    </div>
  );
};

export default Hydrocard;
