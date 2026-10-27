"use client";

import { motion } from "framer-motion";

export default function FloatingCards() {
  return (
    <>
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute -left-10 top-20 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
      >
        🎨 Figma
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute -right-8 top-52 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
      >
        ✨ Prototype
      </motion.div>

      <motion.div
        animate={{ y: [-5, 10, -5] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-10 left-16 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
      >
        📐 UX Research
      </motion.div>
    </>
  );
}