import NextImage from '@components/UI/NextImage/NextImage';
import Link from 'next/link';
import styles from './Project.module.scss';

const Project = ({ project }) => {
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
      <Link href={`/projects/${project.slug.current}`} className={styles.overlay}>
        <div className={styles.content}>
          <h1>{project.title}</h1>
          <hr />
          <p>
            <i className="icon-room"></i>
            {project.location}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Project;
