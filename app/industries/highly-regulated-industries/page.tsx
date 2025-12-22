import DiscoverySection from "@/components/sections/DiscoverySection"
import HeaderTitle from "@/components/HeaderTitle"
import WhyChooseUs from "@/components/industries/highly-regulated-industries/WhyChooseUs"
import ClientRating from "@/components/sections/ClientRating"
import ConnectWithTeam from "@/components/ConnectWithTeam"
import AdvisoryServices from "@/components/industries/highly-regulated-industries/AdvisoryServices"
import IntegrisExperience from "@/components/sections/IntegrisExperience"
import CommunityBankSolutions from "@/components/CommunityBankSolutions"

export default function Page() {


  return (
    <>
      <HeaderTitle pageName="highly-regulated-industries"/>
      <WhyChooseUs />
      <ClientRating />
              <IntegrisExperience
                    order="left"
                    title="Responsible IT Architecture (RITA)"
                    image="https://integrisit.com/wp-content/uploads/2025/06/Legal-SolutionsRitaGettyImages-1180593804.jpg"
                    description={`We start with a comprehensive assessment using our Responsible IT Architecture framework to identify any current or potential security gaps and ensure you have the tools needed to protect your systems. Next, we deliver a tightly integrated suite of cybersecurity solutions— designed to work together seamlessly to form a hardened, regulation-ready shield. This protects your systems, software, and endpoints, all supported by centralized monitoring and reporting.`}
                  />
                    <CommunityBankSolutions/>
      <AdvisoryServices/>
      <ConnectWithTeam/>
      <DiscoverySection />
    </>
  )
}
