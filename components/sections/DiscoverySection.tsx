"use client"

import { motion, type Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeDownVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

export default function DiscoverySection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage:
          "url('https://integrisit.com/wp-content/uploads/2025/06/Abstract_Footer_.jpg')",
      }}
    >
      <motion.div
        className="mx-auto max-w-[1440px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={fadeDownVariants}
          className="bg-white p-12 shadow-xl max-w-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The first step toward better IT.
            <br />
            <span>Book a discovery session.</span>
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            Aligning your IT strategy with your business objectives is crucial
            to compete and win in today&apos;s fast-paced digital world.
            Let&apos;s start by discussing your key priorities—whether it&apos;s
            optimizing your technology, improving compliance, or addressing
            critical IT needs.
            <br />
            <br />
            We&apos;ll focus on understanding your challenges, exploring tailored
            solutions, and demonstrating how we can drive value for your
            organization from day one.
            <br />
            <br />
            At Integris, we&apos;re committed to helping you continue to succeed.
          </p>
        </motion.div>

        <motion.div
          variants={fadeDownVariants}
          className="bg-white border-4 border-red-600 shadow-2xl"
        >
          <div className="bg-red-600 text-white text-center py-4 text-xl font-semibold">
            Book a discovery session
          </div>

          <form className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First name*"
                className="border px-4 py-3 w-full"
                required
              />
              <input
                type="text"
                placeholder="Last name*"
                className="border px-4 py-3 w-full"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Business email address*"
                className="border px-4 py-3 w-full"
                required
              />
              <input
                type="tel"
                placeholder="Phone number (optional)"
                className="border px-4 py-3 w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Company name*"
                className="border px-4 py-3 w-full"
                required
              />
              <input
                type="text"
                placeholder="Job title (optional)"
                className="border px-4 py-3 w-full"
              />
            </div>

            <input
              type="text"
              placeholder="How did you hear about us?*"
              className="border px-4 py-3 w-full"
              required
            />

            <textarea
              rows={4}
              placeholder="Is there anything you would like us to know?"
              className="border px-4 py-3 w-full"
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-red-600 text-white px-8 py-3 font-medium hover:bg-red-700 transition"
              >
                Reach out
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
