"use client"

import { motion } from "framer-motion"

interface AboutHeaderProps {
  title: string
  description: string
  imageUrl: string
}

export default function AboutHeader({
  title,
  description,
  imageUrl,
}: AboutHeaderProps) {
  return (
    <section className="relative w-full min-h-[420px] md:min-h-[520px] overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {title}
          </h1>

          <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/90">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
