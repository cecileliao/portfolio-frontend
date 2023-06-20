import React from 'react';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';
import { projectData } from './Data';

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
                <a href={project.gitHubLinkFront}>Front: <i className={`fa-brands fa-github ${styles.githubIcon}`}></i></a>
                <a href={project.gitHubLinkBack}>Back: <i className={`fa-brands fa-github ${styles.githubIcon}`}></i></a>
              </div>
            </div>
            <a href={project.vercelLink}><h3 className={styles.h3}>{project.title}</h3></a>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                <p className={styles.p}>{project.description}</p>
                </div>
                <div className={styles.flipCardBack}>
                  {project.flipVideo ? (
                    <video className={styles.video} controls>
                      <source src={project.flipVideo} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={project.flipImage}
                      alt={project.flipAlt}
                      style={{backgroundSize: 'contain'}}
                      width={380}
                      height={200}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
