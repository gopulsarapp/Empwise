"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ------------------ Types ------------------ */

type ContactPageFields = {
  contactPage: string;
  title: string;
  desc: string;
  salesinquiriesPhone: string;
  salesInquiriesPhone?: string;
  salesInquiriesEmail: string;
  salesInquiriesText: string;
  buttonJson?: {
    clientSupport?: string;
    ourLocations?: string;
  };
};

type ContentfulResponse = {
  items: { fields: ContactPageFields }[];
};

/* ------------------ Component ------------------ */

export default function ContactPage() {
  const [data, setData] = useState<ContactPageFields | null>(null);

  useEffect(() => {
    async function fetchContactPage() {
      try {
        const res = await axios.get<ContentfulResponse>(
          `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}&content_type=contactPage`
        );

        const item = res.data.items[0];
        if (item) {
          setData(item.fields);
        }
      } catch (error) {
        console.error("ContactPage fetch error:", error);
      }
    }

    fetchContactPage();
  }, []);

  if (!data) return null;

  const phone = data.salesInquiriesPhone || data.salesinquiriesPhone;
  const tel = phone.replace(/[^\d+]/g, "");

  return (
    <section className="w-full bg-background py-24">
      {/* Full-width wrapper with readable max width */}
      <div className="mx-auto max-w-[1440px] w-full px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <h2 className="text-4xl font-bold leading-tight whitespace-pre-line">
            {data.title}
          </h2>

          <p className="text-muted-foreground max-w-3xl whitespace-pre-line">
            {data.desc.trim()}
          </p>

          <div className="space-y-3">
            <p className="font-medium">
              {data.salesinquiriesPhone}{" "}
              <Link href={`tel:${tel}`} className="text-primary underline">
                {phone}
              </Link>
            </p>

            <p>
              {data.salesInquiriesText}{" "}
              <Link
                href={`mailto:${data.salesInquiriesEmail}`}
                className="text-primary underline"
              >
                {data.salesInquiriesEmail}
              </Link>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            {data.buttonJson?.clientSupport && (
              <Button variant="destructive">
                {data.buttonJson.clientSupport}
              </Button>
            )}

            {data.buttonJson?.ourLocations && (
              <Button variant="destructive">
                {data.buttonJson.ourLocations}
              </Button>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
