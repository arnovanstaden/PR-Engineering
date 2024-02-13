import { IProject } from '@types';

const fakeProjects: IProject[] = [{
  id: '123',
  title: 'Cruise Terminal, Mergence',
  location: 'Cape Town',
  type: 'Featured',
  category: 'Transportation',
  thumbnail: {
    asset: {
      url: 'https://cdn.sanity.io/images/wz51cnwa/production/890bf0d773258a320c23d86d2a72bdd96e0d9029-4656x3492.jpg',
    }
  },
  slug: 'cruise-terminal-mergence',
  year: 2019,
  services: 'Mechanical & Fire Engineering',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}]

export const getProject = async (slug: string): Promise<IProject | undefined> => {
  return fakeProjects.find(project => project.slug === slug);
}

export const getProjects = async (): Promise<IProject[]> => {
  return fakeProjects;
}
