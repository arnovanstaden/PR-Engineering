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

export type TContactMessage = {
  name: string;
  email: string;
  message: string;
  company: string;
  phone: string;
};