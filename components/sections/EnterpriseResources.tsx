"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { motion, type Variants } from "framer-motion"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { Button } from "@/components/ui/button"

/* =======================
   Types
======================= */

type ContentfulImageLink = {
  sys: {
    id: string
    type: "Link"
    linkType: "Asset"
  }
}

type ContentfulAsset = {
  sys: { id: string }
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
  buttonTitle: string
  buttonUrl: string
  image: ContentfulImageLink
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
   Framer Motion Variants
======================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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
      ease: "easeOut",
    },
  },
}

/* =======================
   Component
======================= */

export default function EnterpriseResources() {
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [paragraph, setParagraph] = useState("")
  const [buttonName, setButtonName] = useState("")
  const [buttonUrl, setButtonUrl] = useState("")
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=enterpriseResources`
        )

        const item = res.data.items[0]

        setTitle(item.fields.title)
        setSubtitle(item.fields.subtitle)
        setParagraph(item.fields.paragraph)
        setButtonName(item.fields.buttonTitle)
        setButtonUrl(item.fields.buttonUrl)

        // Single image from includes.Asset
        const asset = res.data.includes?.Asset?.[0]
        if (asset) {
          setImage(`https:${asset.fields.file.url}`)
        }
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
    <section className="w-full bg-white py-24 overflow-hidden">
      <motion.div
        className="mx-auto max-w-[1440px] px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* Text Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white shadow-xl rounded-lg p-10 lg:p-12 self-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              {subtitle}
            </p>

            {/* Markdown Content */}
            <div className="leading-relaxed">
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
                {paragraph}
              </ReactMarkdown>
            </div>

            <div className="mt-8">
              <Button className="bg-red-600 hover:bg-red-700" asChild>
                <a href={buttonUrl}>
                  {buttonName}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Background Image */}
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden min-h-[420px] lg:min-h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
