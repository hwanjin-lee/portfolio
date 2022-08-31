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
              <div className="boxPrimary">Hwanjin Lee</div>
              <div className="boxSecondary">
                Blog: What made me want to get into web development
              </div>
            </div>
          </div>
          <div>
            <Ellipsis />
          </div>
        </div>
        <div>
          <p>
            Have you ever come across a user interface that is so bad that it
            makes you want to leave your job? Been there and done that but for
            good reason! That is, so I can help improve interfaces through
            development.
          </p>
          <p>
            I grew an interest in web development after experiencing difficulty
            while trying to look up hardware parts on an overwhelming database
            website.
          </p>
          <p>
            At my previous job, I was an appliance technician for a contract
            company(A) under a large appliance company(B). After technicians
            like myself uploaded a hardware system diagnosis to the server, part
            researchers had to search the company(B)&apos;s database for
            hardware part numbers.
          </p>
          <p>
            At one point during my time as a technician, I injured my back while
            working on the field. I temporarily switched roles within the
            company to help support technicians as a part researcher.
          </p>
          <p>
            The website&apos;s search feature was overwhelming, and the results
            were difficult to review. There was no way to filter the database
            table and view only by appliance types or model year. Instead, part
            researchers had to manually search the database by typing in either
            the model number, serial number, or part name.
          </p>
          <p>They had to do this for Every. Single. Diagnosis.</p>
          <p>
            Otherwise, they would have to view a massive table for all different
            types of appliances and different models.
          </p>
          <p>
            During my experience as a technician to a temporary parts
            researcher, I noticed that the parts research and orders always
            bottlenecked the flow of many repair request tickets. This was due
            to a database that was inefficient and difficult to use which
            ultimately resulted in lagging the logistics of part arrival time.
            This part in the process alone impacted the overall customers&apos;
            repair experiences, because they had to wait longer than they needed
            to for their appliance to be fixed.
          </p>
          <p>
            I believe this experience led me to start thinking more like a web
            developer, and I began to ask myself, &quot;if I could change this,
            what would I do differently?&quot;
          </p>
          <p>
            I would focus on creating a database with a filtering and sorting
            system to better support part researchers with finding and ordering
            the parts they need. Part researchers would then be able to filter
            by appliance or models, and see the results listed alphabetically.
            This would decrease the amount of time they spend looking for one
            part, and increase the amount of orders they are able to make in a
            day. Thus, leading to earlier part arrival times, and happier
            customers that don&apos;t have to wait too long for their appliances
            to be fixed.
          </p>
        </div>
        <Likes onComment={onComment} />
      </div>
    </div>
  );
};

export default Blog;
