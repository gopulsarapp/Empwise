"use client"

import HeaderTitle from "@/components/HeaderTitle"
import PartnerBrands from "@/components/our-partners/PartnerBrands"
import DiscoverySection from "@/components/sections/DiscoverySection"

export default function Page() {
  const headerdata = {
    title: "Strategic Partnerships",
    subtitles: "We believe that strong partnerships drive stronger results.",
    desc: `At Integris, we work closely with a network of trusted strategic partners to deliver the best possible solutions for our clients.
These collaborations allow us to expand our capabilities, stay at the forefront of innovation, and create tailored IT strategies
that solve real-world business challenges.`,
    imageUrl: "https://integrisit.com/wp-content/uploads/2025/07/PartnerHero.jpg",
  }

  return (
    <>
      <HeaderTitle data={headerdata} />
      <PartnerBrands/>
      <DiscoverySection />
    </>
  )
}
