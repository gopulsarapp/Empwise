"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.p
        className="text-sm font-medium text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        404 ERROR
      </motion.p>

      <motion.h1
        className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Page not found
      </motion.h1>

      <motion.p
        className="mt-4 max-w-md text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Sorry, the page you’re looking for doesn’t exist or may have been moved.
      </motion.p>

      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/contact">Contact support</Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}
