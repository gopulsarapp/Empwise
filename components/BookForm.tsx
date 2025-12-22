"use client"

import React, { useEffect, useState } from "react"
import { motion, type Variants } from "framer-motion"
import axios from "axios"

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

/* ------------------ Animation ------------------ */

const fadeDownVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

/* ------------------ Component ------------------ */

export default function BookForm() {
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
        console.error("BookForm fetch error:", error)
      }
    }

    fetchForm()
  }, [])

  /* Hide if no data */
  if (!data) return null

  return (
    <motion.div
      variants={fadeDownVariants}
      initial="hidden"
      animate="visible"
      className="bg-white border-4 border-red-600 shadow-2xl"
    >
      {/* Header */}
      <div className="bg-red-600 text-white text-center py-4 text-xl font-semibold">
        {data.title}
      </div>

      <form className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            className="border px-4 py-3 w-full"
            placeholder={data.firstName}
            required
          />
          <input
            className="border px-4 py-3 w-full"
            placeholder={data.lastName}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="email"
            className="border px-4 py-3 w-full"
            placeholder={data.emailAddress}
            required
          />
          <input
            className="border px-4 py-3 w-full"
            placeholder={data.phoneNumber}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            className="border px-4 py-3 w-full"
            placeholder={data.companyName}
            required
          />
          <input
            className="border px-4 py-3 w-full"
            placeholder={data.jobtitle}
          />
        </div>

        <input
          className="border px-4 py-3 w-full"
          placeholder={data.aboutUs}
          required
        />

        {/* Helper text */}
        {data.messageText && (
          <p className="text-sm text-muted-foreground whitespace-pre-line">
            {data.messageText.replace(/\s+$/, "")}
          </p>
        )}

        <textarea
          rows={4}
          className="border px-4 py-3 w-full"
          placeholder={data.message.replace(/\s+$/, "")}
          required
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-red-600 text-white px-8 py-3 font-medium hover:bg-red-700 transition"
          >
            {data.buttonText}
          </button>
        </div>
      </form>
    </motion.div>
  )
}
