"use client"

import {
  Bell,
  Users,
  BookOpen,
  ShieldCheck,
  PiggyBank,
  Binoculars,
} from "lucide-react"
import {
  motion,
  type Variants,
  type Transition,
} from "framer-motion"
import { useEffect, useState } from "react"

/* ------------------ Data ------------------ */

const items = [
  {
    icon: Bell,
    title: "Extraordinary service",
    description:
      "We deliver the highest level of service in the industry, proven by industry-leading CSAT and Net Promoter scores.",
  },
  {
    icon: Users,
    title: "Flexible solutions",
    description:
      "Fully managed, co-managed, or targeted assistance — services that meet you where you are.",
  },
  {
    icon: BookOpen,
    title: "Deep industry expertise",
    description:
      "Dedicated teams that understand regulatory requirements, compliance, and productivity tools.",
  },
  {
    icon: ShieldCheck,
    title: "Airtight cybersecurity",
    description:
      "Risk-aligned security practices designed to meet strict regulatory standards.",
  },
  {
    icon: PiggyBank,
    title: "Cost transparency",
    description:
      "Tailored plans that ensure you only pay for what you use while maximizing efficiency.",
  },
  {
    icon: Binoculars,
    title: "Competitive advantage",
    description:
      "Future-ready solutions that accelerate digital maturity and growth.",
  },
]

/* ------------------ Motion ------------------ */

const transition: Transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1],
}

/* Header: TOP → BOTTOM */
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition },
}

/* Cards container */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

/* Cards: BOTTOM → TOP */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition },
}

/* ------------------ Component ------------------ */

export default function WhyChooseUs() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* ✅ Header (TOP → BOTTOM) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 max-w-2xl"
        >
          <motion.h2
            variants={headerVariants}
            className="text-3xl md:text-4xl font-bold text-slate-900"
          >
            Why organizations choose us
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="mt-4 text-lg text-slate-600"
          >
            Purpose-built services designed to deliver confidence,
            security, and long-term value.
          </motion.p>
        </motion.div>

        {loading ? (
          /* Skeleton Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 p-6"
              >
                <div className="h-10 w-10 rounded bg-slate-200 mb-4" />
                <div className="h-5 w-1/2 rounded bg-slate-200 mb-3" />
                <div className="h-4 w-full rounded bg-slate-200 mb-2" />
                <div className="h-4 w-3/4 rounded bg-slate-200" />
              </div>
            ))}
          </div>
        ) : (
          /* ✅ Cards container MUST animate */
          <motion.div
            variants={containerVariants}
            initial="hidden"          // ✅ REQUIRED
            whileInView="visible"     // ✅ REQUIRED
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="
                  group rounded-xl border border-slate-200 p-6
                  transition-shadow duration-300 hover:shadow-xl
                "
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="
                      mr-5
                      flex h-12 w-12 items-center justify-center
                      rounded-lg bg-red-50 text-red-600
                      group-hover:bg-red-600 group-hover:text-white
                      transition-colors
                    "
                  >
                    <item.icon className="h-6 w-6" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
