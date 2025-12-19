"use client"

import { useEffect, useRef } from "react"
import { motion, type Variants } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Integris has been an outstanding partner… Their team is professional, knowledgeable and customer-service driven. Integris’ proactive collaborative approach has been critical in helping us build an IT infrastructure that enables our success today and supports our long-term positioning strategy for the future.",
    name: "Michelle Angalet",
    title: "COO",
    company: "Inspiritus",
  },
  {
    quote:
      "Our firm has worked with the Integris team for over 20 years, and we value the true partnership between us. They are an extension of our business and are always willing to step in and do whatever it takes to meet our firm’s needs... Our firm has peace of mind knowing that our technology is managed and supported by such a trusted, competent company.",
    name: "Gayla Thornton",
    title: "Partner",
    company: "Armstrong, Backus & Co.",
  },
  {
    quote:
      "They have helped us scale and grow to the tune of a new branch every year as well as a core conversion last year, all while keeping us very secure and performing very well on our internal audits and our government exams. That personal relationship and trust has led to extreme growth for our bank.",
    name: "Jared Curtis",
    title: "Senior Credit and Systems Manager",
    company: "Frontier Bank of Texas",
  },
  {
    quote:
      "Integris is always attentive to our needs. Integris takes ownership and consistently delivers 1st class service. Always a pleasure to collaborate with and a valuable asset to be had by any team.",
    name: "Dan G.",
    title: "IT Support Specialist",
    company: "Lamb Technologies",
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches
    if (!isMobile || !scrollRef.current) return

    const container = scrollRef.current
    let animationId: number
    let isPaused = false
    const speed = 0.35 // px per frame

    const autoScroll = () => {
      if (!isPaused) {
        const maxScroll =
          container.scrollWidth - container.clientWidth

        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0
        } else {
          container.scrollLeft += speed
        }
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
  }, [])

  return (
    <section className="w-full bg-white py-24 my-24">
      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-center text-3xl md:text-4xl font-bold mb-16 px-6"
        >
          We’re obsessed with providing a flawless experience, and clients are
          responding
        </motion.h2>

        <div
          ref={scrollRef}
          className="
            flex gap-6 px-6 overflow-x-scroll snap-x snap-mandatory
            md:grid md:grid-cols-2 lg:grid-cols-4
            md:gap-8 md:overflow-visible
          "
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              className="min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-center h-full"
            >
              <Card className="relative border-2 border-orange-400 rounded-xl h-full">
                <CardContent className="p-6 space-y-6">
                  <p className="text-sm leading-relaxed">{t.quote}</p>
                  <div className="absolute -bottom-3 left-10 w-6 h-6 bg-white border-r-2 border-b-2 border-orange-400 rotate-45" />
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
