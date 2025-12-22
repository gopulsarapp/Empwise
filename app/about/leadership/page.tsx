"use client"

import AdvisorsSection from "@/components/about/AdvisorsSection"
import DirectorsSection from "@/components/about/DirectorsSection"
import LeadershipSection from "@/components/about/LeadershipSection"
import HeaderTitle from "@/components/HeaderTitle"
import DiscoverySection from "@/components/sections/DiscoverySection"

export default function Page() {
  const headerdata = {
    title: "Meet the Leadership Team",
    imageUrl:"https://integrisit.com/wp-content/uploads/2025/06/chairs.jpg"
  }

  return (
    <>
      <HeaderTitle pageName="leadership" />
      <LeadershipSection/>
      <DirectorsSection/>
      <AdvisorsSection/>
      <DiscoverySection />
    </>
  )
}
