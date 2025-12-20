import ProfileCardPartner from "@/components/about/ProfileCardPartner"

const DIRECTORS = [
  {
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/rashaad-bajwa-square-161d80b7b3bad4a341e0933fd0b47521-jcsdgl3kbi5v.png",
    name: "Rashaad Bajwa",
    role: "Executive Chairman, Integris Board of Directors",
    desc: `Rashaad Bajwa is the founder and former CEO of Integris. Since founding the company in 2021, he led Integris to become one of the fastest-growing managed service providers in the country.

Prior to Integris, Bajwa founded Domain Computer Services, where he served as CEO for more than two decades. Under his leadership, Domain evolved through multiple growth phases before joining forces with Compudyne, ProviDyn, and MyITpros to form Integris.

As executive chairman, Bajwa provides high-level counsel and oversight, supporting Integris through its next phase of growth and innovation.`,
  },
  {
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/georgebarness-headshot-square-1817b8aac85c6e6091517514f8ec48f0-vewxskuqf3ip.jpg",
    name: "George Barsness",
    role: "Director, OMERS Private Equity — Integris Board of Directors",
    desc: `George Barsness brings over 15 years of experience across investment services roles. As director of OMERS Private Equity, he oversees investment strategy and portfolio management within the business services sector.

His background as an investment banker and investor enables him to support Integris’ long-term growth strategy and strategic development plan.`,
  },
  {
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/geoffreybird-headshot-square-a577dd17d652f0ab4a5c173b0a23c1b2-hri7ntc194u0.jpg",
    name: "Geoff Bird",
    role:
      "Managing Director & Head of Business Services, OMERS Private Equity — Integris Board of Directors",
    desc: `Geoff Bird brings over 15 years of private equity experience, specializing in business and healthcare services. He has played a key role in the growth of numerous portfolio companies.

Prior to OMERS, Bird worked with Ernst & Young’s Corporate Finance group in Toronto, providing transaction advisory services.`,
  },
  {
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/glenn-mathis-square-3230cc2a5709908298322e8d33566bd3-l58znqjvdf6c.png",
    name: "Glenn Mathis",
    role: "CEO, Integris — Integris Board of Directors",
    desc: `As CEO, Glenn Mathis is leading Integris toward a future where managed IT services are proactive, scalable, and strategically aligned with business outcomes.

Previously, Mathis spent 23 years at All Covered (Konica Minolta), overseeing global client services and large-scale operations.`,
  },
  {
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/arlinsorensen-headshot-square-37db0e3e24fe7e0736d2494882ad6c51-af37gjes4htm.jpg",
    name: "Arlin Sorensen",
    role:
      "VP Ecosystem Evangelism, ConnectWise — Integris Board of Directors",
    desc: `Arlin Sorensen is a respected IT channel leader and founder of HTG Peer Groups (now IT Nation Evolve).

Following HTG’s acquisition by ConnectWise, Sorensen continues to support MSP leadership development and ecosystem growth.`,
  },
  {
    image:
      "https://integrisit.com/wp-content/uploads/bb-plugin/cache/Saket_BoD-1-square-9c1248a73968d397584aee18094fec34-ya4fe1l3jrw5.jpg",
    name: "Saket Srivastava",
    role:
      "Chief Information Officer, Asana — Integris Board of Directors",
    desc: `Saket Srivastava brings deep expertise in IT leadership and digital transformation.

As CIO at Asana, he leads global technology operations and contributes strategic insight to Integris’ future-ready service model.`,
  },
]

export default function DirectorsSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-16">
      <h2 className="mb-12 text-3xl font-bold">
        Board of Directors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {DIRECTORS.map((director, index) => (
          <ProfileCardPartner key={index} data={director} />
        ))}
      </div>
    </section>
  )
}
