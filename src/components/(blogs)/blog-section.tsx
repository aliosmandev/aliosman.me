"use client";
import { postivaClient } from "@/libs/postiva";
import { Content } from "@postiva/client";
import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import BlogCard from "./blog-card";

export default function BlogsSection() {
  const [posts, setPosts] = useState<Content[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await postivaClient.contents.getContents();
      setPosts(posts.data);
    };
    getPosts();
  }, []);

  return (
    <Fragment>
      <div className="flex flex-col gap-y-2 justify-center max-w-xl text-md">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 * 0.1 }}
        >
          Posts
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3 * 0.1 }}
          className="text-gray-500 dark:text-gray-400"
        >
          Explore a selection of posts that showcase my thoughts and
          experiences.
        </motion.p>
      </div>
      <motion.ol
        className="relative border-s border-gray-200 dark:border-gray-700 gap-y-6 flex flex-col"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 4 * 0.1 }}
      >
        {posts?.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </motion.ol>
    </Fragment>
  );
}
