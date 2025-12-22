"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import Image from "next/image"

/* ---------------- TYPES ---------------- */

interface ContentfulAsset {
  sys: {
    id: string
  }
  fields: {
    title: string
    description: string
    file: {
      url: string
    }
  }
}

interface ContentfulEntry {
  fields: {
    title: string
    paragraph: string
    pillars: {
      sys: {
        id: string
      }
    }[]
  }
}

interface ContentfulResponse {
  items: ContentfulEntry[]
  includes?: {
    Asset?: ContentfulAsset[]
  }
}

interface Feature {
  title: string
  description: string
  iconUrl: string
}

/* ---------------- COMPONENT ---------------- */

export default function CompetitiveEdgeSection() {
  const [title, setTitle] = useState("")
  const [paragraph, setParagraph] = useState("")
  const [features, setFeatures] = useState<Feature[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCompetitiveEdge() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=aboutPageCompetitive`
        )

        const entry = res.data.items[0]
        if (!entry) return

        const assets = res.data.includes?.Asset || []

        const mappedFeatures: Feature[] =
          entry.fields.pillars
            .map((pillar) => {
              const asset = assets.find(
                (a) => a.sys.id === pillar.sys.id
              )

              if (!asset) return null

              return {
                title: asset.fields.title,
                description: asset.fields.description,
                iconUrl: `https:${asset.fields.file.url}`,
              }
            })
            .filter(Boolean) as Feature[]

        setTitle(entry.fields.title)
        setParagraph(entry.fields.paragraph)
        setFeatures(mappedFeatures)
      } catch (error) {
        console.error("Contentful fetch error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCompetitiveEdge()
  }, [])

  if (loading) return null

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-[1440px] px-6 space-y-16">

        {/* ---------------- HEADER ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            {title.split("competitive edge")[0]}
            <span className="text-destructive">
              competitive edge
            </span>
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            {paragraph}
          </p>
        </motion.div>

        {/* ---------------- FEATURES ---------------- */}
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
                  <Image
  src={feature.iconUrl}
  alt={feature.title}
  width={48}
  height={48}
  className="
    w-8 h-8
    sm:w-10 sm:h-10
    md:w-12 md:h-12
  "
/>
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
