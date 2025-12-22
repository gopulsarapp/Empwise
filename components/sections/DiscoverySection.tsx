"use client"

import { motion, type Variants } from "framer-motion"
import { useEffect, useState } from "react"
import axios from "axios"
import ContactForm from "../Contact/ContactForm"

/* ------------------ Types ------------------ */

type ContentfulAsset = {
  sys: { id: string }
  fields: {
    file: {
      url: string
    }
  }
}

type DiscoveryFields = {
  title: string
  paragraph: string
  pageName: string
  bgImage: {
    sys: {
      id: string
    }
  }
}

type ContentfulResponse = {
  items: { fields: DiscoveryFields }[]
  includes?: {
    Asset?: ContentfulAsset[]
  }
}

/* ------------------ Animations ------------------ */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const fadeDownVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

/* ------------------ Component ------------------ */

export default function DiscoverySection() {
  const [data, setData] = useState<{
    title: string
    paragraph: string
    bgImage: string
  } | null>(null)

  useEffect(() => {
    async function fetchDiscovery() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=footerDiscoveryBook`
        )

        const item = res.data.items[0]
        if (!item) return

        const assetId = item.fields.bgImage.sys.id
        const asset = res.data.includes?.Asset?.find(
          (a) => a.sys.id === assetId
        )

        setData({
          title: item.fields.title,
          paragraph: item.fields.paragraph,
          bgImage: asset ? `https:${asset.fields.file.url}` : "",
        })
      } catch (error) {
        console.error("Discovery section fetch error:", error)
        setData(null)
      }
    }

    fetchDiscovery()
  }, [])

  /* ✅ Hide section completely if no data */
  if (!data) return null

  return (
    <motion.section
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-cover bg-center bg-no-repeat py-24"
      style={{ backgroundImage: `url(${data.bgImage})` }}
    >
      <motion.div
        className="mx-auto max-w-[1440px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Text Box */}
        <motion.div
          variants={fadeDownVariants}
          className="bg-white p-12 shadow-xl max-w-xl"
        >
          <h2 className="text-3xl md:text-3xl font-bold mb-6 whitespace-pre-line">
            {data.title}
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
            {data.paragraph
              ?.replace(/\s+$/, "")
              .split("\n")
              .map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
          </p>
        </motion.div>

        {/* Form */}
        <ContactForm/>
      </motion.div>
    </motion.section>
  )
}
