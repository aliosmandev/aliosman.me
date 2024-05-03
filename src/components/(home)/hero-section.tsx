"use client";
import { Button, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import NextImage from "next/image";

export default function HeroSection() {
  return (
    <div className="flex gap-y-6 flex-col w-full">
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
      <div className="flex flex-col gap-y-4 justify-center max-w-[610px] text-md">
        <motion.h1
          className="text-2xl font-bold dark:text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 * 0.1 }}
        >
          Hey, I&apos;m Ali Osman
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3 * 0.1 }}
          className="text-gray-500 dark:text-gray-400"
        >
          I am a Full Stack Developer and entrepreneur. Currently, I work at
          <Button
            size="sm"
            className="mx-1 !p-1 h-6 bg-gray-200 border-gray-300 border rounded !text-gray-700 !gap-x-1"
            radius="sm"
          >
            <NextImage
              src="/images/works/birdefter.png"
              alt="Birdefter"
              width={14}
              height={14}
              className="rounded-full"
            />
            Birdefter
          </Button>
          and am also developing
          <Button
            size="sm"
            className="mx-1 !p-1 h-6 bg-gray-200 border-gray-300 border rounded !text-gray-700 !gap-x-1"
            radius="sm"
          >
            <NextImage
              src="/images/works/postiva.png"
              alt="Postiva"
              width={14}
              height={14}
              className="rounded-full"
            />
            Postiva
          </Button>
          , an application that simplifies content management for indie makers
          and startups.
        </motion.p>
      </div>
    </div>
  );
}
