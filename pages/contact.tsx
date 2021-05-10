// Components
import Page from "../components/UI/Page/Page";
import Contact from "../components/Content/Contact/Contact"
import PageHeading from "../components/UI/PageHeading/PageHeading";

// Styles
import styles from "../styles/pages/contact.module.scss";

const ContactPage = () => {
    return (
        <Page
            head={{
                title: "Contact | PR Engineering",
                description: "FIX THIS",
                canonical: "/contact",
            }}
            className={styles.contact}
        >
            <PageHeading>
                <h1><span>Contact</span> us.</h1>
            </PageHeading>

            <section className={styles.content}>
                <div className="container">
                    <Contact />

                    <div className={styles.map}>
                        <iframe src="https://snazzymaps.com/embed/161128"></iframe>
                    </div>
                </div>
            </section>
        </Page>
    )
}

export default ContactPage
