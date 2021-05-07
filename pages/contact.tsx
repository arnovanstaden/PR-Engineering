import Page from "../components/UI/Page/Page";
import Button from "../components/UI/Library/Button/Button";

// Styles
import styles from "../styles/pages/contact.module.scss";

const Contact = () => {
    return (
        <Page
            head={{
                title: "Contact | PR Engineering",
                description: "FIX THIS",
                canonical: "/contact",
            }}
            className={styles.contact}
        >
            <section>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.details}>
                            <h1>Get in Touch</h1>
                            <p>For more information on our services, please contact us and experience the value we can add.</p>
                            <ul className={styles.links}>
                                <li>
                                    <i className="icon-phone"></i>
                                    <a href="tel:0210125393">
                                        021 012 5393
                                </a>
                                </li>
                                <li>
                                    <i className="icon-email"></i>
                                    <a href="mailto:info@engpr.com">
                                        info@engpr.com
                                    </a>
                                </li>
                                <li>
                                    <i className="icon-room"></i>
                                    <a href="https://g.page/Fire-Engineers?share" target="blank">
                                        Building A2, Devonbosch, <br />
                                            Bottelary Rd, Stellenbosch, 7600
                                </a>
                                </li>
                            </ul>
                            <div className={styles.social}>
                                <a href="https://www.instagram.com/prengineering/?hl=en" target="blank">
                                    <i className="icon-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/pr-engineering-africa/" target="blank">
                                    <i className="icon-linkedin"></i>
                                </a>
                            </div>
                        </div>
                        <div className={styles.form}>
                            <h1>Send us a Message</h1>
                            <form>
                                <div className={styles.group}>
                                    <label htmlFor="Name">Name</label>
                                    <input type="text" name="Name" required />
                                </div>
                                <div className={styles.group}>
                                    <label htmlFor="Email">Email</label>
                                    <input type="email" name="Email" required />
                                </div>
                                <div className={styles.group}>
                                    <label htmlFor="Phone">Phone</label>
                                    <input type="tel" name="Phone" required />
                                </div>
                                <div className={styles.group}>
                                    <label htmlFor="Company">Company</label>
                                    <input type="text" name="Company" />
                                </div>
                                <div className={styles.group}>
                                    <label htmlFor="Message">Message</label>
                                    <textarea name="Message"></textarea>
                                </div>
                            </form>
                            <Button text="Send Message" />
                        </div>
                    </div>

                    <div className={styles.map}>
                        <iframe src="https://snazzymaps.com/embed/161128"></iframe>
                    </div>
                </div>
            </section>
        </Page>
    )
}

export default Contact
