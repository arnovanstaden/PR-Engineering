'use client';

import { useRef, useState } from 'react';
import Menu from '../Menu/Menu';
import styles from './MobileMenu.module.scss';
import Icon from '@components/UI/Icon/Icon';
import classNames from 'classnames';

const MobileNav = () => {
  const navRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen((prev) => {
      const body = document.body
      if (prev === false) {
        body.classList.add('noscroll');
      } else {
        body.classList.remove('noscroll');
      }
      return !prev;
    })
  }

  const classes = classNames(
    styles.MobileMenu,
    open && styles.open
  )

  return (
    <div className={classes} ref={navRef}>
      <Icon name="menu" onClick={toggleNav} className={styles.menuIcon} size={24} />
      <div className={styles.drawer}>
        <Icon name="close" onClick={toggleNav} className={styles.closeButton} size={24} />
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
