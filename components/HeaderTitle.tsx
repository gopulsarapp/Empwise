"use client"

import { motion, type Variants, type Transition } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"
import { cn } from "@/lib/utils"

/* ------------------ Types ------------------ */

interface HeaderTitleProps {
  pageName: string
}

type ContentfulAsset = {
  sys: { id: string }
  fields: {
    file: {
      url: string
    }
  }
}

type ContentfulBannerFields = {
  title: string
  subtitle?: string
  desc?: string
  pageName: string
  bg: {
    sys: {
      id: string
    }
  }
  buttonName?: string
  buttonUrl?: string
}

type ContentfulResponse = {
  items: { fields: ContentfulBannerFields }[]
  includes?: {
    Asset?: ContentfulAsset[]
  }
}

/* ------------------ Animations ------------------ */

const sharedTransition: Transition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: sharedTransition },
}

const bgVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: sharedTransition },
}

/* ------------------ Component ------------------ */

export default function HeaderTitle({ pageName }: HeaderTitleProps) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<{
    title: string
    subtitle?: string
    desc?: string
    imageUrl: string
    buttonName?: string
    buttonUrl?: string
  } | null>(null)

  useEffect(() => {
    async function fetchBanner() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=pageBannerAllPage`
        )

        const banner = res.data.items.find(
          (item) => item.fields.pageName === pageName
        )

        if (!banner) {
          setData(null)
          return
        }

        const assetId = banner.fields.bg.sys.id
        const asset = res.data.includes?.Asset?.find(
          (a) => a.sys.id === assetId
        )

        setData({
          title: banner.fields.title,
          subtitle: banner.fields.subtitle,
          desc: banner.fields.desc,
          imageUrl: asset ? `https:${asset.fields.file.url}` : "",
          buttonName: banner.fields.buttonName,
          buttonUrl: banner.fields.buttonUrl,
        })
      } catch (error) {
        console.error("Contentful fetch error:", error)
        setData(null)
      } finally {
        setTimeout(() => setLoading(false), 600)
      }
    }

    fetchBanner()
  }, [pageName])

  /* ✅ Hide header completely if no data */
  if (!data) return null

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <motion.div
        variants={bgVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative mx-auto max-w-[1440px] px-6 py-24 md:py-32 text-white">
        {loading ? (
          <div className="space-y-6 max-w-xl animate-pulse">
            <div className="h-12 w-3/4 rounded bg-white/20" />
            <div className="h-6 w-1/2 rounded bg-white/20" />
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              className={cn(
                "max-w-2xl font-bold tracking-tight",
                "text-4xl md:text-5xl lg:text-6xl"
              )}
            >
              {data.title}
            </motion.h1>

            {data.subtitle && (
              <motion.p
                variants={itemVariants}
                className="max-w-xl text-lg md:text-xl text-slate-200"
              >
                {data.subtitle}
              </motion.p>
            )}

            {data.desc && (
              <motion.p
                variants={itemVariants}
                className="max-w-2xl text-base md:text-lg text-slate-300"
              >
                {data.desc}
              </motion.p>
            )}

            {data.buttonName && (
              <motion.div variants={itemVariants}>
                <Link
                  href={data.buttonUrl ?? "#"}
                  className="inline-flex items-center rounded-xl bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90"
                >
                  {data.buttonName}
                </Link>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
