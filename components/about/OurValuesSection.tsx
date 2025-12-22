"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import { motion } from "framer-motion"

/* ------------------ Types ------------------ */

type ValueItem = {
  title: string
  description: string
  iconUrl: string
}

interface ContentfulAsset {
  sys: { id: string }
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
    description: string
    pageName: string
    bgImage: {
      sys: { id: string }
    }[]
  }
}

interface ContentfulResponse {
  items: ContentfulEntry[]
  includes?: {
    Asset?: ContentfulAsset[]
  }
}

/* ------------------ Component ------------------ */

export default function OurValuesSection() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [values, setValues] = useState<ValueItem[]>([])

  useEffect(() => {
    async function fetchValues() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}` +
            `&content_type=aboutPageOurValue` +
            `&fields.pageName=about_ourValue`
        )

        const entry = res.data.items[0]
        if (!entry) return

        const assets = res.data.includes?.Asset ?? []

        const mappedValues: ValueItem[] = entry.fields.bgImage
          .map((img) => {
            const asset = assets.find(
              (a) => a.sys.id === img.sys.id
            )
            if (!asset) return null

            return {
              title: asset.fields.title,
              description: asset.fields.description,
              iconUrl: `https:${asset.fields.file.url}`,
            }
          })
          .filter(Boolean) as ValueItem[]

        setTitle(entry.fields.title)
        setDescription(entry.fields.description)
        setValues(mappedValues)
      } catch (error) {
        console.error("Our Values fetch error:", error)
      }
    }

    fetchValues()
  }, [])

  if (!values.length) return null

  return (
    <section className="w-full bg-muted py-28">
      <div className="mx-auto max-w-[1440px] px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            {title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {description}
          </p>
        </div>

        {/* VALUES */}
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-1 text-center space-y-6"
            >
              {/* ICON */}
              <div className="flex justify-center">
                <div
                  className="
                    rounded-full
                    flex items-center justify-center
                    bg-primary
                    text-white
                    shadow-lg
                    w-24 h-24
                    lg:w-20 lg:h-20
                  "
                >
                  <Image
                    src={value.iconUrl}
                    alt={value.title}
                    width={48}
                    height={48}
                    unoptimized
                    className="w-12 h-12 lg:w-10 lg:h-10"
                  />
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold">
                {value.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
