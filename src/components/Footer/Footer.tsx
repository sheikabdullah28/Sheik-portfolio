"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-black/30 backdrop-blur-xl">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="flex flex-col items-center text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black"
          >
            SHEIK ABDULLAH
          </motion.h2>

          <p className="mt-4 max-w-xl text-zinc-400 leading-7">
            UI / UX Designer passionate about creating
            intuitive digital experiences with clean,
            modern and user-friendly interfaces.
          </p>

          {/* Social */}

          <div className="mt-10 flex gap-5">

            <a
              href="https://github.com/Aranthai-Sheik"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:scale-110 hover:border-orange-500 hover:text-orange-400"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/a-sheik-abdullah-2938793a2?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:scale-110 hover:border-orange-500 hover:text-orange-400"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="sheikappas7860@gmail.com"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:scale-110 hover:border-orange-500 hover:text-orange-400"
            >
              <FaEnvelope size={22} />
            </a>
          </div>

          {/* Back To Top */}

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="mt-12 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 transition hover:scale-110 hover:bg-orange-600"
          >
            <FaArrowUp />
          </button>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">

          © {new Date().getFullYear()} Sheik Abdullah. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}