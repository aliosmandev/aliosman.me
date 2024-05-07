export interface Work {
  title: string;
  description: string;
  company: string;
  logo: string;
  link: string;
  startDate: string;
  endDate: string | null;
}

export const workList: Work[] = [
  {
    title: "Full Stack Developer",
    description:
      "Developed and maintained full-stack web applications, ensuring optimal functionality and user experience.",
    company: "Birdefter",
    logo: "/images/works/birdefter.png",
    link: "https://birdefter.com/",
    startDate: "2023-09-01",
    endDate: null,
  },
  {
    title: "Frontend Developer",
    description:
      "Implemented responsive user interfaces and optimized front-end performance for a cryptocurrency platform.",
    company: "Coino",
    logo: "/images/works/coino.jpeg",
    link: "https://www.coino.com/",
    startDate: "2023-01-01",
    endDate: "2023-08-01",
  },
];
