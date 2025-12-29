"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

/* ------------------ Types ------------------ */

type ExperienceData = {
  title: string
  description: string
  image: string
}

interface ExperienceProps {
  order?: "left" | "right",
  pageName:string
}



type ContentfulResponse = {
  items: Array<{
    fields: {
      pageName: string
      title: string
      description: string
      bgImage: {
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

/* ------------------ Animations ------------------ */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const bgVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

/* ------------------ Component ------------------ */

export default function IntegrisExperience({
  order = "right",pageName
}: ExperienceProps) {
  const [data, setData] = useState<ExperienceData | null>(null)

  useEffect(() => {
    async function fetchExperience() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=${pageName}`
        )

        const entry = res.data.items[0]
        if (!entry) return

        const assets = res.data.includes?.Asset ?? []

        const bgAsset = assets.find(
          (a) => a.sys.id === entry.fields.bgImage.sys.id
        )

        if (!bgAsset) return

        setData({
          title: entry.fields.title,
          description: entry.fields.description,
          image: `https:${bgAsset.fields.file.url}`,
        })
      } catch (error) {
        console.error("Integris experience fetch error:", error)
      }
    }

    fetchExperience()
  }, [pageName])

  if (!data) return null

  return (
    <motion.section
      className="relative w-full min-h-[520px] lg:min-h-[640px] bg-cover bg-center"
      style={{ backgroundImage: `url(${data.image})` }}
      variants={bgVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1440px] px-6 py-24"
        variants={containerVariants}
      >
        <div
          className={cn(
            "flex",
            order === "right" ? "justify-end" : "justify-start"
          )}
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-xl p-8 md:p-10 max-w-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {data.title}
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h3: ({ children }) => (
                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-600 mb-4">
                        {children}
                      </p>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-gray-900">
                        {children}
                      </strong>
                    ),
                    
                  }}
                >
                  {data.description}
                </ReactMarkdown>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}