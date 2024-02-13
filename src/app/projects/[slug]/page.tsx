import { Metadata } from 'next'

// Components
import Section from '@components/UI/Section/Section';

// Styles
import styles from './[id].module.scss';
import { getProject } from '@lib/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'PR Engineering',
  description: 'PR Engineering is a Dynamic and Experienced Consulting Engineering Firm offering Professional Value-Driven Consulting Engineering Solutions.',
}

const Project: React.FC<{ params: { slug: string } }> = async ({ params }) => {
  const project = await getProject(params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <main >
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
                <i className="icon-room"></i>
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