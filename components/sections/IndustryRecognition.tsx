"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import clsx from "clsx"
import { motion, type Variants } from "framer-motion"

const ITEM_WIDTH = 220

const logos = [
  {
    src: "https://integrisit.com/wp-content/uploads/2025/06/Screenshot-2025-06-24-at-9.43.17%E2%80%AFAM.png",
    alt: "Google Reviews",
  },
  {
    src: "https://integrisit.com/wp-content/uploads/2025/06/Screenshot-2025-06-24-at-9.43.11%E2%80%AFAM.png",
    alt: "Inc 5000",
  },
  {
    src: "https://integrisit.com/wp-content/uploads/2025/06/2025_MSP_501_Winner_Logo_white.png",
    alt: "MSP 501",
  },
  {
    src: "https://integrisit.com/wp-content/uploads/2025/06/crn-vertical-2025.png",
    alt: "CRN 500",
  },
  {
    src: "https://integrisit.com/wp-content/uploads/2025/06/clutch-icon.png",
    alt: "Clutch",
  },
  {
    src: "https://integrisit.com/wp-content/uploads/2025/06/glassdoor.png",
    alt: "Glassdoor",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

export default function IndustryRecognition() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches
    if (!isMobile || !scrollRef.current) return

    const container = scrollRef.current

    const interval = setInterval(() => {
      const maxScroll =
        container.scrollWidth - container.clientWidth

      if (container.scrollLeft >= maxScroll) {
        container.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        container.scrollBy({ left: ITEM_WIDTH, behavior: "smooth" })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleScroll = () => {
    if (!scrollRef.current) return
    setActive(
      Math.round(scrollRef.current.scrollLeft / ITEM_WIDTH)
    )
  }

  return (
    <motion.section
      className="w-full bg-[#3a2744] text-white py-16 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        variants={itemVariants}
        className="text-center text-xl md:text-2xl font-semibold mb-10 px-6"
      >
        Industry recognized, client loved
      </motion.h2>

      <motion.div
        ref={scrollRef}
        onScroll={handleScroll}
        className={clsx(
          "flex md:grid md:grid-cols-6 items-center gap-14 px-6",
          "overflow-x-auto md:overflow-visible",
          "snap-x snap-mandatory md:snap-none scrollbar-hide"
        )}
      >
        {logos.map((logo) => (
          <motion.div
            key={logo.alt}
            variants={itemVariants}
            className="relative min-w-[220px] md:min-w-0 h-[72px] snap-center flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
              unoptimized
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8 flex justify-center gap-2 md:hidden">
        {logos.map((_, i) => (
          <motion.span
            key={i}
            animate={
              active === i
                ? { scale: 1.4, opacity: 1 }
                : { scale: 1, opacity: 0.5 }
            }
            transition={{ duration: 0.3 }}
            className="h-2 w-2 rounded-full bg-white"
          />
        ))}
      </div>
    </motion.section>
  )
}
