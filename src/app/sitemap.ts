import { getProjects } from '@lib/sanity';
import { MetadataRoute } from 'next';

export const revalidate = 0;

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const url = 'https://www.engpr.com';

  const basicPages = ['', 'about', 'services', 'projects', 'contact'];

  const basicPagesSitemap = basicPages.map((page) => ({
    url: `${url}/${page}`,
    lastModified: new Date(),
  }));

  const projects = await getProjects();

  const projectsSitemap = projects.map((project) => ({
    url: `${url}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...basicPagesSitemap,
    ...projectsSitemap,
  ]
}

export default sitemap