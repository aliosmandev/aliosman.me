"use client";
import { Content } from "@postiva/client";
import { motion } from "framer-motion";

export interface BlogCardProps extends Content {
  index: number;
}

const BlogCard = ({
  title,
  description,
  publishedAt,
  index,
}: BlogCardProps) => {
  return (
    <motion.li
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // transition={{ duration: 0.5, delay: (((0 + index) as never) + 1) * 0.1 }}
      className="flex gap-y-1 w-full flex-col p-4 rounded-2xl cursor-pointer border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-colors group ms-4"
    >
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {new Date(publishedAt as string).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </motion.li>
  );
};

export default BlogCard;
