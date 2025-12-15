import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FreeStyle Libre Insurance UK | CGM Coverage & Protection 2025",
  description: "FreeStyle Libre insurance and CGM device protection in the UK. Comprehensive cover for Libre 2, Libre 3, and Libre Sense accessories from £4-6/month.",
  alternates: {
    canonical: "https://insulinpumpinsurance.quest/freestyle-libre-insurance",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          FreeStyle Libre Insurance UK
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          Protect your FreeStyle Libre reader and sensors with specialist CGM insurance. Continuous glucose monitoring is your window into blood sugar trends - when your Libre fails, you need fast replacement. Insurance covers accidental damage, loss, and theft from just £4-6/month.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&crop=entropy"
            alt="FreeStyle Libre CGM insurance protection UK"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Quick Overview</h2>
          <p className="text-slate-300 mb-4">
            <strong>FreeStyle Libre 2 & 3 insurance available.</strong> Cover your reader, sensors, and Sense app access with comprehensive protection. No age restrictions, and rates are among the lowest for CGM-only coverage.
          </p>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why Libre Users Need Insurance</h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">📱 Reader Replacement Cost</h3>
              <p className="text-slate-400">
                FreeStyle Libre readers cost £50-80+ to replace privately. When your reader breaks, you lose glucose visibility instantly. Insurance ensures replacement within 24 hours.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">💧 Water Damage Risk</h3>
              <p className="text-slate-400">
                Readers are frequently dropped in water, rained on, or damaged by liquid exposure. Despite water-resistant design, liquid damage is common and often not covered by warranty. Insurance covers it.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">🔋 Extended Sensor Gaps</h3>
              <p className="text-slate-400">
                Without a working reader, you can't use sensors even if they're intact. Fast Libre reader replacement ensures minimal gap in continuous glucose monitoring during active wear period.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">🚨 Theft from Vehicles & Bags</h3>
              <p className="text-slate-400">
                Readers are stolen from cars and bags regularly. Your Libre represents critical health data and device access. Insurance covers theft with police report.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-404 mb-3">💰 Affordable Protection</h3>
              <p className="text-slate-400">
                At £4-6/month, CGM-only insurance is the most affordable diabetes device cover available. Protects £50-80 reader investment and your glucose monitoring continuity.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">FreeStyle Libre Models Covered</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">FreeStyle Libre 2</h3>
              <p className="text-slate-400 mb-3">
                Reader unit (USB rechargeable), sensor pack accessories, optional Libre LinkUp connectivity device. Coverage includes accidental damage, liquid exposure, loss, and theft.
              </p>
              <p className="text-cyan-400 text-sm">£4-6/month coverage available</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">FreeStyle Libre 3</h3>
              <p className="text-slate-400 mb-3">
                Newest model with smaller sensors and streamlined reader. Same coverage applies - reader replacement, app access protection, sensor accessories covered.
              </p>
              <p className="text-cyan-400 text-sm">£5-7/month coverage available</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">FreeStyle Sense (Bluetooth)</h3>
              <p className="text-slate-400 mb-3">
                Newer Bluetooth-enabled reader option. Phone app integration means coverage extends to app functionality and wireless connectivity features. Same affordable pricing.
              </p>
              <p className="text-cyan-400 text-sm">£5-7/month coverage available</p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">What's Covered</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-cyan-400 mb-4">✓ Covered</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Reader unit (all models)</li>
                <li>• Accidental damage from drops</li>
                <li>• Liquid/water damage</li>
                <li>• Theft (with police report)</li>
                <li>• Loss coverage</li>
                <li>• 24-hour replacement</li>
                <li>• Worldwide travel (90 days/year)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-400 mb-4">✗ Not Covered</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Sensor packs (consumables)</li>
                <li>• Pre-existing damage</li>
                <li>• Manufacturer defects (warranty)</li>
                <li>• Wear and tear</li>
                <li>• Intentional damage</li>
                <li>• Normal software issues</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">CGM-Only Insurance Pricing</h2>

          <p className="text-slate-400 mb-6">
            FreeStyle Libre insurance is one of the most affordable CGM options:
          </p>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-3 text-white font-semibold">Coverage</th>
                <th className="text-center py-3 px-3 text-white font-semibold">Monthly</th>
                <th className="text-center py-3 px-3 text-white font-semibold">Annual</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">Libre 2 Reader Only</td>
                <td className="text-center py-3 px-3 text-cyan-400">£4-5</td>
                <td className="text-center py-3 px-3 text-cyan-400">£48-60</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">Libre 3 Reader + Sense ⭐</td>
                <td className="text-center py-3 px-3 text-cyan-400">£5-6</td>
                <td className="text-center py-3 px-3 text-cyan-400">£60-72</td>
              </tr>
              <tr>
                <td className="py-3 px-3 text-slate-300">Premium Add-on (Pump + Libre)</td>
                <td className="text-center py-3 px-3 text-cyan-400">+£2-3</td>
                <td className="text-center py-3 px-3 text-cyan-400">+£24-36</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Libre Insurance FAQs</h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Can I insure just my Libre reader without a pump?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Yes - CGM-only insurance is available. Many users on injections or on pump-free days use just Libre. You get the same 24-hour replacement benefit as pump users.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Does Libre 3 cost more to insure?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Slightly - Libre 3 is newer (£5-7/month vs Libre 2 at £4-5/month). The higher cost reflects the device's increased value but still represents excellent value for continuous glucose monitoring protection.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                What if my reader stops syncing with my phone?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Software issues and connectivity problems are typically warranty issues, not insurance. Insurance covers physical damage, loss, and theft. Always check with manufacturer first for technical issues.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Can I get insurance if I got my Libre on prescription?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Yes - whether NHS-provided or private prescription. You're still financially responsible if it's lost or damaged, so insurance is recommended. Provide NHS prescription documentation when applying.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Does Libre insurance cover worldwide travel?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Most comprehensive plans include 90 days worldwide travel per year. Your Libre is covered the same way abroad as in the UK - 24-hour claims processing available internationally.
              </p>
            </details>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Protect Your Continuous Glucose Monitoring</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-slate-300 mb-4">
              Your FreeStyle Libre is your connection to real-time glucose data. For less than a coffee per month, ensure you're never without glucose visibility due to device failure, loss, or theft.
            </p>
            <Link
              href="/#calculator"
              className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
            >
              Get Libre Coverage
            </Link>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Related Pages</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/dexcom-cgm-insurance" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              → Dexcom CGM Insurance
            </Link>
            <Link href="/insulin-pump-cover" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              → Comprehensive Pump Cover
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
