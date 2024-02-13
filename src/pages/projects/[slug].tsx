import { client } from '../../utils/apollo-client';
import { gql } from '@apollo/client';
import { GetStaticProps } from 'next'
import { GetStaticPaths } from 'next'
import NextImage from '../../components/UI/NextImage/NextImage';
import { useState } from 'react';

// Components
import Page from '../../components/UI/Page/Page';
import Section from '../../components/UI/Section/Section';
import LightBox from '../../components/UI/Lightbox/Lightbox';

// Styles
import styles from '../../styles/pages/projects/[slug].module.scss';

const Project = ({ project }) => {
  const [lightboxImage, setLightboxImage] = useState(undefined);

  const hideLightBox = () => {
    setLightboxImage(undefined)
    document.body.classList.remove('noscroll')
  }

  return (
    <Page
      head={{
        title: `${project.title} | PR Engineering`,
        description: `${project.description}`,
        canonical: `/project/${project.slug}`,
      }}
      className={styles.project}
    >
      <section className={styles.landing}>
        <div className={styles.image}>
          <NextImage
            src={project.thumbnail.asset.url}
            alt={project.title}
            width={1920}
            background
            priority
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
          {project.images.map((image, index) => (
            <div className={styles.item} key={index} onClick={() => setLightboxImage(image.asset.url)}>
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
          ))}
        </div>
      </Section>

      <LightBox image={lightboxImage} toggle={hideLightBox} />
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
                services
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

  const project = data.allProject.filter(project => project.slug.current === params!.slug)[0]

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