"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import clsx from "clsx"
import { motion, type Variants } from "framer-motion"
import axios from "axios"

const ITEM_WIDTH = 220

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type Logo = {
  src: string
  alt: string
}

type ContentfulSys = {
  id: string
}

type ContentfulAsset = {
  sys: ContentfulSys
  fields: {
    title: string
    file: {
      url: string
    }
  }
}

type ContentfulImageLink = {
  sys: ContentfulSys
}

type IndustryRecognitionFields = {
  title: string
  image: ContentfulImageLink[]
}

type ContentfulItem<T> = {
  fields: T
}

type ContentfulResponse = {
  items: ContentfulItem<IndustryRecognitionFields>[]
  includes?: {
    Asset?: ContentfulAsset[]
  }
}

/* -------------------------------------------------------------------------- */
/*                              Framer Variants                               */
/* -------------------------------------------------------------------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

/* -------------------------------------------------------------------------- */
/*                               Component                                    */
/* -------------------------------------------------------------------------- */

export default function IndustryRecognition() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const [title, setTitle] = useState<string>("")
  const [logos, setLogos] = useState<Logo[]>([])
  const [active, setActive] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  /* ------------------------------ Fetch Data ------------------------------ */
  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=industryRecognition`
        )

        const item = res.data.items[0]
        const assets = res.data.includes?.Asset ?? []

        setTitle(item.fields.title)

        const mappedLogos: Logo[] = item.fields.image
          .map((img: ContentfulImageLink): Logo | null => {
            const asset = assets.find(
              (a: ContentfulAsset) => a.sys.id === img.sys.id
            )

            if (!asset) return null

            return {
              src: `https:${asset.fields.file.url}`,
              alt: asset.fields.title,
            }
          })
          .filter((logo): logo is Logo => logo !== null)

        setLogos(mappedLogos)
      } catch (error) {
        console.error("Contentful fetch error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  /* -------------------------- Auto Scroll (Mobile) ------------------------- */
  useEffect(() => {
    if (loading) return
    if (typeof window === "undefined") return
    if (!scrollRef.current || logos.length === 0) return

    const isMobile = window.matchMedia("(max-width: 767px)").matches
    if (!isMobile) return

    const container = scrollRef.current

    const interval = setInterval(() => {
      const maxScroll =
        container.scrollWidth - container.clientWidth

      if (container.scrollLeft >= maxScroll) {
        container.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        container.scrollBy({ left: ITEM_WIDTH, behavior: "smooth" })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [logos, loading])

  /* ---------------------------- Scroll Handler ----------------------------- */
  const handleScroll = (): void => {
    if (!scrollRef.current) return

    const index = Math.round(
      scrollRef.current.scrollLeft / ITEM_WIDTH
    )

    setActive(Math.min(index, logos.length - 1))
  }

  /* ------------------------------- Loading -------------------------------- */
  if (loading) {
    return (
      <section className="w-full py-16 bg-[#3a2744] text-white text-center">
      </section>
    )
  }

  /* -------------------------------- Render -------------------------------- */
  return (
    <motion.section
      className="w-full bg-[#3a2744] text-white py-16 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {title && (
        <motion.h2
          variants={itemVariants}
          className="text-center text-xl md:text-2xl font-semibold mb-10 px-6"
        >
          {title}
        </motion.h2>
      )}

      <motion.div
        ref={scrollRef}
        onScroll={handleScroll}
        className={clsx(
          "flex md:grid md:grid-cols-6 items-center gap-14 px-6",
          "overflow-x-auto md:overflow-visible",
          "snap-x snap-mandatory md:snap-none scrollbar-hide"
        )}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={`${logo.alt}-${index}`}
            variants={itemVariants}
            className="relative min-w-[220px] md:min-w-0 h-[72px] snap-center flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
              unoptimized
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination Dots */}
      <div className="mt-8 flex justify-center gap-2 md:hidden">
        {logos.map((_, i) => (
          <motion.span
            key={i}
            animate={
              active === i
                ? { scale: 1.4, opacity: 1 }
                : { scale: 1, opacity: 0.5 }
            }
            transition={{ duration: 0.3 }}
            className="h-2 w-2 rounded-full bg-white"
          />
        ))}
      </div>
    </motion.section>
  )
}
