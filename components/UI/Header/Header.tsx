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
    const Menu = () => {
        return (
            <ul className={styles.menu}>
                <li className={router.pathname == "/about" ? styles.active : ""}>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li className={router.pathname == "/services" ? styles.active : ""}>
                    <Link href="/services">
                        Services
                    </Link>
                </li>
                <li className={router.pathname == "/projects" ? styles.active : ""}>
                    <Link href="/projects">
                        Projects
                    </Link>
                </li>
                <li className={router.pathname == "/contact" ? styles.active : ""}>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        )
    }

    const MobileNav = () => {
        return (
            <p>|||</p>
        )
    }

    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    <Link href="/">
                        <div className={styles.logo}>
                            <img src="/images/logos/logo.svg" alt="PR Engineering Logo" />
                            <p>Engineering</p>
                        </div>
                    </Link>
                    {isMobile ? <MobileNav /> : <Menu />}
                </nav>
            </div>
        </header>
    )
}
