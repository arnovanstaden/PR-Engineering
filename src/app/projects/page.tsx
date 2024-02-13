import Section from '@components/UI/Section/Section';
import PageHeading from '@components/UI/PageHeading/PageHeading';
import ProjectsGrid from '@components/Content/ProjectsGrid/ProjectsGrid'
import { Metadata } from 'next';
import styles from './contact.module.scss';
import { getProjects } from '@lib/projects';

export const metadata: Metadata = {
  title: 'Projects | PR Engineering',
  description: 'PR Engineering is a Dynamic and Experienced Consulting Engineering Firm offering Professional Value-Driven Consulting Engineering Solutions.',
}

const Projects = async () => {
  const projects = await getProjects();

  return (
    <main className={styles.ProjectsPage}>
      <PageHeading dark={true}>
        <h1>Our <span>Projects</span>.</h1>
      </PageHeading>

      <Section
        colour="light"
        number={1}
      >

        <ProjectsGrid projects={projects} />
      </Section>
    </main>
  )
}

export default Projects;
