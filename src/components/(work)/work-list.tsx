"use client";
import { motion } from "framer-motion";
import { Work, workList } from "./work.constants";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import DateTooltip from "../ui/DateTooltip";
import { DotIcon } from "lucide-react";

export default function WorkList() {
  return (
    <motion.ol
      className="relative flex"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 4 * 0.1 }}
    >
      <div className="hidden absolute top-3 bottom-0 right-full -mr-1 w-px bg-slate-200 dark:bg-slate-800 sm:block" />

      <div className="flex flex-col gap-y-8">
        {workList?.map((post, index) => (
          <WorkList.Card key={index} {...post} />
        ))}
      </div>
    </motion.ol>
  );
}

WorkList.Card = function Card({
  title,
  description,
  company,
  logo,
  link,
  startDate,
  endDate,
}: Work) {
  return (
    <motion.li className="flex gap-y-1 w-full rounded-2xl cursor-pointer transition-colors group ms-[24px]">
      <article className="relative group">
        <div className="absolute -inset-y-2 -inset-x-3 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
        <svg
          viewBox="0 0 9 9"
          className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-4 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
        >
          <circle
            cx="4.5"
            cy="4.5"
            r="4.5"
            stroke="currentColor"
            className="fill-white dark:fill-slate-900"
            strokeWidth={2}
          />
        </svg>
        <Image src={logo} alt={company} className="w-10 h-10 rounded-full" />
        <div className="relative">
          <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-4">
            {title}
          </h3>
          <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
            <p>{description}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center text-gray-500">
              <span className="text-sm font-medium">{company}</span>
              <DotIcon className="text-current" size={18} />
              <span className="text-sm text-end">
                <DateTooltip date={new Date(startDate)} /> -{" "}
                {endDate ? <DateTooltip date={new Date(endDate)} /> : "Present"}
              </span>
            </div>
            <Link
              className="flex items-center text-sm text-sky-500 font-medium"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative">Visit</span>
              <svg
                className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                width={3}
                height={6}
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0L3 3L0 6" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </motion.li>
  );
};
