"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 items-start">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold leading-tight">
            Uniquely positioned to support businesses wherever they are
          </h2>

          <p className="text-muted-foreground max-w-xl">
            No matter your location, our nationwide network ensures you receive
            reliable, responsive IT services tailored to your needs—backed by
            the strength and consistency of a national provider.
          </p>

          <div className="space-y-2">
            <p className="font-medium">Sales inquiries: (888) 330-8808</p>
            <p>
              Sales:{" "}
              <Link
                href="mailto:sales@integrisit.com"
                className="text-primary underline"
              >
                sales@integrisit.com
              </Link>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-8">
            <Button variant="destructive">Client support</Button>
            <Button variant="destructive">Our locations</Button>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Contact us</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First name*" required />
                  <Input placeholder="Last name*" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="email" placeholder="Business email address*" required />
                  <Input placeholder="Phone number (optional)" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Company name*" required />
                  <Input placeholder="Job title (optional)" />
                </div>

                <Input placeholder="How did you hear about us?*" required />

                <Textarea
                  placeholder="Is there anything you would like us to know?*"
                  rows={4}
                  required
                />

                <div className="flex justify-end">
                  <Button variant="destructive" size="lg">
                    Reach out
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  )
}
