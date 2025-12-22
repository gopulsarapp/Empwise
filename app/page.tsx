import ClientRating from "@/components/sections/ClientRating";
import DiscoverySection from "@/components/sections/DiscoverySection";
import EnterpriseResources from "@/components/sections/EnterpriseResources";
import HeroSection from "@/components/sections/HeroSection";
import IndustryExpertise from "@/components/sections/IndustryExpertise";
import IndustryRecognition from "@/components/sections/IndustryRecognition";
import IntegrisExperience from "@/components/sections/IntegrisExperience";
import ITPartnerAssessment from "@/components/sections/ITPartnerAssessment";
import Testimonials from "@/components/sections/Testimonials";



export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IndustryRecognition />
      <ITPartnerAssessment />
      <IndustryExpertise />
      <EnterpriseResources />
      <ClientRating />
      <IntegrisExperience
        order="right"
        title="What is the Integris experience?"
        image="https://integrisit.com/wp-content/uploads/2025/07/IntExp2212567050.jpg"
        description={`It’s how you feel when your IT runs smoothly, thanks to a partner
who gets it and gets you. A partner who shoulders responsibility
for your IT — from upgrading your operations to managing risk
and handling compliance — so you can focus on what you do best.\n

A partner who takes it even a step further and guides you on the
path to digital maturity so you will continuously succeed in an
ever-changing world.`}

      />
     <Testimonials pageName="home" />
      <DiscoverySection />
    </>
  )
}