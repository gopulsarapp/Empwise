import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Analytics from "@/components/Analytics";
import { Toaster } from "sonner";

import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";

/* ================= Fonts ================= */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ================= Env (SAFE FALLBACKS) ================= */

/**
 * ❗ CRITICAL FIX:
 * Your URL was broken: https:www.//novotek.ai
 * That would break canonical, OG, sitemap & indexing
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://novotek.ai";

const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME || "Novotek";

const DEFAULT_TITLE =
  process.env.NEXT_PUBLIC_DEFAULT_META_TITLE ||
  "Managed IT Services & Cybersecurity for Businesses";

const DEFAULT_DESCRIPTION =
  process.env.NEXT_PUBLIC_DEFAULT_META_DESCRIPTION ||
  "Novotek is a managed service provider (MSP) delivering secure IT support, cybersecurity, cloud services, and compliance-ready solutions for small and mid-sized businesses.";

const OG_IMAGE =
  process.env.NEXT_PUBLIC_OG_IMAGE || "/logo.svg";

const KEYWORDS =
  process.env.NEXT_PUBLIC_KEYWORDS
    ?.split(",")
    .map(k => k.trim())
    .filter(Boolean) ||
  [
    "Managed Service Provider",
    "MSP IT Services",
    "Managed IT Services",
    "Cybersecurity Services",
    "Cloud Services for Business",
    "IT Support for Small Businesses",
    "Business IT Solutions",
    "Novotek MSP",
  ];

/* ================= Metadata (SEO CORE) ================= */

export const metadata: Metadata = {
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${APP_NAME}`,
  },

  description: DEFAULT_DESCRIPTION,

  keywords: KEYWORDS,

  metadataBase: new URL(SITE_URL),

  authors: [{ name: "Novotek" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: "/ico.svg",
    shortcut: "/ico.svg",
    apple: "/ico.svg",
  },

  openGraph: {
    title: `${DEFAULT_TITLE} | ${APP_NAME}`,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: APP_NAME,
    type: "website",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Novotek Managed IT Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${DEFAULT_TITLE} | ${APP_NAME}`,
    description: DEFAULT_DESCRIPTION,
    images: [`${SITE_URL}${OG_IMAGE}`],
  },
};

/* ================= Root Layout ================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Analytics />
        <JsonLd />
        <Navbar />
        <main className="flex-1 mt-[110px]">{children}</main>
        <Toaster richColors position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
