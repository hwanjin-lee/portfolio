import React, { useState } from "react";
import UsedStacks from "../reusable/UsedStacks";
import Likes from "../reusable/Likes";
import Ellipsis from "../tools/Ellipsis";
import Image from "next/image";
import { styleOfFullPicture } from "../tools/seeMore";

const NextjsProject = ({ onComment }) => {
  const [src, setSrc] = useState("/img/projects/example/default.png");
  const [fullPicture, setFullPicture] = useState(false);

  const handleSrc = (newSrc) => {
    setSrc((src = newSrc));
    if (fullPicture === false) {
      setFullPicture(true);
    } else if (fullPicture === true) {
      setFullPicture(false);
    }
  };

  const pictures = [
    { src: "/img/projects/nextjsProject/photo1.png", alt: "" },
    { src: "/img/projects/nextjsProject/photo2.png", alt: "" },
    { src: "/img/projects/nextjsProject/photo3.png", alt: "" },
    { src: "/img/projects/nextjsProject/photo4.png", alt: "" },
  ];

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
          I recently developed a full stack web application for small
          client-based businesses, using my skills in front-end development and
          cloud database interactions to create a customer database website for
          &quot;Hannah&apos;s Permanent Makeup Studio.&quot; My project included
          designing and implementing features such as appointment scheduling and
          calendar management using technologies such as JavaScript, Next.js,
          and MongoDB Atlas. The website allows customers to easily book
          appointments online and provides an interface for business owners to
          make updates to store information, including pricing and operating
          hours. For example, if the closing time is changed from 5pm to 2pm on
          a Sunday, the website will automatically reflect this update and
          prevent customers from booking appointments later than 2pm. This
          project would help small business owners streamline the appointment
          process for both the business and its customers, allowing them to
          focus on providing exceptional in-person customer service.
        </div>
      </div>
      <div
        className={styleOfFullPicture(fullPicture)}
        onClick={() => handleSrc("/img/projects/example/default.png")}
      >
        <Image src={`${src}`} layout="fill" className="fullPictureImage" />
      </div>
      <div className="boxPicture">
        {/* {pictures.map((pic) => {
          <div className="imageContainer" onClick={() => handleSrc(pic.src)}>
            <Image
              src={pic.src}
              alt={pic.alt}
              layout="fill"
              className="image"
            />
          </div>;
        })} */}

        <div
          className="imageContainer"
          onClick={() => handleSrc(pictures[0].src)}
        >
          <Image
            src={pictures[0].src}
            alt={pictures[0].alt}
            layout="fill"
            className="image"
          />
        </div>
        <div
          className="imageContainer"
          onClick={() => handleSrc(pictures[1].src)}
        >
          <Image
            src={pictures[1].src}
            alt={pictures[1].alt}
            layout="fill"
            className="image"
          />
        </div>
        <div
          className="imageContainer"
          onClick={() => handleSrc(pictures[2].src)}
        >
          <Image
            src={pictures[2].src}
            alt={pictures[2].alt}
            layout="fill"
            className="image"
          />
        </div>
        <div
          className="imageContainer"
          onClick={() => handleSrc(pictures[3].src)}
        >
          <Image
            src={pictures[3].src}
            alt={pictures[3].alt}
            layout="fill"
            className="image"
          />
        </div>
      </div>
      <div className="videoplayer">
        <video width="100%" controls>
          <source
            src="/img/projects/nextjsProject/nextjsprojectshowcase.mp4"
            type="video/mp4"
          ></source>
        </video>
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
