'use client';

import { useRef } from 'react';
import Menu from '../Menu/Menu';
import styles from './MobileMenu.module.scss';

const MobileNav = () => {
  const navRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const toggleNav = () => {
    const nav = navRef.current;
    const body = document.body
    if (nav) {
      nav.classList.toggle(styles.open);
      body.classList.toggle('noscroll')
    }
  }

  return (
    <div className={styles.mobileNav} ref={navRef}>
      <i className="icon-menu" onClick={toggleNav}></i>
      <div className={styles.overlay}>
        <i className="icon-close" onClick={toggleNav}></i>
        <Menu mobileNavToggle={toggleNav} />
        <div className={styles.social}>
          <a href="https://www.instagram.com/prengineering/?hl=en" target="blank">
            <i className="icon-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/pr-engineering-africa/" target="blank">
            <i className="icon-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MobileNav;
