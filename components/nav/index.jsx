
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

const Nav = () => {
  return (
    <nav className={styles.navigationMenu}>
      <Link href="/">Movies</Link>
      <Link href="/">Series</Link>
      <Link href="/">Kids</Link>
    </nav>
  )  
}

export default Nav
