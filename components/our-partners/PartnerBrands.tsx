"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"
import { motion, type Variants } from "framer-motion"

/* ================= Types ================= */

type ContentfulAsset = {
  sys: { id: string }
  fields: {
    title: string
    description?: string
    file: {
      url: string
    }
  }
}

type ContentfulResponse = {
  items: {
    fields: {
      ourPartnerImage: { sys: { id: string } }[]
      ourPartnerCompany: string
    }
  }[]
  includes?: {
    Asset?: ContentfulAsset[]
  }
}

type PartnerBrand = {
  src: string
  alt: string
  href?: string
}

/* ================= Animations ================= */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

/* ================= Component ================= */

export default function PartnerBrands() {
  const [brands, setBrands] = useState<PartnerBrand[]>([])

  useEffect(() => {
    async function fetchPartners() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=ourPartnerCompany`
        )

        const entry = res.data.items[0]
        if (!entry) return

        const assets = res.data.includes?.Asset ?? []

        const mappedBrands: PartnerBrand[] =
          entry.fields.ourPartnerImage.map((img) => {
            const asset = assets.find((a) => a.sys.id === img.sys.id)

            if (!asset) return null

            return {
              src: `https:${asset.fields.file.url}`,
              alt: asset.fields.title,
              href: asset.fields.description || undefined,
            }
          }).filter(Boolean) as PartnerBrand[]

        setBrands(mappedBrands)
      } catch (error) {
        console.error("PartnerBrands fetch error:", error)
      }
    }

    fetchPartners()
  }, [])

  /* Hide if no data */
  if (!brands.length) return null

  return (
    <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-4
          gap-10
          items-center
        "
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center justify-center"
          >
            {brand.href ? (
              <a
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={220}
                  height={120}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </a>
            ) : (
              <Image
                src={brand.src}
                alt={brand.alt}
                width={220}
                height={120}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
