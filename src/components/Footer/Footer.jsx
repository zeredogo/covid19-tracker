import React from 'react';
import {FaGithub, FaTwitter, FaLinkedin} from  'react-icons/fa';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div>
      <div className={styles.network}>
        <button><a href='https://github.com/zeredogo'><FaGithub/></a></button>
        <a href='https://twitter.com/dogoempire1'><FaTwitter/></a>
        <a href='https://www.linkedin.com/in/paul-dogo-b70910211/'><FaLinkedin/></a>
      </div>
      <p className={styles.footer}><small>Krypto Zone &copy; 2022</small></p>
    </div>
  )
}

export default Footer