"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      <div className="mx-auto mt-5 flex w-[92%] max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-widest text-white"
        >
          <span className="text-orange-500">S</span>A
        </Link>

        {/* Menu */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-300 transition-all duration-300 hover:text-orange-400"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          className="rounded-full bg-orange-500 px-5 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
        >
          Resume
        </a>
      </div>
    </motion.header>
  );
}