"use client"

import ProfileCardPartner from "@/components/about/ProfileCardPartner"
import { motion } from "framer-motion"

/* ================= Props ================= */

type PersonCard = {
  image: string
  name: string
  role: string
  desc: string
}


type Props = {
  title: string
  people: PersonCard[]
}

/* ================= Animations ================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

/* ================= Component ================= */

export default function LeadershipSection({ title, people }: Props) {
  if (!people.length) return null

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20">
      <h2 className="mb-14 text-3xl font-bold">{title}</h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14"
      >
        {people.map((leader, index) => (
          <ProfileCardPartner key={index} data={leader} />
        ))}
      </motion.div>
    </section>
  )
}
