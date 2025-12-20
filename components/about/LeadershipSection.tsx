"use client"

import ProfileCardPartner from "@/components/about/ProfileCardPartner"
import { motion } from "framer-motion"

/* ================= Data ================= */

const LEADERSHIP = [
  {
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/glenn-mathis-square-3230cc2a5709908298322e8d33566bd3-h1b7n82wdmy6.png",
    name: "Glenn Mathis",
    role: "Chief Executive Officer",
    desc: `As Integris’s chief executive officer, Glenn Mathis is leading a bold mission to transform how businesses experience managed IT services.

Prior to Integris, Mathis spent 23 years at All Covered (now Konica Minolta), overseeing global client services, teams of 1,000+ professionals, and more than 5,000 clients worldwide.

Now, as CEO, Mathis is shaping a future where managed services are proactive, data-driven, and deeply aligned to business value.`,
  },
  {
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/billthompson-headshot-square-c094af5f54722e8180065190cc910b2b-8ezc14ri9bam.jpg",
    name: "Bill Thompson",
    role: "Chief Operating Officer",
    desc: `As COO, Bill Thompson leads Integris with a focus on operational rigor and scalable execution.

Previously, Thompson served as COO for TechMD, where he led enterprise-level transformations that enhanced profitability and customer experience.`,
  },
  {
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/kris-square-4d7de66070e406ed0e8641efe16a8f83-czxteml8iyj0.png",
    name: "Kris Laskarzewski",
    role: "Chief Transformation Officer",
    desc: `Kris Laskarzewski is responsible for reimagining how Integris delivers value through technology, operations, and client experience.

He has risen through the organization over a decade, leading engineering, markets, product, and transformation initiatives.`,
  },
  {
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/beningard-headshot-square-07b4268b647b119217d02d95e524d847-ji3ny04lebxc.jpg",
    name: "Ben Ingard",
    role: "Chief Financial Officer",
    desc: `Ben Ingard brings a data-driven approach to financial leadership, leveraging analytics to fuel growth and efficiency.

Prior to Integris, he served as CFO for TechMD and held senior finance roles in SaaS and PE-backed companies.`,
  },
  {
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/kylewewe-headshot-square-87a22117301146f32f53649f6a248112-507ihcwgfb26.jpg",
    name: "Kyle Wewe",
    role: "Chief Revenue Officer",
    desc: `Kyle Wewe leads all revenue-generating functions across Integris.

Previously, he served as EVP of US Commercial Sales at ConvergeOne, driving growth and expansion across key verticals.`,
  },
  {
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/brian-square-1eb9a877befefbd6b10c74485b837541-tzpkrim8uvnx.png",
    name: "Brian Luckey",
    role: "Chief Information Officer",
    desc: `Brian Luckey oversees the strategic direction of Integris’ IT infrastructure, ensuring security, scalability, and innovation.

His leadership underpins the technology backbone that powers Integris’ national platform.`,
  },
  {
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/debbie-square-aa8f4031ac671540dbb04e485c02a432-m4gf37v8to5z.png",
    name: "Debbie Lawrence",
    role: "Chief People Officer",
    desc: `Debbie Lawrence leads Integris’ people-first culture strategy, fostering leadership and engagement across the organization.

Under her leadership, Integris has earned recognition as a Glassdoor Best Place to Work.`,
  },
  {
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/deborahjulius-headshot-square-666c0451ffa5472a407ce33dc7fb4657-58z1kiwldgnu.jpg",
    name: "Deborah Julius",
    role: "SVP of Marketing",
    desc: `Deborah Julius leads Integris’ marketing strategy, driving brand growth and customer engagement.

She brings deep B2B technology marketing experience from cybersecurity and professional services sectors.`,
  },
]

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

export default function LeadershipSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20">
      <h2 className="mb-14 text-3xl font-bold">
        Leadership Team
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14"
      >
        {LEADERSHIP.map((leader, index) => (
          <ProfileCardPartner key={index} data={leader} />
        ))}
      </motion.div>
    </section>
  )
}
