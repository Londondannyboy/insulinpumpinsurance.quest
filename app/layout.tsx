import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CookieConsent } from "@/components/CookieConsent"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Insulin Pump Insurance UK 2025 | Compare Diabetes Device Cover from £6.95/month",
    template: "%s | Insulin Pump Insurance UK"
  },
  description: "Insulin pump insurance UK - compare quotes from specialist providers. Get comprehensive diabetes device cover for insulin pumps, CGM systems & diabetes technology. Protect your devices from £6.95/month.",
  keywords: [
    "insulin pump insurance",
    "insulin pump insurance uk",
    "diabetes pump insurance",
    "CGM insurance",
    "continuous glucose monitor insurance",
    "omnipod insurance",
    "medtronic pump insurance",
    "tandem tslim insurance",
    "dexcom insurance",
    "freestyle libre insurance",
    "diabetes device insurance",
    "insulin pump cover",
    "best insulin pump insurance uk",
    "compare insulin pump insurance"
  ],
  authors: [{ name: "Insulin Pump Insurance UK" }],
  creator: "Insulin Pump Insurance UK",
  publisher: "Insulin Pump Insurance UK",
  metadataBase: new URL("https://insulinpumpinsurance.quest"),
  alternates: {
    canonical: "https://insulinpumpinsurance.quest",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://insulinpumpinsurance.quest",
    siteName: "Insulin Pump Insurance UK",
    title: "Insulin Pump Insurance UK 2025 | Compare Diabetes Device Cover",
    description: "Insulin pump insurance UK - compare quotes from specialist providers. Get comprehensive diabetes device cover for insulin pumps, CGM systems & diabetes technology.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insulin Pump Insurance UK | Compare Diabetes Device Cover",
    description: "Insulin pump insurance from UK specialists. Compare quotes for comprehensive diabetes device cover.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://insulinpumpinsurance.quest/#website",
  name: "Insulin Pump Insurance UK",
  alternateName: ["Diabetes Device Insurance UK", "Insurance for Insulin Pumps", "CGM Insurance UK"],
  url: "https://insulinpumpinsurance.quest",
  description: "Insulin pump insurance UK comparison service. Get comprehensive diabetes device cover for insulin pumps, CGM systems & diabetes technology from specialist UK insurers.",
  inLanguage: "en-GB",
  publisher: {
    "@type": "Organization",
    name: "Insulin Pump Insurance UK",
    url: "https://insulinpumpinsurance.quest"
  }
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://insulinpumpinsurance.quest/#service",
  name: "Insulin Pump Insurance UK Comparison",
  alternateName: "Diabetes Device Insurance Comparison",
  description: "Compare insulin pump insurance UK quotes from specialist providers. Find comprehensive diabetes device cover for insulin pumps (Medtronic, Omnipod, Tandem), CGM systems (Dexcom, FreeStyle Libre), and diabetes technology.",
  provider: {
    "@type": "Organization",
    name: "Insulin Pump Insurance UK"
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom"
  },
  serviceType: "Insulin Pump Insurance Comparison",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
    description: "Free insulin pump insurance quotes UK from £6.95/month"
  }
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Insulin Pump Insurance",
      item: "https://insulinpumpinsurance.quest"
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-slate-900 text-white`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
