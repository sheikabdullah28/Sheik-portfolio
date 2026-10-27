"use client";

import { motion } from "framer-motion";

const experience = [
  {
    year: "2026",
    title: "UI / UX Design Intern",
    company: "Media Wave Technology",
    duration: "1 Month Internship",
    description:
      "Worked on UI design, wireframing, user research and interactive prototypes using Figma while collaborating with developers.",
  },
  {
    year: "2025",
    title: "B.Tech Information Technology",
    company: "Anna University",
    duration: "2023 - Present",
    description:
      "Learning UI/UX Design, Web Development, Human Computer Interaction and building real-world projects.",
  },
  {
    year: "2024",
    title: "UI / UX Designer",
    company: "Personal Projects",
    duration: "Portfolio Projects",
    description:
      "Designed CampusHub, Foodie and Smart Hostel Management System with complete case studies and prototypes.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <p className="mb-3 uppercase tracking-[0.3em] text-orange-400">
        Experience
      </p>

      <h2 className="mb-16 text-5xl font-bold">
        My Journey
      </h2>

      <div className="relative border-l border-white/10 pl-8">

        {experience.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative mb-14"
          >

            <div className="absolute -left-[42px] top-2 h-5 w-5 rounded-full border-4 border-orange-500 bg-[#09090B]" />

            <span className="text-orange-400 font-semibold">
              {item.year}
            </span>

            <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <h3 className="text-3xl font-bold">
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

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}