"use client";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { GithubIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

export interface SocialLinksProps {
  githubActivities: Externals.Github.ApiResponse;
}

export default function SocialLinks({ githubActivities }: SocialLinksProps) {
  return (
    <motion.div
      className="flex gap-x-8"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 4 * 0.1 }}
    >
      <TwitterCard />
      <GithubCard githubActivities={githubActivities} />
    </motion.div>
  );
}

const TwitterCard = () => {
  return (
    <Link
      href="https://twitter.com/aliosmandev"
      className="flex flex-col gap-y-2 bg-blue-50 border w-48 p-4 border-gray-200 rounded-2xl cursor-pointer hover:bg-blue-100 transition-colors"
    >
      <div className="p-2 bg-blue-400 w-fit rounded-lg">
        <TwitterIcon color="white" size={24} />
      </div>
      <div className="flex flex-col my-2 mt-1 text-md gap-y-0.5">
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
    </Link>
  );
};

export const GithubCard = ({ githubActivities }: SocialLinksProps) => {
  const activities = useMemo(() => {
    const flatActivities =
      githubActivities.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
        (week) => week.contributionDays
      );
    return flatActivities.slice(
      flatActivities.length - 56,
      flatActivities.length
    );
  }, [githubActivities]);

  return (
    <div className="flex flex-col gap-y-2 border w-96 p-4 border-gray-200 rounded-2xl hover:bg-gray-100 transition-colors">
      <div className="flex justify-between h-full">
        <Link
          href="https://github.com/osmandlsmn"
          target="_blank"
          className="flex flex-col cursor-pointer"
        >
          <div className="p-2 bg-gray-800 w-fit rounded-lg">
            <GithubIcon color="white" size={24} />
          </div>
          <div className="flex flex-col my-2 mt-3 text-md gap-y-0.5">
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
        </Link>
        <div className="flex flex-wrap gap-2 w-40 select-none">
          {activities.map(({ contributionCount, date }, index) => {
            const formattedDate = new Date(date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            });
            return (
              <Tooltip
                key={index}
                radius="sm"
                className="text-sm"
                content={
                  contributionCount
                    ? `${contributionCount} contributions on ${formattedDate}`
                    : `No contributions on ${formattedDate}`
                }
              >
                <div
                  key={index}
                  className={`w-3 h-3 rounded ${
                    contributionCount === 0
                      ? "bg-gray-200"
                      : contributionCount < 5
                      ? "bg-green-400"
                      : contributionCount < 10
                      ? "bg-green-500"
                      : "bg-green-600"
                  }`}
                />
              </Tooltip>
            );
          })}
        </div>
      </div>
    </div>
  );
};
