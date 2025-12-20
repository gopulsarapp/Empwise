"use client"

import { motion } from "framer-motion"
import { User, Compass, Sparkles, BarChart3, Users } from "lucide-react"

const values = [
  {
    title: "People first",
    description:
      "Integris is powered by people, so it’s important we don’t get wrapped up in the wires. Our people always come first.",
    icon: <User />,
    bg: "bg-purple-600",
  },
  {
    title: "Do the right thing",
    description:
      "Our name is rooted in integrity. It’s the heart of how we run the business and guides everything we do.",
    icon: <Compass />,
    bg: "bg-fuchsia-700",
  },
  {
    title: "Get it done right",
    description:
      "A single checkbox can make or break our business. No detail is too small. We want to make it right.",
    icon: <Sparkles />,
    bg: "bg-red-600",
  },
  {
    title: "Own it",
    description:
      "Every team member owns their part. We take responsibility for our clients and hold each other accountable.",
    icon: <BarChart3 />,
    bg: "bg-red-500",
  },
  {
    title: "Build for better",
    description:
      "We don’t just build for today—we build for what’s next. Decisions are rooted in purpose, with an eye on long-term impact.",
    icon: <Users />,
    bg: "bg-orange-500",
  },
]

export default function OurValuesSection() {
  return (
    <section className="w-full bg-muted py-28">
      <div className="mx-auto max-w-[1440px] px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">Our values</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Our core values drive a culture that promotes accountability and
            transparency and powers exceptional client experiences across the
            vertical markets we serve.
          </p>
        </div>

        {/* FLEX CONTAINER */}
        <div
          className="
            flex flex-col
            lg:flex-row
            items-center
            lg:items-start
            gap-20
            lg:gap-12
          "
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
                w-full
                lg:flex-1
                text-center
                space-y-6
              "
            >
              {/* ICON */}
              <div className="flex justify-center">
                <div
                  className={`
                    ${value.bg}
                    rounded-full
                    flex items-center justify-center
                    text-white
                    shadow-lg
                    w-24 h-24        /* MOBILE BIG ICON */
                    lg:w-20 lg:h-20  /* DESKTOP SLIGHTLY SMALLER */
                  `}
                >
                  <span className="
                    [&>svg]:w-12 [&>svg]:h-12
                    lg:[&>svg]:w-10 lg:[&>svg]:h-10
                  ">
                    {value.icon}
                  </span>
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold">
                {value.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="
                text-muted-foreground text-sm leading-relaxed
                max-w-md mx-auto
                lg:max-w-xs
              ">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
