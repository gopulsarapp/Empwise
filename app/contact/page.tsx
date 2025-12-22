"use client";

import ContactSection from "@/components/Contact/ContactSection";
import HeaderTitle from "@/components/HeaderTitle";
import DiscoverySection from "@/components/sections/DiscoverySection";

export default function Page() {
  return (
    <>
      <HeaderTitle pageName="contact" />
      <ContactSection/>
      <DiscoverySection />
    </>
  );
}
