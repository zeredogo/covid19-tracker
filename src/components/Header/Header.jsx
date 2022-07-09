import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header.container}>
      <h1 className={styles.logo}>DogoEmpire</h1>
    </div>
  )
}

export default Header;