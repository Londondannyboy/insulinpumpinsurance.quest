import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tandem t:slim X2 Insulin Pump Insurance UK | Coverage & Protection",
  description: "Specialist insurance for Tandem t:slim X2 insulin pump with integrated diabetes technology. Get comprehensive device cover with fast claims and worldwide protection.",
  alternates: {
    canonical: "https://insulinpumpinsurance.quest/tandem-tslim-insurance",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Tandem t:slim X2 Insulin Pump Insurance UK
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          The Tandem t:slim X2 is the only insulin pump that allows users to use compatible CGM systems directly. This advanced touchscreen pump represents a significant investment that deserves comprehensive protection from damage, loss, and theft.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&crop=entropy"
            alt="Tandem t:slim X2 insulin pump touchscreen insurance"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Quick Overview</h2>
          <p className="text-slate-300 mb-4">
            Tandem t:slim X2 pumps are fully covered by specialist insulin pump insurance. Comprehensive policies protect your pump and compatible CGM from accidental damage, theft, and loss from <strong>just £7.50-10/month</strong>, with 24-hour claims processing.
          </p>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Tandem t:slim Systems Covered</h2>

          <p className="text-slate-400 mb-6">
            Tandem t:slim X2 is the flagship pump model with advanced features:
          </p>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">t:slim X2 with Control-IQ</h3>
              <p className="text-slate-400">
                Advanced hybrid closed-loop system with touchscreen interface. Replacement cost: ~£4,000-£4,500. Can use Dexcom G6/G7 or other compatible CGM systems directly through the pump.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">Dexcom G6/G7 Integration</h3>
              <p className="text-slate-400">
                The t:slim X2 integrates directly with Dexcom CGM. Most insurance policies cover both your pump and Dexcom transmitter/receiver when bundled together.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">Infusion Set & Cartridge</h3>
              <p className="text-slate-400">
                Insurance covers damage to your infusion sets and insulin cartridges when caused by the incident covered (e.g., drop that damages the pump also damaged the tubing).
              </p>
            </div>
          </div>
        </section>

        {/* Device Specifications */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Tandem t:slim X2 Technical Specifications</h2>

          <p className="text-slate-400 mb-6">
            Understanding your pump's specifications helps you appreciate the advanced technology you're protecting. Source: <a href="https://www.tandemdiabetes.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Tandem Diabetes</a>
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-slate-800/30 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-700/50 border-b border-slate-600">
                  <th className="px-6 py-4 text-left text-white font-semibold">Specification</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">t:slim X2</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Insurance Relevance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">Replacement Cost</td>
                  <td className="px-6 py-4 text-cyan-400 font-semibold">£4,000-£4,500</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Premium device requiring comprehensive protection</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">Reservoir Capacity</td>
                  <td className="px-6 py-4 text-slate-300">300 units</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Large reservoir reduces fill frequency but damage risk remains</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">Water Resistance</td>
                  <td className="px-6 py-4 text-slate-300">IPX7 (3 feet, 30 minutes)</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Water-resistant but liquid damage still covered by insurance</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">Battery Type</td>
                  <td className="px-6 py-4 text-slate-300">Rechargeable (USB-C)</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Battery issues covered by warranty, not insurance</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">Weight</td>
                  <td className="px-6 py-4 text-slate-300">~95g with cartridge</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Lightweight but vulnerable to drops and impacts</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">Screen Type</td>
                  <td className="px-6 py-4 text-slate-300">Color touchscreen</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Screen damage is most common insurance claim</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-300 font-medium">Control-IQ Technology</td>
                  <td className="px-6 py-4 text-slate-300">Hybrid closed-loop with Dexcom</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Advanced tech increases replacement cost and insurance value</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-xl">
            <p className="text-slate-300 text-sm">
              <strong className="text-white">Note:</strong> Specifications for t:slim X2 with Control-IQ technology. For official Tandem information, visit the <a href="https://www.nhs.uk/conditions/type-1-diabetes/insulin-pumps/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">NHS insulin pumps guidance</a> or consult your diabetes specialist.
            </p>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why t:slim Insurance Matters</h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">💰 Premium Device Cost</h3>
              <p className="text-slate-400">
                Tandem pumps are among the most expensive at ~£4,000-£4,500. Without insurance, replacing a damaged pump would be catastrophic financially. Comprehensive insurance costs just £7-10/month.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">📱 Touchscreen Technology</h3>
              <p className="text-slate-400">
                The touchscreen is advanced but also fragile. Cracks, liquid damage, and physical impact can render the pump non-functional. Accidental damage is the #1 reason for pump replacement.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">🔄 Complex Integration</h3>
              <p className="text-slate-400">
                The t:slim's integration with Dexcom means damage to either device affects your complete diabetes management system. Insurance protects both components.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">💧 Liquid Vulnerability</h3>
              <p className="text-slate-400">
                Despite water-resistant rating, touchscreen devices are vulnerable to liquid damage. Insurance covers accidental water exposure, spills, and rain damage.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">🎯 Tubing Breakage</h3>
              <p className="text-slate-400">
                The tubing connecting pump to infusion set can break or disconnect. Damage to either the pump or tubing system can interrupt insulin delivery suddenly.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">What's Covered</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">✓ Covered</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>t:slim X2 pump body</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Touchscreen damage</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Dexcom G6/G7 transmitter</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Infusion sets/tubing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Accidental damage (drops, liquid, physical)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Theft and loss</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Worldwide travel (90+ days/year)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-400 mb-4">✗ Not Covered</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Manufacturer defects</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Pre-existing damage</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Software/firmware issues</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Wear and tear</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Intentional damage</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Insulin or supplies</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">t:slim Insurance Costs</h2>

          <p className="text-slate-400 mb-6">
            Tandem t:slim insurance is priced based on device value:
          </p>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-3 text-white font-semibold">Coverage Type</th>
                <th className="text-center py-3 px-3 text-white font-semibold">Monthly Cost</th>
                <th className="text-center py-3 px-3 text-white font-semibold">Annual Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">Basic (Accidental Damage)</td>
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">£7.50-8</td>
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">£90-96</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">Comprehensive (Recommended)</td>
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">£9-10</td>
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">£108-120</td>
              </tr>
              <tr>
                <td className="py-3 px-3 text-slate-300">Premium (Extended coverage)</td>
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">£11-15</td>
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">£132-180</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Common Questions About t:slim Insurance</h2>

          <div className="space-y-4">
            <details className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-white">
                What if I crack the touchscreen?
                <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-400 mt-4">
                Touchscreen damage is covered by accidental damage insurance. Cracks, breaks, or liquid damage to the screen is fully covered. You can file a claim and get a replacement within 24 hours.
              </p>
            </details>

            <details className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-white">
                Is my Dexcom covered if integrated with t:slim?
                <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-400 mt-4">
                Yes. Most comprehensive policies include your Dexcom transmitter and receiver when using with t:slim X2. Verify Dexcom coverage is included when purchasing your policy.
              </p>
            </details>

            <details className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-white">
                What about tubing or infusion set damage?
                <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-400 mt-4">
                If your tubing is damaged in the same incident as pump damage, it's usually covered. However, normal infusion set wear is not covered - that's covered by your prescription.
              </p>
            </details>

            <details className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-white">
                Can I use t:slim insurance while traveling internationally?
                <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-400 mt-4">
                Yes. Comprehensive policies include 90+ days of worldwide travel coverage per year. Claims processing is available 24/7 even while you're abroad, ensuring continuous coverage.
              </p>
            </details>

            <details className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-white">
                Are software/firmware issues covered?
                <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-400 mt-4">
                No. Software or firmware issues are handled by Tandem through warranty coverage. Insurance covers physical damage, theft, and loss only - not device malfunctions from software.
              </p>
            </details>
          </div>
        </section>

        {/* Related Pages Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Related Insurance Information</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/" className="bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 transition-colors group">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                Compare All Providers →
              </h3>
              <p className="text-slate-400 text-sm">
                See how different UK insurers compare for <strong>insulin pump insurance</strong> coverage, pricing, and claims processing.
              </p>
            </Link>

            <Link href="/articles/tandem-tslim-insurance-guide" className="bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 transition-colors group">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                Tandem Insurance Guide →
              </h3>
              <p className="text-slate-400 text-sm">
                In-depth article covering everything about Tandem t:slim X2 insurance, Control-IQ protection, and coverage options.
              </p>
            </Link>

            <Link href="/medtronic-insulin-pump-insurance" className="bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 transition-colors group">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                Medtronic Insurance →
              </h3>
              <p className="text-slate-400 text-sm">
                Considering Medtronic? Learn about insurance coverage for 780G, 670G hybrid closed-loop systems.
              </p>
            </Link>

            <Link href="/dexcom-cgm-insurance" className="bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 transition-colors group">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                Dexcom G6/G7 Insurance →
              </h3>
              <p className="text-slate-400 text-sm">
                t:slim X2 users: Explore dedicated Dexcom CGM insurance for your Control-IQ integrated sensor.
              </p>
            </Link>
          </div>

          <div className="mt-8 p-6 bg-cyan-900/20 border border-cyan-500/30 rounded-xl">
            <p className="text-slate-300 text-sm mb-2">
              <strong className="text-white">More Resources:</strong> Visit our <Link href="/articles" className="text-cyan-400 hover:text-cyan-300 underline">articles section</Link> for comprehensive guides on <Link href="/articles/insulin-pump-insurance-costs-guide" className="text-cyan-400 hover:text-cyan-300 underline">insurance costs</Link>, <Link href="/articles/pump-theft-claims-process" className="text-cyan-400 hover:text-cyan-300 underline">claims processes</Link>, and <Link href="/how-much-does-insulin-pump-insurance-cost" className="text-cyan-400 hover:text-cyan-300 underline">pricing comparisons</Link>.
            </p>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Get Your t:slim Insurance Quote</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-slate-300 mb-4">
              Protect your Tandem t:slim X2 with comprehensive insurance starting from £7.50-10/month. Get your personalized quote in just 3 minutes.
            </p>
            <Link
              href="/#calculator"
              className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
            >
              Get My Quote
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
