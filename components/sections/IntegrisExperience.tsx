"use client"

import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

/* ------------------ Types ------------------ */

interface IntegrisExperienceProps {
  title: string
  description: string
  image: string
  order?: "left" | "right"
}

/* ------------------ Variants ------------------ */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const bgVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
}

/* ------------------ Component ------------------ */

export default function IntegrisExperience({
  title,
  description,
  image,
  order = "right",
}: IntegrisExperienceProps) {
  return (
    <motion.section
      className="relative w-full min-h-[520px] lg:min-h-[640px] bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
      variants={bgVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1440px] px-6 py-24"
        variants={containerVariants}
      >
        <div
          className={cn(
            "flex",
            order === "right" ? "justify-end" : "justify-start"
          )}
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-xl p-8 md:p-10 max-w-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {title}
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {description.split("\n\n").map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
