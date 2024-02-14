import Section from '@components/UI/Section/Section';
import PageHeading from '@components/UI/PageHeading/PageHeading';
import ProjectsGrid from '@components/Content/ProjectsGrid/ProjectsGrid'
import styles from './projects.module.scss';
import { getProjects } from '@lib/sanity';
import { generateCustomMetaData } from '@utils/metadata';

export const metadata = generateCustomMetaData({
  title: 'Projects | PR Engineering',
  description: 'Have a look at some of the ambitious projects we\'re working on or have completed.',
});

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
