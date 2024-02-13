'use client';

import Link from 'next/link';
import styles from './Menu.module.scss';
import { usePathname } from 'next/navigation';

const Menu: React.FC<{ mobileNavToggle?: () => void }> = ({ mobileNavToggle }) => {
  const pathname = usePathname();

  return (
    <ul className={styles.Menu}>
      {mobileNavToggle ?
        <li
          className={pathname == '/' ? styles.active : ''}
          onClick={mobileNavToggle}
        >
          <Link href="/">
            Home
          </Link>
        </li>
        : null}
      <li
        className={pathname == '/about' ? styles.active : ''}
        onClick={mobileNavToggle ? mobileNavToggle : undefined}
      >
        <Link href="/about">
          About
        </Link>
      </li>
      <li
        className={pathname == '/services' ? styles.active : ''}
        onClick={mobileNavToggle ? mobileNavToggle : undefined}
      >
        <Link href="/services">
          Services
        </Link>
      </li>
      <li
        className={pathname == '/projects' ? styles.active : ''}
        onClick={mobileNavToggle ? mobileNavToggle : undefined}
      >
        <Link href="/projects">
          Projects
        </Link>
      </li>
      <li
        className={pathname == '/contact' ? styles.active : ''}
        onClick={mobileNavToggle ? mobileNavToggle : undefined}
      >
        <Link href="/contact">
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default Menu;
