
"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "CampusHub",
    category: "College Management System",
    image: "/Projects/CampusHub.jpeg",
    description:
      "A centralized college management app with attendance, timetable, assignments and fee tracking.",
  },
  {
    title: "Foodie",
    category: "Food Delivery App",
    image: "/Projects/Foodie.jpeg",
    description:
      "A modern food ordering experience focused on speed, usability and clean mobile UI.",
  },
  {
    title: "Smart Hostel",
    category: "Hostel Management System",
    image: "/Projects/hostel.png",
    description:
      "A hostel management dashboard for students and wardens.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <p className="mb-3 uppercase tracking-[0.3em] text-orange-400">
        Featured Projects
      </p>

      <h2 className="mb-14 text-5xl font-bold">
        Selected
        <br />
        Case Studies.
      </h2>

      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -10 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div className="h-56 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="p-8">
              <p className="mb-2 text-sm uppercase tracking-widest text-orange-400">
                {project.category}
              </p>

              <h3 className="mb-4 text-3xl font-bold">
                {project.title}
              </h3>

              <p className="leading-7 text-zinc-400">
                {project.description}
              </p>

              <button
                type="button"
                className="mt-8 text-orange-400 transition hover:translate-x-2"
              >
                View Case Study →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
