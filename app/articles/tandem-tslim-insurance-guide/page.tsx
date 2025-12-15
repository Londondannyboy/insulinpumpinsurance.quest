import type { Metadata } from "next"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Tandem t:slim X2 Insulin Pump Insurance | Control-IQ Coverage Guide",
  description: "Specialist insurance for Tandem t:slim X2 pumps with Control-IQ automation. Comprehensive protection with 24-hour replacement from £8-10/month.",
  keywords: [
    "tandem tslim insurance",
    "tslim x2 insurance",
    "control-iq insurance",
    "tandem pump insurance uk",
    "automated pump insurance"
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Tandem t:slim X2 Insulin Pump Insurance Guide",
  description: "Specialist insurance guide for Tandem t:slim pumps with Control-IQ.",
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
          <span className="text-slate-300">Tandem t:slim Insurance</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-cyan-900 to-slate-900 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop&q=80"
                alt="tandem tslim x2 control-iq insulin pump insurance"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="inline-block bg-cyan-500/30 text-cyan-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Device Guide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Tandem t:slim X2 Insurance
            <span className="text-cyan-400"> Control-IQ Protection</span>
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Complete insurance guide for Tandem t:slim X2 automated insulin pumps with Control-IQ, covering protection, replacement, and claims.
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
            Tandem t:slim X2 pumps are fully eligible for specialist insurance with comprehensive coverage including accidental damage, theft, loss, and worldwide travel. Cost: £8-10/month comprehensive.
          </p>
          <ul className="text-slate-300 space-y-2 text-sm">
            <li>✓ Covers all t:slim models</li>
            <li>✓ Control-IQ automation protected</li>
            <li>✓ Dexcom G6/G7 integration covered</li>
            <li>✓ 24-hour replacement available</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Why Tandem t:slim Users Need Insurance</h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Tandem's t:slim X2 with Control-IQ is one of the most advanced <a href="https://www.nhs.uk/conditions/type-1-diabetes/insulin-pumps/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">insulin pumps</a> available—and one of the most expensive to replace (£3,500-4,500). <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">Insulin pump insurance coverage</a> protects this significant investment while ensuring you maintain automated insulin delivery without interruption.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">What's Special About t:slim Protection</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">Control-IQ Automation</h4>
              <p className="text-slate-400 text-sm mb-2">
                Control-IQ's automated insulin delivery is what makes t:slim powerful. Damage to the pump interrupts this automation—insurance ensures fast replacement to restore automated therapy.
              </p>
              <p className="text-cyan-400 text-sm"><strong>Insurance value:</strong> Critical for automated insulin users</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">Dexcom Integration</h4>
              <p className="text-slate-400 text-sm mb-2">
                t:slim X2 integrates seamlessly with Dexcom G6/G7. Insurance covers the pump; consider bundling with CGM coverage for comprehensive protection.
              </p>
              <p className="text-cyan-400 text-sm"><strong>Insurance value:</strong> Bundle pump + CGM for best value</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">High Replacement Cost</h4>
              <p className="text-slate-400 text-sm mb-2">
                t:slim X2 is among the most expensive pumps. A dropped or damaged device represents a £3,500-4,500 loss without insurance—or a 24-hour replacement with insurance.
              </p>
              <p className="text-cyan-400 text-sm"><strong>Insurance value:</strong> Protection against catastrophic cost</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">Touchscreen Vulnerability</h4>
              <p className="text-slate-400 text-sm mb-2">
                The touchscreen is both a feature and a vulnerability. Liquid damage or cracks render the pump unusable. Insurance covers touchscreen damage immediately.
              </p>
              <p className="text-cyan-400 text-sm"><strong>Insurance value:</strong> Touchscreen protection included</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Coverage Details</h3>

          <table className="w-full mb-6 text-sm text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-white">Component</th>
                <th className="text-center py-3 px-4 text-white">Coverage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">t:slim Pump</td>
                <td className="text-center py-3 px-4 text-cyan-400">✓ Full coverage</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Touchscreen</td>
                <td className="text-center py-3 px-4 text-cyan-400">✓ Covered</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Tubing/Infusion Sets</td>
                <td className="text-center py-3 px-4 text-cyan-400">✓ Covered</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Dexcom Integration</td>
                <td className="text-center py-3 px-4 text-cyan-400">✓ With bundle</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Accidental Damage</td>
                <td className="text-center py-3 px-4 text-cyan-400">✓ Covered</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-bold mb-4 mt-8">Why Comprehensive Insurance Matters for t:slim</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            t:slim X2 users benefit especially from comprehensive insurance because:
          </p>

          <ul className="space-y-3 text-slate-300 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">1.</span>
              <div>
                <strong>Automation dependency:</strong> You rely on Control-IQ daily. Any interruption impacts your diabetes management.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">2.</span>
              <div>
                <strong>High stakes if uninsured:</strong> Replacement cost without insurance (£3,500-4,500) is significant. Insurance at £8-10/month provides incredible value.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">3.</span>
              <div>
                <strong>24-hour replacement critical:</strong> If your t:slim breaks, 24-hour replacement means you're back to automation within a day, not weeks.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">4.</span>
              <div>
                <strong>Bundle savings:</strong> Pump + Dexcom bundle often cheaper than separate policies. Get comprehensive automation + CGM protection together.
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Tandem t:slim Insurance Pricing</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Standard rates apply (no premium for advanced features):
          </p>

          <ul className="space-y-2 text-slate-300 text-sm mb-6">
            <li>• Basic Accidental Damage: £6.95-7/month</li>
            <li>• Comprehensive (Recommended): £8-10/month</li>
            <li>• With Dexcom Bundle: £10-12/month</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Recommendation</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Get comprehensive insurance immediately. If using t:slim with Dexcom, bundle coverage for complete automation protection. The t:slim X2's automation is powerful—insurance ensures you never lose it due to accidents.
          </p>

          <p className="text-slate-300 leading-relaxed">
            At £8-12/month, <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">insurance for insulin pumps</a> protects a £3,500+ investment and ensures your advanced diabetes technology never interrupts due to accidents. For more information on managing type 1 diabetes, visit <a href="https://breakthrought1d.org.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Breakthrough T1D</a>. Control-IQ users especially should prioritize insurance to maintain automated management continuity.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/tandem-tslim-insurance"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                Tandem Topic Page
              </h4>
              <p className="text-slate-400 text-sm">
                Comprehensive topic page about Tandem insurance.
              </p>
            </Link>
            <Link
              href="/dexcom-cgm-insurance"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                Dexcom Insurance for t:slim
              </h4>
              <p className="text-slate-400 text-sm">
                Bundle coverage with Dexcom G6/G7.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-900/30 to-cyan-600/20 py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Protect Your t:slim Control-IQ
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Comprehensive insurance for your Tandem pump with automated insulin delivery protection from £8-10/month.
          </p>
          <a
            href="/#calculator"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get t:slim Coverage
          </a>
        </div>
      </section>
    </main>
  )
}
