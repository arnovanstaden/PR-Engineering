import Link from "next/link";
import { useRouter } from 'next/router'

// Styles
import styles from "./header.module.scss";

export default function Header() {
    const router = useRouter()

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
                </nav>
            </div>
        </header>
    )
}
