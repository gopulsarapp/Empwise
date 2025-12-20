import DiscoverySection from "@/components/sections/DiscoverySection"
import HeaderTitle from "@/components/HeaderTitle"
import WhyChooseUs from "@/components/industries/highly-regulated-industries/WhyChooseUs"
import ClientRating from "@/components/sections/ClientRating"
import ConnectWithTeam from "@/components/ConnectWithTeam"

export default function Page() {
  return (
    <>
      <HeaderTitle />
      <WhyChooseUs />
      <ClientRating />
      <ConnectWithTeam/>
      <DiscoverySection />
    </>
  )
}
