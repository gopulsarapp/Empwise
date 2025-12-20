"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { Facebook, Linkedin, Youtube } from "lucide-react"

/* ================= ANIMATION ================= */

const footerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -60, // start above
  },
  visible: {
    opacity: 1,
    y: 0, // move down into place
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30, // each item starts higher
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

/* ================= COMPONENT ================= */

export default function Footer() {
  return (
    <motion.footer
      className="w-full bg-gradient-to-r from-[#3a264a] to-[#2f203f] text-white"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-[1440px] px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          
          {/* LOGO */}
          <motion.div variants={itemVariants}>
            <span className="text-4xl font-bold tracking-tight">
              Integris<span className="text-red-500">.</span>
            </span>
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 md:col-span-2"
          >
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 opacity-80 hover:opacity-100 transition" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 opacity-80 hover:opacity-100 transition" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube className="h-5 w-5 opacity-80 hover:opacity-100 transition" />
            </Link>
          </motion.div>

          {/* PRIVACY POLICY */}
          <motion.div variants={itemVariants} className="text-sm">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
          </motion.div>

          {/* TERMS */}
          <motion.div
            variants={itemVariants}
            className="text-sm md:text-right"
          >
            <Link href="#" className="hover:underline">
              Terms and Conditions
            </Link>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <motion.div variants={itemVariants} className="border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-6 py-6 text-sm text-white/80">
          © {new Date().getFullYear()} Integris
        </div>
      </motion.div>
    </motion.footer>
  )
}
