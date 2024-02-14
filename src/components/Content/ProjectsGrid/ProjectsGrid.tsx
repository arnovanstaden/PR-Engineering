'use client';

import Button from '@components/UI/Button/Button';
import { Suspense } from 'react'
import styles from './ProjectsGrid.module.scss';
import { useEffect, useState } from 'react';
import Project from './Project/Project';
import { IProject } from '@types';
import { useRouter, useSearchParams } from 'next/navigation';

const ProjectsGrid: React.FC<{ projects: IProject[] }> = ({ projects }) => {
  const [filteredProjects, setProjects] = useState(projects);
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const router = useRouter();

  // Handlers
  const handleFilter = (category: string) => {
    const newProjects = projects.filter(project => project.category === category);
    setProjects(newProjects)
  }

  useEffect(() => {
    if (!category) {
      setProjects(projects);
      return;

    }
    handleFilter(category);
  }, [category]);

  const getFilters = () => {
    const categories = projects.map(project => project.category);
    const uniqueCategories = [...new Set(categories)];
    return uniqueCategories
  }

  return (
    <div className={styles.ProjectsGrid}>
      <div className={styles.filter}>
        <Button hollow click={() => router.replace('/projects')} >All Projects</Button>
        {getFilters().map((type, index) => (
          <Button
            key={index}
            hollow
            link={`/projects?category=${type}`}
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

const WithSuspense = (props) => (
  <Suspense>
    <ProjectsGrid {...props} />
  </Suspense>
);

export default WithSuspense;
