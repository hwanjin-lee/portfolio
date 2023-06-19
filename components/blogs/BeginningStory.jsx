import Image from "next/image";
import React from "react";
import Ellipsis from "../tools/Ellipsis";
import Likes from "../reusable/Likes";

const BeginningStory = ({ onComment }) => {
  return (
    <div>
      <div className="box">
        <div className="boxHeader">
          <div className="boxFlex">
            <div className="boxHeaderImg">
              <Image src="/img/myself.jpg" alt="" width="36px" height="36px" />
            </div>
            <div className="boxHeaderTitle">
              <div className="boxPrimary">Hwanjin Lee</div>
              <div className="boxSecondary">
                Blog: Starting point of my development journey
              </div>
            </div>
          </div>
          <div>
            <Ellipsis />
          </div>
        </div>
        <div>
          <h1>How I got into development</h1>
          <div>
            During my time as an appliance technician, I encountered the
            challenges posed by the existing part ordering system at my job. At
            the company, we would upload hardware system diagnoses using an
            in-house app, but then a separate team of part researchers had to
            search through a complex and disorganized database to find the right
            part numbers. This added unnecessary delays for our customers and
            created frustration for all involved.
          </div>
          <br />
          <div>
            One day, I had the opportunity to work as a part researcher myself,
            which opened my eyes to the inefficiencies of the system. The
            database was difficult to navigate, with redundant entries and a
            lack of visual references for some parts. The filtering system often
            provided incorrect information, leading to wrong parts being ordered
            and requiring additional repair visits.
          </div>
          <br />
          <div>
            Realizing that there had to be a better way, I started gaining
            interest towards how website and apps were made. With the help of
            online resources, my experience as a technician, and my desire to
            improve the process, I started envisioning a more efficient and
            effective app that could directly connect technicians to the parts
            database.
          </div>
          <br />
          <div>
            It was through this pursuit of efficiency that I discovered my
            passion for development. I knew that I wanted to be part of
            impactful solutions that could transform businesses, enabling them
            to operate more smoothly and deliver superior service to their
            customers.
          </div>
        </div>
        <Likes onComment={onComment} />
      </div>
    </div>
  );
};

export default BeginningStory;
