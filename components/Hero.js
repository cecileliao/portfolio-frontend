import React from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Image src="/profile.jpg" className={styles.profileImg} width={300} height={300} alt="Cecile's personal headshot" />
      <div className={styles.heroText}>
        <h1 className={styles.h1}>Hey, I'm Cécile 👋</h1>
        <p className={styles.p}>
          I'm a Full Stack web developer based in Quebec, Canada. I specialize in building websites and applications in JavaScript and React.
        </p>
        <div className={styles.socialIcons}>
          <a
            className={styles.a}
            href="https://github.com/cecileliao"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className={styles.a}
            href="https://www.linkedin.com/in/cecile-liao-bui/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fa-brands fa-linkedin ${styles.i}`}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;