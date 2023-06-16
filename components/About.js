import styles from '../styles/About.module.css';
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.h2}>About Me</h2>
      <div className={styles.flexAbout}>
        <div className={styles.aboutText}>
          <p className={styles.p}>
            As a developer,
            I am passionate about creating elegant and effective solutions to complex problems. With a focus on web technologies such as HTML, CSS, and JavaScript, 
            I have developed a strong foundation in both front-end and back-end development. I continuously strive to optimize performance, improve user experience, 
            and strive to ensure the highest level of quality.
          </p>
          <p className={styles.p}>Throughout my journey, I've tackled a wide array of projects, spanning from basic websites to intricate applications. 
            I possess extensive expertise in diverse development tools and frameworks, encompassing React, Express, Node.js, MongoDB, React Native, and Expo.
            I am always eager to learn and explore new technologies, constantly seeking opportunities to enhance my skills and broaden my knowledge.
          </p>
          <p className={styles.p}>
            Having recently shifted to a developer role, I bring a distinct combination of business acumen and technical proficiency. 
            I utilize my business background to comprehend client needs, devise efficient solutions, and deliver projects that align with both technical and business goals. 
            I am dedicated to ongoing growth and eagerly embrace new challenges in the dynamic field of web development.
          </p>
        </div>
        <div className={styles.aboutImg}>
          <Image src='/about.jpg' className={styles.image} width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;