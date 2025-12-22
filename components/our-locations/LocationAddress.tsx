"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { motion, type Variants } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

/* ================= Types ================= */

type UILocation = {
  title: string
  lines: string[]
}

type ContentfulLocation = {
  city: string
  state: string
  address?: string
  client_support_phone: string
  support_email: string
  sales_phone: string
  sales_email: string
}

type ContentfulResponse = {
  items: Array<{
    fields: {
      nationalContacts: {
        client_support_phone: string
        support_email: string
        sales_phone: string
        sales_email: string
      }
      locations: ContentfulLocation[]
    }
  }>
}

/* ================= Animations ================= */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

/* ================= Component ================= */

export default function LocationAddress() {
  const [locations, setLocations] = useState<UILocation[]>([])

  useEffect(() => {
    async function fetchLocations() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=ourLocation`
        )

        const entry = res.data.items[0]
        if (!entry) return

        const { nationalContacts, locations } = entry.fields

        const uiLocations: UILocation[] = [
          {
            title: "National numbers",
            lines: [
              `Client support: ${nationalContacts.client_support_phone}`,
              `Support: ${nationalContacts.support_email}`,
              `Sales: ${nationalContacts.sales_phone}`,
              `Sales: ${nationalContacts.sales_email}`,
            ],
          },
          ...locations.map((loc) => ({
            title: `${loc.city}, ${loc.state}`,
            lines: [
              ...(loc.address ? loc.address.split(", ") : []),
              `Client support: ${loc.client_support_phone}`,
              `Support: ${loc.support_email}`,
              `Sales: ${loc.sales_phone}`,
              `Sales: ${loc.sales_email}`,
            ],
          })),
        ]

        setLocations(uiLocations)
      } catch (error) {
        console.error("Location fetch error:", error)
      }
    }

    fetchLocations()
  }, [])

  /* Hide if no data */
  if (!locations.length) return null

  return (
    <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {locations.map((location, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card className="border-none shadow-none px-4">
              <CardContent className="p-0 space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {location.title}
                </h3>

                <div className="space-y-1 text-sm text-muted-foreground">
                  {location.lines.map((line, i) => {
                    /* Email */
                    if (line.includes("@")) {
                      const email = line.split(" ").pop()
                      return (
                        <p key={i}>
                          {line.replace(email!, "")}
                          <a
                            href={`mailto:${email}`}
                            className="text-red-600 hover:underline"
                          >
                            {email}
                          </a>
                        </p>
                      )
                    }

                    /* Phone */
                    if (line.match(/\(\d{3}\)/)) {
                      const phone = line.match(/\(\d{3}\)[\s\d-]+/)?.[0]
                      return (
                        <p key={i}>
                          {line.replace(phone!, "")}
                          <a
                            href={`tel:${phone?.replace(/\D/g, "")}`}
                            className="hover:underline"
                          >
                            {phone}
                          </a>
                        </p>
                      )
                    }

                    return <p key={i}>{line}</p>
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
