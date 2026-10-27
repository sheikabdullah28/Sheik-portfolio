"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <p className="mb-3 uppercase tracking-[0.3em] text-orange-400">
        Certifications
      </p>

      <h2 className="mb-16 text-5xl font-bold">
        Learning Never
        <br />
        Stops.
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {certifications.map((item, index) => (

          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300"
          >

            {/* Glow Effect */}

            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-20`}
            />

            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">

                  <Award
                    size={32}
                    className="text-orange-400"
                  />

                </div>

                <ExternalLink
                  size={22}
                  className="text-zinc-500 transition group-hover:text-orange-400"
                />

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                {item.title}

              </h3>

              <p className="mt-3 text-zinc-400">

                {item.issuer}

              </p>

              <span className="mt-8 inline-block rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300">

                {item.year}

              </span>

            </div>

          </motion.a>

        ))}

      </div>

    </section>
  );
}