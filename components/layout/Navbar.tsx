"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  return (
    <motion.header
      className="w-full border-b bg-white"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top bar */}
      <div className="w-full border-b">
        <div className="mx-auto max-w-[1440px] px-6 py-2 flex justify-end gap-6 text-sm">
          <span className="font-medium">(888) 330-8808</span>
          <Link href="/support" className="font-medium hover:underline">
            Client Support
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <div className="w-full">
        <div className="mx-auto max-w-[1440px] px-6 py-4 flex items-center">
          {/* Logo (IMAGE) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/asset/logo.png"
              alt="Integris"
              width={140}
              height={32}
              priority
            />
          </Link>

          <div className="flex-1" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {/* Solutions dropdown */}
            <div className="relative group">
              <span className="flex items-center gap-1 text-sm font-medium cursor-pointer hover:text-red-600">
                Solutions
                <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
              </span>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "absolute left-0 top-full mt-3 w-72 rounded-xl border bg-white shadow-lg",
                  "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                )}
              >
                <ul className="py-3 text-sm">
                  {[
                    "IT Managed Services",
                    "Cybersecurity Services",
                    "Cloud Managed Services",
                    "Governance, Risk, & Compliance",
                    "Advisory Services",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-muted"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {["Industries", "Pricing", "Resources", "Company", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-red-600 transition"
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          {/* Mobile menu icon (RIGHT) */}
          <button
            className="md:hidden ml-4"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed left-0 top-0 z-50 h-full w-80 bg-white p-6 overflow-y-auto md:hidden"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between mb-6">
                <Image
                  src="/logo/integris-logo.svg"
                  alt="Integris"
                  width={120}
                  height={28}
                />
                <button onClick={() => setMobileOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="space-y-5 text-sm font-medium">
                {/* Solutions accordion */}
                <button
                  className="flex w-full items-center justify-between"
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition",
                      solutionsOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.ul
                      className="ml-4 space-y-2 text-muted-foreground"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <li>IT Managed Services</li>
                      <li>Cybersecurity Services</li>
                      <li>Cloud Managed Services</li>
                      <li>Governance, Risk, & Compliance</li>
                      <li>Advisory Services</li>
                    </motion.ul>
                  )}
                </AnimatePresence>

                <Link href="/industries">Industries</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/resources">Resources</Link>
                <Link href="/company">Company</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
