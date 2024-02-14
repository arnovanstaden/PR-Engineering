'use client';

import Button from '@components/UI/Button/Button';
import { Suspense } from 'react'
import styles from './ProjectsGridWithFiltering.module.scss';
import { useEffect, useState } from 'react';
import { IProject } from '@types';
import { useRouter, useSearchParams } from 'next/navigation';
import ProjectsGrid from '../ProjectsGrid/ProjectsGrid';
import Select from 'react-select';

const ProjectsGridWithFiltering: React.FC<{ projects: IProject[] }> = ({ projects }) => {
  const [filteredProjects, setProjects] = useState(projects);
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const service = searchParams.get('service')
  const router = useRouter();

  // Handlers
  const handleFilterCategory = (category: string) => {
    const newProjects = projects.filter(project => project.category === category);
    setProjects(newProjects)
  }

  const handleFilterService = (service: string) => {
    const newProjects = projects.filter(project => project.services.includes(decodeURIComponent(service)));
    setProjects(newProjects)
  }

  useEffect(() => {
    if (!category) {
      setProjects(projects);
      return;

    }
    handleFilterCategory(category);
  }, [category]);

  useEffect(() => {
    if (!service) {
      setProjects(projects);
      return;

    }
    handleFilterService(service);
  }, [service]);

  const categoryFilterItems = [...new Set(projects.map(project => project.category))];

  const defaultSelectValue = {
    value: 'All Projects',
    label: 'All Projects'
  }

  const reactSelectOptions = [
    defaultSelectValue,
    ...categoryFilterItems.map((category) => ({
      value: category,
      label: category
    }))
  ];

  return (
    <div className={styles.ProjectsGridWithFiltering}>
      <div className={styles.filter}>
        <Button hollow click={() => router.replace('/projects')} >All Projects</Button>
        {categoryFilterItems.map((type, index) => (
          <Button
            key={index}
            hollow
            link={`/projects?category=${type}`}
          >
            {`${type} Projects`}
          </Button>
        ))}
      </div>
      <div className={styles.mobileFilter}>
        <Select
          id="category"
          defaultValue={defaultSelectValue}
          value={category ? { value: category, label: category } : defaultSelectValue}
          onChange={(option) => {
            option.value === 'All Projects' ? router.replace('/projects') : router.replace(`/projects?category=${option.value}`)
          }}
          options={reactSelectOptions}
          unstyled
          className={styles.select}
        />
      </div>
      <ProjectsGrid projects={filteredProjects} />
    </div>
  )
}

const WithSuspense = (props) => (
  <Suspense>
    <ProjectsGridWithFiltering {...props} />
  </Suspense>
);

export default WithSuspense;
