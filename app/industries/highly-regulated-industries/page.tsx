import DiscoverySection from "@/components/sections/DiscoverySection"
import HeaderTitle from "@/components/HeaderTitle"
// import WhyChooseUs from "@/components/industries/highly-regulated-industries/WhyChooseUs"
// import ClientRating from "@/components/sections/ClientRating"
// import ConnectWithTeam from "@/components/ConnectWithTeam"
// import AdvisoryServices from "@/components/industries/highly-regulated-industries/AdvisoryServices"
// import IntegrisExperience from "@/components/sections/IntegrisExperience"
// import CommunityBankSolutions from "@/components/CommunityBankSolutions"
import HeaderFormSection from "@/components/industries/highly-regulated-industries/HeaderFormSection"
import IT_Architecture from "@/components/sections/IT_Architecture"

export default function Page() {


  return (
    <>
      <HeaderTitle pageName="highly-regulated-industries" />
      <HeaderFormSection
        contentType="highlyRegulatedIndustriesPageSection"
        selectPage="industries/highly-regulated-industries"
      />

      <IT_Architecture pageName="highly-regulated-industries" order="right" />


      {/* <WhyChooseUs />
      <ClientRating /> */}
      {/* <CommunityBankSolutions/> */}
      {/* <AdvisoryServices/> */}
      {/* <ConnectWithTeam/> */}
      <DiscoverySection />
    </>
  )
}
