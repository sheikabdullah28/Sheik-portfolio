"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FloatingCards from "./FloatingCards";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

  {/* Glass Circle */}
  <div className="absolute h-[430px] w-[430px] rounded-full border border-white/10 bg-white/5 backdrop-blur-xl" />


      {/* Profile */}
 <motion.div
animate={{
y:[0,-12,0]
}}
transition={{
repeat:Infinity,
duration:5
}}
>

<div className="relative h-[600px] w-[450px]">
  <Image
    src="/images/profile.png"
    alt="Sheik Abdullah"
    fill
    className="object-contain"
    priority
  />
</div>

</motion.div>

      <FloatingCards />

    </div>
  );
}