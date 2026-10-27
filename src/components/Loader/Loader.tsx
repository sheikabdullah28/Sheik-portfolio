"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#09090B]"
        >

          <div className="text-center">

            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="bg-gradient-to-r from-white via-orange-300 to-orange-500 bg-clip-text text-6xl font-black text-transparent md:text-8xl"
            >
              SHEIK
              <br />
              ABDULLAH
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.8,
              }}
              className="mt-6 text-zinc-500"
            >
              Loading Portfolio...
            </motion.p>

            <div className="mx-auto mt-10 h-1 w-64 overflow-hidden rounded-full bg-white/10">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="h-full rounded-full bg-orange-500"
              />

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}