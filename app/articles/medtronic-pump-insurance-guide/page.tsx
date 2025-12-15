import type { Metadata } from "next"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Medtronic Insulin Pump Insurance UK | 780G, 670G & 640G Cover",
  description: "Specialist insurance for Medtronic insulin pumps including 780G, 670G, and 640G models. Comprehensive protection with 24-hour replacement from £8-10/month.",
  keywords: [
    "medtronic pump insurance uk",
    "780G insurance",
    "670G insurance",
    "640G pump insurance",
    "medtronic insulin pump cover",
    "medtronic pump protection"
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Medtronic Insulin Pump Insurance UK",
  description: "Specialist insurance guide for Medtronic 780G, 670G, and 640G insulin pumps.",
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
          <span className="text-slate-300">Medtronic Pump Insurance Guide</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-cyan-900 to-slate-900 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop&q=80"
                alt="medtronic insulin pump 780G 670G insurance protection"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="inline-block bg-cyan-500/30 text-cyan-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Device-Specific Guide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Medtronic Insulin Pump Insurance
            <span className="text-cyan-400"> 780G, 670G & 640G</span>
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Specialist insurance covering Medtronic MiniMed insulin pumps including latest 780G automated insulin delivery system, with comprehensive protection from just £8-10/month.
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
            Medtronic pumps (all models) can be insured with specialist diabetes device insurance. Coverage typically costs £8-10/month for comprehensive protection and includes 24-hour replacement, accidental damage, theft, loss, and worldwide travel protection (90 days/year).
          </p>
          <ul className="text-slate-300 space-y-2 text-sm">
            <li>✓ Covers all Medtronic models (780G, 670G, 640G, older MiniMeds)</li>
            <li>✓ Same insurance rates for all models</li>
            <li>✓ 24-hour replacement processing</li>
            <li>✓ Works with NHS or private pumps</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Medtronic Pump Models Covered</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">MiniMed 780G</h4>
              <p className="text-slate-300 text-sm mb-3">
                Latest automated insulin delivery system with advanced glucose prediction and auto-pause features. Compatible with Medtronic Guardian continuous glucose monitor.
              </p>
              <p className="text-cyan-400 text-sm"><strong>Insurance cost:</strong> £8-10/month (comprehensive)</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">MiniMed 670G</h4>
              <p className="text-slate-300 text-sm mb-3">
                Hybrid closed-loop system widely available on NHS. Requires separate CGM sensor. Very common among NHS pump users.
              </p>
              <p className="text-cyan-400 text-sm"><strong>Insurance cost:</strong> £8-10/month (comprehensive)</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">MiniMed 640G</h4>
              <p className="text-slate-300 text-sm mb-3">
                Older closed-loop model with low glucose suspend feature. Still in use, fully supported by insurance providers.
              </p>
              <p className="text-cyan-400 text-sm"><strong>Insurance cost:</strong> £8-10/month (comprehensive)</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">Other Medtronic MiniMeds</h4>
              <p className="text-slate-300 text-sm mb-3">
                All Medtronic MiniMed models (554, 723, 722, etc.) are eligible for insurance coverage at same rates.
              </p>
              <p className="text-cyan-400 text-sm"><strong>Insurance cost:</strong> £8-10/month (comprehensive)</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Why Medtronic Users Need Insurance</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Medtronic pumps are frequently <a href="https://www.nhs.uk/conditions/type-1-diabetes/insulin-pumps/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">used on the NHS</a> and widely available privately. Whether you use 780G's advanced automation or the reliable 670G, <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">insurance for insulin pumps</a> protects you from scenarios that can interrupt your therapy.
          </p>

          <ul className="space-y-3 mb-6 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">1.</span>
              <div>
                <strong>High replacement cost:</strong> Medtronic pumps cost £3,000-4,500 to replace. Insurance covers this catastrophic cost.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">2.</span>
              <div>
                <strong>Drop damage risk:</strong> Medtronic pumps, like all devices, are vulnerable to accidental drops and impacts.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">3.</span>
              <div>
                <strong>Water vulnerability:</strong> Despite water-resistant design, liquid damage occurs and isn't always covered by warranty.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">4.</span>
              <div>
                <strong>Theft from bags/cars:</strong> Medtronic pumps are frequently stolen from unattended bags.
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">What Medtronic Pump Insurance Covers</h3>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-4">
              <h4 className="text-white font-bold mb-3">✓ Covered</h4>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Accidental drops and impacts</li>
                <li>• Liquid/water damage</li>
                <li>• Theft (with police report)</li>
                <li>• Loss coverage</li>
                <li>• 24-hour replacement</li>
                <li>• Worldwide travel (90 days/yr)</li>
              </ul>
            </div>

            <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
              <h4 className="text-red-400 font-bold mb-3">✗ Not Covered</h4>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Manufacturer defects</li>
                <li>• Wear and tear</li>
                <li>• Intentional damage</li>
                <li>• Normal degradation</li>
                <li>• Software issues</li>
                <li>• Loss of use/income</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Coverage Recommendations for Medtronic Users</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Most Medtronic pump users benefit from comprehensive coverage at £8-10/month. If using Guardian CGM with your pump, bundling pump + CGM coverage offers best value.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <h4 className="text-lg font-bold text-white mb-2">If on NHS 670G/640G</h4>
              <p className="text-slate-300 text-sm">Comprehensive coverage (£8-10/month) is essential. You're financially responsible if pump is lost/damaged, and NHS replacement takes weeks.</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <h4 className="text-lg font-bold text-white mb-2">If using private Medtronic pump</h4>
              <p className="text-slate-300 text-sm">Comprehensive coverage recommended to protect your £4,000+ investment. Cost (£8-10/month) is small compared to replacement risk.</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <h4 className="text-lg font-bold text-white mb-2">If using Guardian CGM</h4>
              <p className="text-slate-300 text-sm">Bundle pump + CGM coverage. Usually costs only £2-3/month more than pump alone, but protects both critical devices.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">How to Insure Your Medtronic Pump</h3>

          <ol className="space-y-4 mb-6 text-slate-300">
            <li className="flex gap-4">
              <span className="text-cyan-400 font-bold">1.</span>
              <div>
                <strong>Get your pump details:</strong> Model (780G, 670G, etc.), serial number, and whether it's NHS or private
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 font-bold">2.</span>
              <div>
                <strong>Gather documentation:</strong> NHS letter (if NHS pump) or purchase receipt (if private)
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 font-bold">3.</span>
              <div>
                <strong>Get instant quotes:</strong> Use our comparison calculator to see all available options
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 font-bold">4.</span>
              <div>
                <strong>Apply for coverage:</strong> Most providers approve within hours. Coverage begins immediately.
              </div>
            </li>
          </ol>

          <h3 className="text-2xl font-bold mb-4 mt-8">Conclusion</h3>

          <p className="text-slate-300 leading-relaxed">
            Whether you use a Medtronic 780G with the latest automation or a reliable 670G on the NHS, specialist <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">insulin pump insurance UK</a> protects you from catastrophic replacement costs and ensures 24-hour replacement if something goes wrong. For comprehensive information on managing diabetes with insulin pumps, visit <a href="https://www.diabetes.org.uk/guide-to-diabetes/managing-your-diabetes/treating-your-diabetes/insulin-pumps" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Diabetes UK</a>. At just £8-10/month for comprehensive coverage, it's an essential investment in your diabetes management security.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/medtronic-insulin-pump-insurance"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                Medtronic Pump Insurance Topic Guide
              </h4>
              <p className="text-slate-400 text-sm">
                Detailed topic page with all Medtronic models and coverage options.
              </p>
            </Link>
            <Link
              href="/insulin-pump-cover"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                Comprehensive Pump Cover
              </h4>
              <p className="text-slate-400 text-sm">
                General guide to insulin pump insurance coverage.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-900/30 to-cyan-600/20 py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Protect Your Medtronic Pump
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Get comprehensive insurance for your Medtronic pump from just £8-10/month.
          </p>
          <a
            href="/#calculator"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Medtronic Coverage
          </a>
        </div>
      </section>
    </main>
  )
}
