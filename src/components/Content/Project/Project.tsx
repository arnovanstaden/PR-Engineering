import Link from 'next/link';
import styles from './Project.module.scss';
import Icon from '@components/UI/Icon/Icon';
import Image from 'next/image';
import { IProject } from '@types';

const Project: React.FC<IProject> = (project) => {
  return (
    <div className={styles.Project}>
      <div className={styles.image}>
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={400}
          height={300}
        />
      </div>
      <Link href={`/projects/${project.slug}`} className={styles.overlay}>
        <div className={styles.content}>
          <h1>{project.title}</h1>
          <div className={styles.divider} />
          <p>
            <Icon name="location_on" />
            {project.location}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Project;
