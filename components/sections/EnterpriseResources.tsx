"use client"

import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"

const bgImage =
  "https://integrisit.com/wp-content/uploads/2025/06/Home_EntRec.jpg"

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function EnterpriseResources() {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <motion.div
        className="mx-auto max-w-[1440px] px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          <motion.div
            variants={itemVariants}
            className="bg-white shadow-xl rounded-lg p-10 lg:p-12 self-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise resources for the{" "}
              <span className="text-red-600">SMB</span>
            </h2>

            <p className="text-lg mb-6">
              Be ready for anything — or anyone
            </p>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                At Integris, we are committed to serving small and midsize
                organizations. In fact, SMBs are our sweet spot. We are
                passionate about taking your IT to the next level and have the
                scale, certifications, and expertise to provide you with
                enterprise-level solutions and resources.
              </p>

              <p>
                That means you can give the greatest possible value to your
                clients — and compete with organizations of any size.
              </p>

              <p>
                Our approach is customized at the technology and industry
                levels, so you’ll get the expertise you need when you need it —
                every time, from the very first interaction.
              </p>
            </div>

            <div className="mt-8">
              <Button className="bg-red-600 hover:bg-red-700">
                Learn more
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden min-h-[420px] lg:min-h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
