import React, { useRef } from "react";
import Head from "next/head";
import About from "../components/About";
import Blog from "../components/Blog";
import Experiences from "../components/Experiences";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Education from "../components/Education";
import styles from "../styles/Home.module.css";
import Cards from "../components/Cards";

const HomePage = ({section1Ref, section2Ref, section3Ref, section4Ref, onComment}) => {

  return (
      <div className={styles.container}>
        <Head>
          <title>Hwanjin Lee</title>
          <meta name="Hwanjin Lee" content="Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="section" ref={section1Ref} id="section1">
          <Cards/>
          <Intro/>
        </div>
        <div className="section" ref={section2Ref} id="section2">
          <About onComment={onComment}/>
          {/* <Skills/> */}
          <Education onComment={onComment}/>
        </div>
        <div className="section" ref={section3Ref} id="section3">
          <Experiences onComment={onComment}/>
        </div>
        <div className="section" ref={section4Ref} id="section4">
          <Blog/>
        </div>
      </div>
  );
};

export default HomePage;
