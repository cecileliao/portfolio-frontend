import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {

  const handleDownload = () => {
    const downloadUrl = '/resume.pdf'; // Chemin vers votre fichier de téléchargement

    // Créez un élément <a> avec l'URL de téléchargement
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'resume.pdf'; // Nom du fichier à télécharger
    link.click();
  };

  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="/">
            Cécile's Portfolio
          </Link>
        </div>
        <div className={styles.menu}>
          <a href="#about" className={styles.link}>
            About me
          </a>
          <a href="#skills" className={styles.link}>
            Skills
          </a>
          <a href="#projects" className={styles.link}>
            Projects
          </a>
          <a href="#contact" className={styles.link}>
            Get in touch
          </a>
        </div>
        <button className={styles.ctaBtn} onClick={handleDownload}>
          Resume
        </button>
      </div>
      <hr className={styles.hr} />
    </>
  )
}

export default Navbar;
