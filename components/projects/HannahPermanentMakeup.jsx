import React from "react";
import UsedStacks from "../reusable/UsedStacks";
import Likes from "../reusable/Likes";
import Ellipsis from "../tools/Ellipsis";
import Image from "next/image";

const HannahPermanentMakeup = ({ onComment }) => {
  return (
    <div className="boxManualPadding">
      <div id="work"></div>
      <div className="headerPadding">
        <div className="boxHeader">
          <div className="boxFlex">
            <div className="boxHeaderImg">
              {/* Input the Image here */}
              <Image
                src="/logos/nextjs.png"
                alt=""
                width="36px"
                height="36px"
              />
            </div>
            <div className="boxHeaderTitle">
              <div className="boxPrimary">
                Hannah Permanent Makeup Business website
              </div>
              <div className="boxSecondary">
                Project: Full Stack server side web application
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
          This is my client database management service business study. I wanted
          to understand more about database and API. With next.js, mongoBD and
          Postman , I was eaily able to set up a website where a business owner
          could easily change service products, store detail and have database
          of clients and their history all stored onto a server.
        </div>
        <div>
          This project is currently ongoing, and my next plan is to have guests
          make appointments with paypal integration and have the information
          added to the database and the schedule, and auth login for admin.
        </div>
      </div>
      <div className="boxPicture">
        <div className="imageContainer">
          <Image
            src="/img/projects/HannahPermanentMakeUp/screenshot1.png"
            layout="fill"
            className="image"
          />
        </div>
        <div className="imageContainer">
          <Image
            src="/img/projects/HannahPermanentMakeUp/screenshot2.png"
            layout="fill"
            className="image"
          />
        </div>
        <div className="imageContainer">
          <Image
            src="/img/projects/HannahPermanentMakeUp/screenshot3.png"
            layout="fill"
            className="image"
          />
        </div>
        <div className="imageContainer">
          <Image
            src="/img/projects/HannahPermanentMakeUp/screenshot4.png"
            layout="fill"
            className="image"
          />
        </div>
      </div>
      <div className="descPadding">
        <hr />
        <div className="flexWrap">
          <UsedStacks title={"html"} />
          <UsedStacks title={"css"} />
          <UsedStacks title={"javascript"} />
          <UsedStacks title={"react.js"} />
          <UsedStacks title={"next.js"} />
          <UsedStacks title={"mongoDB"} />
          <UsedStacks title={"postman"} />
        </div>
      </div>
      <div className="footerPadding">
        <Likes onComment={onComment} />
      </div>
    </div>
  );
};

export default HannahPermanentMakeup;
