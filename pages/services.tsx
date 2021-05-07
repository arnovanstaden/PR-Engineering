import Page from "../components/UI/Page/Page";

// Styles
import styles from "../styles/pages/services.module.scss";

const Services = () => {
    return (
        <Page
            head={{
                title: "Services | PR Engineering",
                description: "FIX THIS",
                canonical: "/services",
            }}
            className={styles.services}
        >
            <h1>Services</h1>
        </Page>
    )
}

export default Services
