"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="flex max-w-2xl flex-col justify-center">

      {/* Small Title */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-lg font-semibold uppercase tracking-[0.3em] text-orange-400"
      >
        UI / UX Designer
      </motion.p>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-6xl font-black leading-[0.9] md:text-8xl xl:text-9xl"
      >
        SHEIK
        <br />
        ABDULLAH
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 max-w-xl text-lg leading-8 text-zinc-400"
      >
        Crafting intuitive digital experiences for web and mobile
        applications with a user-first design approach. I focus on
        creating clean, modern, and user-centered interfaces that
        solve real-world problems.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a
          href="#projects"
          className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
        >
          Explore Projects →
        </a>

        <a
          href="/resume.pdf"
          className="rounded-full border border-zinc-700 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-orange-500 hover:text-orange-400"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 flex items-center gap-6 text-zinc-400"
      >
        <a
          href="https://github.com/Aranthai-Sheik"
          target="_blank"
          className="hover:text-orange-400 transition-colors"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/a-sheik-abdullah-2938793a2?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          className="hover:text-orange-400 transition-colors"
        >
          LinkedIn
        </a>

        <a
          href="https://behance.net/"
          target="_blank"
          className="hover:text-orange-400 transition-colors"
        >
          Behance
        </a>

        <a
          href="sheik7860@gmail.com"
          className="hover:text-orange-400 transition-colors"
        >
          Email
          
        </a>
      </motion.div>

    </div>
  );
}