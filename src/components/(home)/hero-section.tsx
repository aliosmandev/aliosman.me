"use client";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="flex gap-y-6 flex-col">
      <motion.div
        className="flex"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 * 0.1 }}
      >
        <Image
          src="/images/avatar.jpeg"
          alt="Picture of the author"
          width={130}
          height={130}
          radius="lg"
        />
      </motion.div>
      <div className="flex flex-col gap-y-4 justify-center max-w-xl text-md">
        <motion.h1
          className="text-3xl font-bold dark:text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 * 0.1 }}
        >
          Ali Osman Delişmen
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3 * 0.1 }}
          className="text-gray-500 dark:text-gray-400"
        >
          Ali Osman Delismen has been working on software development in
          Istanbul since 2019. While developing his frontend skills with open
          source projects, he continues to increase his expertise in DevOps in
          his free time.
        </motion.p>
      </div>
    </div>
  );
}
