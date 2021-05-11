import { GetStaticProps } from 'next';
import { gql } from "@apollo/client";
import { client } from "../utils/apollo-client";


// Components
import Page from "../components/UI/Page/Page";
import Section from "../components/UI/Section/Section";
import PageHeading from "../components/UI/PageHeading/PageHeading";
import ProjectsGrid from "../components/Content/ProjectsGrid/ProjectsGrid"

// Styles
import styles from "../styles/pages/projects.module.scss";

const Projects = ({ projects }) => {

    return (
        <Page
            head={{
                title: "Projects | PR Engineering",
                description: "FIX THIS",
                canonical: "/projects",
            }}
            className={styles.projects}
        >
            <PageHeading dark={true}>
                <h1>Our <span>Projects</span>.</h1>
            </PageHeading>

            <Section
                colour="light"
                number={1}
            >
                <ProjectsGrid projects={projects} />
            </Section>
        </Page>
    )
}

export default Projects

export const getStaticProps: GetStaticProps = async (context) => {
    const { data } = await await client.query({
        query: gql`
          query GetProjects {
            allProject {
                title
                location
                slug {
                current
                }
                thumbnail {
                asset {
                    url
                }
                }
            }
            }
        `,
    });


    return {
        props: {
            projects: data.allProject
        }
    }
}