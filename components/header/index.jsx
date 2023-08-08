
import Link from 'next/link';
import React from 'react';
import {FaPlayCircle} from 'react-icons/fa';
import Nav from '@/components/nav/index';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logo}>
          <FaPlayCircle /> NETFILMS 
        </Link>
        <Nav />
      </div>
    </header>
  )
}

export default Header