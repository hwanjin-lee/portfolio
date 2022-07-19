import React from "react";
import Ellipsis from "./tools/Ellipsis";
import Image from "next/image";
import UsedStacks from "./reusable/UsedStacks";
import styles from "../styles/components/Experiences.module.css";
import Likes from "./reusable/Likes";

const Experiences = ({ onComment }) => {
  return (
    <div className="boxManualPadding">
      <div id="work"></div>
      <div className="headerPadding">
        <div className="boxHeader">
          <div className="boxFlex">
            <div className="boxHeaderImg">
              <Image src="/logos/react.png" alt="" width="36px" height="36px" />
            </div>
            <div className="boxHeaderTitle">
              <div className="boxPrimary">Hannah Permanent Makeup</div>
              <div className="boxSecondary">
                Project: Server side web application
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
          This full stack project was created with small business owner in mind
          and wanted to take on a challenge to make a web application where the
          owner can edit and manage customers database and scheduling easily
          with admin dashboard.
        </div>
        <div></div>
        <ul>
          <li>
            Services, store contacts, and opening hours are editable and gets
            updated through cloud database.
          </li>
          <li>
            All customer details are easily searchable with past history and can
            be sorted for upcoming appointments.
          </li>
          <li>
            Weekly schedule is shown with color code based off of service types
            and client info.
          </li>
          <li>
            Fully responsive Design for Desktop, tablet, and cell for seemless
            user experience.
          </li>
        </ul>
      </div>
      <div className="boxPicture">
        <div className={styles.picture}>picture 1</div>
        <div className={styles.picture}>picture 1</div>
        <div className={styles.picture}>picture 1</div>
        <div className={styles.picture}>picture 1</div>
        <div className={styles.picture}>picture 1</div>
      </div>
      <div className="descPadding">
        <hr />
        <div className={styles.usedStacks}>
          <UsedStacks title={"html"} />
          <UsedStacks title={"css"} />
          <UsedStacks title={"javascript"} />
          <UsedStacks title={"next.js"} />
          <UsedStacks title={"mongoDB"} />
        </div>
      </div>
      <div className="footerPadding">
        <Likes onComment={onComment} />
      </div>
    </div>
  );
};

export default Experiences;
