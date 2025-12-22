"use client"

import { useEffect, useState } from "react"
import axios from "axios"

/* ================= Types ================= */

type ContentfulResponse = {
  items: Array<{
    fields: {
      pageName: string
      description: string
      founderNameTitle: string
      founderNameDesc: string
    }
  }>
}

type FounderData = {
  pageTitle: string
  timeline: string
  foundersTitle: string
  foundersDesc: string
}

/* ================= Component ================= */

export default function FounderSection() {
  const [data, setData] = useState<FounderData | null>(null)

  useEffect(() => {
    async function fetchFounderPage() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=founderPage`
        )

        const entry = res.data.items[0]
        if (!entry) return

        setData({
          pageTitle: entry.fields.pageName,
          timeline: entry.fields.description,
          foundersTitle: entry.fields.founderNameTitle,
          foundersDesc: entry.fields.founderNameDesc,
        })
      } catch (error) {
        console.error("Founder page fetch error:", error)
      }
    }

    fetchFounderPage()
  }, [])

  if (!data) return null

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 space-y-12 my-10">
      {/* Timeline */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">
          {data.pageTitle}
        </h1>
        <p className="max-w-3xl text-muted-foreground leading-relaxed">
          {data.timeline}
        </p>
      </div>

      {/* Founders */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">
          {data.foundersTitle}
        </h2>
        <p className=" max-w-3xl text-muted-foreground leading-relaxed">
          {data.foundersDesc
            ?.replace(/\s+$/, "")
            .split("\n")
            .map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
        </p>
      </div>
    </section>
  )
}
