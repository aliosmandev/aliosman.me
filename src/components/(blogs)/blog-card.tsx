"use client";
import { Content } from "@postiva/client";
import { motion } from "framer-motion";
import Link from "next/link";

export const WritingCard = ({
  title,
  description,
  publishedAt,
  slug,
}: Content) => {
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
        <div className="relative">
          <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8">
            {title}
          </h3>
          <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2 text-sm">
            <p>{description}</p>
          </div>
          <dl className="absolute left-0 top-0  lg:right-full lg:mr-[calc(6.5rem+1px)]">
            <dt className="sr-only">Date</dt>
            <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
              <time dateTime="2024-03-19T18:00:00.000Z">
                {new Date(publishedAt as string).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </dd>
          </dl>
        </div>
        <Link
          className="flex items-center text-sm text-sky-500 font-medium"
          href={`/writing/${slug}`}
        >
          <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
          <span className="relative">Read more</span>
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
      </article>
    </motion.li>
  );
};
