import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <hr className={styles.hr} />
      <div className={styles.footerContainer}>
        <p className={styles.paragraph}>
          © {new Date().getFullYear()} Cecile's Portfolio
        </p>
        <div className={styles.socialIcons}>
          <a
            className={styles.link}
            href="https://github.com/cecileliao"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/cecile-liao-bui/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;