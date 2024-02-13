import Link from 'next/link';
import styles from './Header.module.scss';
import MobileMenu from './MobileMenu/MobileMenu';
import Menu from './Menu/Menu';
import logo from '@static/images/logos/logo.svg';
import Image from 'next/image';

const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <nav className={styles.nav}>
        <Link href="/">
          <div className={styles.logo}>
            <Image
              src={logo}
              alt="PR Engineering Logo"
              width={28}
              height={28}
            />
            <p>Engineering<sup>™</sup></p>
          </div>
        </Link>
        <Menu />
        <MobileMenu />
      </nav>
    </div>
  </header>
);

export default Header;
