import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Analytics from "@/components/Analytics";
import { Toaster } from "sonner"

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

/* ================= Env ================= */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME!;
const DEFAULT_TITLE = process.env.NEXT_PUBLIC_DEFAULT_META_TITLE!;
const DEFAULT_DESCRIPTION =
  process.env.NEXT_PUBLIC_DEFAULT_META_DESCRIPTION!;
const OG_IMAGE = process.env.NEXT_PUBLIC_OG_IMAGE!;

/* ================= Metadata (STATIC SEO) ================= */

export const metadata: Metadata = {
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${APP_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,

  metadataBase: new URL(SITE_URL),

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
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: APP_NAME,
    type: "website",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
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
      > <Analytics />
        <JsonLd />
        <Navbar />
        <main className="flex-1 mt-[110px]">{children}</main>
         <Toaster richColors position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
