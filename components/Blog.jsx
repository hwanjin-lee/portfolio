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
          <div>
            I grew an interest in web development from experiencing difficulty
            while trying to look up parts in a company&apos;s overwhelming
            database website.
          </div>
          <br />
          <div>
            My old job was an appliance technician at a contract company that
            worked under Samsung. After diagnosis was uploaded to the server, a
            non technician employee had to search for parts in Samsung&apos;s
            database website for part number.
          </div>
          <br />
          <div>
            There was a moment where I had back injury from field work, so I
            took some time off and worked in office helping out with the parts
            research and order.
          </div>
          <br />
          <div>
            The database website&apos;s search feature had three fill in spaces:
            Model number, Serial number, and part name. It was awful and
            overwhelming. There was one table for all different types and models
            of appliances plus tv.. The fill in tasking was painful as the
            database did not filter nor given me auto finish recommendations.
          </div>
          <br />
          <div>
            Since the beginning of my time with the company, the parts research
            and order always have bottlenecked the flow of many repair request
            tickets and I have finally realized why. This part in the process
            alone impacted the overall customers repair experiences due to not
            having enough workers to order the needed parts right away, lagging
            the logistics of part arrival. At the end, it resulted in customers
            having to wait longer than they needed to for their fridge or
            washing machine to be fixed.
          </div>
          <br />
          <div>
            Samsung always pushed contracted companies for a better customer
            experience. They gave more repair tickets to companies with higher
            customer satisfactory ratings. I knew that as a contractor company
            under Samsung, there was nothing much we could do about their awful
            database website but at least I knew what the problem was and
            realized the importance of a web design.
          </div>
          <br />
          <div>
            If Samsung realize that their bad design of database parts search
            was impacting their overall AS(after service) experiences, I&apos;m
            pretty sure they would&apos;ve done something about it.
          </div>
          <br />
          <div>
            I always imagined, If they had a good filtering and sorting system
            behind their database with good responsive design for mobile,
            contractor companies wouldn&apos;t have to spend their resources on
            educating non-certified technician employees to research for parts
            based off of a diagnosis, getting rid of the whole bottlenecking
            process once in for all. Parts could be ordered right there and then
            at the field site with the customer by technician who knows more
            about the parts. That way there would be no errors for wrong parts
            or delay in parts delivery.
          </div>
        </div>
        <Likes onComment={onComment} />
      </div>
    </div>
  );
};

export default Blog;
