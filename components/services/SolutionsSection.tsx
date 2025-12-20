"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  UserCog,
  ShieldCheck,
  Cloud,
  ClipboardCheck,
  Users,
} from "lucide-react"

/* ---------------- IMAGE CONST ---------------- */

const image =
  "https://integrisit.com/wp-content/uploads/2025/07/SolutionsGettyImages-1363276415.jpg"

/* ---------------- SERVICES ---------------- */

const services = [
  {
    title: "IT managed services",
    icon: <UserCog />,
  },
  {
    title: "Cybersecurity",
    icon: <ShieldCheck />,
  },
  {
    title: "Cloud solutions",
    icon: <Cloud />,
  },
  {
    title: "Governance, risk, and compliance",
    icon: <ClipboardCheck />,
  },
  {
    title: "Advisory services",
    icon: <Users />,
  },
]

export default function SolutionsSection() {
  return (
    <section className="w-full bg-background py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-purple-700">Transparent</span>, scalable,{" "}
              <span className="text-destructive">and nationwide</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              We offer fully managed, co-managed, and flexible service plans
              with full cost transparency, as well as individual technology
              solutions, assessments, fractional IT leadership, and strategic
              advisory services. All of this is delivered through dedicated,
              industry-aligned practices with nationwide reach.
            </p>

            {/* SERVICES LIST */}
            <div className="space-y-6 pt-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="
                      flex items-center justify-center
                      w-12 h-12
                      rounded-full
                      bg-destructive/10
                      text-destructive
                    "
                  >
                    <span className="[&>svg]:w-6 [&>svg]:h-6">
                      {service.icon}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold">
                    {service.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px]"
          >
            <Image
              src={image}
              alt="Integris solutions"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-2xl shadow-xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
