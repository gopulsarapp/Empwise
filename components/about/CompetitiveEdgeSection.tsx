"use client"

import { motion } from "framer-motion"
import {
  Binoculars,
  Globe,
  Factory,
  BookOpen,
} from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "Future-ready solutions",
    description:
      "Integris is an MSP that safeguards you today while preparing you for the future. With our tailored solutions, industry expertise, and visionary approach, we help you manage current IT needs while delivering transformative offerings.",
    icon: <Binoculars />,
  },
  {
    title: "A world-class customer experience",
    description:
      "We are passionate about delivering a seamless, intuitive, and tailored experience, with a personal approach and a model designed for your specific needs.",
    icon: <Globe />,
  },
  {
    title: "Our industry-specific approach",
    description:
      "Integris is aligned by industry, providing practices and resources tailored to legal, financial, manufacturing, healthcare, nonprofit, and more—supported by experts who understand your challenges.",
    icon: <Factory />,
  },
  {
    title: "Enterprise resources for SMBs",
    description:
      "We focus exclusively on SMBs, delivering enterprise-level solutions with the scale, certifications, and expertise required—customized at both the technology and industry level.",
    icon: <BookOpen />,
  },
]

export default function CompetitiveEdgeSection() {
  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-[1440px] px-6 space-y-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Integris provides a{" "}
            <span className="text-destructive">competitive edge</span>
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            We go beyond traditional IT management by building strategic IT
            roadmaps, optimizing IT operations, strengthening cybersecurity,
            refining cloud solutions, and ensuring compliance.
          </p>
        </motion.div>

        {/* FEATURES */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start"
            >
              {/* ICON */}
              <div className="flex-shrink-0">
                <div
                  className="
                    flex items-center justify-center
                    rounded-xl
                    bg-destructive/10
                    text-destructive
                    w-16 h-16
                    sm:w-20 sm:h-20
                    md:w-24 md:h-24
                  "
                >
                  <span className="
                    [&>svg]:w-8 [&>svg]:h-8
                    sm:[&>svg]:w-10 sm:[&>svg]:h-10
                    md:[&>svg]:w-12 md:[&>svg]:h-12
                  ">
                    {feature.icon}
                  </span>
                </div>
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-3 text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}