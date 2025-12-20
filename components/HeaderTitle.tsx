"use client"

import {
  motion,
  type Variants,
  type Transition,
} from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

/* ------------------ Types ------------------ */

export interface HeaderData {
  title: string
  subtitles?: string
  desc?: string
  imageUrl: string
  buttonName?: string
  buttonUrl?: string
}

/* ------------------ Shared Transition ------------------ */

const sharedTransition: Transition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
}

/* ------------------ Variants ------------------ */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: sharedTransition,
  },
}

const bgVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: sharedTransition,
  },
}

/* ------------------ Component ------------------ */

export default function HeaderTitle({ data }: { data: HeaderData }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        variants={bgVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 will-change-transform"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${data.imageUrl})`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative mx-auto max-w-[1440px] px-6 py-24 md:py-32 text-white">
        {loading ? (
          /* Skeleton */
          <div className="space-y-6 max-w-xl animate-pulse">
            <div className="h-12 w-3/4 rounded bg-white/20" />
            <div className="h-12 w-2/3 rounded bg-white/20" />
            <div className="h-6 w-1/2 rounded bg-white/20" />
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              className={cn(
                "max-w-2xl font-bold leading-tight tracking-tight",
                "text-4xl md:text-5xl lg:text-6xl"
              )}
            >
              {data.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-xl text-lg md:text-xl text-slate-200"
            >
              {data.subtitles}
            </motion.p>

            {/* ✅ Description — ONLY IF PRESENT */}
            {data.desc && (
              <motion.p
                variants={itemVariants}
                className="max-w-2xl text-base md:text-lg text-slate-300"
              >
                {data.desc}
              </motion.p>
            )}

            {/* Button — ONLY IF buttonName exists */}
            {data.buttonName && (
              <motion.div variants={itemVariants}>
                <Link
                  href={data.buttonUrl ?? "#"}
                  className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-primary/90"
                >
                  {data.buttonName}
                </Link>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
