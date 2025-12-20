import ProfileCardPartner from "@/components/about/ProfileCardPartner"

export default function AdvisorsSection() {
    const advisor = {
        image:
            "https://integrisit.com/wp-content/uploads/bb-plugin/cache/kevinblake-headshot-square-039315ea4a2c3a5d79f22561f81909f5-u18z7p2i3c5d.jpg",
        name: "Kevin Blake",
        role: "Executive Advisor, Integris",
        desc: `Kevin Blake serves as an advisory board member of the Integris Board of Directors.
    Prior to this role, Blake served as president and CEO of TechMD — now under Integris.
    Under his leadership, TechMD experienced exponential growth through organic expansion
    and acquisitions. In his current role, Blake provides strategic counsel to Integris’s
    executive leadership.`,
    }

    return (
        <section className="mx-auto max-w-[1440px] px-6 py-16">
            <h2 className="mb-10 text-3xl font-bold">Advisors</h2>

            <ProfileCardPartner data={advisor} />
        </section>
    )
}
