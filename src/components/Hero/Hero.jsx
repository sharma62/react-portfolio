import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Suraj</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1 years of experience using
          <span className={styles.MERN}>
            <span className={styles.mongodb}> M</span>
            <span className={styles.express}> E</span>
            <span className={styles.react}> R</span>
            <span className={styles.node}> N </span>
          </span>
          . Reach out if you'd like to learn more!
        </p>
        <div className={styles.flexStyle}>
          <a href="mailto:surrjkumarsharma62@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href={getImageUrl("cv/Resume_suraj.pdf")} download className={styles.cvDownload}>cv</a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
