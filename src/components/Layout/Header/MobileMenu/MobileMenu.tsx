'use client';

import { useRef } from 'react';
import Menu from '../Menu/Menu';
import styles from './MobileMenu.module.scss';
import Icon from '@components/UI/Icon/Icon';

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
      <Icon name="menu" onClick={toggleNav} />
      <div className={styles.overlay}>
        <Icon name="close" onClick={toggleNav} />
        <Menu mobileNavToggle={toggleNav} />
        <div className={styles.social}>
          <a href="https://www.instagram.com/prengineering/?hl=en" target="blank">
            <Icon name="instagram" size={20} />
          </a>
          <a href="https://www.linkedin.com/company/pr-engineering-africa/" target="blank">
            <Icon name="linkedin" size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MobileNav;
