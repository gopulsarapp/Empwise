"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"

const matrixImage =
  "https://integrisit.com/wp-content/uploads/2025/06/Screenshot-2025-06-10-at-4.47.06%E2%80%AFPM-768x585.png"

const clutchImage =
  "https://integrisit.com/wp-content/uploads/2025/06/Screenshot-2025-06-10-at-4.50.03%E2%80%AFPM-150x34.png"

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

export default function ClientRating() {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <motion.div
        className="mx-auto max-w-[1440px] px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <Image
              src={matrixImage}
              alt="Clutch Managed IT Leadership Matrix"
              width={640}
              height={480}
              className="w-full max-w-xl"
              unoptimized
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Clients rate Integris the{" "}
              <span className="text-purple-700">#1 managed service</span>{" "}
              <span className="text-red-600">provider</span>
            </h2>

            <p className="text-lg leading-relaxed mb-8 max-w-xl">
              Our reviews on Clutch speak for themselves — we’ve been ranked
              the #1 managed IT service provider based on our ability to
              deliver services and our focus in the managed IT space.
            </p>

            <div className="flex items-center gap-4">
              <Image
                src={clutchImage}
                alt="Reviewed on Clutch"
                width={150}
                height={34}
                unoptimized
              />
              <div className="text-sm">
                <div className="flex items-center gap-1 text-purple-700">
                  ★★★★★
                </div>
                <span className="text-muted-foreground">
                  42 Reviews
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
