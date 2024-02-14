'use client';

import Project from '../Project/Project';
import styles from './ProjectsGrid.module.scss';
import { IProject } from '@types';

const ProjectsGrid: React.FC<{ projects: IProject[] }> = ({ projects }) => {
  return (
    <div className={styles.ProjectsGrid}>
      {projects.map((project, index) => (
        <Project {...project} key={index} />
      ))}
    </div>
  )
}


export default ProjectsGrid;
