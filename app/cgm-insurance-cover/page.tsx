import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "CGM Insurance Cover UK | Comprehensive Glucose Monitor Protection",
  description: "Complete CGM insurance cover for Dexcom, FreeStyle Libre, and Medtronic Guardian. Protect continuous glucose monitoring devices with accidental damage, theft, and loss coverage.",
  alternates: {
    canonical: "https://insulinpumpinsurance.quest/cgm-insurance-cover",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          CGM Insurance Cover UK
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          Comprehensive continuous glucose monitor insurance protects your essential diabetes technology from accidental damage, theft, loss, and liquid damage. Get fast replacement (24 hours) and worldwide travel protection for your Dexcom, FreeStyle Libre, or Medtronic Guardian from £4-8/month.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&crop=entropy"
            alt="CGM continuous glucose monitor insurance protection cover"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">What's Covered</h2>
          <p className="text-slate-300 mb-4">
            <strong>Comprehensive CGM cover includes:</strong> Accidental damage (drops, liquid, physical), theft, loss, all transmitter and receiver devices, worldwide travel (90 days/year), and often sensor accessories. Most comprehensive policies cost £4-8/month with 24-hour claims processing.
          </p>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Full Coverage Breakdown</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">✓ Accidental Damage</h3>
              <p className="text-slate-400">
                Dropped your receiver? Spilled liquid on it? Physical damage from falls? All covered. Accidental damage is the primary reason CGM devices need replacement - insurance covers the full cost.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">✓ Transmitter Loss Coverage</h3>
              <p className="text-slate-400">
                Lost your transmitter? CGM transmitters are frequently lost during travel, exercise, or daily activities. Comprehensive cover provides full replacement cost within 24 hours.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">✓ Receiver/Reader Theft Protection</h3>
              <p className="text-slate-400">
                Receivers are stolen from bags, cars, and homes. If your CGM receiver is stolen, comprehensive cover provides full replacement cost within 24 hours. Police report required.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">✓ Liquid Damage Protection</h3>
              <p className="text-slate-400">
                Water damage from swimming, rain, or accidental spills is a leading cause of CGM failure. Despite water-resistant ratings, liquid damage is covered comprehensively with immediate replacement options.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">✓ Worldwide Travel</h3>
              <p className="text-slate-400">
                Most comprehensive policies include 90 days of worldwide travel coverage per year. If your CGM is damaged or lost while traveling, 24-hour claims processing applies even abroad.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">✓ 24-Hour Replacement</h3>
              <p className="text-slate-400">
                When your CGM is damaged or lost, specialist insurers typically replace it within 24 hours. Many offer loan equipment while processing your claim so you don't go without glucose monitoring.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">CGM Systems Covered</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Dexcom G6 & G7</h3>
              <p className="text-slate-400 text-sm">
                Transmitter, receiver, and sensor accessories. G7's smaller transmitter has same coverage. Most comprehensive option for real-time data sharing.
              </p>
              <p className="text-cyan-400 text-sm mt-3">£5-8/month</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">FreeStyle Libre 2 & 3</h3>
              <p className="text-slate-400 text-sm">
                Reader unit and all sensor pack accessories. Libre 3 has enhanced Bluetooth connectivity. Coverage includes app sync failure protection.
              </p>
              <p className="text-cyan-400 text-sm mt-3">£4-7/month</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Guardian 4</h3>
              <p className="text-slate-400 text-sm">
                Medtronic's newest CGM transmitter and sensor components. Works with Medtronic pumps or standalone. Same comprehensive protection available.
              </p>
              <p className="text-cyan-400 text-sm mt-3">£5-8/month</p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Coverage Limits & Options</h2>

          <p className="text-slate-400 mb-6">
            Choose the coverage amount that matches your CGM device value:
          </p>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-3 text-white font-semibold">Coverage Limit</th>
                <th className="text-left py-3 px-3 text-white font-semibold">Best For</th>
                <th className="text-center py-3 px-3 text-white font-semibold">Cost/Month</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">£1,000</td>
                <td className="py-3 px-3 text-slate-300">Single receiver/reader</td>
                <td className="text-center py-3 px-3 text-cyan-400">£4-5</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">£2,000</td>
                <td className="py-3 px-3 text-slate-300">CGM + pump integration ⭐</td>
                <td className="text-center py-3 px-3 text-cyan-400">£6-8</td>
              </tr>
              <tr>
                <td className="py-3 px-3 text-slate-300">£5,000</td>
                <td className="py-3 px-3 text-slate-300">Multiple devices, redundancy</td>
                <td className="text-center py-3 px-3 text-cyan-400">£8-10</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">What's NOT Covered</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-red-500/30">
              <p className="text-red-400 font-semibold mb-3">✗ Not Covered:</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Pre-existing damage</li>
                <li>• Manufacturer defects (warranty covers)</li>
                <li>• Wear and tear</li>
                <li>• Intentional damage</li>
                <li>• Loss of use/income</li>
                <li>• Consumables (sensor packs)</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <p className="text-cyan-400 font-semibold mb-3">💡 Pro Tips:</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Keep receipts for claims</li>
                <li>• Report theft to police immediately</li>
                <li>• File claims within 30 days</li>
                <li>• Use loan equipment while processing</li>
                <li>• Travel with coverage documentation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Comprehensive CGM Cover</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-bold text-cyan-400 mb-4">For Peace of Mind</h3>
            <p className="text-slate-300 mb-4">
              Your continuous glucose monitor is your window into real-time blood sugar trends. When your CGM fails, you lose critical diabetes management data. Comprehensive cover ensures that no matter what happens - accidental damage, theft, or loss - you'll have replacement within 24 hours for just pennies per day.
            </p>
            <p className="text-slate-300">
              <strong>Annual cost (£48-96)</strong> vs <strong>CGM replacement cost (£300-600+)</strong> - the choice is obvious.
            </p>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Get Comprehensive CGM Cover</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-slate-300 mb-4">
              Protect your continuous glucose monitoring device with comprehensive UK cover. Get instant quotes and 24-hour replacement coverage.
            </p>
            <Link
              href="/#calculator"
              className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
            >
              Get CGM Cover
            </Link>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Related Pages</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/dexcom-cgm-insurance" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              → Dexcom CGM Insurance
            </Link>
            <Link href="/freestyle-libre-insurance" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              → FreeStyle Libre Insurance
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
