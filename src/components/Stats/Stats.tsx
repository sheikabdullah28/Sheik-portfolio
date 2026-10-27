"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "03+",
    title: "Projects",
  },
  {
    number: "03+",
    title: "Certificates",
  },
  {
    number: "01+",
    title: "Internship",
  },
  {
    number: "100%",
    title: "Passion",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {stats.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: .6,
              delay: index * .15
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
          >

            <h2 className="text-6xl font-black text-orange-400">

              {item.number}

            </h2>

            <p className="mt-4 text-lg text-zinc-400">

              {item.title}

            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}