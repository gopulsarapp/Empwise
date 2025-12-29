"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
// import ContactForm from "@/components/Contact/ContactForm"

/* ------------------ Types ------------------ */

type SectionData = {
  title: string
  paragraph: string
}

interface HeaderFormSectionProps {
  contentType: string
  selectPage: string
}

interface ContentfulEntry {
  fields: {
    pageName: string
    title: string
    paragraph: string
  }
}

interface ContentfulResponse {
  items: ContentfulEntry[]
}

/* ------------------ Component ------------------ */

export default function HeaderFormSection({
  contentType,
  selectPage,
}: HeaderFormSectionProps) {
  const [data, setData] = useState<SectionData | null>(null)

  useEffect(() => {
    async function fetchSection() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=${contentType}`
        )

        // ✅ FILTER BY fields.pageName
        const entry = res.data.items.find(
          (item) => item.fields.pageName === selectPage
        )

        if (!entry) {
          console.warn(`No section found for pageName: ${selectPage}`)
          return
        }

        setData({
          title: entry.fields.title,
          paragraph: entry.fields.paragraph,
        })
      } catch (error) {
        console.error("Contentful fetch error:", error)
      }
    }

    fetchSection()
  }, [contentType, selectPage])

  if (!data) return null

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-[1440px] px-6 grid grid-cols-1 lg:grid-cols-1 gap-16 items-start">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl text-center md:text-5xl font-bold mb-6">
            {data.title}
          </h1>

          <div className="text-primary-900 text-muted-foreground space-y-4 leading-relaxed">
            {data.paragraph
              .trim()
              .split("\n\n")
              .map((para, index) => (
                <p key={index}>{para}</p>
              ))}
          </div>

        </motion.div>

        {/* FORM */}
        {/*   <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
         <ContactForm /> 
        </motion.div>*/}

      </div>
    </section>
  )
}
