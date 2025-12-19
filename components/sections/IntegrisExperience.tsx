"use client"

import { motion, type Variants } from "framer-motion"

const bgImage =
  "https://integrisit.com/wp-content/uploads/2025/07/IntExp2212567050.jpg"

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

export default function IntegrisExperience() {
  return (
    <motion.section
      className="relative w-full min-h-[520px] lg:min-h-[640px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
      variants={bgVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-black/10" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1440px] px-6 py-24"
        variants={containerVariants}
      >
        <div className="flex justify-end">
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg shadow-xl p-8 md:p-10 max-w-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What is the Integris experience?
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              It’s how you feel when your IT runs smoothly, thanks to a partner
              who gets it and gets you. A partner who shoulders responsibility
              for your IT — from upgrading your operations to managing risk and
              handling compliance — so you can focus on what you do best.
              <br />
              <br />
              A partner who takes it even a step further and guides you on the
              path to digital maturity so you will continuously succeed in an
              ever-changing world.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
