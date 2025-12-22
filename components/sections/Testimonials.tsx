"use client"

import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { motion, type Variants } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

/* ------------------ Types ------------------ */

interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
}

interface TestimonialsProps {
  pageName: string
}

type ContentfulFields = {
  pageName: string
  title: string
  testimonials: Testimonial[]
}

type ContentfulResponse = {
  items: { fields: ContentfulFields }[]
}

/* ------------------ Animations ------------------ */

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

/* ------------------ Component ------------------ */

export default function Testimonials({ pageName }: TestimonialsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const [data, setData] = useState<{
    title: string
    testimonials: Testimonial[]
  } | null>(null)

  /* Fetch testimonials */
  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=testimonialsHomeAndManagedITServices`
        )

        const entry = res.data.items.find(
          (item) => item.fields.pageName === pageName
        )

        if (!entry) return

        setData({
          title: entry.fields.title,
          testimonials: entry.fields.testimonials,
        })
      } catch (error) {
        console.error("Testimonials fetch error:", error)
      }
    }

    fetchTestimonials()
  }, [pageName])

  /* Auto-scroll (mobile only) */
  useEffect(() => {
    if (!scrollRef.current || !data) return

    const isMobile = window.matchMedia("(max-width: 767px)").matches
    if (!isMobile) return

    const container = scrollRef.current
    let animationId: number
    let isPaused = false
    const speed = 0.35

    const autoScroll = () => {
      if (!isPaused) {
        const maxScroll =
          container.scrollWidth - container.clientWidth
        container.scrollLeft =
          container.scrollLeft >= maxScroll
            ? 0
            : container.scrollLeft + speed
      }
      animationId = requestAnimationFrame(autoScroll)
    }

    animationId = requestAnimationFrame(autoScroll)

    const pause = () => (isPaused = true)
    const resume = () => (isPaused = false)

    container.addEventListener("touchstart", pause)
    container.addEventListener("touchend", resume)
    container.addEventListener("mouseenter", pause)
    container.addEventListener("mouseleave", resume)

    return () => {
      cancelAnimationFrame(animationId)
      container.removeEventListener("touchstart", pause)
      container.removeEventListener("touchend", resume)
      container.removeEventListener("mouseenter", pause)
      container.removeEventListener("mouseleave", resume)
    }
  }, [data])

  /* Hide section if no data */
  if (!data) return null

  return (
    <section className="w-full bg-white py-24 my-24">
      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-center text-3xl md:text-4xl font-bold mb-16 px-6 whitespace-pre-line"
        >
          {data.title}
        </motion.h2>

        {/* Testimonials */}
        <div
          ref={scrollRef}
          className="
            flex justify-center gap-6 px-6
            overflow-x-scroll snap-x snap-mandatory
            md:grid md:grid-cols-2 lg:grid-cols-4
            md:gap-8 md:overflow-visible
          "
        >
          {data.testimonials.map((t, i) => (
            <motion.div
              key={`${t.name}-${i}`}
              variants={itemVariants}
              className="
                min-w-[85%] sm:min-w-[70%] md:min-w-0
                snap-center h-full mx-auto
              "
            >
              <Card className="relative border-2 border-orange-400 rounded-xl h-full">
                <CardContent className="p-6 space-y-6">
                  <p className="text-sm leading-relaxed">{t.quote}</p>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-r-2 border-b-2 border-orange-400 rotate-45" />
                </CardContent>
              </Card>

              <div className="mt-8 text-center">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.title}</p>
                <p className="text-sm text-muted-foreground">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
