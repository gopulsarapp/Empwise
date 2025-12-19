"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion, type Variants } from "framer-motion"

const options = [
  "I do not have an IT team",
  "I have a small IT team (1-2)",
  "I have a large IT team (3+)",
  "I outsource to a managed IT department",
]

const fadeDownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

export default function ITPartnerAssessment() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section className="w-full bg-white py-24">
      <motion.div
        className="mx-auto max-w-[1440px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        variants={fadeDownVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            You don’t need another IT vendor, you need a{" "}
            <span className="text-purple-700">partner who gets you</span>
          </h2>

          <p className="text-base leading-relaxed text-muted-foreground max-w-xl">
            At Integris, we partner with operationally mature small and midsize
            organizations to build IT that’s strong, smart, and built to
            perform. We have an assessment-led approach that allows us to
            understand your business goals and craft a tailored technology
            roadmap that lays the foundation for everything that follows.
            <br />
            <br />
            From managing day-to-day IT operations and strengthening
            cybersecurity to ensuring compliance and advancing your digital
            maturity, we provide solutions that keep you ahead of the curve —
            and your competition.
          </p>
        </motion.div>

        <motion.div
          variants={fadeDownVariants}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-xl shadow-lg border p-8"
        >
          <h3 className="text-lg font-medium mb-6">
            How do you manage your IT?
            <span className="text-red-600">*</span>
          </h3>

          <div className="space-y-4">
            {options.map((option) => (
              <label
                key={option}
                className={cn(
                  "flex items-center gap-4 rounded-md border px-4 py-4 cursor-pointer transition",
                  selected === option
                    ? "border-black bg-muted"
                    : "hover:bg-muted"
                )}
              >
                <input
                  type="radio"
                  name="it-management"
                  className="h-5 w-5 accent-black"
                  checked={selected === option}
                  onChange={() => setSelected(option)}
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>

          <div className="mt-8 border-t pt-6 flex justify-end">
            <button
              disabled={!selected}
              className={cn(
                "flex items-center gap-2 px-8 py-3 rounded-md text-white font-medium transition",
                selected
                  ? "bg-black hover:bg-black/90"
                  : "bg-black/40 cursor-not-allowed"
              )}
            >
              NEXT
              <span aria-hidden>→</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
