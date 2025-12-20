"use client"

import { motion, type Variants } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

/* ================= Types ================= */

type Location = {
  title: string
  lines: string[]
}

/* ================= Data ================= */

const LOCATIONS: Location[] = [
  {
    title: "National numbers",
    lines: [
      "Client support: (877) 468-4771",
      "Support: support@integrisit.com",
      "Sales: (888) 330-8808",
      "Sales: sales@integrisit.com",
    ],
  },
  {
    title: "Atlanta, Georgia",
    lines: [
      "3455 Peachtree Road NE",
      "Suite 325",
      "Atlanta GA 30326",
      "Client support: (877) 468-4771",
      "Support: support@integrisit.com",
      "Sales: (888) 330-8808",
      "Sales: sales@integrisit.com",
    ],
  },
  {
    title: "Cranbury, New Jersey",
    lines: [
      "1 Corporate Drive, Unit G",
      "Cranbury Township, NJ 08512",
      "Client support: (877) 468-4771",
      "Support: support@integrisit.com",
      "Sales: (888) 330-8808",
      "Sales: sales@integrisit.com",
    ],
  },
  {
    title: "Dallas, Texas",
    lines: [
      "2350 Airport Freeway, Suite 300",
      "Bedford, TX 76022",
      "Client support: (877) 468-4771",
      "Support: support@integrisit.com",
      "Sales: (888) 330-8808",
      "Sales: sales@integrisit.com",
    ],
  },
  {
    title: "Denver, Colorado",
    lines: [
      "Client support: (877) 468-4771",
      "Support: support@integrisit.com",
      "Sales: (888) 330-8808",
      "Sales: sales@integrisit.com",
    ],
  },
  {
    title: "Duluth, Minnesota",
    lines: [
      "306 W Michigan Street, Suite #200",
      "Duluth, MN 55802",
      "Client support: (877) 468-4771",
      "Support: support@integrisit.com",
      "Sales: (888) 330-8808",
      "Sales: sales@integrisit.com",
    ],
  },
  {
    title: "Endicott, New York",
    lines: [
      "111 Grant Ave, Suite 103",
      "Endicott, NY 13760",
      "Client support: (833) 706-2229",
      "Support: help@techmd.com",
      "Sales: (888) 330-8808",
      "Sales: sales@integrisit.com",
    ],
  },
  {
    title: "Florida",
    lines: [
      "Client support: (877) 468-4771",
      "Support: support@integrisit.com",
      "Sales: (888) 330-8808",
      "Sales: sales@integrisit.com",
    ],
  },
]

/* ================= Animations ================= */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // ✅ Type-safe easeOut
    },
  },
}

/* ================= Component ================= */

export default function LocationAddress() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {LOCATIONS.map((location, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card className="border-none shadow-none px-4">
              <CardContent className="p-0 space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {location.title}
                </h3>

                <div className="space-y-1 text-sm text-muted-foreground">
                  {location.lines.map((line, i) => {
                    /* Email */
                    if (line.includes("@")) {
                      const email = line.split(" ").pop()
                      return (
                        <p key={i}>
                          {line.replace(email!, "")}
                          <a
                            href={`mailto:${email}`}
                            className="text-red-600 hover:underline"
                          >
                            {email}
                          </a>
                        </p>
                      )
                    }

                    /* Phone */
                    if (line.match(/\(\d{3}\)/)) {
                      const phone = line.match(/\(\d{3}\)[\s\d-]+/)?.[0]
                      return (
                        <p key={i}>
                          {line.replace(phone!, "")}
                          <a
                            href={`tel:${phone?.replace(/\D/g, "")}`}
                            className="hover:underline"
                          >
                            {phone}
                          </a>
                        </p>
                      )
                    }

                    return <p key={i}>{line}</p>
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
