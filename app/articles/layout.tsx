import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insulin Pump Insurance Articles & Guides",
  description: "In-depth guides and articles about insulin pump insurance, CGM coverage, device protection, costs, and provider comparisons. Expert advice for diabetes device users.",
  keywords: [
    "insulin pump insurance guide",
    "insulin pump insurance articles",
    "insulin pump insurance costs",
    "medtronic pump insurance",
    "omnipod insurance",
    "cgm insurance",
    "diabetes device insurance"
  ],
  robots: {
    index: true,
    follow: true,
  },
}

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
