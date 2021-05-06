import Link from "next/link";
import { useRouter } from 'next/router'

// Styles
import styles from "./footer.module.scss";

// Icons
// import RoomIcon from '@material-ui/icons/Room';
// import MailIcon from '@material-ui/icons/Mail';
// import PhoneIcon from '@material-ui/icons/Phone';

export default function Footer() {
    const router = useRouter()

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={`${styles.grid} ${styles.content}`}>
                    <Link href="/">
                        <a className={styles.logo}>
                            <img src="/images/logos/logo-white-text.svg" alt="PR Engineering Logo" />
                        </a>
                    </Link>
                    <div>
                        <ul className={`${styles.nav} ${styles.list}`}>
                            <li className={router.pathname == "/" ? styles.active : ""}>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li className={router.pathname == "/about" ? styles.active : ""}>
                                <Link href="/about">
                                    <a>About</a>
                                </Link>
                            </li>
                            <li className={router.pathname == "/services" ? styles.active : ""}>
                                <Link href="/services">
                                    <a>Services</a>
                                </Link>
                            </li>
                            <li className={router.pathname == "/projects" ? styles.active : ""}>
                                <Link href="/projects">
                                    <a>Projects</a>
                                </Link>
                            </li>
                            <li className={router.pathname == "/contact" ? styles.active : ""}>
                                <Link href="/contact">
                                    <a>Contact</a>
                                </Link>
                            </li>
                        </ul>
                        <ul className={`${styles.contact} ${styles.list}`}>
                            <li>
                                <a href="https://g.page/Fire-Engineers?share" target="blank">
                                    {/* <RoomIcon /> */}
                                    Stellenbosch, Western Cape
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@engpr.com">
                                    {/* <MailIcon /> */}
                                        info@engpr.com
                                    </a>
                            </li>
                            <li>
                                <a href="tel:0210125393">
                                    {/* <PhoneIcon /> */}
                                    021 012 5393
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`${styles.grid} ${styles.bottom}`}>
                    <div className={styles.social}>
                        <a href="https://www.linkedin.com/company/pr-engineering-africa/" target="blank">
                            <i className="icon-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/prengineering/?hl=en" target="blank">
                            <i className="icon-instagram"></i>
                        </a>
                    </div>
                    <p>© 2020 - PR Engineering (PTY) LTD.</p>
                    <p>Design &amp; Development by <a target="blank" href="https://webdacity.dev">Webdacity</a></p>
                </div>
            </div>
        </footer>
    )
}
