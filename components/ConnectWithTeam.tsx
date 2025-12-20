"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

/* ================= DATA ================= */

const team = [
  {
    category: "Highly Regulated Industries",
    name: "Joe Fetter",
    role: "Director of Sales",
    image: "/asset/men.jpeg",
    linkedinUrl: "#",
  },
  {
    category: "Credit Unions",
    name: "Brad Giddens",
    role: "Director of Sales",
    image: "/asset/men2.jpeg",
    linkedinUrl: "#",
  },
]

/* ================= ANIMATION ================= */

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

/* ================= COMPONENT ================= */

export default function ConnectWithTeam() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.h2
          className="text-center font-bold text-4xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Connect with our team
        </motion.h2>

        {/* Team Grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden shadow-sm hover:shadow-md transition">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      {member.category}
                    </p>
                    <h3 className="text-lg font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>

                  <Button asChild variant="outline" size="sm">
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect on LinkedIn
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
