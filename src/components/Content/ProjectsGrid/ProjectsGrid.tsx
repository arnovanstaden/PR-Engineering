'use client';

import Button from '@components/UI/Button/Button';

// Styles
import styles from './grid.module.scss';
import { useState } from 'react';
import Project from './Project/Project';

const ProjectsGrid = ({ projects }) => {
  const [filteredProjects, setProjects] = useState(projects);

  // Handlers
  const handleFilter = (type) => {
    const newProjects = projects.filter(project => project.type === type);
    setProjects(newProjects)
  }

  const getFilters = () => {
    const types = projects.map(project => project.type);
    const uniqueTypes = [...new Set(types)];
    return uniqueTypes
  }

  const resetFilter = () => {
    setProjects(projects)
  }

  return (
    <div className={styles.grid}>
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
      {filteredProjects.map((project, index) => (
        <Project project={project} key={index} />
      ))}
    </div>
  )
}

export default ProjectsGrid
