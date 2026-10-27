"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    window.addEventListener("mousemove", move);

    const links = document.querySelectorAll("a,button");

    links.forEach((item) => {
      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      links.forEach((item) => {
        item.removeEventListener("mouseenter", enter);
        item.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - (hovering ? 25 : 12),
        y: position.y - (hovering ? 25 : 12),
        width: hovering ? 50 : 24,
        height: hovering ? 50 : 24,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 28,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-orange-400 bg-orange-500/20 backdrop-blur-xl"
    />
  );
}