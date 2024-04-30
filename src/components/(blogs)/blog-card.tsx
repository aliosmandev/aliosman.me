"use client";
import { Content } from "@postiva/client";
import { motion } from "framer-motion";
import Link from "next/link";

const BlogCard = ({ slug, title, description, publishedAt }: Content) => {
  return (
    <motion.li className="flex gap-y-1 w-full rounded-2xl cursor-pointer  transition-colors group ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-[6.50px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <Link
        className="w-full h-full flex-col z-40 relative"
        href={`/blogs/${slug}`}
      >
        <div className="absolute bg-gradient-to-b from-[#f9f9f9] to-[#f9f9f9] dark:from-[#1a202c] dark:to-[#1a202c] w-full p-4 h-full rounded-2xl -z-10 group-hover:block hidden scale-50 group-hover:scale-100 transition-all duration-200"></div>
        <div className="px-4 w-full h-full flex-col">
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 z-50">
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
        </div>
      </Link>
    </motion.li>
  );
};

export default BlogCard;
