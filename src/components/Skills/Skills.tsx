"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Smartphone,
  PenTool,
  Layers3,
  Search,
  Monitor,
} from "lucide-react";

const skills = [
  {
    icon: Palette,
    title: "Figma",
    desc: "Wireframes, UI Design & Components",
  },
  {
    icon: Search,
    title: "UX Research",
    desc: "User Research & Personas",
  },
  {
    icon: Layers3,
    title: "Design System",
    desc: "Reusable Components",
  },
  {
    icon: PenTool,
    title: "Prototyping",
    desc: "Interactive Prototypes",
  },
  {
    icon: Smartphone,
    title: "Mobile UI",
    desc: "Android & iOS Interfaces",
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    desc: "Desktop • Tablet • Mobile",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-3 uppercase tracking-[0.3em] text-orange-400"
      >
        Skills
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-5xl font-bold"
      >
        Design Tools &
        <br />
        Core Expertise.
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
                <Icon size={28} />
              </div>

              <h3 className="mb-3 text-2xl font-semibold">
                {skill.title}
              </h3>

              <p className="leading-7 text-zinc-400">
                {skill.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}