import Link from 'next/link';
import styles from './Header.module.scss';
import MobileMenu from './MobileMenu/MobileMenu';
import Menu from './Menu/Menu';
import logo from '@static/images/logos/logo.svg';
import Image from 'next/image';
import Container from '@components/UI/Container/Container';

const Header = () => (
  <header className={styles.header}>
    <Container>
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
        <div className={styles.desktopNav}>
          <Menu />
        </div>
        <MobileMenu />
      </nav>
    </Container>
  </header>
);

export default Header;
