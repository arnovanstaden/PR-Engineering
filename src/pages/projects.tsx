import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';
import { client } from '../utils/apollo-client';
import { useState } from 'react';

// Components
import Page from '../components/UI/Page/Page';
import Section from '../components/UI/Section/Section';
import PageHeading from '../components/UI/PageHeading/PageHeading';
import ProjectsGrid from '../components/Content/ProjectsGrid/ProjectsGrid'
import Button from '../components/UI/Button/Button';

// Styles
import styles from '../styles/pages/projects.module.scss';

const Projects = ({ allProjects }) => {
  // State
  const [projects, setProjects] = useState(allProjects)

  // Handlers
  const handleFilter = (type) => {
    const newProjects = allProjects.filter(project => project.type === type);
    setProjects(newProjects)
  }

  const getFilters = () => {
    const types = allProjects.map(project => project.type);
    const uniqueTypes = [...new Set(types)];
    return uniqueTypes
  }

  const resetFilter = () => {
    setProjects(allProjects)
  }

  return (
    <Page
      head={{
        title: 'Projects | PR Engineering',
        description: 'FIX THIS',
        canonical: '/projects',
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
        <div className={styles.filter}>
          <Button hollow click={resetFilter} >All Projects</Button>
          {getFilters().map((type, index) => (
            <Button
              key={index}
              hollow click={() => handleFilter(type)}
            >
              {`${type} Projects`}
            </Button>
          ))}
        </div>
        <ProjectsGrid projects={projects} />
      </Section>
    </Page>
  )
}

export default Projects

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await await client.query({
    query: gql`
          query GetProjects {
            allProject {
                title
                location
                type
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
      allProjects: data.allProject
    }
  }
}