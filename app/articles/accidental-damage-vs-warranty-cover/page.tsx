import type { Metadata } from "next"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Accidental Damage vs Warranty Cover | Insulin Pump Insurance Explained",
  description: "Understand the difference between insulin pump warranty and accidental damage insurance. Learn what each covers and why you need both for complete protection.",
  keywords: [
    "accidental damage vs warranty",
    "pump warranty vs insurance",
    "insulin pump warranty coverage",
    "accidental damage insurance",
    "pump insurance vs warranty"
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Accidental Damage vs Warranty Cover",
  description: "Understand the difference between pump warranty and insurance coverage.",
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
          <span className="text-slate-300">Accidental Damage vs Warranty</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-cyan-900 to-slate-900 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop&q=80"
                alt="accidental damage insurance vs warranty pump protection"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="inline-block bg-cyan-500/30 text-cyan-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Insurance Guide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Accidental Damage vs Warranty Cover
            <span className="text-cyan-400"> Which Do You Need?</span>
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Understanding the critical differences between insulin pump warranty and accidental damage insurance—and why you need both for complete protection.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span>December 2024</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-900/30 to-slate-900/30 border border-cyan-500/30 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Quick Answer</h2>
          <p className="text-slate-300 mb-4">
            <strong>Warranty covers manufacturer defects.</strong> Insurance covers accidental damage. They're complementary—you need both. Warranty is included with pump purchase; insurance costs £6.95-12/month and covers what warranty doesn't.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">The Key Difference</h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Many insulin pump users think "My pump has a warranty, so I don't need insurance." This is a critical mistake. Warranty and insurance serve completely different purposes and cover different scenarios. Understanding the difference is essential for anyone managing diabetes with <a href="https://www.nhs.uk/conditions/type-1-diabetes/insulin-pumps/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">insulin pumps</a>, and comprehensive <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">insulin pump insurance</a> provides the protection warranties don't.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">What Pump Warranty Covers</h3>

          <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-bold text-blue-400 mb-3">Manufacturing defects</h4>
            <p className="text-slate-300 text-sm mb-3">
              Warranty covers problems caused by the manufacturer. Examples:
            </p>
            <ul className="text-slate-300 space-y-2 text-sm ml-4">
              <li>• Motor failure (pump stops working)</li>
              <li>• Screen malfunction (display doesn't work)</li>
              <li>• Battery issues (defective battery)</li>
              <li>• Button failures (buttons stop responding)</li>
              <li>• Software problems (processing errors)</li>
            </ul>
            <p className="text-slate-300 text-sm mt-3">
              <strong>Duration:</strong> Typically 4 years from purchase
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">What Warranty Does NOT Cover</h3>

          <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-bold text-red-400 mb-3">Accidental damage and user responsibility</h4>
            <p className="text-slate-300 text-sm mb-3">
              Warranty explicitly excludes:
            </p>
            <ul className="text-slate-300 space-y-2 text-sm ml-4">
              <li>✗ Dropped or physically damaged pumps</li>
              <li>✗ Liquid or water damage</li>
              <li>✗ Stolen or lost pumps</li>
              <li>✗ Wear and tear</li>
              <li>✗ Intentional damage</li>
              <li>✗ Damage after warranty expires</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">What Accidental Damage Insurance Covers</h3>

          <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-bold text-cyan-400 mb-3">Real-world damage scenarios</h4>
            <p className="text-slate-300 text-sm mb-3">
              Insurance covers what actually breaks your pump:
            </p>
            <ul className="text-slate-300 space-y-2 text-sm ml-4">
              <li>✓ Drops and impacts</li>
              <li>✓ Water damage (spills, rain, swimming)</li>
              <li>✓ Theft (with police report)</li>
              <li>✓ Loss (left behind, lost while traveling)</li>
              <li>✓ Fire or heat damage</li>
              <li>✓ Electrical surge damage</li>
            </ul>
            <p className="text-slate-300 text-sm mt-3">
              <strong>Duration:</strong> While you own the pump
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Real-World Scenarios</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <h4 className="text-lg font-bold text-white mb-2">Scenario 1: Factory Defect (Warranty Handles)</h4>
              <p className="text-slate-400 text-sm mb-2">
                After 6 months, your pump's motor suddenly fails and it stops delivering insulin, even though you've used it normally.
              </p>
              <p className="text-slate-300 text-sm"><strong>Action:</strong> Contact pump manufacturer. Warranty covers repair or replacement at no cost (within warranty period).</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <h4 className="text-lg font-bold text-white mb-2">Scenario 2: Accidental Damage (Insurance Handles)</h4>
              <p className="text-slate-400 text-sm mb-2">
                You accidentally drop your pump on tile floor. The screen cracks and won't respond to touch input.
              </p>
              <p className="text-slate-300 text-sm"><strong>Action:</strong> Warranty won't cover this (you caused the damage). File insurance claim, get replacement within 24 hours.</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <h4 className="text-lg font-bold text-white mb-2">Scenario 3: Water Damage (Insurance Handles)</h4>
              <p className="text-slate-400 text-sm mb-2">
                You spill water on your pump while at the beach. It stops working immediately.
              </p>
              <p className="text-slate-300 text-sm"><strong>Action:</strong> Warranty likely won't cover water damage. Insurance covers liquid damage immediately.</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <h4 className="text-lg font-bold text-white mb-2">Scenario 4: Post-Warranty Defect (Nothing Covers This!)</h4>
              <p className="text-slate-400 text-sm mb-2">
                After 5 years (warranty expired), your pump's infusion set port breaks and won't hold a set properly.
              </p>
              <p className="text-slate-300 text-sm"><strong>Action:</strong> Neither warranty (expired) nor insurance (manufacturing defect) covers this. You pay full replacement cost.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Why You Need Both</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">1. Warranty covers rare scenarios (manufacturing defects)</h4>
              <p className="text-slate-400 text-sm">
                Manufacturing defects are rare. Most pumps work flawlessly throughout warranty period. But when they occur, warranty handles it.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">2. Insurance covers common scenarios (accidental damage)</h4>
              <p className="text-slate-400 text-sm">
                Accidental damage is far more common than manufacturing defects. Dropped pumps, water damage, theft—these are what actually break devices.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">3. Insurance bridges the warranty gap</h4>
              <p className="text-slate-400 text-sm">
                Warranty expires after 4 years. Insurance continues for as long as you own the pump, protecting you beyond manufacturer's responsibility.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">4. Insurance provides fast replacement</h4>
              <p className="text-slate-400 text-sm">
                Warranty replacement takes weeks (manufacturer investigation). Insurance provides 24-hour replacement. For diabetes management, speed matters.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Cost Comparison</h3>

          <table className="w-full mb-6 text-sm text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-white">Type</th>
                <th className="text-center py-3 px-4 text-white">Cost</th>
                <th className="text-center py-3 px-4 text-white">Covers Defects</th>
                <th className="text-center py-3 px-4 text-white">Covers Damage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Manufacturer Warranty</td>
                <td className="text-center py-3 px-4">Included</td>
                <td className="text-center py-3 px-4">✓ Yes</td>
                <td className="text-center py-3 px-4">✗ No</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Specialist Insurance</td>
                <td className="text-center py-3 px-4">£8-10/month</td>
                <td className="text-center py-3 px-4">✗ No</td>
                <td className="text-center py-3 px-4">✓ Yes</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-bold mb-4 mt-8">The Bottom Line</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Warranty and insurance are complementary protections. Warranty is "free" (included with pump cost) but has limited scope. Insurance costs £8-10/month but covers the scenarios most likely to actually occur.
          </p>

          <p className="text-slate-300 leading-relaxed">
            For complete protection covering your pump's entire lifespan, against both manufacturing defects AND accidental damage, you need both. According to <a href="https://www.diabetes.org.uk/guide-to-diabetes/managing-your-diabetes/treating-your-diabetes/insulin-pumps" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Diabetes UK</a>, having the right cover is crucial. The small cost of <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">insulin pump insurance UK</a> is minimal protection against catastrophic replacement costs and treatment interruption.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/insulin-pump-warranty-vs-insurance"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                Warranty vs Insurance
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
            Get Complete Pump Protection
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Insurance covers what warranty doesn't. Get comprehensive protection from just £8-10/month.
          </p>
          <a
            href="/#calculator"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Insurance Quote
          </a>
        </div>
      </section>
    </main>
  )
}
