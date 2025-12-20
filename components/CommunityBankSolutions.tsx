"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

/* ------------------ IMAGE ------------------ */

const image =
  "https://integrisit.com/wp-content/uploads/2025/08/ApproachGraphic_Updated080125-600x600.png"

/* ------------------ Component ------------------ */

export default function CommunityBankSolutions() {
  return (
    <section className="w-full bg-background py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="flex flex-row lg:flex-col gap-16 items-start">

          {/* LEFT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full lg:w-1/2 h-[360px] sm:h-[420px] lg:h-[520px]"
          >
            <Image
              src={image}
              alt="Integris community bank approach"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </motion.div>

          {/* RIGHT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-10"
          >
            {/* HEADER */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Solutions for community banks
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                All the solutions and consulting you need
              </p>
            </div>

            {/* SECTION 1 */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">
                Fully managed services
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our Integris banking fully managed services include all the
                solutions and consulting you need to keep your systems running
                and prepare them for success. You’ll get strategic development,
                regular gap assessments, infrastructure planning, digital
                enhancements, and more—scaled to your organization.
              </p>
            </div>

            {/* SECTION 2 */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">
                Community bank assessments
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our managed IT services begin with a focused assessment of your
                bank’s technology environment—systems, workflows, compliance,
                data privacy, and security posture—to identify gaps, reduce
                risk, and recommend tailored solutions.
              </p>
            </div>

            {/* SECTION 3 */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">
                Flexible services for community banks
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Already have an IT department? We work alongside internal teams
                through co-managed services, scaling support up or down based
                on your needs—consider Integris an extension of your team.
              </p>
            </div>

            {/* CTA */}
            <Button size="lg" variant="destructive">
              Let’s start the conversation today
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
