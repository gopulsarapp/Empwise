"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import axios from "axios"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

/* =======================
   Types (Contentful)
======================= */

type Industry = {
  title: string
  image: string
}

type ContentfulImageLink = {
  sys: {
    id: string
    type: "Link"
    linkType: "Asset"
  }
}

type ContentfulAsset = {
  sys: {
    id: string
  }
  fields: {
    title: string
    file: {
      url: string
    }
  }
}

type ContentfulEntryFields = {
  title: string
  subtitle: string
  paragraph: string
  industrySpecificImage: ContentfulImageLink[]
}

type ContentfulResponse = {
  items: {
    fields: ContentfulEntryFields
  }[]
  includes?: {
    Asset?: ContentfulAsset[]
  }
}

/* =======================
   Framer Motion
======================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

/* =======================
   Component
======================= */

export default function IndustryExpertise() {
  const [industries, setIndustries] = useState<Industry[]>([])
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [paragraph, setParagraph] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=industryExpertise`
        )

        const item = res.data.items[0]
        const assets: ContentfulAsset[] = res.data.includes?.Asset ?? []

        setTitle(item.fields.title)
        setSubtitle(item.fields.subtitle)
        setParagraph(item.fields.paragraph)

        const mappedIndustries: Industry[] =
          item.fields.industrySpecificImage
            .map((imgLink) => {
              const asset = assets.find(
                (a) => a.sys.id === imgLink.sys.id
              )

              if (!asset) return null

              return {
                title: asset.fields.title,
                image: `https:${asset.fields.file.url}`,
              }
            })
            .filter((i): i is Industry => i !== null)

        setIndustries(mappedIndustries)
      } catch (error) {
        console.error("Contentful fetch error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return null

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1440px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Text */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h2>

          {/* Subtitle (Markdown enabled if needed) */}
          <div className="text-lg mb-6 max-w-md">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {subtitle}
            </ReactMarkdown>
          </div>

          {/* Paragraph / Main Content (### + bold supported) */}
          <div className="max-w-md leading-relaxed text-muted-foreground">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h3: ({ children }) => (
                  <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 text-gray-600">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-gray-900">
                    {children}
                  </strong>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="text-gray-600">
                    {children}
                  </li>
                ),
              }}
            >
              {paragraph}
            </ReactMarkdown>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {industries.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="overflow-hidden rounded-lg shadow-sm group"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>

              <div className="bg-[#3a2744] py-4 text-center">
                <span className="text-white font-semibold">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
