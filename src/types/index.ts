export interface IProject {
  title: string,
  slug: string,
  description: string,
  services: string[],
  category: string,
  location: string,
  year: number,
  home: boolean;
  thumbnail: string;
  images: string[];
}