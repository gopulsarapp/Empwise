"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AdvisoryServices() {
  return (
    <section className="w-full py-20 bg-background my-30">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">

        {/* ================= TEXT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-wider text-primary uppercase">
              Advisory Services
            </h2>

            <h1 className="mt-2 text-4xl md:text-3xl font-bold leading-tight">
              Fractional C-level IT leadership—always
            </h1>

            <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
              At Integris, our service separates us from the pack, and that starts
              at the top. When your organization needs advanced cybersecurity and
              IT leadership, our CISSP-certified fractional CIOs and CISOs deliver
              strategic direction exactly when you need it.
            </p>
          </div>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Fractional CIOs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our fractional CIOs design and manage your entire IT strategy—
                from infrastructure and budgeting to roadmaps and innovation.
                You gain predictable results, future-ready systems, and
                leadership focused on what comes next.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Fractional CISOs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our elite fractional CISOs elevate your cybersecurity posture by
                identifying threats, closing gaps, and implementing modern
                security frameworks. Policies, monitoring, and protocols are
                tailored specifically to your business.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* ================= IMAGE CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full h-[520px]"
        >
          <Image
            src="/asset/HRIAdvisory.jpg"
            alt="Advisory Services Leadership"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-2xl shadow-lg"
          />


        </motion.div>

      </div>
    </section>
  );
}
