import Section from '@components/UI/Section/Section';
import PageHeading from '@components/UI/PageHeading/PageHeading';
import ProjectsGrid from '@components/Content/ProjectsGrid/ProjectsGrid'
import { Metadata } from 'next';
import styles from './contact.module.scss';

export const metadata: Metadata = {
  title: 'Projects | PR Engineering',
  description: 'PR Engineering is a Dynamic and Experienced Consulting Engineering Firm offering Professional Value-Driven Consulting Engineering Solutions.',
}

const Projects = ({ projects = [] }) => {
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

export default Projects

// export const getStaticProps: GetStaticProps = async () => {
//   const { data } = await await client.query({
//     query: gql`
//           query GetProjects {
//             allProject {
//                 title
//                 location
//                 type
//                 slug {
//                     current
//                     }
//                 thumbnail {
//                 asset {
//                         url
//                     }
//                 }
//             }
//             }
//         `,
//   });

//   return {
//     props: {
//       allProjects: data.allProject
//     }
//   }
// }