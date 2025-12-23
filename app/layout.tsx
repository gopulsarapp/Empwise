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

/* ================= Metadata (STATIC SEO) ================= */

export const metadata: Metadata = {
  title: "Novotek AI Solutions",
  description:
    "Novotek.ai helps businesses innovate with AI-driven solutions, intelligent automation, and data insights designed for growth and efficiency.",

  keywords:
    "Novotek AI, AI solutions, artificial intelligence, machine learning, business automation, AI consulting, data intelligence",

  alternates: {
    canonical: "https://www.novotek.ai/",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/ico.svg",
    shortcut: "/ico.svg",
    apple: "/ico.svg",
  },

  openGraph: {
    title: "Novotek.ai – Intelligent AI Solutions",
    description:
      "AI-driven automation, analytics, and scalable technology solutions for modern businesses.",
    url: "https://www.novotek.ai/",
    siteName: "Novotek.ai",
    type: "website",
    images: [
      {
        url: "https://www.novotek.ai/og.jpg",
        width: 1200,
        height: 630,
        alt: "Novotek.ai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Novotek",
    description: "AI solutions for business growth.",
    images: ["https://www.novotek.ai/og.jpg"],
  },
}

/* ================= Root Layout ================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 mt-[160px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
