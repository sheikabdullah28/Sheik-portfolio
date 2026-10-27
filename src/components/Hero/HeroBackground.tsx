"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Orange Glow */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -60, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-120px] top-20 h-[450px] w-[450px] rounded-full bg-orange-500/20 blur-[140px]"
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 80, -80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-120px] top-10 h-[500px] w-[500px] rounded-full bg-sky-500/15 blur-[160px]"
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[180px]"
      />

      {/* Center Ambient Light */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[240px]" />

    </div>
  );
}