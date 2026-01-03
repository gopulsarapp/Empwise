"use client";

import ContactPage from "./ContactPage";
import CallBooking from "./CalBooking";

/* ------------------ Component ------------------ */

export default function ContactSection() {
  return (
    <section className="w-full bg-background py-24">
      {/* Full-width container */}
      <div className="w-full px-6 space-y-20">

        {/* CONTACT CONTENT */}


        {/* CAL BOOKING — FULL WIDTH */}
        <div className="w-full min-h-[800px]">
          <CallBooking />
        </div>
        <div className="mx-auto max-w-[1440px] w-full">
          <ContactPage />
        </div>
      </div>
    </section>
  );
}
