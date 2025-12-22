"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

/* ================= MENU DATA ================= */

const SOLUTIONS = [
  { label: "Managed IT Services", href: "/services/managed-it" },
  { label: "Cybersecurity Services", href: "/services/cybersecurity" },
  { label: "Cloud Services", href: "/services/cloud" },
  { label: "Governance Services", href: "/services/governance" },
  { label: "Advisory Services", href: "/services/advisory" },
]

const INDUSTRIES = [
  { label: "Highly Regulated Industries", href: "/industries/highly-regulated-industries" },
  { label: "Community Banks", href: "/industries/community-banks" },
  { label: "Legal", href: "/industries/legal" },
  { label: "Manufacturing IT Services", href: "/industries/manufacturing-it-services" },
]

const COMPANY = [
  { label: "About", href: "/about/" },
  { label: "Founders", href: "/about/founders/" },
  { label: "Leadership", href: "/about/leadership/" },
  { label: "Location", href: "/our-locations" },
  { label: "Partner", href: "/our-partners/" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)

  /* Lock scroll on mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
  }, [mobileOpen])

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white border-b">
      {/* ================= Top Bar ================= */}
      <div className="border-b md:block">
        <div className="mx-auto max-w-[1440px] px-6 py-2 flex justify-end gap-6 text-sm">
          <span className="font-medium">(888) 330-8808</span>
          <Link href="/support">Client Support</Link>
        </div>
      </div>

      {/* ================= Main Nav ================= */}
      <div className="mx-auto max-w-[1440px] px-6 py-4 flex items-center">
        <Link href="/">
          <Image src="/asset/logo.png" alt="Logo" width={140} height={32} />
        </Link>

        <div className="flex-1" />

        {/* ================= Desktop Nav ================= */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Solutions */}
          <div className="relative">
            <button
              onClick={() => {
                setSolutionsOpen(!solutionsOpen)
                setIndustriesOpen(false)
                setCompanyOpen(false)
              }}
              className="flex items-center gap-1 font-medium"
            >
              Solutions
              <ChevronDown className={`transition ${solutionsOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  className="absolute top-full mt-3 w-72 rounded-xl bg-white border shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {SOLUTIONS.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 hover:bg-muted"
                      onClick={() => setSolutionsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries */}
          <div className="relative">
            <button
              onClick={() => {
                setIndustriesOpen(!industriesOpen)
                setSolutionsOpen(false)
                setCompanyOpen(false)
              }}
              className="flex items-center gap-1 font-medium"
            >
              Industries
              <ChevronDown className={`transition ${industriesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {industriesOpen && (
                <motion.div
                  className="absolute top-full mt-3 w-72 rounded-xl bg-white border shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {INDUSTRIES.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 hover:bg-muted"
                      onClick={() => setIndustriesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Company */}
          <div className="relative">
            <button
              onClick={() => {
                setCompanyOpen(!companyOpen)
                setSolutionsOpen(false)
                setIndustriesOpen(false)
              }}
              className="flex items-center gap-1 font-medium"
            >
              Company
              <ChevronDown className={`transition ${companyOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {companyOpen && (
                <motion.div
                  className="absolute top-full mt-3 w-56 rounded-xl bg-white border shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {COMPANY.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 hover:bg-muted"
                      onClick={() => setCompanyOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/blogs">Blogs</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* ================= Mobile Menu Button ================= */}
        <button className="md:hidden ml-4" onClick={() => setMobileOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* ================= Mobile Menu ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <Image src="/asset/logo.png" alt="Logo" width={120} height={28} />
              <button
                onClick={() => {
                  setMobileOpen(false)
                  setSolutionsOpen(false)
                  setIndustriesOpen(false)
                  setCompanyOpen(false)
                }}
              >
                <X />
              </button>
            </div>

            <div className="px-6 py-6 space-y-6">
              {/* Solutions */}
              <button
                className="w-full flex justify-between items-center font-medium"
                onClick={() => {
                  setSolutionsOpen(!solutionsOpen)
                  setIndustriesOpen(false)
                  setCompanyOpen(false)
                }}
              >
                Solutions
                <ChevronDown className={`transition ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>

              {solutionsOpen && (
                <div className="pl-4 space-y-2">
                  {SOLUTIONS.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Industries */}
              <button
                className="w-full flex justify-between items-center font-medium"
                onClick={() => {
                  setIndustriesOpen(!industriesOpen)
                  setSolutionsOpen(false)
                  setCompanyOpen(false)
                }}
              >
                Industries
                <ChevronDown className={`transition ${industriesOpen ? "rotate-180" : ""}`} />
              </button>

              {industriesOpen && (
                <div className="pl-4 space-y-2">
                  {INDUSTRIES.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Company */}
              <button
                className="w-full flex justify-between items-center font-medium"
                onClick={() => {
                  setCompanyOpen(!companyOpen)
                  setSolutionsOpen(false)
                  setIndustriesOpen(false)
                }}
              >
                Company
                <ChevronDown className={`transition ${companyOpen ? "rotate-180" : ""}`} />
              </button>

              {companyOpen && (
                <div className="pl-4 space-y-2">
                  {COMPANY.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Static Links */}
              <div className="pt-4 border-t font-medium">
                <Link href="/blogs" onClick={() => setMobileOpen(false)} className="block py-2">
                  Blogs
                </Link>
                <Link href="/resources" onClick={() => setMobileOpen(false)} className="block py-2">
                  Resources
                </Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2">
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
