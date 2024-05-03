"use client";
import { Button, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import NextImage from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

export const HeroButton = ({
  children,
  href,
}: PropsWithChildren<{ href: string }>) => (
  <Button
    as={Link}
    target="_blank"
    href={href}
    size="sm"
    className="ml-1 !p-1 h-6 bg-gray-200 border-gray-300 border rounded !text-gray-700 !gap-x-1"
    radius="sm"
  >
    {children}
  </Button>
);

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
          <HeroButton href="https://birdefter.com/">
            <NextImage
              src="/images/works/birdefter.png"
              alt="Birdefter"
              width={14}
              height={14}
              className="rounded-full"
            />
            Birdefter
          </HeroButton>
          and am also developing
          <HeroButton href="https://postiva.app/">
            <NextImage
              src="/images/works/postiva.png"
              alt="Postiva"
              width={14}
              height={14}
              className="rounded-full"
            />
            Postiva
          </HeroButton>
          , an application that simplifies content management for indie makers
          and startups.
        </motion.p>
      </div>
    </div>
  );
}
