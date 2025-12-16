import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dexcom CGM Insurance UK | G6 & G7 Sensor Coverage",
  description: "Specialist insurance for Dexcom continuous glucose monitors including G6 and G7. Protect your CGM system with comprehensive coverage and 24-hour claims processing.",
  alternates: {
    canonical: "https://insulinpumpinsurance.quest/dexcom-cgm-insurance",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Dexcom CGM Insurance UK
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          Your Dexcom continuous glucose monitor is just as critical to diabetes management as your insulin pump. Specialist insurance protects your G6 or G7 from damage, loss, and theft while you enjoy real-time glucose data anywhere.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&crop=entropy"
            alt="Dexcom G6 G7 CGM sensor insurance diabetes technology"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Quick Overview</h2>
          <p className="text-slate-300 mb-4">
            Dexcom CGM systems (G6 and G7) are fully covered by specialist diabetes device insurance. Comprehensive policies protect your transmitter, receiver, and sensors from accidental damage, theft, and loss from <strong>just £2-4/month as an add-on</strong>, with 24-hour replacement processing.
          </p>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Dexcom Systems Covered</h2>

          <p className="text-slate-400 mb-6">
            All current Dexcom models are covered by specialist diabetes device insurance:
          </p>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">Dexcom G7</h3>
              <p className="text-slate-400">
                The latest continuous glucose monitoring system with smaller sensor and faster warm-up. Replacement cost: transmitter ~£200-300, sensors ~£60/unit. Insurance protects both components.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">Dexcom G6</h3>
              <p className="text-slate-400">
                The widely-used CGM system. Replacement cost: transmitter ~£150-200, sensors ~£50/unit. Insurance covers damage to both your receiver and transmitter devices.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">Transmitter & Receiver</h3>
              <p className="text-slate-400">
                Insurance covers both the wearable transmitter attached to your body and the receiver/reader device. Losing either makes glucose monitoring impossible.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-3">Pump Integration</h3>
              <p className="text-slate-400">
                If using Dexcom with a connected pump (Tandem, Omnipod 5, Medtronic), most policies bundle both devices for combined coverage at a better rate than separate policies.
              </p>
            </div>
          </div>
        </section>

        {/* Device Specifications */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Dexcom G7 Technical Specifications</h2>

          <p className="text-slate-400 mb-6">
            Understanding your CGM system's specifications helps you appreciate the technology you're protecting. Source: <a href="https://www.dexcom.com/en-gb" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Dexcom UK</a>
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-slate-800/30 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-700/50 border-b border-slate-600">
                  <th className="px-6 py-4 text-left text-white font-semibold">Specification</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Dexcom G7</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Insurance Relevance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">Receiver Replacement Cost</td>
                  <td className="px-6 py-4 text-cyan-400 font-semibold">£300-£500</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Essential component - receiver damage requires immediate replacement</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">Sensor Duration</td>
                  <td className="px-6 py-4 text-slate-300">10 days per sensor</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Damaged sensors require immediate replacement for continuous monitoring</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">Sensor Cost</td>
                  <td className="px-6 py-4 text-cyan-400 font-semibold">£60-£80 each</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Accidental sensor damage covered under comprehensive policies</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">Water Resistance</td>
                  <td className="px-6 py-4 text-slate-300">IP28 (up to 8 feet, 24 hours)</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Highly water-resistant but liquid damage still covered</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">Wireless Range</td>
                  <td className="px-6 py-4 text-slate-300">Up to 20 feet</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Receiver-sensor communication crucial for glucose monitoring</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="px-6 py-4 text-slate-300 font-medium">Receiver Screen</td>
                  <td className="px-6 py-4 text-slate-300">Color touchscreen</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">Screen damage is common claim type for receivers</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-300 font-medium">Smartphone App</td>
                  <td className="px-6 py-4 text-slate-300">iOS & Android compatible</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">App-based monitoring reduces receiver dependency</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-xl">
            <p className="text-slate-300 text-sm">
              <strong className="text-white">Note:</strong> Specifications for Dexcom G7. G6 specifications differ slightly. For official Dexcom information, visit the <a href="https://www.nhs.uk/conditions/type-1-diabetes/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">NHS Type 1 Diabetes guidance</a> or consult your diabetes specialist.
            </p>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why Dexcom Insurance Matters</h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">📊 Essential Data</h3>
              <p className="text-slate-400">
                Your Dexcom provides real-time glucose data that guides every insulin decision. Without it, you lose visibility into your glucose trends and patterns, making diabetes management much harder.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">💰 Expensive Replacement</h3>
              <p className="text-slate-400">
                Transmitter replacement cost ~£150-300, and sensors are ~£50-60 each (used every 10-14 days). Damage to either component requires expensive replacement. Insurance spreads this cost at just £2-4/month.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">💧 Liquid Vulnerability</h3>
              <p className="text-slate-400">
                Both the transmitter (worn on your body) and receiver (in your pocket) are vulnerable to liquid damage from sweat, rain, accidental spills, and water exposure. Insurance covers liquid damage.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">🔒 Theft Risk</h3>
              <p className="text-slate-400">
                Dexcom receivers are small and valuable. Theft from bags or cars is a real possibility. Insurance protects you financially if your receiver is stolen.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">🎯 Quick Replacement</h3>
              <p className="text-slate-400">
                When your Dexcom fails, you need replacement fast. Insurance ensures 24-hour processing so you never go without glucose monitoring for long.
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
                  <span>Dexcom G6 & G7 transmitters</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Receiver/reader devices</span>
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
                  <span>Cracked screens/broken buttons</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  <span>Worldwide travel (when bundled with pump)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-400 mb-4">✗ Not Covered</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Sensor supply consumption</span>
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
                  <span>Normal wear and tear</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Connection/calibration issues</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Loss of glucose readings</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Dexcom Insurance Costs</h2>

          <p className="text-slate-400 mb-6">
            Dexcom insurance is affordable as a standalone or bundled with pump insurance:
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
                <td className="py-3 px-3 text-slate-300">Standalone CGM Insurance</td>
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">£2.50-4</td>
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">£30-48</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">Bundled with Pump</td>
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">Included</td>
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">Included</td>
              </tr>
              <tr>
                <td className="py-3 px-3 text-slate-300">Pump + CGM Bundle</td>
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">£8-10</td>
                <td className="text-center py-3 px-3 text-cyan-400 font-semibold">£96-120</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Common Questions About Dexcom Insurance</h2>

          <div className="space-y-4">
            <details className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-white">
                Are Dexcom sensors covered by insurance?
                <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-400 mt-4">
                Your regular sensor supply is not covered (that's covered by your prescription or insurance plan). However, if a sensor is damaged before use due to a covered incident, replacement cost is covered.
              </p>
            </details>

            <details className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-white">
                Can I get Dexcom-only insurance, or do I need a pump?
                <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-400 mt-4">
                Yes! Standalone Dexcom insurance is available for just £2.50-4/month. You can purchase insurance for your CGM even if you don't use a pump or have separate pump insurance.
              </p>
            </details>

            <details className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-white">
                What if my receiver gets lost or stolen?
                <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-400 mt-4">
                Loss and theft are covered by comprehensive insurance. Report it to your insurer, and they'll send you a replacement receiver within 24 hours so you don't miss glucose readings.
              </p>
            </details>

            <details className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-white">
                Can I insure Dexcom G6 if I'm switching to G7?
                <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-400 mt-4">
                Yes. During your transition period, most policies allow you to protect both G6 and G7 systems. Once you're fully transitioned, you can update your coverage to G7 only.
              </p>
            </details>

            <details className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-white">
                Is Dexcom covered when integrated with Tandem t:slim?
                <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-400 mt-4">
                Yes! When using Dexcom with integrated pump systems like Tandem t:slim, most policies bundle both at a single rate (usually £8-10/month total). This is cheaper than separate policies.
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
                See how different UK insurers compare for <strong>insulin pump insurance</strong> and CGM coverage, pricing, and claims processing.
              </p>
            </Link>

            <Link href="/articles/dexcom-g7-insurance-guide" className="bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 transition-colors group">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                Dexcom Insurance Guide →
              </h3>
              <p className="text-slate-400 text-sm">
                In-depth article covering everything about Dexcom G6 and G7 insurance, sensor protection, and receiver coverage.
              </p>
            </Link>

            <Link href="/tandem-tslim-insurance" className="bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 transition-colors group">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                Tandem t:slim Insurance →
              </h3>
              <p className="text-slate-400 text-sm">
                Using Dexcom with t:slim X2? Learn about bundled insurance coverage for hybrid closed-loop systems.
              </p>
            </Link>

            <Link href="/omnipod-insurance" className="bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 transition-colors group">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                Omnipod 5 Insurance →
              </h3>
              <p className="text-slate-400 text-sm">
                Using Dexcom with Omnipod 5? Explore bundled insurance coverage for tubeless closed-loop therapy.
              </p>
            </Link>
          </div>

          <div className="mt-8 p-6 bg-cyan-900/20 border border-cyan-500/30 rounded-xl">
            <p className="text-slate-300 text-sm mb-2">
              <strong className="text-white">More Resources:</strong> Visit our <Link href="/articles" className="text-cyan-400 hover:text-cyan-300 underline">articles section</Link> for comprehensive guides on <Link href="/articles/insulin-pump-insurance-costs-guide" className="text-cyan-400 hover:text-cyan-300 underline">insurance costs</Link>, <Link href="/freestyle-libre-insurance" className="text-cyan-400 hover:text-cyan-300 underline">FreeStyle Libre coverage</Link>, and <Link href="/how-much-does-insulin-pump-insurance-cost" className="text-cyan-400 hover:text-cyan-300 underline">pricing comparisons</Link>.
            </p>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Get Your Dexcom Insurance Quote</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-slate-300 mb-4">
              Protect your Dexcom CGM with comprehensive insurance starting from just £2.50-4/month standalone, or bundled with pump insurance. Get your personalized quote in 3 minutes.
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
