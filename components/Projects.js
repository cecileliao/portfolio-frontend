import styles from '../styles/Projects.module.css';
import { projectData } from './data.js';

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <h2>Projects</h2>
      <div className={styles.projectsGrid}>
        {projectData && projectData.map((project) => (
          <div className={styles.projectCard} key={project.id}>
            <div className={styles.projectHeader}>
              <i className={`fa-regular fa-folder-open ${styles.folderIcon}`}></i>
              <div className={styles.smallIcons}>
                <a href={project.gitHubLink}>Front: <i className={`fa-brands fa-github ${styles.githubIcon}`}></i></a>
              </div>
            </div>
            <h3 className={styles.h3}>{project.title}</h3>
            <p className={styles.p}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
