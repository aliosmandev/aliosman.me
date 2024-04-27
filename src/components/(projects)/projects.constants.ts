export interface IProject {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  index: number;
}

export const projects: IProject[] = [
  {
    index: 0,
    title: "Postiva",
    description:
      "Postiva redefines blogging with easy tech stack integration and robust REST API support, facilitating efficient content management.",
    image: "/images/projects/postiva_banner.png",
    link: "https://postiva.app/",
    github: "https://github.com/postiva/postiva-client",
  },
  {
    index: 1,
    title: "Wordigo",
    description:
      "Wordigo enhances your vocabulary through an interactive web application, providing engaging tools for effective language learning.",
    image: "/images/projects/wordigo_banner.png",
    link: "https://wordigo.app/",
  },
];
