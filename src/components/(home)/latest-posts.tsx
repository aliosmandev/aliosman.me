"use client";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { Writings } from "../(blogs)/blog-section";

export default function LatestWritings() {
  return (
    <div className="flex gap-y-6 flex-col">
      <motion.div
        className="flex gap-x-4 gap-y-8 flex-col"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 3 * 0.1 }}
      >
        <div className="flex flex-col gap-y-1">
          <Link href="/writing">
            <h1 className="text-lg font-medium dark:text-white flex items-center gap-x-1">
              Latest Posts
              <ArrowUpRightIcon
                className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
                size={18}
              />
            </h1>
          </Link>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Explore a selection of posts that showcase my skills and
            contributions.
          </p>
        </div>
        <Writings />
      </motion.div>
    </div>
  );
}
