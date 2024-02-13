export interface IProject {
  id: string,
  title: string,
  location: string,
  type: string,
  category: string;
  thumbnail: {
    asset: {
      url: string;
    }
  },
  slug: string,
  year: number,
  services: string,
  description: string,
}