'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import logo from '@static/images/logos/logo-white-text.png';
import styles from './footer.module.scss';
import Image from 'next/image';
import Container from '@components/UI/Container/Container';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={`${styles.grid} ${styles.content}`}>
          <Link href="/" className={styles.logo}>
            <Image
              src={logo}
              alt="PR Engineering Logo"
              width={96}
              height={96}
            />
          </Link>
          <div className={styles.top}>
            <ul className={`${styles.nav} ${styles.list}`}>
              <li className={pathname == '/' ? styles.active : ''}>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li className={pathname == '/about' ? styles.active : ''}>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li className={pathname == '/services' ? styles.active : ''}>
                <Link href="/services">
                  Services
                </Link>
              </li>
              <li className={pathname == '/projects' ? styles.active : ''}>
                <Link href="/projects">
                  Projects
                </Link>
              </li>
              <li className={pathname == '/contact' ? styles.active : ''}>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className={`${styles.contact} ${styles.list}`}>
              <li>
                <i className="icon-room"></i>
                <a href="https://g.page/Fire-Engineers?share" target="blank">
                  Stellenbosch, Western Cape
                </a>
              </li>
              <li>
                <i className="icon-email"></i>
                <a href="mailto:info@engpr.com">
                  info@engpr.com
                </a>
              </li>
              <li>
                <i className="icon-phone"></i>
                <a href="tel:0210125393">
                  021 012 5393
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.grid} ${styles.bottom}`}>
          <div className={styles.social}>
            <a href="https://www.instagram.com/prengineering/?hl=en" target="blank">
              <i className="icon-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/pr-engineering-africa/" target="blank">
              <i className="icon-linkedin"></i>
            </a>
          </div>
          <p>© {currentYear} - PR Engineering Africa (PTY) LTD.</p>
          <p>Design &amp; Development by <a target="blank" href="https://webdacity.dev">Webdacity</a></p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;
