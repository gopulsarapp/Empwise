"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import AdvisorsSection from "@/components/about/AdvisorsSection"
import DirectorsSection from "@/components/about/DirectorsSection"
import LeadershipSection from "@/components/about/LeadershipSection"
import HeaderTitle from "@/components/HeaderTitle"
import DiscoverySection from "@/components/sections/DiscoverySection"

type PersonCard = {
  image: string
  name: string
  role: string
  desc: string
}

/* ================= Types ================= */

type LeadershipPageData = {
  leadershipTitle: string
  leadership: PersonCard[]
  boardTitle: string
  board: PersonCard[]
  advisorsTitle: string
  advisors: PersonCard[]
}

type ContentfulAsset = {
  sys: { id: string }
  fields: {
    title: string
    description: string
    file: {
      url: string
    }
  }
}

type ContentfulLink = {
  sys: { id: string }
}

/* ================= Page ================= */

export default function Page() {
  const [data, setData] = useState<LeadershipPageData | null>(null)

  useEffect(() => {
    async function fetchLeadership() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=leadershipPage`
        )

        const entry = res.data.items[0]
        if (!entry) return

        const assets: ContentfulAsset[] = res.data.includes?.Asset ?? []

        const mapPeople = (
          links: ContentfulLink[],
          assets: ContentfulAsset[]
        ): PersonCard[] =>
          links
            .map((link) => {
              const asset = assets.find(
                (a: ContentfulAsset) => a.sys.id === link.sys.id
              )

              if (!asset) return null

              return {
                name: asset.fields.title,
                role: "", // required by ProfileCardPartner
                desc: asset.fields.description,
                image: `https:${asset.fields.file.url}`,
              }
            })
            .filter((p): p is PersonCard => Boolean(p))

        setData({
          leadershipTitle: entry.fields.leadershipTeamTitle,
          leadership: mapPeople(
            entry.fields.leadershipTeamAllImage,
            assets
          ),
          boardTitle: entry.fields.boardOfDirectors,
          board: mapPeople(
            entry.fields.boardOfDirectorsAllImage,
            assets
          ),
          advisorsTitle: entry.fields.advisors,
          advisors: mapPeople(
            entry.fields.advisorsAllImage,
            assets
          ),
        })
      } catch (err) {
        console.error("Leadership fetch error:", err)
      }
    }

    fetchLeadership()
  }, [])

  if (!data) return null

  return (
    <>
      <HeaderTitle pageName="leadership" />

      <LeadershipSection
        title={data.leadershipTitle}
        people={data.leadership}
      />

      <DirectorsSection
        title={data.boardTitle}
        people={data.board}
      />

      <AdvisorsSection
        title={data.advisorsTitle}
        people={data.advisors}
      />

      <DiscoverySection />
    </>
  )
}
