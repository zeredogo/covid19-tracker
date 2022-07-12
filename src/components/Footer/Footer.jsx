import React from 'react';
import {FaGithub, FaTwitter, FaLinkedin} from  'react-icons/fa';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <h5>CONNECT WITH US:</h5>
      <div className={styles.network}>
        <a href='https://github.com/zeredogo'><FaGithub/></a>
        <a href='https://twitter.com/dogoempire1'><FaTwitter/></a>
        <a href='https://www.linkedin.com/in/paul-dogo-b70910211/'><FaLinkedin/></a>
      </div>
      <p className={styles.footer}><small>Krypto Zone &copy; 2022</small></p>
    </div>
  )
}

export default Footer