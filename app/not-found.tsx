import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="text-sm font-medium text-muted-foreground">404 ERROR</p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Page not found
      </h1>

      <p className="mt-4 max-w-md text-muted-foreground">
        Sorry, the page you’re looking for doesn’t exist or may have been moved.
      </p>

      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/contact">Contact support</Link>
        </Button>
      </div>
    </div>
  )
}