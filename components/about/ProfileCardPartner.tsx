"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

/* ---------------- Types ---------------- */

export interface AdvisorData {
  image: string
  name: string
  role: string
  desc: string
}

/* ---------------- Animations ---------------- */

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const accordionVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

/* ---------------- Component ---------------- */

export default function AdvisorCard({ data }: { data: AdvisorData }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="max-w-sm"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-md">
        <Image
          src={data.image}
          alt={data.name}
          width={400}
          height={400}
          priority={false}
          className="aspect-square object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="mt-4 text-xl font-bold text-foreground">
        {data.name}
      </h3>

      {/* Role */}
      <p className="text-sm font-medium text-muted-foreground">
        {data.role}
      </p>

      {/* Accordion Toggle */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`advisor-bio-${data.name}`}
        onClick={() => setOpen((prev) => !prev)}
        className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        Bio
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Accordion Content */}
      <motion.div
        id={`advisor-bio-${data.name}`}
        variants={accordionVariants}
        initial={false}
        animate={open ? "open" : "closed"}
        className="overflow-hidden"
      >
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {data.desc}
        </p>
      </motion.div>
    </motion.div>
  )
}
