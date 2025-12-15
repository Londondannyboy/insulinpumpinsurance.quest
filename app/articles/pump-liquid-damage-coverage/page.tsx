import type { Metadata } from "next"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Insulin Pump Liquid Damage Coverage | Water Damage Insurance Guide",
  description: "Complete guide to liquid and water damage coverage for insulin pumps. Learn what's covered, claims process, and prevention strategies.",
  keywords: [
    "pump liquid damage coverage",
    "water damage insulin pump insurance",
    "pump water damage claims",
    "liquid damage protection",
    "pump damage insurance"
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Insulin Pump Liquid Damage Coverage Guide",
  description: "Comprehensive guide to liquid and water damage coverage for insulin pumps.",
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
          <span className="text-slate-300">Liquid Damage Coverage</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-cyan-900 to-slate-900 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop&q=80"
                alt="insulin pump liquid water damage insurance coverage"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="inline-block bg-cyan-500/30 text-cyan-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Coverage Guide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Insulin Pump Liquid Damage
            <span className="text-cyan-400"> Coverage Guide</span>
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Complete guide to water and liquid damage coverage for insulin pumps, including what's covered, real-world scenarios, and prevention strategies.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span>December 2024</span>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/30 to-slate-900/30 border border-blue-500/30 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Liquid Damage is Covered</h2>
          <p className="text-slate-300 mb-4">
            Most insulin pump insurance policies cover water and liquid damage as part of accidental damage protection. Spills, rain exposure, and accidental submersion are typically covered at full replacement cost (minus excess).
          </p>
          <p className="text-cyan-400 text-sm font-semibold">💧 Most common claim type: liquid damage from everyday activities</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Liquid Damage: What You Need to Know</h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Insulin pumps are sophisticated electronic devices. While they have some water resistance, they're not waterproof. A single spillage, rain exposure, or bathroom accident can render your pump unusable. Understanding your liquid damage coverage is essential.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">What Counts as Liquid Damage?</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-2">✓ Covered Scenarios</h4>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>• Spilled drink on pump (coffee, tea, water, juice)</li>
                <li>• Rain exposure during outdoor activities</li>
                <li>• Accidental submersion in water/bath</li>
                <li>• Sweat damage during intense exercise</li>
                <li>• Splashes from washing hands or dishes</li>
                <li>• Swimming pool or beach water exposure</li>
                <li>• Humidity damage in bathroom use</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-red-500/30">
              <h4 className="text-lg font-bold text-white mb-2">✗ Typically NOT Covered</h4>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>• Deliberate submersion (water sports without protection)</li>
                <li>• Pre-existing water damage before claim</li>
                <li>• Damage from normal wear/moisture exposure over time</li>
                <li>• Damage from manufacturer defect (covered by warranty instead)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Real-World Liquid Damage Scenarios</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <h4 className="text-lg font-bold text-white mb-3">Scenario 1: Coffee Spill</h4>
              <p className="text-slate-400 text-sm">
                You accidentally knock over your morning coffee onto your pump sitting on the table. The liquid seeps into the device, causing a short circuit. Result: Pump is completely unresponsive.
              </p>
              <p className="text-cyan-400 text-sm mt-2"><strong>Covered?</strong> Yes - classic accidental liquid damage</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <h4 className="text-lg font-bold text-white mb-3">Scenario 2: Rain During Outdoor Activity</h4>
              <p className="text-slate-400 text-sm">
                Heavy rain soaks your pump while you're out cycling. The device stops responding. You get a replacement within 24 hours and continue cycling.
              </p>
              <p className="text-cyan-400 text-sm mt-2"><strong>Covered?</strong> Yes - unexpected weather exposure</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <h4 className="text-lg font-bold text-white mb-3">Scenario 3: Bath Submersion</h4>
              <p className="text-slate-400 text-sm">
                You forget to remove your pump before getting in the bath. Full submersion causes immediate water damage. The display fails and the device won't respond to button presses.
              </p>
              <p className="text-cyan-400 text-sm mt-2"><strong>Covered?</strong> Yes - accidental submersion during normal activity</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <h4 className="text-lg font-bold text-white mb-3">Scenario 4: Humidity/Steam Damage</h4>
              <p className="text-slate-400 text-sm">
                You take your pump into a steamy bathroom (without proper case protection). Over weeks, condensation builds inside the device. Eventually the screen becomes unresponsive.
              </p>
              <p className="text-cyan-400 text-sm mt-2"><strong>Covered?</strong> Possibly - depends on how damage occurred and insurer assessment</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Liquid Damage Claims Process</h3>

          <table className="w-full mb-6 text-sm text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-white">Step</th>
                <th className="text-left py-3 px-4 text-white">Action</th>
                <th className="text-center py-3 px-4 text-white">Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4">Stop using pump immediately (prevent further damage)</td>
                <td className="text-center py-3 px-4">Immediately</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">2</td>
                <td className="py-3 px-4">Do NOT attempt to dry or repair—document damage with photos</td>
                <td className="text-center py-3 px-4">Within 1 hour</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">3</td>
                <td className="py-3 px-4">Call insurer's 24-hour claims line with policy number</td>
                <td className="text-center py-3 px-4">Within 24 hours</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">4</td>
                <td className="py-3 px-4">Describe damage circumstances clearly (what liquid, how it happened)</td>
                <td className="text-center py-3 px-4">During call</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">5</td>
                <td className="py-3 px-4">Email photos and brief written account if requested</td>
                <td className="text-center py-3 px-4">Within 48 hours</td>
              </tr>
              <tr>
                <td className="py-3 px-4">6</td>
                <td className="py-3 px-4">Receive approved claim and replacement pump delivery</td>
                <td className="text-center py-3 px-4">Within 24 hours of approval</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-bold mb-4 mt-8">Prevention Strategies</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            The best liquid damage claim is one you don't have to make. Consider these prevention strategies:
          </p>

          <ul className="space-y-3 text-slate-300 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">1.</span>
              <div>
                <strong>Waterproof case:</strong> Use a case designed for your pump model. Cases add minimal bulk but provide significant protection from splashes and light rain.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">2.</span>
              <div>
                <strong>Separate from drinks:</strong> Never place pump near beverages. One spill is the most common liquid damage scenario.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">3.</span>
              <div>
                <strong>Bathroom precautions:</strong> Remove pump before showers, baths, or using sinks. Even brief exposure to steam can cause issues.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">4.</span>
              <div>
                <strong>Exercise protection:</strong> If your pump gets heavy sweat exposure, use a protective pouch or cloth to wick moisture away.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">5.</span>
              <div>
                <strong>Proper storage:</strong> Store pump in dry environment at room temperature. Avoid damp areas like bathrooms.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">6.</span>
              <div>
                <strong>Water sports planning:</strong> If swimming or water sports, use waterproof case designed for water immersion (check manufacturer specs).
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Key Takeaways</h3>

          <ul className="space-y-3 text-slate-300 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div>
                <strong>Liquid damage is insurable:</strong> Most comprehensive policies cover accidental water damage as standard.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div>
                <strong>Common claim type:</strong> Spills and splash damage are one of the most frequent claim types—insurers understand these happen.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div>
                <strong>Act fast on claims:</strong> Call your insurer within 24 hours of damage. Don't attempt DIY repairs—let the insurer assess.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div>
                <strong>Prevention matters:</strong> A simple waterproof case (£5-15) is cheaper than your excess (£25-100) and prevents most liquid damage scenarios.
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Conclusion</h3>

          <p className="text-slate-300 leading-relaxed">
            Liquid damage is one of the most common insulin pump issues. With comprehensive <a href="/" className="text-cyan-400 hover:text-cyan-300 underline">insulin pump insurance</a>, you're protected from the accidental spills and unexpected water exposure that happen in real life. For guidance on managing your pump safely, visit <a href="https://www.diabetes.org.uk/guide-to-diabetes/managing-your-diabetes/treating-your-diabetes/insulin-pumps" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Diabetes UK</a>. Invest in a simple waterproof case for prevention, get comprehensive insurance coverage, and you can use your pump with confidence—knowing accidents are covered.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/insurance-pump-cover"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                Comprehensive Coverage
              </h4>
              <p className="text-slate-400 text-sm">
                Overview of what comprehensive pump insurance covers.
              </p>
            </Link>
            <Link
              href="/pump-insurance-claims-process"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                Claims Process
              </h4>
              <p className="text-slate-400 text-sm">
                Step-by-step guide to filing any insurance claim.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-900/30 to-cyan-600/20 py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Protected Against Liquid Damage
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Comprehensive insurance covers water damage, spills, and liquid exposure—with 24-hour replacement.
          </p>
          <a
            href="/#calculator"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Liquid Damage Protection
          </a>
        </div>
      </section>
    </main>
  )
}
