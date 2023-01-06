import Image from "next/image";
import React from "react";
import Ellipsis from "./tools/Ellipsis";
import Likes from "./reusable/Likes";

const Blog = ({ onComment }) => {
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
              <div className="boxPrimary">Blog: Hwanjin Lee</div>
              <div className="boxSecondary">
                How My Frustration with Inefficient Part Ordering Led Me to
                Learning Development
              </div>
            </div>
          </div>
          <div>
            <Ellipsis />
          </div>
        </div>
        <div>
          <div>
            As an appliance technician, I saw firsthand the difficulties that
            arose from the current system of ordering parts for repairs at my
            previous job. At the company I worked for, technicians would upload
            a hardware system diagnosis to the server using an in-house app, but
            then a separate team of part researchers would have to search the
            appliance company&apos;s database for the corresponding part
            numbers. This added an extra step to the repair process and often
            resulted in delays for customers, as the team of researchers
            struggled to navigate the overwhelming and poorly organized
            database.
          </div>
          <br />
          <div>
            One day, I had the opportunity to switch roles within the company
            and work as a part researcher myself. This gave me a new perspective
            on the challenges of the job and the inefficiencies of the current
            system. I saw that the database was difficult to use and had
            multiple versions of the same parts, making it hard to review the
            results. On top of that, some parts didn&apos;t even have pictures,
            and the filter system by model number and serial number often
            provided incorrect information. As a result, technicians often had
            to make multiple visits to complete a repair because of wrong parts
            being ordered.
          </div>
          <br />
          <div>
            It was clear to me that there had to be a better way. I started
            thinking about how I could use my knowledge as a technician and my
            desire to improve the system to develop a more efficient and
            effective app that could connect directly to the parts database. I
            realized that if technicians were able to access and search the
            database themselves, it would streamline the repair process and
            improve the overall customer experience.
          </div>
          <br />
          <div>
            And so, my interest in web development was born. I knew that I
            wanted to create solutions that could help companies like mine run
            more smoothly and provide better service to their customers. I
            believe that with the right approach to development and the right
            tools, we can make a real difference in the way businesses operate
            and the level of satisfaction they provide.
          </div>
        </div>
        <Likes onComment={onComment} />
      </div>
    </div>
  );
};

export default Blog;
