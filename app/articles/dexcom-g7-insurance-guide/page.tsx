import type { Metadata } from "next"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Dexcom G7 Insurance Guide | CGM Protection Coverage 2025",
  description: "Complete insurance guide for Dexcom G7 continuous glucose monitors. Protect your CGM from damage, theft, and loss with specialist coverage from £5-8/month.",
  keywords: [
    "dexcom g7 insurance",
    "cgm insurance dexcom",
    "continuous glucose monitor insurance",
    "dexcom insurance uk",
    "cgm protection"
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Dexcom G7 Insurance Guide",
  description: "Complete insurance guide for Dexcom G7 CGM systems.",
  author: {
    "@type": "Organization",
    name: "Insulin Pump Insurance UK"
  },
  datePublished: "2024-12-15",
  dateModified: "2024-12-15",
  image: "https://insulinpumpinsurance.quest/og-image.jpg",
  isPartOf: {
    "@type": "WebSite",
    name: "Insulin Pump Insurance UK",
    url: "https://insulinpumpinsurance.quest"
  },
}

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="bg-slate-800/50 py-4 px-4 border-b border-slate-700">
        <div className="max-w-4xl mx-auto text-sm">
          <Link href="/articles" className="text-cyan-400 hover:text-cyan-300">Articles</Link>
          <span className="text-slate-500 mx-2">/</span>
          <span className="text-slate-300">Dexcom G7 Insurance</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-cyan-900 to-slate-900 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop&q=80"
                alt="dexcom g7 cgm continuous glucose monitor insurance"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="inline-block bg-cyan-500/30 text-cyan-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              CGM Guide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Dexcom G7 Insurance Guide
            <span className="text-cyan-400"> CGM Protection</span>
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Complete guide to insuring Dexcom G7 continuous glucose monitors with comprehensive protection, 24-hour replacement, and worldwide coverage.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span>December 2024</span>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-900/30 to-slate-900/30 border border-cyan-500/30 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Quick Overview</h2>
          <p className="text-slate-300 mb-4">
            Dexcom G7 receivers and transmitters are fully covered by specialist CGM insurance. Cost: £5-8/month standalone or bundled with pump coverage. Includes 24-hour replacement, accidental damage, theft, loss, and worldwide travel (90 days/year).
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Why Dexcom G7 Needs Insurance</h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            The Dexcom G7 is among the most advanced continuous glucose monitors available, providing 15-minute real-time glucose alerts and sharing capability. Its advanced features make it expensive to replace—<a href="/" className="text-cyan-400 hover:text-cyan-300 underline">insulin pump insurance coverage</a> protects this investment and ensures uninterrupted glucose monitoring for people managing <a href="https://www.diabetes.org.uk/guide-to-diabetes/managing-your-diabetes/treating-your-diabetes/insulin-pumps" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">diabetes with insulin pumps</a>.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Dexcom G7 Components Covered</h3>

          <table className="w-full mb-6 text-sm text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-white">Component</th>
                <th className="text-center py-3 px-4 text-white">Typical Cost</th>
                <th className="text-center py-3 px-4 text-white">Coverage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Receiver Device</td>
                <td className="text-center py-3 px-4">£80-120</td>
                <td className="text-center py-3 px-4 text-cyan-400">✓ Full</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Transmitter</td>
                <td className="text-center py-3 px-4">£60-100</td>
                <td className="text-center py-3 px-4 text-cyan-400">✓ Full</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Sensors (consumable)</td>
                <td className="text-center py-3 px-4">£30-60 each</td>
                <td className="text-center py-3 px-4 text-red-400">✗ No</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-bold mb-4 mt-8">What Dexcom G7 Insurance Covers</h3>

          <div className="space-y-3 mb-6 text-slate-300">
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div><strong>Receiver damage:</strong> Drops, physical damage, liquid exposure</div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div><strong>Transmitter loss/theft:</strong> Full replacement cost covered</div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div><strong>Worldwide travel:</strong> 90 days/year internationally with 24-hour claims</div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div><strong>24-hour replacement:</strong> Processing and delivery within 24 hours</div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <div><strong>Sensors not covered:</strong> These are consumables (replaced every 10 days)</div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Why G7-Specific Insurance Matters</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Dexcom G7 users benefit from:
          </p>

          <ul className="space-y-3 text-slate-300 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">1.</span>
              <div>
                <strong>Sharing capability:</strong> The receiver is your link to family members monitoring your glucose. If damaged, you lose real-time sharing until replaced.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">2.</span>
              <div>
                <strong>Portability risk:</strong> Unlike pumps worn on body, receivers are carried in pockets/bags, increasing damage and loss risk.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">3.</span>
              <div>
                <strong>24/7 dependency:</strong> Glucose monitoring is continuous. Without your receiver, you lose real-time glucose data until replaced.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">4.</span>
              <div>
                <strong>Affordable protection:</strong> At £5-8/month, CGM insurance protects a £80-120 device from catastrophic loss.
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Dexcom G7 Insurance Pricing</h3>

          <ul className="space-y-2 text-slate-300 text-sm mb-6">
            <li>• CGM-only coverage: £5-7/month</li>
            <li>• Pump + Dexcom G7 bundle: £10-12/month</li>
            <li>• With pump & multiple CGMs: £12-15/month</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Recommendation</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            If using Dexcom G7 standalone, get CGM-only coverage (£5-7/month). If using with an insulin pump, bundle coverage for best value (£10-12/month for both). The receiver's portability and your dependency on real-time glucose data make insurance a smart investment.
          </p>

          <p className="text-slate-300 leading-relaxed">
            Dexcom G7 gives you unparalleled glucose visibility—<a href="/" className="text-cyan-400 hover:text-cyan-300 underline">are insulin pumps covered by insurance</a> ensures nothing interrupts that view. For less than a coffee per week, you protect continuous glucose monitoring from the accidents that actually happen.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/dexcom-cgm-insurance"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                Dexcom Topic Page
              </h4>
              <p className="text-slate-400 text-sm">
                Comprehensive Dexcom insurance topic page.
              </p>
            </Link>
            <Link
              href="/cgm-insurance-cover"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                CGM Insurance Overview
              </h4>
              <p className="text-slate-400 text-sm">
                All CGM systems coverage guide.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-900/30 to-cyan-600/20 py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Protect Your Dexcom G7
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            CGM insurance for your Dexcom receiver and transmitter from just £5-8/month.
          </p>
          <a
            href="/#calculator"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Dexcom Coverage
          </a>
        </div>
      </section>
    </main>
  )
}
