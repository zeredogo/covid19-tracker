import React from 'react';
import {FaGithub, FaTwitter, FaLinkedin} from  'react-icons/fa';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <h5>CONNECT WITH US:</h5>
      <div className={styles.network}>
        <a href='https://github.com/zeredogo' className={styles.link}><FaGithub/></a>
        <a href='https://twitter.com/dogoempire1' className={styles.link}><FaTwitter/></a>
        <a href='https://www.linkedin.com/in/paul-dogo-b70910211/' className={styles.link}><FaLinkedin/></a>
      </div>
      <p className={styles.footer}><small>Krypto Zone &copy; 2022 All right reserve.</small></p>
    </div>
  )
}

export default Footer