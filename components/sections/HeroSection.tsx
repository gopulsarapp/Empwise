"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"


/* ================= Types ================= */

type ContentfulResponse = {
  items: Array<{
    fields: {
      title: string
      subtitle: string
      paragraph: string
      bgImage: {
        sys: { id: string }
      }
      buttonNameFirstText?: string
      buttonNameSecondText?: string
    }
  }>
  includes?: {
    Asset?: Array<{
      sys: { id: string }
      fields: {
        file: { url: string }
      }
    }>
  }
}

type HeroData = {
  title: string
  subtitle: string
  description: string
  image: string
  primaryBtn?: string
  secondaryBtn?: string
}

/* ================= Animations ================= */

const bgVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
}

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const buttonsVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
  },
}

/* ================= Component ================= */

export default function HeroSection() {
  const router = useRouter();
  const [data, setData] = useState<HeroData | null>(null)

  useEffect(() => {
    async function fetchHero() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=homeBgSection`
        )

        const entry = res.data.items[0]
        if (!entry) return

        const assets = res.data.includes?.Asset ?? []
        const imageAsset = assets.find(
          (a) => a.sys.id === entry.fields.bgImage.sys.id
        )

        if (!imageAsset) return

        setData({
          title: entry.fields.title,
          subtitle: entry.fields.subtitle,
          description: entry.fields.paragraph,
          image: `https:${imageAsset.fields.file.url}`,
          primaryBtn: entry.fields.buttonNameFirstText,
          secondaryBtn: entry.fields.buttonNameSecondText,
        })
      } catch (error) {
        console.error("Hero fetch error:", error)
      }
    }

    fetchHero()
  }, [])

  if (!data) return null

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-right"
        style={{ backgroundImage: `url(${data.image})` }}
        variants={bgVariants}
        initial="hidden"
        animate="visible"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#1f1033]/95 via-[#2a0f3d]/85 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-28 md:py-36 grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="text-white space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {data.title}
          </h1>

          <p className="text-lg md:text-xl max-w-xl whitespace-pre-line">
            {data.subtitle}
          </p>

          <p className="text-sm md:text-base max-w-xl opacity-90">
            {data.description}
          </p>

          <motion.div
            variants={buttonsVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-4 pt-4"
          >
            {data.primaryBtn && (
              <Button className="bg-red-600 hover:bg-red-700">
                {data.primaryBtn}
              </Button>
            )}

            {data.secondaryBtn && (
              <Button
                variant="secondary"
                onClick={() => router.push("/contact")}
              >
                {data.secondaryBtn}
              </Button>
            )}
          </motion.div>
        </motion.div>

        <div />
      </div>
    </section>
  )
}
