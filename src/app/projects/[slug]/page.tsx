import Section from '@components/UI/Section/Section';
import styles from './[slug].module.scss';
import { getProject, getProjects } from '@lib/sanity';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Icon from '@components/UI/Icon/Icon';
import { generateCustomMetaData } from '@utils/metadata';
import ProjectGallery from '@components/Content/ProjectGallery/ProjectGallery';
import Link from 'next/link';

export const generateMetadata = async ({ params }) => {
  const project = await getProject(params.slug);

  if (!project) {
    return notFound();
  }

  return generateCustomMetaData({
    title: `${project.title} | PR Engineering`,
    description: `${project.location}, ${project.year} - ${project.description}`,
    image: project.thumbnail,
  })
}

export const generateStaticParams = async () => {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const Project: React.FC<{ params: { slug: string } }> = async ({ params }) => {
  const project = await getProject(params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className={styles.Project}>
      <section className={styles.landing}>
        <div className={styles.image}>
          <Image
            src={project.thumbnail}
            alt={project.title}
            priority
            fill
          />
        </div>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div className={styles.content}>
              <h1>{project.title}</h1>
              <hr />
              <p>
                <Icon name="location_on" />
                {project.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section
        className={styles.details}
        heading="Project Overview"
      >
        <div className={styles.grid}>
          <div className={styles.stats}>
            <ul>
              <li>
                <span>Category:</span>
                <Link href={`/projects?category=${project.category}`}>
                  {project.category}
                </Link>
              </li>
              <li>
                <span>Services:</span>
                {
                  project.services.map((service, index) => (
                    <Link href={`/projects?service=${service}`} key={index}>
                      {service}
                      {index < project.services.length - 1 && ', '}
                    </Link>
                  ))
                }
              </li>
              <li>
                <span>Date:</span>{project.year}
              </li>
              <li>
                <span>Location:</span>{project.location}
              </li>

            </ul>
          </div>
          <div className={styles.description}>
            <p>{project.description}</p>
          </div>
        </div>
      </Section>

      {project.images.length > 0 && (
        <Section
          heading="Project Gallery"
          colour="light"
        >
          <ProjectGallery images={project.images} />
        </Section>
      )}
    </main>
  )
}

export default Project;