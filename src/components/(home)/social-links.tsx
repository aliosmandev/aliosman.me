"use client";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { GithubIcon, TwitterIcon } from "lucide-react";
import { useMemo } from "react";

export default function SocialLinks() {
  return (
    <motion.div
      className="flex gap-x-8"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 4 * 0.1 }}
    >
      <TwitterCard />
      <GithubCard />
    </motion.div>
  );
}

const TwitterCard = () => {
  return (
    <div className="flex flex-col gap-y-2 bg-blue-50 border w-48 p-4 border-gray-200 rounded-2xl cursor-pointer hover:bg-blue-100 transition-colors">
      <div className="p-2 bg-blue-400 w-fit rounded-lg">
        <TwitterIcon color="white" size={24} />
      </div>
      <div className="flex flex-col my-2 text-md gap-y-0.5">
        <h1 className="text-black leading-4">Twitter</h1>
        <p className="text-gray-500 text-sm leading-*">@aliosmandev</p>
      </div>
      <div className="flex gap-x-2">
        <Button
          className="!bg-blue-400 border-blue-400"
          color="primary"
          size="sm"
          radius="lg"
        >
          Follow
        </Button>
      </div>
    </div>
  );
};

export const GithubCard = () => {
  const githubActivities = useMemo(
    () => Array.from({ length: 56 }, () => Math.floor(Math.random() * 3)),
    []
  );

  return (
    <div className="flex flex-col gap-y-2 border w-96 p-4 border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
      <div className="flex justify-between h-full">
        <div className="flex flex-col">
          <div className="p-2 bg-gray-800 w-fit rounded-lg">
            <GithubIcon color="white" size={24} />
          </div>
          <div className="flex flex-col my-2 text-md gap-y-0.5">
            <h1 className="text-black leading-4">Github</h1>
            <p className="text-gray-500 text-sm leading-*">Ali Osman</p>
          </div>
          <Button
            className="!bg-gray-800 border-gray-800 mt-auto"
            color="primary"
            size="sm"
            radius="lg"
          >
            Follow
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 w-40">
          {githubActivities.map((level, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded ${
                level === 0
                  ? "bg-green-200"
                  : level === 1
                  ? "bg-green-300"
                  : "bg-green-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
