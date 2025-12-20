"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function OurStorySection() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: FULL WIDTH IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full h-[220px] sm:h-[280px] lg:h-[320px]"
          >
            <Image
              src="/asset/logo.png"
              alt="Integris logo"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </motion.div>

          {/* RIGHT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Our story</h2>

            <p className="text-muted-foreground leading-relaxed">
              Integris was founded in 2021 with a name that reflects our core
              principle: integrity. And it’s something we aim to deliver,
              every day. This remains consistent throughout constant change.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our company was formed through the merger of several highly
              successful IT providers. We’ve combined great people who share
              important values, and strong practices from these organizations
              to form our company. As a result, we’ve experienced extraordinary
              growth, through both acquisition and organic sales gains.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              What began as professionals sharing best practices has grown into
              a leading MSP with vision, specialized expertise, and a committed
              focus on small to midsize organizations.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We set ourselves apart through industry-specific solutions,
              operational excellence, and a people-first approach. This
              commitment to quality has earned us the highest Glassdoor ratings
              and recognition as one of the best places to work in 2025.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
