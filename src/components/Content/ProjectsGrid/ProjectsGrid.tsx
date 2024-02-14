'use client';

import Button from '@components/UI/Button/Button';

// Styles
import styles from './ProjectsGrid.module.scss';
import { useState } from 'react';
import Project from './Project/Project';
import { IProject } from '@types';

const ProjectsGrid: React.FC<{ projects: IProject[] }> = ({ projects }) => {
  const [filteredProjects, setProjects] = useState(projects);

  // Handlers
  const handleFilter = (category: string) => {
    const newProjects = projects.filter(project => project.category === category);
    setProjects(newProjects)
  }

  const getFilters = () => {
    const categories = projects.map(project => project.category);
    const uniqueCategories = [...new Set(categories)];
    return uniqueCategories
  }

  const resetFilter = () => {
    setProjects(projects)
  }

  return (
    <div className={styles.ProjectsGrid}>
      <div className={styles.filter}>
        <Button hollow click={resetFilter} >All Projects</Button>
        {getFilters().map((type, index) => (
          <Button
            key={index}
            hollow click={() => handleFilter(type)}
          >
            {`${type} Projects`}
          </Button>
        ))}
      </div>
      <div className={styles.grid}>
        {filteredProjects.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsGrid
