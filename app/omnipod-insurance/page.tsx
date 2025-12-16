import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Omnipod Insulin Pump Insurance UK | Dash & Omnipod 5 Cover",
  description: "Specialist insurance for Omnipod insulin pumps including Dash and Omnipod 5. Get comprehensive diabetes device cover with fast claims processing and worldwide protection.",
  alternates: {
    canonical: "https://insulinpumpinsurance.quest/omnipod-insurance",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Omnipod Insulin Pump Insurance UK
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          Omnipod's tubeless design and pod-based system represent a unique approach to insulin delivery. Comprehensive insurance protects your pods and PDM controller from damage, loss, and theft while you enjoy the freedom of tubeless therapy.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&crop=entropy"
            alt="Omnipod insulin pump Dash insurance protection diabetes"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Quick Overview</h2>
          <p className="text-slate-300 mb-4">
            Omnipod pumps (Dash and Omnipod 5) are fully covered by specialist insulin pump insurance. Comprehensive policies protect your pods and PDM from accidental damage, theft, and loss from <strong>just £6.95-10/month</strong>, with 24-hour claims processing.
          </p>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Omnipod Systems Covered</h2>

          <p className="text-slate-400 mb-6">
            All current Omnipod models are covered by specialist diabetes device insurance:
          </p>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">Omnipod 5</h3>
              <p className="text-slate-400">
                The latest hybrid closed-loop system with Dexcom G6 integration. Replacement cost: ~£2,200-£2,500. Insurance protects both the pods and PDM controller.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">Omnipod Dash</h3>
              <p className="text-slate-400">
                The touchscreen tubeless pump system. Replacement cost: ~£2,000-£2,300. Comprehensive insurance ensures you have coverage if your Dash or pods are damaged.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">Pods & PDM Controller</h3>
              <p className="text-slate-400">
                Insurance covers both the consumable pods and the PDM remote. Replacement pods (~£50-80 each) and PDM (~£800-1,000) are expensive if damaged and need frequent replacement.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">Dexcom Integration</h3>
              <p className="text-slate-400">
                If using Omnipod 5, most insurance policies also cover your Dexcom G6 CGM system when bundled with pump coverage. Verify Dexcom is included with your policy.
              </p>
            </div>
          </div>
        </section>

        {/* Device Specifications */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Omnipod Dash Technical Specifications</h2>

          <p className="text-slate-400 mb-6">
            Understanding your Omnipod system's specifications helps you appreciate the technology you're protecting. Source: <a href="https://www.omnipod.com/en-gb" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Omnipod UK</a>
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-slate-800/30 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-700/50 border-b border-slate-600">
                  <th className="px-6 py-4 text-left text-white font-semibold">Specification</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Omnipod Dash/5</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Insurance Relevance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">PDM Replacement Cost</td>
                  <td className="px-6 py-4 text-cyan-400 font-semibold">£800-£1,000</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">PDM essential for insulin delivery - critical to insure</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">Pod Replacement Cost</td>
                  <td className="px-6 py-4 text-cyan-400 font-semibold">£50-80 each</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Damaged pods require immediate replacement</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">Reservoir Capacity</td>
                  <td className="px-6 py-4 text-slate-300">200 units per pod</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Pod damage covered under accidental damage</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">Water Resistance</td>
                  <td className="px-6 py-4 text-slate-300">IPX8 (25 feet, 60 minutes)</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Water-resistant pods but liquid damage still covered</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">Pod Duration</td>
                  <td className="px-6 py-4 text-slate-300">Up to 72 hours</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Frequent pod changes increase damage risk</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">PDM Screen</td>
                  <td className="px-6 py-4 text-slate-300">Color touchscreen</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Screen damage is common claim type for PDM</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-300 font-medium">Wireless Range</td>
                  <td className="px-6 py-4 text-slate-300">Up to 5 feet</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Pod-PDM communication crucial for therapy</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-xl">
            <p className="text-slate-300 text-sm">
              <strong className="text-white">Note:</strong> Specifications may vary by model (Dash vs Omnipod 5). For official Omnipod information, visit the <a href="https://www.nhs.uk/conditions/type-1-diabetes/insulin-pumps/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">NHS insulin pumps guidance</a> or consult your diabetes specialist.
            </p>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why Omnipod Insurance Matters</h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">💰 Pod Replacement Costs</h3>
              <p className="text-slate-400">
                Omnipod pods are consumables that get replaced every 3 days. A damaged pod must be replaced immediately (~£50-80 cost). Insurance protects you from these unexpected expenses.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">🔄 Active Lifestyle</h3>
              <p className="text-slate-400">
                Omnipod's tubeless design makes it popular with active users. But pods attached to skin are vulnerable to damage from sports, water activities, and accidents. Insurance covers these frequent incidents.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">⚡ PDM Reliability</h3>
              <p className="text-slate-400">
                The PDM controller is your lifeline to insulin delivery. Without it, you can't communicate with your pods. A damaged or lost PDM (~£800-1,000 replacement) is catastrophic. Insurance ensures fast replacement.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">💧 Water Vulnerability</h3>
              <p className="text-slate-400">
                While Omnipod pods are water-resistant, both pods and PDM can be damaged by submersion, liquid spillage, or heavy rain. Insurance covers accidental liquid damage that resistance ratings don't protect against.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">🔒 Theft Risk</h3>
              <p className="text-slate-400">
                PDM controllers are small and portable, making them theft targets. If stolen while traveling or at work, insurance covers replacement. Home insurance often doesn't cover portable medical devices.
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
                  <span>Omnipod Dash & Omnipod 5 systems</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>PDM controllers/remote</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Active pods and spare pods</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Dexcom G6 integration</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Accidental damage (drops, water, physical)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Theft and loss</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Worldwide travel (90 days/year)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-400 mb-4">✗ Not Covered</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Normal pod consumption</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Manufacturing defects</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Pre-existing damage</span>
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
          <h2 className="text-3xl font-bold text-white mb-6">Omnipod Insurance Costs</h2>

          <p className="text-slate-400 mb-6">
            Omnipod insurance is affordable with pricing that reflects the lower device cost:
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
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">£6.95</td>
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">£84</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">Standard (Recommended)</td>
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">£8-9</td>
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">£96-108</td>
              </tr>
              <tr>
                <td className="py-3 px-3 text-slate-300">Premium (Full coverage)</td>
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">£10-12</td>
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">£120-144</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Common Questions About Omnipod Insurance</h2>

          <div className="space-y-4">
            <details className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-white">
                What happens if I lose my PDM controller?
                <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-400 mt-4">
                Loss of the PDM is fully covered by comprehensive insurance. Your insurer will replace it within 24 hours. You can't communicate with your pods without the PDM, so fast replacement is critical.
              </p>
            </details>

            <details className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-white">
                Are replacement pods covered by insurance?
                <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-400 mt-4">
                Standard pod consumption is not covered (that's what your prescription covers). However, if a pod is damaged or lost before you can use it, comprehensive insurance covers the replacement cost (~£50-80).
              </p>
            </details>

            <details className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-white">
                Can I get insurance for Omnipod 5 with Dexcom G6?
                <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-400 mt-4">
                Yes. Most providers cover both your Omnipod 5 and integrated Dexcom G6 system under one comprehensive policy. Verify Dexcom coverage is included when purchasing.
              </p>
            </details>

            <details className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-white">
                Is water damage covered if my pod gets wet?
                <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-400 mt-4">
                Yes. Accidental liquid damage from spills, rain, or submersion is covered by comprehensive insurance - even though pods have water-resistant ratings. Water-resistant ≠ waterproof.
              </p>
            </details>

            <details className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-white">
                Can I travel internationally with Omnipod insurance?
                <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-400 mt-4">
                Yes. Most comprehensive policies include 90 days of worldwide travel coverage per year. If your Omnipod system is damaged while traveling, you can file a claim with 24-hour processing available abroad.
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

            <Link href="/articles/omnipod-pump-insurance-explained" className="bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 transition-colors group">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                Omnipod Insurance Guide →
              </h3>
              <p className="text-slate-400 text-sm">
                In-depth article covering everything about Omnipod tubeless pump insurance, pod protection, and PDM coverage.
              </p>
            </Link>

            <Link href="/medtronic-insulin-pump-insurance" className="bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 transition-colors group">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                Medtronic Insurance →
              </h3>
              <p className="text-slate-400 text-sm">
                Considering Medtronic? Learn about insurance coverage for 780G, 670G, and Guardian CGM systems.
              </p>
            </Link>

            <Link href="/dexcom-cgm-insurance" className="bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 transition-colors group">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                Dexcom G6/G7 Insurance →
              </h3>
              <p className="text-slate-400 text-sm">
                Omnipod 5 users: Explore dedicated Dexcom CGM insurance options for your G6 or G7 system.
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
          <h2 className="text-3xl font-bold text-white mb-6">Get Your Omnipod Insurance Quote</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-slate-300 mb-4">
              Protect your Omnipod system with comprehensive insurance starting from £6.95/month. Get your personalized quote in just 3 minutes.
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
