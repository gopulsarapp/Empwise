"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
// import ContactForm from "./ContactForm"
import CallBooking from "./CalBooking"

/* ------------------ Types ------------------ */

type ContactPageFields = {
  contactPage: string
  title: string
  desc: string
  salesinquiriesPhone: string
  salesInquiriesEmail: string
  salesInquiriesPhone: string
  salesInquiriesText: string
  buttonJson?: {
    clientSupport?: string
    ourLocations?: string
  }
}

type ContentfulResponse = {
  items: { fields: ContactPageFields }[]
}

/* ------------------ Component ------------------ */

export default function ContactSection() {
  const [data, setData] = useState<ContactPageFields | null>(null)

  useEffect(() => {
    async function fetchContactPage() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=contactPage`
        )

        const item = res.data.items[0]
        if (item) {
          setData(item.fields)
          console.log("ContactSection data:", item.fields)
        }
      } catch (error) {
        console.error("ContactSection fetch error:", error)
      }
    }

    fetchContactPage()
  }, [])

  /* Hide if no data */
  if (!data) return null

  const phone = data.salesInquiriesPhone || data.salesinquiriesPhone;
  const tel = phone.replace(/[^\d+]/g, "")


  return (
    <section className="mx-auto max-w-[1440px] w-full py-24 bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 items-start">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold leading-tight whitespace-pre-line">
            {data.title}
          </h2>

          <p className="text-muted-foreground max-w-xl whitespace-pre-line">
            {data.desc.replace(/\s+$/, "")}
          </p>

          <div className="space-y-2">
            <p className="font-medium">
              {data.salesinquiriesPhone}{" "}
              <Link href={`tel:${tel}`} className="text-primary underline">
              {phone}
            </Link>
            </p>

          
            <p>

              {data.salesInquiriesText}{" "}
              <Link
                href={`mailto:${data.salesInquiriesEmail}`}
                className="text-primary underline"
              >
                {data.salesInquiriesEmail}
              </Link>
            </p>
          </div>



          <div className="flex flex-wrap gap-4 pt-5">
            {data.buttonJson && data.buttonJson.ourLocations && (

              <Button variant="destructive">
                {data.buttonJson.clientSupport}
              </Button>)}

            {data.buttonJson && data.buttonJson.ourLocations && (
              <Button variant="destructive">
                {data.buttonJson.ourLocations}
              </Button>
            )}
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        {/* <ContactForm /> */}
        <CallBooking />
      </div>
    </section>
  )
}
