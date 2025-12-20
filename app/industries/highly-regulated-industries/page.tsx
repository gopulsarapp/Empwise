import DiscoverySection from "@/components/sections/DiscoverySection"
import HeaderTitle from "@/components/HeaderTitle"
import WhyChooseUs from "@/components/industries/highly-regulated-industries/WhyChooseUs"
import ClientRating from "@/components/sections/ClientRating"
import ConnectWithTeam from "@/components/ConnectWithTeam"
import AdvisoryServices from "@/components/industries/highly-regulated-industries/AdvisoryServices"

export default function Page() {
 const headerdata = {
    title: "IT for Highly Regulated Industries",
    subtitles: "Built for compliance and powered by strategy",
    imageUrl: "https://integrisit.com/wp-content/uploads/2025/07/HRI-Hero2.jpg",
  };


  return (
    <>
      <HeaderTitle data={headerdata}/>
      <WhyChooseUs />
      <ClientRating />
      <AdvisoryServices/>
      <ConnectWithTeam/>
      <DiscoverySection />
    </>
  )
}
