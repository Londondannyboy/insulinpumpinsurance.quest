import type { Metadata } from "next"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Omnipod Insulin Pump Insurance Explained | Dash & Omnipod 5 Cover",
  description: "Specialist insurance guide for Omnipod tubeless insulin pumps including Dash and Omnipod 5. Protection from just £8-10/month with 24-hour replacement.",
  keywords: [
    "omnipod insurance",
    "omnipod dash insurance",
    "omnipod 5 insurance",
    "tubeless pump insurance",
    "omnipod pod insurance"
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Omnipod Insulin Pump Insurance Explained",
  description: "Specialist insurance guide for Omnipod pods and controllers.",
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
          <span className="text-slate-300">Omnipod Insurance Explained</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-cyan-900 to-slate-900 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop&q=80"
                alt="omnipod dash pump insurance explained"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="inline-block bg-cyan-500/30 text-cyan-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Device Guide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Omnipod Insulin Pump Insurance Explained
            <span className="text-cyan-400"> Dash & Omnipod 5</span>
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Complete guide to insuring tubeless Omnipod pumps including Dash and Omnipod 5 with comprehensive protection and 24-hour replacement.
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
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Quick Overview</h2>
          <p className="text-slate-300 mb-4">
            Omnipod tubeless pumps (Dash and Omnipod 5) are fully eligible for specialist insurance with same comprehensive coverage as tubed pumps. Cost: £8-10/month. Covers: PDM controllers, pods, tubing, and all accessories.
          </p>
          <ul className="text-slate-300 space-y-2 text-sm">
            <li>✓ Covers all Omnipod models</li>
            <li>✓ PDM controller protection included</li>
            <li>✓ Pod and tubing coverage</li>
            <li>✓ 24-hour replacement available</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Omnipod-Specific Insurance Considerations</h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Omnipod's tubeless design offers different benefits and risks compared to traditional tubed pumps. Your <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">insurance for insulin pumps</a> needs to reflect these unique characteristics. For information on NHS pump provision, see <a href="https://www.nhs.uk/conditions/type-1-diabetes/insulin-pumps/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">NHS insulin pump guidance</a>.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">What Makes Omnipod Different</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">Pod-Based Design</h4>
              <p className="text-slate-400 text-sm mb-2">
                Omnipod uses disposable pods (replaced every 3 days) and a separate PDM (Personal Diabetes Manager) controller. Insurance covers both components.
              </p>
              <p className="text-cyan-400 text-sm"><strong>Insurance impact:</strong> Both pods and PDM need coverage</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">PDM Controller Risk</h4>
              <p className="text-slate-400 text-sm mb-2">
                The PDM (wireless controller) is portable and frequently carried in pockets or bags, increasing damage/loss risk. Insurance covers PDM damage, loss, and theft.
              </p>
              <p className="text-cyan-400 text-sm"><strong>Insurance impact:</strong> Critical to protect portable controller</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">Tubing Vulnerability</h4>
              <p className="text-slate-400 text-sm mb-2">
                While Omnipod is tubeless to wear, it includes thin tubing that connects pod to infusion set. Tubing damage stops insulin delivery instantly.
              </p>
              <p className="text-cyan-400 text-sm"><strong>Insurance impact:</strong> Coverage includes tubing replacement</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">Dexcom Integration</h4>
              <p className="text-slate-400 text-sm mb-2">
                Omnipod 5 integrates with Dexcom G6/G7. Insurance covers both pump AND CGM integration. Bundle coverage often recommended.
              </p>
              <p className="text-cyan-400 text-sm"><strong>Insurance impact:</strong> Consider bundling with Dexcom coverage</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Coverage for Omnipod Systems</h3>

          <table className="w-full mb-6 text-sm text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-white">Component</th>
                <th className="text-center py-3 px-4 text-white">Covered?</th>
                <th className="text-left py-3 px-4 text-white">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">PDM Controller</td>
                <td className="text-center py-3 px-4 text-cyan-400">✓ Yes</td>
                <td className="py-3 px-4">Full coverage for damage, loss, theft</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Pods (disposable)</td>
                <td className="text-center py-3 px-4 text-cyan-400">✓ Yes</td>
                <td className="py-3 px-4">Coverage for defective pods</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Tubing</td>
                <td className="text-center py-3 px-4 text-cyan-400">✓ Yes</td>
                <td className="py-3 px-4">Damage and replacement covered</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Dexcom Integration</td>
                <td className="text-center py-3 px-4 text-cyan-400">✓ Yes</td>
                <td className="py-3 px-4">With bundle coverage</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-bold mb-4 mt-8">Why Omnipod Users Need Insurance</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Omnipod users face specific risks:
          </p>

          <ul className="space-y-3 text-slate-300 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">1.</span>
              <div>
                <strong>PDM is portable and at risk:</strong> Easily dropped, sat on, or lost due to constant carrying in pockets/bags
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">2.</span>
              <div>
                <strong>Pod adhesion failures:</strong> Sometimes pods don't stick properly (not insurance-covered, but common concern)
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">3.</span>
              <div>
                <strong>Tubing disconnections:</strong> Thin tubing can get pulled or disconnected during daily activities
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">4.</span>
              <div>
                <strong>Higher component count:</strong> More parts (PDM, pods, tubing) = more potential failure points
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Omnipod Insurance Pricing</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Same as all pump brands:
          </p>

          <ul className="space-y-2 text-slate-300 text-sm">
            <li>• Basic Accidental Damage: £6.95-7/month</li>
            <li>• Comprehensive (recommended): £8-10/month</li>
            <li>• Premium + Dexcom Bundle: £10-13/month</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Recommendation for Omnipod Users</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Get comprehensive coverage (£8-10/month). If using Omnipod 5 with Dexcom, bundle coverage for £10-12/month total. The PDM's portability makes it higher risk, and bundling provides best value.
          </p>

          <p className="text-slate-300 leading-relaxed">
            Omnipod's freedom and flexibility is one of its key advantages—don't let damage anxiety limit your activities. <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">Insulin pump insurance coverage</a> ensures you can use your Omnipod to its full potential knowing you're protected.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/omnipod-insurance"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                Omnipod Insurance Topic Page
              </h4>
              <p className="text-slate-400 text-sm">
                Comprehensive topic page with all details about Omnipod insurance.
              </p>
            </Link>
            <Link
              href="/dexcom-cgm-insurance"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                Dexcom Insurance for Omnipod 5
              </h4>
              <p className="text-slate-400 text-sm">
                Guide to insuring your Dexcom with Omnipod 5 integration.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-900/30 to-cyan-600/20 py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Protect Your Omnipod System
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Comprehensive insurance for your Omnipod PDM, pods, and all components from £8-10/month.
          </p>
          <a
            href="/#calculator"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Omnipod Coverage
          </a>
        </div>
      </section>
    </main>
  )
}
