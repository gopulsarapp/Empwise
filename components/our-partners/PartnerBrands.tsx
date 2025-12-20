"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"

/* ================= Data ================= */

const PARTNER_BRANDS = [
  { src: "https://integrisit.com/wp-content/uploads/2025/06/Cisco-Logo.png", alt: "Cisco Logo" },
  { src: "https://integrisit.com/wp-content/uploads/2025/06/ConnectSecure-Logo.png", alt: "ConnectSecure Logo" },
  { src: "https://integrisit.com/wp-content/uploads/2025/06/ConnectWise-Logo.webp", alt: "ConnectWise Logo" },
  { src: "https://integrisit.com/wp-content/uploads/2025/06/Dell-Gold-Partner-Logo.png", alt: "Dell Gold Partner Logo" },
  { src: "https://integrisit.com/wp-content/uploads/2025/06/Duo-Logo.png", alt: "Duo Logo" },
  { src: "https://integrisit.com/wp-content/uploads/2025/06/Fortinet-Logo.png", alt: "Fortinet Logo" },
  { src: "https://integrisit.com/wp-content/uploads/2025/06/HP-Logo.png", alt: "HP Logo" },
  { src: "https://integrisit.com/wp-content/uploads/2025/06/HPE-Logo.png", alt: "HPE Logo" },
  { src: "https://integrisit.com/wp-content/uploads/2025/09/netdocuments-logo.png", alt: "NetDocuments Logo" },
  { src: "https://integrisit.com/wp-content/uploads/2025/06/Kaseya-Logo.png", alt: "Kaseya Logo" },
  { src: "https://integrisit.com/wp-content/uploads/2025/06/Microsoft-Solution-Partner-Logo.png", alt: "Microsoft Solution Partner Logo" },
  { src: "https://integrisit.com/wp-content/uploads/2025/09/clioaffiliatepartner.png", alt: "Clio Affiliate Partner" },
  { src: "https://integrisit.com/wp-content/uploads/2025/06/Huntress-Logo.png", alt: "Huntress Logo" },
  { src: "https://integrisit.com/wp-content/uploads/2025/06/Lenovo-Logo.png", alt: "Lenovo Logo" },
  { src: "https://integrisit.com/wp-content/uploads/2025/06/N-Able-Logo.png", alt: "N-Able Logo" },
  { src: "https://integrisit.com/wp-content/uploads/2025/06/Veeam-Value-Added-Reseller-Silver-Logo.png", alt: "Veeam Silver Partner Logo" },
  { src: "https://integrisit.com/wp-content/uploads/2025/06/WatchGuard-Logo.png", alt: "WatchGuard Logo" },
]

/* ================= Animations ================= */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

/* ================= Component ================= */

export default function PartnerBrands() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        className="
          grid 
          grid-cols-2        /* mobile */
          sm:grid-cols-3     /* small tablets */
          lg:grid-cols-4     /* desktop */
          gap-10 
          items-center
        "
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {PARTNER_BRANDS.map((brand, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center justify-center"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={220}
              height={120}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
