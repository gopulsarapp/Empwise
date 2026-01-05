import DiscoverySection from "@/components/sections/DiscoverySection"
import HeaderTitle from "@/components/HeaderTitle"
import HeaderFormSection from "@/components/industries/highly-regulated-industries/HeaderFormSection"
import IT_Architecture from "@/components/sections/IT_Architecture"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "IT Services for Highly Regulated Industries | Novotek MSP",
  description:
    "Novotek provides secure, compliant IT services for highly regulated industries, helping organizations manage risk, meet regulatory requirements, and maintain operational resilience.",
};


export default function Page() {
  return (
    <>
      <HeaderTitle pageName="highly-regulated-industries" />
      <HeaderFormSection
        contentType="highlyRegulatedIndustriesPageSection"
        selectPage="industries/highly-regulated-industries"
      />
      <IT_Architecture pageName="highly-regulated-industries" order="right" />
      <DiscoverySection />
    </>
  )
}
{/* <WhyChooseUs />
    <ClientRating />
    <CommunityBankSolutions/> 
    <AdvisoryServices/> 
    <ConnectWithTeam/> */}