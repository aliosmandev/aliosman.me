"use client";
import { Content } from "@postiva/client";
import { motion } from "framer-motion";
import Link from "next/link";

const BlogCard = ({ slug, title, description, publishedAt }: Content) => {
  return (
    <motion.li className="flex gap-y-1 w-full rounded-2xl cursor-pointer border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-colors group ms-4 dark:bg-gray-800 dark:border-gray-700">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <Link
        className="w-full h-full py-3 px-4 flex-col"
        href={`/blogs/${slug}`}
      >
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
      </Link>
    </motion.li>
  );
};

export default BlogCard;
