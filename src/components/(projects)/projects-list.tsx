"use client";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { GithubIcon, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import { IProject, projects } from "./projects.constants";

export default function ProjectsList() {
  return (
    <motion.div
      className="grid grid-cols-1 gap-y-8"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 4 * 0.1 }}
    >
      {projects.map((project) => (
        <ProjectCard key={project.index} {...project} />
      ))}
    </motion.div>
  );
}

const ProjectCard = ({
  description,
  image,
  github,
  link,
  title,
  index,
}: IProject) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: (((4 + index) as never) + 1) * 0.1 }}
      className="flex gap-x-4 gap-y-2 w-full p-4 rounded-2xl cursor-pointer border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-colors group ms-4 dark:bg-gray-800 dark:border-gray-700"
    >
      <Image
        src={image}
        alt={title}
        width={250}
        height={250}
        className="rounded-lg"
      />
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col gap-y-2">
          <h1 className="font-medium text-lg text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="text-gray-600 text-sm dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="flex gap-x-2 mt-auto mb-2">
          <Button
            as={"a"}
            href={link}
            className="w-fit gap-x-1 mt-auto"
            color="primary"
            size="sm"
            radius="sm"
            target="_blank"
          >
            <SquareArrowOutUpRight size={14} />
            View Project
          </Button>
          {github && (
            <Button
              as={"a"}
              className="w-fit gap-x-1 mt-auto"
              color="default"
              size="sm"
              radius="sm"
              href={github}
              target="_blank"
            >
              <GithubIcon size={14} />
              View on GitHub
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
