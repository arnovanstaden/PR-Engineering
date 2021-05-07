import Page from "../components/UI/Page/Page";

// Styles
import styles from "../styles/pages/projects.module.scss";

const Projects = () => {
    return (
        <Page
            head={{
                title: "Projects | PR Engineering",
                description: "FIX THIS",
                canonical: "/projects",
            }}
            className={styles.projects}
        >
            <h1>Projects</h1>
        </Page>
    )
}

export default Projects
