import React from "react";
import UsedStacks from "../reusable/UsedStacks";
import Likes from "../reusable/Likes";
import Ellipsis from "../tools/Ellipsis";
import Image from "next/image";

const NextjsProject = ({ onComment }) => {
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
          For this project, I designed and developed a customer database website
          for client based small businesses such as, &quot;Hannah&apos;s
          Permanent Makeup Studio.&quot; This website allows customers to
          schedule their own appointments for different services, which then
          updates an appointment calendar for the admin/business owner. With
          this website, small business owners can focus on providing in-person
          customer care, without the hassle of setting up their schedule for
          months to come.
        </div>
      </div>
      <div className="boxPicture">
        <div className="imageContainer">
          <Image
            src="/img/projects/nextjsProject/hpmScreenshot1.png"
            layout="fill"
            className="image"
          />
        </div>
        <div className="imageContainer">
          <Image
            src="/img/projects/nextjsProject/hpmScreenshot2.png"
            layout="fill"
            className="image"
          />
        </div>
        <div className="imageContainer">
          <Image
            src="/img/projects/nextjsProject/hpmScreenshot3.png"
            layout="fill"
            className="image"
          />
        </div>
        <div className="imageContainer">
          <Image
            src="/img/projects/nextjsProject/hpmScreenshot4.png"
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

export default NextjsProject;
