export default function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;
  const appName = process.env.NEXT_PUBLIC_APP_NAME!;
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: appName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      linkedinUrl!,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
