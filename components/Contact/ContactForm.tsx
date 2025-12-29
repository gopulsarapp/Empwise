"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { toast } from "sonner"

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
  jobtitle?: string
  aboutUs: string
  message: string
  messageText: string
  buttonText: string
  formTitle: string
}

type ContentfulResponse = {
  items: { fields: BookFormFields }[]
}

/* ------------------ Component ------------------ */

export default function ContactForm() {
  const [data, setData] = useState<BookFormFields | null>(null)
  const [loading, setLoading] = useState(false)

  /* -------- Fetch Contentful Data -------- */

  useEffect(() => {
    async function fetchForm() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=bookForm`
        )
        setData(res.data.items[0]?.fields ?? null)
      } catch (error) {
        console.error("Failed to load contact form content", error)
      }
    }

    fetchForm()
  }, [])

  /* -------- Submit Handler (Axios) -------- */

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (loading) return

    setLoading(true)
    const toastId = toast.loading("Sending message...")

    const formData = new FormData(e.currentTarget)
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB_FORM as string
    )

    try {
      const res = await axios.post(
        "https://api.web3forms.com/submit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )

      if (res.data.success) {
        toast.success("Message sent successfully!", { id: toastId })
        e.currentTarget.reset()
      } else {
        toast.error("Submission failed. Please try again.", { id: toastId })
      }
    } catch (error) {
      console.error("Form submit error:", error)
      toast.error("Something went wrong. Try again later.", { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  /* -------- Hide Until Loaded -------- */

  if (!data) return null

  /* -------- UI -------- */

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6">{data.formTitle}</h3>
          <h3 className="text-2xl font-bold mb-6">{data.title}</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="firstName"
                placeholder={data.firstName}
                required
              />
              <Input
                name="lastName"
                placeholder={data.lastName}
                required
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="email"
                name="email"
                placeholder={data.emailAddress}
                required
              />
              <Input
                type="tel"
                name="phone"
                placeholder={data.phoneNumber}
                required
              />
            </div>

            {/* Company & Job */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="company"
                placeholder={data.companyName}
                required
              />
              <Input
                name="jobTitle"
                placeholder={data.jobtitle}
              />
            </div>

            {/* About */}
            <Input
              name="about"
              placeholder={data.aboutUs}
              required
            />

            {/* Helper Text */}
            {data.messageText && (
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {data.messageText.trim()}
              </p>
            )}

            {/* Message */}
            <Textarea
              name="message"
              placeholder={data.message.trim()}
              rows={4}
              required
            />

            {/* Submit */}
            <div className="flex justify-end">
              <Button type="submit" size="lg" disabled={loading}>
                {loading ? "Sending..." : data.buttonText}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
