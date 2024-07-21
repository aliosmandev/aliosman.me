import { FaGithub, FaLinkedin, FaProductHunt, FaTwitter } from "react-icons/fa";

export interface Socials {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export const socials: Socials[] = [
  {
    name: "Twitter",
    url: "https://twitter.com/aliosmandev",
    icon: <FaTwitter size={16} />,
  },
  {
    name: "Github",
    url: "https://github.com/aliosmandev",
    icon: <FaGithub size={16} />,
  },
  {
    name: "Linkedin",
    url: "www.linkedin.com/in/ali-osman-delismen",
    icon: <FaLinkedin size={16} />,
  },
  {
    name: "Product Hunt",
    url: "https://www.producthunt.com/@aliosmandev",
    icon: <FaProductHunt size={16} />,
  },
];
