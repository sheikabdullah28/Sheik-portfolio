"use client";

import { motion } from "framer-motion";

interface Props {
  item: {
    year: string;
    title: string;
    company: string;
    duration: string;
    description: string;
  };
}

export default function TimelineCard({ item }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <span className="text-orange-400 font-semibold">
        {item.year}
      </span>

      <h3 className="mt-3 text-3xl font-bold">
        {item.title}
      </h3>

      <p className="mt-2 text-zinc-300">
        {item.company}
      </p>

      <p className="mt-1 text-sm text-zinc-500">
        {item.duration}
      </p>

      <p className="mt-6 leading-7 text-zinc-400">
        {item.description}
      </p>
    </motion.div>
  );
}