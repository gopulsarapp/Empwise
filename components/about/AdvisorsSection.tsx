"use client"

import ProfileCardPartner from "@/components/about/ProfileCardPartner"

/* ================= Types ================= */

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

/* ================= Component ================= */

export default function AdvisorsSection({ title, people }: Props) {
  if (!people.length) return null

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-16">
      <h2 className="mb-10 text-3xl font-bold">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {people.map((advisor, index) => (
          <ProfileCardPartner key={index} data={advisor} />
        ))}
      </div>
    </section>
  )
}
