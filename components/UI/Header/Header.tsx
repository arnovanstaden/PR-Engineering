import { useRef } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive'

// Styles
import styles from "./header.module.scss";

export default function Header() {

    // Config
    const router = useRouter();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    // Subcomponents
    const Menu = ({ mobileNavToggle }: {
        mobileNavToggle?: () => void
    }) => {
        return (
            <ul className={styles.menu}>
                {mobileNavToggle ?
                    <li
                        className={router.pathname == "/" ? styles.active : ""}
                        onClick={mobileNavToggle}
                    >
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    : null}
                <li
                    className={router.pathname == "/about" ? styles.active : ""}
                    onClick={mobileNavToggle ? mobileNavToggle : null}
                >
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li
                    className={router.pathname == "/services" ? styles.active : ""}
                    onClick={mobileNavToggle ? mobileNavToggle : null}
                >
                    <Link href="/services">
                        Services
                    </Link>
                </li>
                <li
                    className={router.pathname == "/projects" ? styles.active : ""}
                    onClick={mobileNavToggle ? mobileNavToggle : null}
                >
                    <Link href="/projects">
                        Projects
                    </Link>
                </li>
                <li
                    className={router.pathname == "/contact" ? styles.active : ""}
                    onClick={mobileNavToggle ? mobileNavToggle : null}
                >
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        )
    }

    const MobileNav = () => {
        const navRef = useRef();

        const toggleNav = () => {
            const nav = navRef.current as HTMLElement;
            const body = document.body
            if (nav) {
                nav.classList.toggle(styles.open);
                body.classList.toggle("noscroll")
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

    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    <Link href="/">
                        <div className={styles.logo}>
                            <img src="/images/logos/logo.svg" alt="PR Engineering Logo" />
                            <p>Engineering<sup>™</sup></p>
                        </div>
                    </Link>
                    {isMobile ? <MobileNav /> : <Menu />}
                </nav>
            </div>
        </header>
    )
}
