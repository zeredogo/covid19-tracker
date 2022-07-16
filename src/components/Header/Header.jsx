import React from 'react';
import styles from './header.module.css';
import zone from './image/kryptozone.jpeg';
const Header = () => {
  return (
    <div className={styles.header.container}>
      <img src={zone} className={styles.zone} alt='KryptoZone-covid19'/>
    </div>
  )
}

export default Header;