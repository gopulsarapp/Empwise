"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import Image from "next/image"

/* ================= Types ================= */

type ContentfulResponse = {
  items: Array<{
    fields: {
      title: string
      paragraph: string
      img: {
        sys: { id: string }
      }
    }
  }>
  includes?: {
    Asset?: Array<{
      sys: { id: string }
      fields: {
        file: {
          url: string
        }
      }
    }>
  }
}

type OurStoryData = {
  title: string
  paragraphs: string[]
  image: string
}

/* ================= Component ================= */

export default function OurStorySection() {
  const [data, setData] = useState<OurStoryData | null>(null)

  useEffect(() => {
    async function fetchOurStory() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=aboutPageOurStory`
        )

        const entry = res.data.items[0]
        if (!entry) return

        const assets = res.data.includes?.Asset ?? []

        const imageAsset = assets.find(
          (a) => a.sys.id === entry.fields.img.sys.id
        )

        if (!imageAsset) return

        setData({
          title: entry.fields.title,
          paragraphs: entry.fields.paragraph
            .replace(/\s+$/, "")
            .split("\n\n"),
          image: `https:${imageAsset.fields.file.url}`,
        })
      } catch (error) {
        console.error("Our Story fetch error:", error)
      }
    }

    fetchOurStory()
  }, [])

  if (!data) return null

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[220px] sm:h-[280px] lg:h-[320px]"
          >
            <Image
              src={data.image}
              alt={data.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </motion.div>

          {/* RIGHT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">
              {data.title}
            </h2>

            {data.paragraphs.map((text, index) => (
              <p
                key={index}
                className="text-muted-foreground leading-relaxed"
              >
                {text}
              </p>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
