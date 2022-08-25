import React from "react";
import styles from "../styles/components/Personality.module.css";
import HoverVideoPlayer from "react-hover-video-player";
import Image from "next/image";

const Personality = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstCard}>
        <HoverVideoPlayer
          videoSrc="/vid/test.mp4"
          pausedOverlay={
            <Image
              src="/vid/thumbnail/test.jpg"
              alt=""
              width="135px"
              height="240px"
              style={{
                // Make the image expand to cover the video's dimensions
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          }
          loadingOverlay={
            <div className="loading-overlay">
              <div className="loading-spinner" />
            </div>
          }
        />
      </div>
      <div className={styles.card}>
        <HoverVideoPlayer
          videoSrc="/vid/paddleboarding.mp4"
          pausedOverlay={
            <Image
              src="/vid/thumbnail/paddleboarding.jpg"
              alt=""
              width="135px"
              height="240px"
              style={{
                // Make the image expand to cover the video's dimensions
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          }
          loadingOverlay={
            <div className="loading-overlay">
              <div className="loading-spinner" />
            </div>
          }
        />
      </div>
      <div className={styles.card}>
        <HoverVideoPlayer
          videoSrc="/vid/walkWithAhri.mp4"
          pausedOverlay={
            <Image
              src="/vid/thumbnail/walkWithAhri.jpg"
              alt=""
              width="135px"
              height="240px"
              style={{
                // Make the image expand to cover the video's dimensions
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          }
          loadingOverlay={
            <div className="loading-overlay">
              <div className="loading-spinner" />
            </div>
          }
        />
      </div>
      <div className={styles.card}>
        <HoverVideoPlayer
          videoSrc="/vid/antelopeCanyon.mp4"
          pausedOverlay={
            <Image
              src="/vid/thumbnail/antelopeCanyon.jpg"
              alt=""
              width="135px"
              height="240px"
              style={{
                // Make the image expand to cover the video's dimensions
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          }
          loadingOverlay={
            <div className="loading-overlay">
              <div className="loading-spinner" />
            </div>
          }
        />
      </div>
      <div className={styles.card}>
        <HoverVideoPlayer
          videoSrc="/vid/snowyRoad.mp4"
          pausedOverlay={
            <Image
              src="/vid/thumbnail/snowyRoad.jpg"
              alt=""
              width="135px"
              height="240px"
              style={{
                // Make the image expand to cover the video's dimensions
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          }
          loadingOverlay={
            <div className="loading-overlay">
              <div className="loading-spinner" />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Personality;
