import React from "react";
import styles from "../styles/components/Cards.module.css";
import Image from "next/image";

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className="card">
        <div className={styles.cardContent}>
          <div>circle</div>
          <div>Name Name</div>
        </div>
        <div className={styles.img}>
          <Image src="/img/hello.jpg" alt="" width="130px" height="230px" />
        </div>
      </div>{" "}
      <div className="card">
        <div className={styles.cardContent}>
          <div>circle</div>
          <div>Name Name</div>
        </div>
        <div className={styles.img}>
          <Image src="/img/hello.jpg" alt="" width="130px" height="230px" />
        </div>
      </div>{" "}
      <div className="card">
        <div className={styles.cardContent}>
          <div>circle</div>
          <div>Name Name</div>
        </div>
        <div className={styles.img}>
          <Image src="/img/hello.jpg" alt="" width="130px" height="230px" />
        </div>
      </div>{" "}
      <div className="card">
        <div className={styles.cardContent}>
          <div>circle</div>
          <div>Name Name</div>
        </div>
        <div className={styles.img}>
          <Image src="/img/hello.jpg" alt="" width="130px" height="230px" />
        </div>
      </div>{" "}
      <div className="card">
        <div className={styles.cardContent}>
          <div>circle</div>
          <div>Name Name</div>
        </div>
        <div className={styles.img}>
          <Image src="/img/hello.jpg" alt="" width="130px" height="230px" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
