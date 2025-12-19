"use client"

import { motion } from "framer-motion"

export default function MeetIntegris() {
  return (
    <section className="w-full bg-white py-24">
      {/* Heading */}
      <motion.h2
        className="text-center text-4xl md:text-5xl font-bold mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Meet Integris
      </motion.h2>

      {/* Video Wrapper */}
      <motion.div
        className="mx-auto max-w-[1440px] px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative overflow-hidden rounded-xl shadow-xl">
          {/* Background gradient (brand style) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3a2744] via-[#3a2744] to-[#6b0f1a]" />

          {/* Optional dot pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,120,0,0.35)_0%,transparent_45%)]" />

          {/* Video */}
          <video
            className="relative z-10 w-full h-auto min-h-[600px]"
            controls
            preload="metadata"
            poster="/images/meet-integris-poster.jpg"
          >
            <source src="/videos/meet-integris.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </section>
  )
}
