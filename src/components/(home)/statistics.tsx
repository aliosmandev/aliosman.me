"use client";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { GithubIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

export interface StatisticsProps {
  githubActivities: Externals.Github.ApiResponse;
}

export default function StatisticsCards({ githubActivities }: StatisticsProps) {
  return (
    <motion.div
      className="flex gap-8 flex-col lg:flex-row"
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
      className="flex flex-col gap-y-2 bg-blue-50 border w-full md:w-48 p-4 border-gray-200 rounded-2xl cursor-pointer hover:bg-blue-100 transition-colors group dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="p-2 bg-blue-400 w-fit rounded-lg">
        <TwitterIcon color="white" size={24} />
      </div>
      <div className="flex flex-col my-2 mt-1 text-md gap-y-0.5">
        <h1 className="text-black leading-4 dark:text-white">Twitter</h1>
        <p className="text-gray-500 text-sm leading-* dark:text-gray-400">
          @aliosmandev
        </p>
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

export const GithubCard = ({ githubActivities }: StatisticsProps) => {
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
    <div className="flex flex-col gap-y-2 border w-full md:w-96 p-4 border-gray-200 rounded-2xl hover:bg-gray-100 transition-colors dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between h-full flex-col md:flex-row gap-y-4">
        <Link
          href="https://github.com/osmandlsmn"
          target="_blank"
          className="flex flex-col cursor-pointer"
        >
          <div className="p-2 bg-gray-800 w-fit rounded-lg">
            <GithubIcon color="white" size={24} />
          </div>
          <div className="flex flex-col my-2 mt-3 text-md gap-y-0.5">
            <h1 className="text-black leading-4 dark:text-white">Github</h1>
            <p className="text-gray-500 text-sm leading-* dark:text-gray-400">
              @osmandlsmn
            </p>
          </div>
          <Button
            className="!bg-gray-800 border-gray-800 mt-auto dark:!bg-gray-700 dark:!border-gray-700"
            color="primary"
            size="sm"
            radius="lg"
          >
            Follow
          </Button>
        </Link>
        <div className="flex flex-wrap gap-2 w-full md:w-40 select-none">
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
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {contributionCount
                      ? `${contributionCount} contributions on ${formattedDate}`
                      : `No contributions on ${formattedDate}`}
                  </span>
                }
              >
                <div
                  key={index}
                  className={`w-[9.50px] h-[9.50px] md:w-3 md:h-3 rounded ${
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
