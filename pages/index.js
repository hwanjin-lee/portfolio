import React, { useRef } from "react";
import Head from "next/head";
import About from "../components/About";
import Blog from "../components/Blog";
import Experiences from "../components/Experiences";
import Intro from "../components/Intro";
import Education from "../components/Education";
import styles from "../styles/Home.module.css";
import LanguagesMobile from '../components/LanguagesMobile';
import ProfileMobile from "../components/ProfileMobile";
import Personality from "../components/Personality";

const HomePage = ({section1Ref, section2Ref, section3Ref, section4Ref, onComment}) => {

  return (
      <div className={styles.container}>
        <Head>
          <title>Hwanjin Lee</title>
          <meta name="Hwanjin Lee" content="Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="section" ref={section1Ref} id="home">
          <ProfileMobile/>
          <Personality/>
          <Intro/>
        </div>
        <div className="section" ref={section2Ref} id="work">
          <Experiences onComment={onComment}/>
        </div>
        <div className="section" ref={section3Ref} id="about">
          <About onComment={onComment}/>
          {/* <LanguagesMobile onComment={onComment}/> */}
          <Education onComment={onComment}/>
        </div>
        <div className="section" ref={section4Ref} id="blog">
          <Blog/>
        </div>
      </div>
  );
};

export default HomePage;
