"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

/* ================= Types ================= */

type MenuItem = {
  label: string
  href: string
}

type MenuGroup = {
  menuName: "solutions2" | "industries2" | "company2"
  menuItems: MenuItem[]
}

type NavbarData = {
  logo: string
  phone: string
  clientSupport: string
  menus: MenuGroup[]
  topLinks: MenuItem[]
}

type ContentfulResponse = {
  items: Array<{
    fields: {
      phone: string
      clientSupport: string
      logo: { sys: { id: string } }
      navigation: {
        menus: MenuGroup[]
        topLevelLinks: MenuItem[]
      }
    }
  }>
  includes?: {
    Asset?: Array<{
      sys: { id: string }
      fields: {
        file: { url: string }
      }
    }>
  }
}

/* ================= Component ================= */

export default function Navbar() {
  const [data, setData] = useState<NavbarData | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  /* Lock scroll */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
  }, [mobileOpen])

  useEffect(() => {
    async function fetchNavbar() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=navbar`
        )

        const entry = res.data.items[0]
        if (!entry) return

        const assets = res.data.includes?.Asset ?? []
        const logoAsset = assets.find(
          (a) => a.sys.id === entry.fields.logo.sys.id
        )

        if (!logoAsset) return

        setData({
          logo: `https:${logoAsset.fields.file.url}`,
          phone: entry.fields.phone,
          clientSupport: entry.fields.clientSupport,
          menus: entry.fields.navigation.menus,
          topLinks: entry.fields.navigation.topLevelLinks,
        })
      } catch (error) {
        console.error("Navbar fetch error:", error)
      }
    }

    fetchNavbar()
  }, [])

  if (!data) return null

  const getMenu = (name: string) =>
    data.menus.find((m) => m.menuName === name)?.menuItems ?? []

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white border-b">
      {/* Top Bar */}
      <div className="border-b">
        <div className="mx-auto max-w-[1440px] px-6 py-2 flex justify-end gap-6 text-sm">
          <span className="font-medium">
            {data.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
          </span>
          <Link href={data.clientSupport}>Client Support</Link>
        </div>
      </div>

      {/* Main Nav */}
      <div className="mx-auto max-w-[1440px] px-6 py-4 flex items-center">
        <Link href="/">
          <Image src={data.logo} alt="Logo" width={140} height={32} />
        </Link>

        <div className="flex-1" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["solutions", "industries", "company"].map((menu) => (
            <div key={menu} className="relative">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === menu ? null : menu)
                }
                className="flex items-center gap-1 font-medium"
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
                <ChevronDown
                  className={`transition ${
                    openMenu === menu ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openMenu === menu && (
                  <motion.div
                    className="absolute top-full mt-3 w-72 rounded-xl bg-white border shadow-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    {getMenu(menu).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 hover:bg-muted"
                        onClick={() => setOpenMenu(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {data.topLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button className="md:hidden ml-4" onClick={() => setMobileOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <Image src={data.logo} alt="Logo" width={120} height={28} />
              <button onClick={() => setMobileOpen(false)}>
                <X />
              </button>
            </div>

            <div className="px-6 py-6 space-y-6">
              {[...data.menus, { menuName: "links", menuItems: data.topLinks }].map(
                (group) => (
                  <div key={group.menuName}>
                    <div className="font-semibold mb-2 capitalize">
                      {group.menuName}
                    </div>
                    <div className="space-y-2 pl-2">
                      {group.menuItems.map((item) => (
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
                  </div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
