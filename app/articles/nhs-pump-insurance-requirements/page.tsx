import type { Metadata } from "next"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "NHS Insulin Pump Insurance Requirements UK | Why You Need Coverage",
  description: "Why NHS insulin pump users need specialist insurance. Understand your financial responsibility, replacement gaps, and how insurance protects you.",
  keywords: [
    "nhs insulin pump insurance",
    "nhs pump insurance requirements",
    "do nhs pump users need insurance",
    "nhs pump replacement liability",
    "insulin pump financial responsibility",
    "nhs pump loss replacement"
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "NHS Insulin Pump Insurance Requirements",
  description: "Why NHS pump users need specialist insurance and what your responsibilities are.",
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
          <span className="text-slate-300">NHS Pump Insurance Guide</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-cyan-900 to-slate-900 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop&q=80"
                alt="nhs insulin pump insurance requirements financial responsibility"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="inline-block bg-cyan-500/30 text-cyan-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              NHS Guide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            NHS Insulin Pump Insurance
            <span className="text-cyan-400"> Your Financial Responsibility</span>
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Understanding why NHS pump users need specialist insurance and what happens if your NHS pump is lost, stolen, or damaged.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span>December 2024</span>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-900/30 to-slate-900/30 border border-red-500/30 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Critical Point</h2>
          <p className="text-lg text-slate-200 mb-4">
            <strong>Even with an NHS pump, you are financially responsible if it is lost, stolen, or significantly damaged.</strong> The NHS will not automatically replace your pump if you are responsible for the damage or loss.
          </p>
          <p className="text-slate-300">
            This is where specialist insurance becomes critical - it protects you from a potentially £2,500-4,500 replacement bill.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Why NHS Pump Users Need Insurance</h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Getting your insulin pump on the NHS is a significant advantage—it removes the £4,000-6,000 cost of purchasing a device privately. However, NHS provision doesn't remove your financial responsibility if something goes wrong with your pump after you receive it.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Your Financial Responsibility</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">Loss or Theft</h4>
              <p className="text-slate-300 mb-2">If you lose your NHS pump or it's stolen from you, the NHS considers this your responsibility. They will NOT automatically replace it. You must either:</p>
              <ul className="text-slate-300 space-y-1 text-sm ml-4 mt-2">
                <li>• Pay for private replacement (£3,500-4,500)</li>
                <li>• Request replacement through NHS (if loss wasn't your fault)</li>
                <li>• Use insurance (fastest and most reliable option)</li>
              </ul>
            </div>

            <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">Accidental Damage</h4>
              <p className="text-slate-300 mb-2">If you damage your NHS pump through accidental impact, liquid exposure, or mishandling:</p>
              <ul className="text-slate-300 space-y-1 text-sm ml-4 mt-2">
                <li>• Warranty may cover manufacturing defects only</li>
                <li>• Accidental damage is your responsibility to replace</li>
                <li>• NHS won't cover replacement due to your damage</li>
                <li>• Insurance covers this immediately</li>
              </ul>
            </div>

            <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">Slow NHS Replacement Timeline</h4>
              <p className="text-slate-300">Even if NHS does replace your pump due to fault, the process takes weeks to months. During this time, you're without pump therapy unless you have insurance or can pay privately for interim replacement.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Real Scenarios: Why Insurance Matters for NHS Users</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-3">Scenario 1: Pump Stolen from Gym Bag</h4>
              <p className="text-slate-400 mb-3">
                You left your gym bag with your NHS pump in it unattended at the gym. It's stolen.
              </p>
              <p className="text-slate-300 text-sm"><strong>Without insurance:</strong> You must pay £3,500-4,500 for replacement or wait months for NHS to assess whether to replace it. Your diabetes management has a gap while you sort it.</p>
              <p className="text-slate-300 text-sm mt-2"><strong>With insurance:</strong> File claim with police report, get replacement within 24 hours, pay only your excess (£0-100). Diabetes management continues uninterrupted.</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-3">Scenario 2: Dropped and Cracked Screen</h4>
              <p className="text-slate-400 mb-3">
                You accidentally drop your NHS pump on the kitchen tiles. The screen cracks and it no longer works.
              </p>
              <p className="text-slate-300 text-sm"><strong>Without insurance:</strong> NHS may not replace it (your fault), so you pay replacement cost privately or go without pump for weeks while appealing.</p>
              <p className="text-slate-300 text-sm mt-2"><strong>With insurance:</strong> Claim processed within 24 hours, replacement sent immediately. Back to diabetes management within one day.</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-3">Scenario 3: Water Damage at the Beach</h4>
              <p className="text-slate-400 mb-3">
                You get splashed by a wave while at the beach with your pump in your pocket. It stops working.
              </p>
              <p className="text-slate-300 text-sm"><strong>Without insurance:</strong> Warranty may not cover water damage. Private replacement costs £3,500+. NHS replacement unlikely for accidental water exposure.</p>
              <p className="text-slate-300 text-sm mt-2"><strong>With insurance:</strong> Liquid damage covered. Replacement within 24 hours. Minimal excess to pay.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Can You Insure an NHS Pump?</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Yes, absolutely. Most specialist insurance providers specifically support NHS pumps. When applying, you provide your NHS letter confirming pump provision instead of a purchase receipt. The insurance cost is identical to private pumps—usually £6.95-10/month for comprehensive coverage.
          </p>

          <p className="text-slate-300 leading-relaxed mb-4">
            Many NHS pump users don't realize they're eligible for insurance, but your financial responsibility makes it essential. Insurance for NHS pumps is actually MORE important than for private pumps because you have no other recourse if something goes wrong.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">What You Need to Apply for Insurance</h3>

          <ul className="space-y-2 text-slate-300 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>NHS letter confirming insulin pump provision</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Pump brand and model number</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Device serial number (usually on back)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Date NHS pump was provided</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <span>Your contact information</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Recommendation for NHS Pump Users</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Get specialist insurance immediately after receiving your NHS pump. The NHS provides the device, but insurance protects you from financial liability and provides the fast replacement your diabetes management requires. For just £8-10/month, you eliminate the risk of a £3,500+ bill.
          </p>

          <p className="text-slate-300 leading-relaxed">
            Don't assume "I got it on the NHS, so I don't need insurance." You absolutely do. Insurance bridges the gap between NHS provision and your financial responsibility for loss, theft, and damage.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/nhs-vs-private-pump-insurance"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                NHS vs Private Insurance
              </h4>
              <p className="text-slate-400 text-sm">
                Detailed comparison of coverage and replacement speeds.
              </p>
            </Link>
            <Link
              href="/do-you-need-insulin-pump-insurance"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                Do You Need Insurance?
              </h4>
              <p className="text-slate-400 text-sm">
                Assess your insurance needs based on your situation.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-900/30 to-cyan-600/20 py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Protect Your NHS Pump
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Get comprehensive insurance for your NHS-provided pump starting from just £6.95/month.
          </p>
          <a
            href="/#calculator"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get NHS Pump Coverage
          </a>
        </div>
      </section>
    </main>
  )
}
