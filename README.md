# Novotek MSP Website
Next.js + Contentful (Axios API)

This repository contains the official **Novotek Managed Services Provider (MSP)** website built with **Next.js (App Router)** and **Contentful CMS**, using **Axios** for API communication.

The project is SEO-optimized, scalable, and designed so content teams can update website content without developer involvement.

---

## 🚀 Tech Stack

- Next.js 13+ (App Router)
- TypeScript
- Axios (API requests)
- Contentful Headless CMS
- Server Components
- SEO Metadata API

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root.

```env
# ==================================================
# 🌐 Site / Domain Configuration
# ==================================================
NEXT_PUBLIC_SITE_URL=https://www.novotek.com
NEXT_PUBLIC_APP_NAME=Novotek
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/company/novotek

# ==================================================
# 📦 Contentful CMS (Delivery API)
# ==================================================
NEXT_PUBLIC_CONTENTFUL_URL=https://cdn.contentful.com/spaces/{SPACE_ID}/environments/{ENVIRONMENT_ID}/entries?access_token={ACCESS_TOKEN}

# ==================================================
# 🔍 SEO Configuration
# ==================================================
NEXT_PUBLIC_DEFAULT_META_TITLE=Novotek | Intelligent Technology Solutions
NEXT_PUBLIC_DEFAULT_META_DESCRIPTION=Secure, compliant, and intelligent technology solutions designed for growth.
NEXT_PUBLIC_OG_IMAGE=/og-image.png


# ==================================================
# 🗺 Sitemap & Robots
# ==================================================
NEXT_PUBLIC_SITEMAP_PATH=/sitemap.xml
NEXT_PUBLIC_ROBOTS_PATH=/robots.txt


# ==================================================
# 📊 Analytics (Optional)
# ==================================================
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

```

Replace `{SPACE_ID}`, `{ENVIRONMENT_ID}`, and `{ACCESS_TOKEN}` with your Contentful space ID, environment ID, and delivery access token.

⚠️ Never commit `.env.local` to version control.

---


## ✍️ Updating Content in Contentful

1. Log in to Contentful
2. Open your Space
3. Choose a Content Type (Page, Blog, Service, Industry)
4. Update content fields
5. Click Publish
6. Changes appear instantly on the website

No code changes required.

## 🌐 Global SEO Configuration

Global SEO is configured in the root layout.

### `app/layout.tsx`
```ts
export const metadata = {
  title: {
    default: "Novotek | Intelligent Technology Solutions",
    template: "%s | Novotek",
  },
  description:
    "Novotek delivers secure, compliant, and intelligent technology solutions for modern businesses.",
  metadataBase: new URL("https://www.novotek.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Novotek",
    title: "Novotek",
    description:
      "AI-driven, secure, and scalable technology solutions.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};
```


## 🗺 Sitemap Configuration

The sitemap is automatically generated using Next.js Metadata Routes.

### `app/sitemap.ts`
```ts
export default function sitemap() {
  return [
    {
      url: "https://www.novotek.com",
      lastModified: new Date(),
    },
  ];
}
```

### Access Sitemap
```
/sitemap.xml
```

---

## 🤖 Robots.txt Configuration

Robots.txt is generated dynamically to guide search engine crawlers.

### `app/robots.ts`
```ts
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.novotek.com/sitemap.xml",
  };
}
```

### Access Robots File
```
/robots.txt
```

---

## 🧩 Structured Data (JSON-LD)

Structured data helps search engines better understand your organization and improves search visibility.

### Organization Schema Example

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Novotek",
      url: "https://www.novotek.com",
    }),
  }}
/>
```

---

## 🏗 Local Development

```bash
npm install
npm run dev
```

Visit: http://localhost:3000

---

## 🏢 About Novotek

Novotek is a Managed Services Provider delivering secure, compliant, and intelligent technology solutions across regulated and growth-focused industries.

---

## 📄 License

© Novotek. All rights reserved.
