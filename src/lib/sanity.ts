import { IProject } from '@types';
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'wz51cnwa',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false
});


const buildGROQ = (slug?: string): string => (
  `*[_type == "project"${slug ? ` && slug.current == "${slug}"` : ''}]{
    id,
    title,
    "slug": slug.current,
    description,
    services,
    category,
    location,
    year,
    home,
    "images": images[].asset->url,
    "thumbnail": thumbnail.asset -> url 
  }`
)

export const getProject = async (slug: string): Promise<IProject | undefined> => {
  const matchingProjects = await client.fetch<IProject[]>(buildGROQ(decodeURIComponent(slug)));
  return matchingProjects[0];
}

export const getProjects = async (): Promise<IProject[]> => {
  const projects = await client.fetch<IProject[]>(buildGROQ());
  return projects;
}
