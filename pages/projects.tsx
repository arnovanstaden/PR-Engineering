import { GetStaticProps } from 'next';
import { gql } from "@apollo/client";
import { client } from "../utils/apollo-client";

import Link from "next/link";

// Components
import Page from "../components/UI/Page/Page";
import Section from "../components/UI/Section/Section";
import NextImage from "../components/UI/NextImage/NextImage";

// Styles
import styles from "../styles/pages/projects.module.scss";

const Projects = ({ projects }) => {
    console.log(projects)
    const GridItem = ({ project }) => {
        return (
            <div className={styles.item}>
                <div className={styles.image}>
                    <NextImage
                        src={project.thumbnail.asset.url}
                        alt={project.title}
                        width={400}
                        background
                        priority
                    />
                </div>
                <Link href={`/projects/${project.slug.current}`}>
                    <a className={styles.overlay}>
                        <div className={styles.content}>
                            <h1>{project.title}</h1>
                            <hr />
                            <p>
                                <i className="icon-room"></i>
                                {project.location}
                            </p>
                        </div>
                    </a>
                </Link>
            </div>
        )
    }

    return (
        <Page
            head={{
                title: "Projects | PR Engineering",
                description: "FIX THIS",
                canonical: "/projects",
            }}
            className={styles.projects}
        >
            <Section
                colour="light"
                number={1}
                heading="Featured Projects"
            >
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <GridItem project={project} key={index} />
                    ))}
                </div>
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