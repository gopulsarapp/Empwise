"use client"

import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"

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

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const buttonsVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: "easeOut",
    },
  },
}

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-right"
        style={{
          backgroundImage:
            "url('https://integrisit.com/wp-content/uploads/2025/06/Hero-BG.png')",
        }}
        variants={bgVariants}
        initial="hidden"
        animate="visible"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#1f1033]/95 via-[#2a0f3d]/85 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-28 md:py-36 grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="text-white space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Exceptional IT
            <br />
            Elevated Outcomes
          </h1>

          <p className="text-lg md:text-xl max-w-xl">
            We’re more than your IT partner.
            <br />
            We’re your competitive edge.
          </p>

          <p className="text-sm md:text-base max-w-xl opacity-90">
            At Integris, we make technology a driving force for your business.
            From exceptional IT support and streamlined operations to
            fortifying your security and driving growth through innovation,
            we deliver solutions that move your business forward with
            confidence.
          </p>

          <motion.div
            variants={buttonsVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-4 pt-4"
          >
            <Button className="bg-red-600 hover:bg-red-700">
              Get a free estimate
            </Button>
            <Button variant="secondary">
              Learn more
            </Button>
          </motion.div>
        </motion.div>

        <div />
      </div>
    </section>
  )
}
