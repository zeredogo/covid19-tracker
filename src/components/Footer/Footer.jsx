import React from 'react';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div>
         <div className={styles.network}>
        <h5><FontAwesomeIcon icon="fa-brands fa-github" /></h5>
        <h5><FontAwesomeIcon icon="fa-brands fa-twitter" /></h5>
        <h5><FontAwesomeIcon icon="fa-brands fa-linkedin" /></h5>
      </div>
      <p className="footer"><small>Dogo Empire &copy; 2022</small></p>
    </div>
  )
}

export default Footer