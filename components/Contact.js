import styles from '../styles/Contact.module.css';

const Contact = () => {
    return (
      <div className={styles.contactContainer}>
        <h2>Get In Touch</h2>
        <p>If you are interested in work with me, have any inquiries, feel free to contact me. My inbox is always open, and I am available to address your questions or discuss potential collaborations. Even if it's just a friendly greeting, I will make every effort to respond to you promptly. Cheers!</p>
        <a href="mailto:liao.cec@gmail.com" className={styles.ctaBtn}>Say Hello</a>
      </div>
    )
  }
  
  export default Contact;