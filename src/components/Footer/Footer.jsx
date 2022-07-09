import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div>
         <div className={styles.network}>
        <h5>facebook</h5>
        <h5>GitHub</h5>
        <h5>Twitter</h5>
        <h5>LinkIn</h5>
      </div>
      <p className="footer"><small>Dogo Empire &copy; 2022</small></p>
    </div>
  )
}

export default Footer