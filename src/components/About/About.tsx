"use client";

import { GraduationCap, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#09090B] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.p
          initial={{ opacity:0,y:20 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:.5 }}
          className="mb-3 uppercase tracking-[5px] text-orange-400"
        >
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity:0,y:20 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ delay:.1 }}
          className="text-5xl font-black"
        >
          Designing Experiences,
          <br />
          Not Just Screens.
        </motion.h2>

        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:.3 }}
          className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400"
        >
          I'm Sheik Abdullah, a passionate UI/UX Designer currently pursuing
          B.Tech in Information Technology. I enjoy transforming ideas into
          meaningful digital experiences through research, wireframing,
          prototyping and modern interface design.
        </motion.p>

        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-orange-500">

            <GraduationCap className="mb-5 text-orange-400" size={32}/>

            <h3 className="mb-3 text-xl font-bold">
              Education
            </h3>

            <p className="text-zinc-400">
              B.Tech Information Technology
              <br/>
              Anna University
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-orange-500">

            <Briefcase className="mb-5 text-orange-400" size={32}/>

            <h3 className="mb-3 text-xl font-bold">
              Experience
            </h3>

            <p className="text-zinc-400">
              UI/UX Design Intern
              <br/>
              Media Wave Technology
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-orange-500">

            <MapPin className="mb-5 text-orange-400" size={32}/>

            <h3 className="mb-3 text-xl font-bold">
              Location
            </h3>

            <p className="text-zinc-400">
              Tiruchirappalli,Tamil Nadu
              <br/>
              India
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}