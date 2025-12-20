import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import client from "@/lib/contentful"
import type { Asset } from "contentful"

import "./globals.css"

/* ================= FONTS ================= */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

/* ================= INLINE TYPES ================= */

interface HomeFields {
  title: string
  websiteDescriptipn?: string
  websiteKeyWords?: string[]
  websiteFavicon?: Asset
  websiteLogo?: Asset
}

/* ================= METADATA ================= */

export async function generateMetadata(): Promise<Metadata> {
  const res = await client.getEntries({
    content_type: "home",
    limit: 1,
  })

  if (!res.items.length) {
    return {
      title: "Empwise",
      description: "Empwise description",
    }
  }

  // ✅ FORCE TYPE ONCE — fixes `never`
  const entry = res.items[0] as unknown as { fields: HomeFields }
  const fields = entry.fields

  const faviconUrl =
    fields.websiteFavicon?.fields?.file?.url
      ? `https:${fields.websiteFavicon.fields.file.url}`
      : undefined

  const logoUrl =
    fields.websiteLogo?.fields?.file?.url
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
}

/* ================= ROOT LAYOUT ================= */

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
        <main className="flex-1 m-20" style={{ marginTop: "110px" }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
