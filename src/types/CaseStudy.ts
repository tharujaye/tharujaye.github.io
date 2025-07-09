export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  client: string;
  services: string[];
  image: string;
  link: string;
  featured: boolean; // Make this required or optional, but be consistent everywhere
}