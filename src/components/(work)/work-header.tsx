"use client";
import { motion } from "framer-motion";

export default function WorkHeader() {
  return (
    <div className="flex gap-y-6 flex-col">
      <div className="flex flex-col gap-y-2 justify-center max-w-xl text-md">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 * 0.1 }}
        >
          Work
        </motion.h1>
        <motion.p
          className="text-gray-500 dark:text-gray-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3 * 0.1 }}
        >
          Discover the diverse range of professional experiences that have
          shaped my career.
        </motion.p>
      </div>
    </div>
  );
}
