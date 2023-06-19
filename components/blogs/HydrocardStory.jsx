import React, { useState } from "react";
import Image from "next/image";
import Ellipsis from "../tools/Ellipsis";
import Likes from "../reusable/Likes";

const HydrocardStory = ({ onComment }) => {
  const [expanded, setExpanded] = useState(false);

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
              <div className="boxSecondary">Blog: Hydrocard Story</div>
            </div>
          </div>
          <div>
            <Ellipsis />
          </div>
        </div>
        <div className={expanded ? "" : "readMoreReducedHeight"}>
          <h1>
            Why I Made Prepaid Balance Management for Water and Ice Stores
          </h1>
          <div className="flexCenter">
            <img src="/img/hero.svg" alt="" />
          </div>
          <div>
            <div className="bold">Introduction:</div>
            <div>
              For as long as I can remember, I have been getting filtered water
              in 5-gallon jugs from "water and ice" stores. Living in Arizona,
              where tap water is as hard as cement, relying on these stores with
              their massive water filters has become a lifestyle choice for me.
              However, as I became more passionate about development, I started
              noticing flaws in the prepaid management systems employed by these
              stores. This realization prompted me to embark on a project to
              improve their payment processes.
            </div>
          </div>
          <br />
          <div>
            <div className="bold">Discovering the Flaws:</div>
            <div>
              Having frequented various stores over the years, I observed owners
              and workers conducting transactions in their own unique ways. Many
              of them suggested that customers prepay for their products (water
              or ice) to eliminate the need for card swipes or handling cash
              every time. Intrigued by this system, I began interviewing store
              workers to understand their methods of processing payments.
            </div>
          </div>
          <br />
          <div>
            <div className="bold">Existing Prepaid Management Systems:</div>
            <div>
              Most stores I encountered used either paper forms or gift cards
              powered by Square to manage prepaid balances. The paper form
              approach was akin to a punch card system, with the remaining
              balance recorded on a simple card. While this method was
              straightforward, it had drawbacks. As the number of customers
              increased, it became increasingly challenging to sort through the
              cards. Moreover, these cards had to be discarded once the balance
              was depleted, requiring the customer's name to be recorded on a
              new card if they did not recharge their balance beforehand. I
              found this counterproductive and time-consuming. Alternatively,
              some stores relied on plastic gift cards, primarily utilizing
              Square's system for accepting payments. While these gift cards
              were typically designed for gifting purposes, these businesses
              repurposed them to recharge prepaid balances. They stored the
              cards securely and retrieved them when customers returned.
            </div>
          </div>
          <br />
          <div>
            <div className="bold">Square's Gift Card Service Limitations:</div>
            <div>
              Initially, I assumed that Square's gift card service would provide
              a solution to the problem I sought to address. However, upon
              further contemplation, I realized that Square could not cater to
              every niche business. Consequently, the gift card system was their
              best approach for accommodating prepaid balance management in
              water and ice stores. Nevertheless, I felt there must be more
              efficient methods available.
            </div>
          </div>
          <br />
          <div>
            <div className="bold">The Cost of a Complete Payment System:</div>
            <div>
              To investigate alternative solutions, I researched the cost of
              setting up an entire point-of-sale hardware system. It turned out
              to be a substantial investment, with significant upfront expenses.
              In addition to monthly and transaction fees, businesses had to
              purchase their own hardware to process these functionalities. For
              many stores, especially water and ice stores, accepting payment
              through Square might have seemed like a necessity rather than a
              viable financial option.
            </div>
          </div>
          <br />
          <div>
            <div className="bold">
              Proposing More Efficient Prepaid Balance Management:
            </div>
            <div>
              As I contemplated the issue further, I began envisioning more
              efficient ways to manage prepaid balances. For instance, even with
              Square's gift card method, store owners still had to physically
              sort through the cards to process transactions during return
              visits, mirroring the process of stores using paper forms of
              balance cards. Moreover, both methods left room for errors, as a
              different name mentioned at the register could lead to the
              deduction of another customer's balance, posing a security risk.
            </div>
          </div>
          <br />
          <div>
            <div className="bold">Insights from Store Owners and Workers:</div>
            <div>
              During my interviews with store owners and workers, I gained
              valuable insights into their concerns regarding the prepaid
              system. One major complaint was the difficulty of understanding or
              correctly spelling and pronouncing customers' names. Another issue
              was the sole reliance on a single source for managing prepaid
              balances.
            </div>
          </div>
          <br />
          <div>
            <div className="bold">The Incident that Inspired Change:</div>
            <div>
              During a visit to my most frequented water and ice store, I
              witnessed an incident that highlighted the problems of the
              existing prepaid system. A customer argued that they had
              previously paid $100 worth of prepaid balance under their name,
              but the clerk could not locate the corresponding card. This
              particular store used paper forms for balance management, and the
              clerk's repeated search through the cards failed to find the
              prepaid balance card under the customer's name. No one knew who
              was at fault—whether the customer was mistaken, attempting to scam
              the store, or if the store had genuinely lost the card.
            </div>
          </div>
          <br />
          <div>
            <div className="bold">The Birth of a Solution:</div>
            <div>
              Motivated by this incident and armed with my passion for
              development, I decided to create a web app that would
              revolutionize prepaid balance management for water and ice stores.
              By utilizing tools such as React, AWS, and Twilio, I aimed to
              develop a secure and seamless solution that would be freely
              accessible to all.{" "}
            </div>
          </div>
          <br />
          <div>
            <div className="bold">How I developed a solution:</div>
            <div>
              Motivated by this incident and armed with my passion for
              development, I set out to create a comprehensive web app that
              would revolutionize their payment processes. Through the strategic
              integration of various technologies, I was able to build a
              seamless solution that tackled the existing flaws and introduced
              innovative features for a better customer experience.
            </div>
            <br />
            <div>
              The web app was built using AWS Amplify, which seamlessly paired
              with AWS Cognito to provide a secure and user-friendly login
              system. This allowed each user to have their own account, ensuring
              privacy and access control. To handle the storage and management
              of customer data, I utilized AWS DynamoDB, a secure database that
              stored information such as balances and transaction records.
            </div>
            <br />
            <div>
              One of the key challenges I aimed to solve was the time-consuming
              process of searching for customer information and manually
              managing balances. To streamline this, I integrated Twilio's SMS
              functionality through AWS Lambda. When customers registered, the
              web app automatically sent them a text message containing a unique
              QR code ID. This QR code could be conveniently scanned to
              instantly retrieve the customer's information and balances,
              eliminating the need for manual entry and reducing the potential
              for errors. This not only made transactions faster but also
              enhanced security by ensuring that each transaction was associated
              with the correct customer's account, minimizing the risk of using
              someone else's balance.
            </div>
            <br />
            <div>
              By leveraging these technologies, the web app offered a range of
              benefits. It significantly improved the speed and efficiency of
              transactions, making the payment process much smoother for both
              customers and store staff. Additionally, the web app utilized the
              transaction data to generate valuable insights through a
              comprehensive dashboard. This dashboard provided businesses with
              essential information such as daily/monthly water and ice
              consumption, the number of customers holding water or ice
              balances, and graphical representations of product sales over
              different time periods. These insights empowered businesses to
              make informed decisions and optimize their operations effectively.
              Moreover, these solutions were highly cost-effective, requiring
              minimal financial investment while delivering maximum value.
            </div>
            <br />
            <div>
              In conclusion, the web app I developed utilizing AWS Amplify,
              Cognito, DynamoDB, and Twilio's SMS functionality has transformed
              prepaid balance management for water and ice stores. By addressing
              the flaws of traditional systems and introducing innovative
              features, it has created a seamless and secure payment experience.
              With this solution, water and ice stores can now provide faster
              transactions, reduce operational costs, and enhance customer
              satisfaction.
            </div>
          </div>
          <br />
          <div>
            <div className="bold">Conclusion:</div>
            <div>
              The journey from being a loyal customer of water and ice stores to
              identifying the flaws in their prepaid balance management systems
              has led me to embark on an exciting development project. By
              addressing the challenges faced by these businesses, I streamline
              their payment processes and enhance their overall efficiency. With
              the power of technology and my dedication, I had a lot of fun
              creating a web app that ensures secure and seamless prepaid
              balance management, transforming the operations of water and ice
              stores for the better.
            </div>
          </div>
          <br />
        </div>
        <div
          className="readMoreButton"
          onClick={() => (expanded ? setExpanded(false) : setExpanded(true))}
        >
          {expanded ? "read less" : "read more"}
        </div>
        <Likes onComment={onComment} />
      </div>
    </div>
  );
};

export default HydrocardStory;
