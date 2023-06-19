import React, { useEffect, useState } from "react";
import styles from "../styles/components/ScrollHighlightNabbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHandPointUp as farHouse,
  faUser as farUser,
  faFloppyDisk as farFloppyDisk,
  faNewspaper as farNewsPaper,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHouse as fasHouse,
  faUser as fasUser,
  faFloppyDisk as fasFloppyDisk,
  faNewspaper as fasNewsPaper,
} from "@fortawesome/free-solid-svg-icons";

/**
 * @param {number} currentPosition Current Scroll position
 * @param {Array} sectionPositionArray Array of positions of all sections
 * @param {number} startIndex Start index of array
 * @param {number} endIndex End index of array
 * @return {number} Current Active index
 */

const nearestIndex = (
  currentPosition,
  sectionPositionArray,
  startIndex,
  endIndex
) => {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sectionPositionArray[startIndex].headerRef.current.offsetTop -
          currentPosition
      ) <
      Math.abs(
        sectionPositionArray[endIndex].headerRef.current.offsetTop -
          currentPosition
      )
    )
      return startIndex;
    else return endIndex;
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs(
      sectionPositionArray[nextNearest].headerRef.current.offsetTop -
        currentPosition
    );
    var b = Math.abs(
      sectionPositionArray[nextNearest + 1].headerRef.current.offsetTop -
        currentPosition
    );
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      );
    }
  }
};

const ScrollHighlightNabbar = ({ navHeader }) => {
  library.add(farUser);
  // library.add(farHouse);
  library.add(farFloppyDisk);
  library.add(fasHouse);
  library.add(fasUser);
  library.add(fasFloppyDisk);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handleScroll = (e) => {
      var index = nearestIndex(
        window.scrollY,
        navHeader,
        0,
        navHeader.length - 1
      );
      setActiveIndex(index);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(activeIndex);

  return (
    <div className={styles.container}>
      {/* section start =============================== */}
      <div className={styles.section}>
        <a
          href={`#${navHeader[0].headerID}`}
          style={{
            color: activeIndex === 0 ? "white" : "var(--color-navIcon)",
          }}
          className={styles.anchor}
        >
          <div className={styles.navButton}>
            <FontAwesomeIcon
              icon={activeIndex === 0 ? fasHouse : farHouse}
              className={styles.icon}
            />
            <div className={styles.navtitle}>{navHeader[0].headerTitle}</div>
          </div>
        </a>
        <div
          className={styles.underline}
          style={{
            background: activeIndex === 0 ? "white" : "var(--color-primary)",
          }}
        ></div>
      </div>
      {/* section start =============================== */}
      <div className={styles.section}>
        <a
          href={`#${navHeader[1].headerID}`}
          style={{
            color: activeIndex === 1 ? "white" : "var(--color-navIcon)",
          }}
          className={styles.anchor}
        >
          <div className={styles.navButton}>
            <FontAwesomeIcon
              icon={activeIndex === 1 ? fasFloppyDisk : farFloppyDisk}
              className={styles.icon}
            />
            <div className={styles.navtitle}>{navHeader[1].headerTitle}</div>
          </div>
        </a>
        <div
          className={styles.underline}
          style={{
            background: activeIndex === 1 ? "white" : "var(--color-primary)",
          }}
        ></div>
      </div>
      {/* section start =============================== */}
      <div className={styles.section}>
        <a
          href={`#${navHeader[2].headerID}`}
          style={{
            color: activeIndex === 2 ? "white" : "var(--color-navIcon)",
          }}
          className={styles.anchor}
        >
          <div className={styles.navButton}>
            <FontAwesomeIcon
              icon={activeIndex === 2 ? fasUser : farUser}
              className={styles.icon}
            />
            <div className={styles.navtitle}>{navHeader[2].headerTitle}</div>
          </div>
        </a>
        <div
          className={styles.underline}
          style={{
            background: activeIndex === 2 ? "white" : "var(--color-primary)",
          }}
        ></div>
      </div>
      {/* section start =============================== */}
      <div className={styles.section}>
        <a
          href={`#${navHeader[3].headerID}`}
          style={{
            color: activeIndex === 3 ? "white" : "var(--color-navIcon)",
          }}
          className={styles.anchor}
        >
          <div className={styles.navButton}>
            <FontAwesomeIcon
              icon={activeIndex === 3 ? fasNewsPaper : farNewsPaper}
              className={styles.icon}
            />
            <div className={styles.navtitle}>{navHeader[3].headerTitle}</div>
          </div>
        </a>
        <div
          className={styles.underline}
          style={{
            background: activeIndex === 3 ? "white" : "var(--color-primary)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollHighlightNabbar;
