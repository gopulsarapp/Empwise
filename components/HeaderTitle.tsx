"use client"

import {
  motion,
  type Variants,
  type Transition,
} from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

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
  hidden: {
    opacity: 0,
    y: 24, // text comes from bottom
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: sharedTransition,
  },
}

const bgVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -40, // background comes from top
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: sharedTransition,
  },
}

/* ------------------ Component ------------------ */

export default function HeaderTitle() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <motion.div
        variants={bgVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 will-change-transform"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
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
          >
            <motion.h1
              variants={itemVariants}
              className={cn(
                "max-w-2xl font-bold leading-tight tracking-tight",
                "text-4xl md:text-5xl lg:text-6xl"
              )}
            >
              IT for Highly Regulated
              <br />
              Industries
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-lg md:text-xl text-slate-200"
            >
              Built for compliance and powered by strategy
            </motion.p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
