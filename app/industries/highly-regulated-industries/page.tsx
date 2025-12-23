import DiscoverySection from "@/components/sections/DiscoverySection"
import HeaderTitle from "@/components/HeaderTitle"
// import WhyChooseUs from "@/components/industries/highly-regulated-industries/WhyChooseUs"
// import ClientRating from "@/components/sections/ClientRating"
// import ConnectWithTeam from "@/components/ConnectWithTeam"
// import AdvisoryServices from "@/components/industries/highly-regulated-industries/AdvisoryServices"
import IntegrisExperience from "@/components/sections/IntegrisExperience"
// import CommunityBankSolutions from "@/components/CommunityBankSolutions"
import HeaderFormSection from "@/components/industries/highly-regulated-industries/HeaderFormSection"

export default function Page() {


  return (
    <>
      <HeaderTitle pageName="highly-regulated-industries"/>
      <HeaderFormSection pageName="highlyRegulatedIndustriesPageSection"/>
      {/* <WhyChooseUs />
      <ClientRating /> */}
             <IntegrisExperience
                     order="left"
                     pageName="aBoutPageItArchitecture"
                   />
                    {/* <CommunityBankSolutions/> */}
      {/* <AdvisoryServices/> */}
      {/* <ConnectWithTeam/> */}
      <DiscoverySection />
    </>
  )
}
