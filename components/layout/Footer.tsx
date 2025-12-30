"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { Facebook, Linkedin, Youtube } from "lucide-react"
import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"

/* ================= TOP → BOTTOM ANIMATION ================= */

const topToBottomVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const itemTopToBottomVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

/* ================= TYPES ================= */

type ContentfulAsset = {
  sys: { id: string }
  fields: {
    file: { url: string }
  }
}

type FooterLegalLink = {
  label: string
  url: string
}

type FooterData = {
  brandName: string
  footerLegalLink: FooterLegalLink[]
  socialmedia: {
    facebook?: string
    linkedin?: string
    youtube?: string
  }
}

type ContentfulResponse = {
  items: { fields: FooterData }[]
  includes?: {
    Asset?: ContentfulAsset[]
  }
}

/* ================= COMPONENT ================= */

export default function Footer() {
  const [footerLogo, setFooterLogo] = useState<string | null>(null)
  const [data, setData] = useState<FooterData | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=footer`
        )

        const item = res.data.items[0]?.fields
        const assets = res.data.includes?.Asset ?? []

        if (item) {
          setData(item)
        }

        if (assets.length > 0) {
          setFooterLogo(`https:${assets[0].fields.file.url}`)
        }
      } catch (error) {
        console.error("Contentful fetch error:", error)
      }
    }

    fetchData()
  }, [])

  if (!data) return null

  return (
    <motion.footer
      className="w-full bg-gradient-to-r from-[#3a264a] to-[#2f203f] text-white"
      variants={topToBottomVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-[1440px] px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">

          {/* LOGO */}
          {footerLogo && (
            <motion.div variants={itemTopToBottomVariants}>
              <Image
                src={footerLogo}
                alt={`${data.brandName} logo`}
                width={120}
                height={60}
                priority
                className="h-auto w-auto"
              />
            </motion.div>
          )}

          {/* SOCIAL ICONS */}
          <motion.div
            variants={itemTopToBottomVariants}
            className="flex items-center gap-6 md:col-span-2"
          >
            {data.socialmedia.facebook && (
              <Link href={data.socialmedia.facebook} aria-label="Facebook">
                <Facebook className="h-5 w-5 opacity-80 hover:opacity-100 transition" />
              </Link>
            )}

            {data.socialmedia.linkedin && (
              <Link href={data.socialmedia.linkedin} aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 opacity-80 hover:opacity-100 transition" />
              </Link>
            )}

            {data.socialmedia.youtube && (
              <Link href={data.socialmedia.youtube} aria-label="YouTube">
                <Youtube className="h-5 w-5 opacity-80 hover:opacity-100 transition" />
              </Link>
            )}
          </motion.div>

          {/* LEGAL LINKS */}
          {data.footerLegalLink.map((item, index) => (
            <motion.div
              key={index}
              variants={itemTopToBottomVariants}
              className="text-sm md:text-right"
            >
              <Link href={item.url} className="hover:underline">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <motion.div
        variants={itemTopToBottomVariants}
        className="border-t border-white/10"
      >
        <div className="mx-auto max-w-[1440px] px-6 py-6 text-sm text-white/80">
          © {new Date().getFullYear()} {data.brandName}
        </div>
      </motion.div>
    </motion.footer>
  )
}
