import ClientRating from "@/components/sections/ClientRating";
import DiscoverySection from "@/components/sections/DiscoverySection";
import EnterpriseResources from "@/components/sections/EnterpriseResources";
import HeroSection from "@/components/sections/HeroSection";
import IndustryExpertise from "@/components/sections/IndustryExpertise";
import IndustryRecognition from "@/components/sections/IndustryRecognition";
import IntegrisExperience from "@/components/sections/IntegrisExperience";
import ITPartnerAssessment from "@/components/sections/ITPartnerAssessment";
import MeetIntegris from "@/components/sections/MeetIntegris";
import Testimonials from "@/components/sections/Testimonials";


export default function HomePage() {
  return (
    <>

      <HeroSection />
      <IndustryRecognition />
      <ITPartnerAssessment />
      <MeetIntegris/>
      <IndustryExpertise />
      <EnterpriseResources />
      <ClientRating />
      <IntegrisExperience/>
      <Testimonials/>
      <DiscoverySection/>
    </>
  )
}