"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-3 uppercase tracking-[0.3em] text-orange-400"
      >
        Contact
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-5xl font-bold leading-tight"
      >
        Let's Build
        <br />
        Something Amazing.
      </motion.h2>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-orange-500" />
              <div>
                <p className="text-sm text-zinc-400">Email</p>
                <p className="font-medium">
                  sheikappas7860@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-2xl text-orange-500" />
              <div>
                <p className="text-sm text-zinc-400">Phone</p>
                <p className="font-medium">
                  +91 63854 91737
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-orange-500" />
              <div>
                <p className="text-sm text-zinc-400">Location</p>
                <p className="font-medium">
                 Tiruchirappalli, Tamil Nadu
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <h3 className="mb-8 text-2xl font-semibold">
            Connect With Me
          </h3>

          <div className="space-y-5">

            <a
              href="https://www.linkedin.com/in/a-sheik-abdullah-2938793a2?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              className="flex items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-orange-500 hover:bg-white/5"
            >
              <div className="flex items-center gap-4">
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </div>

              →
            </a>

            <a
              href="https://github.com/Aranthai-Sheik"
              target="_blank"
              className="flex items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-orange-500 hover:bg-white/5"
            >
              <div className="flex items-center gap-4">
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </div>

              →
            </a>

            <a
              href="/resume.pdf"
              className="flex items-center justify-center rounded-2xl bg-orange-500 p-5 font-semibold transition hover:bg-orange-600"
            >
              Download Resume
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}