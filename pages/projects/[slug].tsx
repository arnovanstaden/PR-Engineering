import { client } from "../../utils/apollo-client";
import { gql } from "@apollo/client";
import { GetStaticProps } from 'next'
import { GetStaticPaths } from 'next'

// Components
import Page from "../../components/UI/Page/Page";

// Styles
import styles from "../../styles/pages/projects/[slug].module.scss";

const Project = ({ project }) => {
    return (
        <Page
            head={{
                title: `${project.title} | PR Engineering`,
                description: `${project.description}`,
                canonical: `/project/${project.slug}`,
            }}
            className={styles.about}
        >
            <h1>{project.title}</h1>
        </Page>
    )
}

export default Project

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // FIX THIS - GraphQL Vars
    const { data } = await client.query({
        query: gql`
          query GetProjects {
            allProject {
                title
                description
                type
                location
                year
                slug {
                    current
                    }
                thumbnail {
                asset {
                    url
                    }
                }
                images {
                asset {
                    url
                    }
                }
            }
            }
        `,
    });

    const project = data.allProject.filter(project => project.slug.current === params.slug)[0]

    return {
        props: {
            project,
        },
    }
}


export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query({
        query: gql`
          query GetProjects {
            allProject {
                slug {
                current
                }
            }
          }
        `,
    });

    const paths = data.allProject.map((project) => ({
        params: {
            slug: project.slug.current
        },
    }))

    return {
        paths,
        fallback: false
    }

}