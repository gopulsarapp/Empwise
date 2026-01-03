import CalBooking from "@/components/Contact/CalBooking";


export default function BookCallPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Book a Free IT Consultation</h1>
      <p className="text-muted-foreground mb-8">
        Schedule a quick call with Novotek to discuss your IT needs.
      </p>
      <CalBooking />
    </section>
  )
}
