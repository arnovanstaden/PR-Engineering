import Section from '@components/UI/Section/Section';
import styles from './[slug].module.scss';
import { getProject } from '@lib/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Icon from '@components/UI/Icon/Icon';
import { generateCustomMetaData } from '@utils/metadata';


export async function generateMetadata({ params }) {
  const project = await getProject(params.slug);

  if (!project) {
    return notFound();
  }

  return generateCustomMetaData({
    title: `${project.title} | PR Engineering`,
    description: `${project.location}, ${project.year} - ${project.description}`,
    image: project.thumbnail.asset.url,
  })
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
            src={project.thumbnail.asset.url}
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
        number={1}
      >
        <div className={styles.grid}>
          <div className={styles.stats}>
            <ul>
              <li>
                <span>Scope:</span>{project.services}
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

      <Section
        className={styles.gallery}
        heading="Project Gallery"
        number={2}
        colour="light"
      >
        <div className={styles.grid}>
          {/* {project.images.map((image, index) => (
            <div className={styles.item} key={index} >
              <div className={styles.image}>
                <div className={styles.overlay}></div>
                <NextImage
                  src={image.asset.url}
                  alt={project.title}
                  width={400}
                  background
                  priority
                />
              </div>
            </div>
          ))} */}
        </div>
      </Section>
      {/* <LightBox image={lightboxImage} toggle={hideLightBox} /> */}
    </main>
  )
}

export default Project;