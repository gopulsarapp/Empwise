"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

/* ------------------ Types ------------------ */

type BookFormFields = {
  title: string
  firstName: string
  lastName: string
  emailAddress: string
  phoneNumber: string
  companyName: string
  jobtitle: string
  aboutUs: string
  message: string
  messageText: string
  buttonText: string
}

type ContentfulResponse = {
  items: { fields: BookFormFields }[]
}

/* ------------------ Component ------------------ */

export default function ContactForm() {
  const [data, setData] = useState<BookFormFields | null>(null)

  useEffect(() => {
    async function fetchForm() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=bookForm`
        )

        const item = res.data.items[0]
        if (item) {
          setData(item.fields)
        }
      } catch (error) {
        console.error("ContactForm fetch error:", error)
      }
    }

    fetchForm()
  }, [])

  /* Hide if no data */
  if (!data) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-8">
          {/* Title */}
          <h3 className="text-2xl font-bold mb-6">{data.title}</h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder={data.firstName} required />
              <Input placeholder={data.lastName} required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="email"
                placeholder={data.emailAddress}
                required
              />
              <Input placeholder={data.phoneNumber} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder={data.companyName} required />
              <Input placeholder={data.jobtitle} />
            </div>

            <Input placeholder={data.aboutUs} required />

            {/* Helper text */}
            {data.messageText && (
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {data.messageText.replace(/\s+$/, "")}
              </p>
            )}

            <Textarea
              placeholder={data.message.replace(/\s+$/, "")}
              rows={4}
              required
            />

            <div className="flex justify-end">
              <Button variant="destructive" size="lg">
                {data.buttonText}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
