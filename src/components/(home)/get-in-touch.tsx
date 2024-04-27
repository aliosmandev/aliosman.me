"use client";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function GetInTouch() {
  return (
    <div className="flex gap-y-6 flex-col">
      <div className="flex flex-col gap-y-4 justify-center max-w-xl text-md">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 4 * 0.1 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 5 * 0.1 }}
        >
          If you have any questions or want to work together, feel free to
          contact me.
        </motion.p>

        <motion.div
          className="flex gap-x-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 6 * 0.1 }}
        >
          <Button size="sm" color="default">
            👋 Say hello
          </Button>
          <Button size="sm" color="primary">
            Schedule a meeting
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
