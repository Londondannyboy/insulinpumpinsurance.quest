import type { Metadata } from "next"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "FreeStyle Libre Insurance Guide | Glucose Monitor Cover 2025",
  description: "Complete insurance guide for FreeStyle Libre 2 and 3 glucose monitors. Protect your reader and sensors with specialist coverage from £4-6/month.",
  keywords: [
    "freestyle libre insurance",
    "libre 2 insurance",
    "libre 3 insurance",
    "cgm insurance libre",
    "glucose monitor insurance"
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "FreeStyle Libre Insurance Guide",
  description: "Complete insurance guide for FreeStyle Libre glucose monitoring systems.",
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
          <span className="text-slate-300">FreeStyle Libre Insurance</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-cyan-900 to-slate-900 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop&q=80"
                alt="freestyle libre glucose monitor insurance"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="inline-block bg-cyan-500/30 text-cyan-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              CGM Guide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            FreeStyle Libre Insurance
            <span className="text-cyan-400"> Reader Protection</span>
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Complete guide to insuring FreeStyle Libre 2 and 3 glucose monitoring systems with affordable protection, 24-hour replacement, and worldwide coverage.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span>December 2024</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-900/30 to-slate-900/30 border border-cyan-500/30 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Quick Overview</h2>
          <p className="text-slate-300 mb-4">
            FreeStyle Libre readers are among the most affordable CGM systems to insure—just £4-6/month for comprehensive coverage including accidental damage, theft, loss, and worldwide travel protection (90 days/year).
          </p>
          <p className="text-cyan-400 text-sm">
            <strong>Most affordable CGM insurance in the UK market</strong>
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">FreeStyle Libre Insurance Overview</h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            FreeStyle Libre 2 and 3 readers are affordable glucose monitoring devices—but dropping or damaging your reader means losing glucose visibility. <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">Insulin pump insurance</a> protects this critical device at the lowest CGM insurance rates available in the UK. For more information on diabetes management, visit <a href="https://www.diabetes.org.uk/guide-to-diabetes/managing-your-diabetes/treating-your-diabetes/insulin-pumps" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Diabetes UK</a>.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">What's Covered</h3>

          <ul className="space-y-3 text-slate-300 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div><strong>Reader damage:</strong> Drops, liquid exposure, physical damage</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div><strong>Reader theft/loss:</strong> Full replacement covered with proof</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div><strong>Accidental damage:</strong> Includes touchscreen damage (Libre 3)</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div><strong>24-hour replacement:</strong> Processing and delivery within 24 hours</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div><strong>Worldwide travel:</strong> 90 days/year with 24-hour claims</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <div><strong>Sensor packs:</strong> Consumables not covered (replaced every 14 days)</div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Why Libre Users Need Insurance</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">1. Most Affordable Option</h4>
              <p className="text-slate-400 text-sm">
                At £4-6/month, FreeStyle Libre insurance is the cheapest CGM coverage available. Protecting a £50-80 reader from catastrophic damage for less than £5/month is excellent value.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">2. Reader is Your Access Point</h4>
              <p className="text-slate-400 text-sm">
                Your Libre reader is how you access glucose data from sensors. Damage means no glucose visibility until replacement—insurance ensures 24-hour access restoration.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">3. Portability Risk</h4>
              <p className="text-slate-400 text-sm">
                Unlike pump users who wear the device, Libre readers are carried in bags/pockets, making them vulnerable to drops, water damage, and loss.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">4. Instant Access to Glucose Data</h4>
              <p className="text-slate-400 text-sm">
                Libre 3's reader provides instant glucose readings. Losing this access for weeks awaiting replacement is not acceptable—insurance provides 24-hour replacement.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Libre 2 vs Libre 3 Insurance</h3>

          <table className="w-full mb-6 text-sm text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-white">Model</th>
                <th className="text-center py-3 px-4 text-white">Insurance Cost</th>
                <th className="text-left py-3 px-4 text-white">Features</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Libre 2</td>
                <td className="text-center py-3 px-4 text-cyan-400">£4-5/month</td>
                <td className="py-3 px-4">Reader + sensors (scanned readings)</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Libre 3</td>
                <td className="text-center py-3 px-4 text-cyan-400">£5-6/month</td>
                <td className="py-3 px-4">Reader + instant glucose via Bluetooth</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-bold mb-4 mt-8">Bundle Options</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            If using Libre with an insulin pump, bundle coverage for savings:
          </p>

          <ul className="space-y-2 text-slate-300 text-sm mb-6">
            <li>• Pump only: £8-10/month</li>
            <li>• Pump + Libre bundle: £10-12/month (saves £2-4/month)</li>
            <li>• Libre standalone: £4-6/month</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Recommendation</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Get comprehensive Libre coverage. At £4-6/month, it's the most affordable diabetes device insurance available. If using with a pump, bundle coverage for maximum value. Your glucose monitoring reliability is worth the minimal investment.
          </p>

          <p className="text-slate-300 leading-relaxed">
            FreeStyle Libre gives you flexibility and affordability in glucose monitoring—<a href="/" className="text-cyan-400 hover:text-cyan-300 underline">are insulin pumps covered by insurance</a> ensures nothing interrupts that access. Protect your reader with the UK's cheapest CGM insurance.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/freestyle-libre-insurance"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                Libre Topic Page
              </h4>
              <p className="text-slate-400 text-sm">
                Complete FreeStyle Libre insurance topic page.
              </p>
            </Link>
            <Link
              href="/cgm-insurance-cover"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                CGM Overview
              </h4>
              <p className="text-slate-400 text-sm">
                All CGM systems coverage comparison.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-900/30 to-cyan-600/20 py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Protect Your Libre Reader
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Most affordable CGM insurance in the UK—comprehensive coverage from just £4-6/month.
          </p>
          <a
            href="/#calculator"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Libre Coverage
          </a>
        </div>
      </section>
    </main>
  )
}
