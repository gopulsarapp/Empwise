import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import "./globals.css"

/* ================= Fonts ================= */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

/* ================= Types ================= */

type Asset = {
  fields: {
    file: {
      url: string
    }
  }
}

type HomeSEOFields = {
  title: string
  websiteDescriptipn?: string
  websiteKeyWords?: string[]
  websiteFavicon?: Asset
  websiteLogo?: Asset
}

type ContentfulResponse = {
  items: Array<{
    fields: HomeSEOFields
  }>
}

/* ================= Metadata ================= */

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=home`,
      {
        next: { revalidate: 3600 }, // ✅ ISR caching
      }
    )

    const data: ContentfulResponse = await res.json()

    if (!data.items.length) {
      return {
        title: "Empwise",
        description: "Empwise description",
      }
    }

    const fields = data.items[0].fields

    const faviconUrl = fields.websiteFavicon?.fields?.file?.url
      ? `https:${fields.websiteFavicon.fields.file.url}`
      : undefined

    const logoUrl = fields.websiteLogo?.fields?.file?.url
      ? `https:${fields.websiteLogo.fields.file.url}`
      : undefined

    return {
      title: fields.title,
      description: fields.websiteDescriptipn,

      keywords: fields.websiteKeyWords,

      icons: faviconUrl ? { icon: faviconUrl } : undefined,

      openGraph: {
        title: fields.title,
        description: fields.websiteDescriptipn,
        type: "website",
        images: logoUrl ? [{ url: logoUrl }] : undefined,
      },

      twitter: {
        card: "summary_large_image",
        title: fields.title,
        description: fields.websiteDescriptipn,
        images: logoUrl ? [logoUrl] : undefined,
      },
    }
  } catch (error) {
    console.error("SEO fetch error:", error)

    return {
      title: "Empwise",
      description: "Empwise description",
    }
  }
}

/* ================= Root Layout ================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="flex-1" style={{ marginTop: "110px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
