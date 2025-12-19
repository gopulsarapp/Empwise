"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"

const industries = [
  {
    title: "Community Banks",
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/HomeComBanks75975609-panorama-ee3689f6d7446127e758e0b25a2e0a95-932601jolw78.jpg",
  },
  {
    title: "Legal",
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/Screenshot-2025-06-10-at-4.17.35%E2%80%AFPM-panorama-729b625f495bf498981c18ddad3950b8-dsmj1qap6h4y.png",
  },
  {
    title: "Manufacturing",
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/Home-Manufacturers1366345471-panorama-3449211df64b9fa3a0e21d9c7f09e1d9-nqe6g3idkr7c.jpg",
  },
  {
    title: "Highly Regulated Industries",
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/gettyimages-2194012901-170667a-panorama-e5d857d8fa1321c9ea5186948ea14cbe-i4m8fvy72s0d.jpg",
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants: Variants = {
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

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function IndustryExpertise() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1440px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Deep industry-specific expertise
          </h2>

          <p className="text-lg mb-8 max-w-md">
            Our industry focus helps your organization work better and stay in
            compliance.
          </p>

          <p className="text-muted-foreground max-w-md leading-relaxed">
            With vertically aligned solutions, practices, and resources focused
            entirely on your industry, we ensure you always comply — and
            surpass your most demanding customers’ expectations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {industries.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="overflow-hidden rounded-lg shadow-sm group"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>

              <div className="bg-[#3a2744] py-4 text-center">
                <span className="text-white font-semibold">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
