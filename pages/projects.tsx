import Page from "../components/UI/Page/Page";
import { GetStaticProps } from 'next';
import { getAllProjects } from "../utils/apollo-client";


// Styles
import styles from "../styles/pages/projects.module.scss";

const Projects = ({ projects }) => {
    console.log(projects)
    return (
        <Page
            head={{
                title: "Projects | PR Engineering",
                description: "FIX THIS",
                canonical: "/projects",
            }}
            className={styles.projects}
        >
            <h1>{projects[0].title}</h1>
        </Page>
    )
}

export default Projects

export const getStaticProps: GetStaticProps = async (context) => {
    const { data } = await getAllProjects()

    return {
        props: {
            projects: data.allProject
        }
    }
}