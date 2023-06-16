import styles from '../styles/Skills.module.css';

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.h2}>Skills</h2>
      <div className={styles.gridSkills}>
        <div className={`${styles.skillCard} ${styles.html}`}>
          <i className={`fa-brands fa-html5 ${styles.i}`}></i>
          HTML
        </div>
        <div className={`${styles.skillCard} ${styles.css}`}>
          <i className={`fa-brands fa-css3-alt ${styles.i}`}></i>
          CSS
        </div>
        <div className={`${styles.skillCard} ${styles.js}`}>
          <i className={`fa-brands fa-js ${styles.i}`}></i>
          JavaScript
        </div>
        <div className={`${styles.skillCard} ${styles.react}`}>
          <i className={`fa-brands fa-react ${styles.i}`}></i>
          React
        </div>
        <div className={`${styles.skillCard} ${styles.node}`}>
          <i className={`fa-brands fa-node-js ${styles.i}`}></i>
          Node.js
        </div>
        <div className={`${styles.skillCard} ${styles.figma}`}>
          <i className={`fa-brands fa-figma ${styles.i}`}></i>
          Figma
        </div>
      </div>
    </div>
  );
}

export default Skills;