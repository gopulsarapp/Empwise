import ContactSection from "@/components/Contact/ContactSection";
import HeaderTitle from "@/components/HeaderTitle";
import DiscoverySection from "@/components/sections/DiscoverySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Novotek | Managed IT Services & Support",
  description:
    "Contact Novotek to discuss your managed IT services, cybersecurity, cloud, and IT advisory needs. Speak with our team to get reliable IT support for your business.",
};

export default function Page() {
  return (
    <>
      <HeaderTitle pageName="contact" />
      <ContactSection/>
      <DiscoverySection />
    </>
  );
}
