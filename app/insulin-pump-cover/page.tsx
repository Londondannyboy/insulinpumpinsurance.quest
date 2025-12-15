import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insulin Pump Cover UK | Comprehensive Device Insurance 2025",
  description: "Complete insulin pump insurance cover in the UK. Learn about comprehensive protection for insulin pumps, CGM systems, and diabetes devices with accidental damage, theft, and loss coverage.",
  alternates: {
    canonical: "https://insulinpumpinsurance.quest/insulin-pump-cover",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Insulin Pump Insurance Cover UK
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          Comprehensive insulin pump cover protects your essential diabetes technology from accidental damage, theft, loss, and liquid damage. Get fast replacement (24 hours) and worldwide travel protection from just £6.95/month.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&crop=entropy"
            alt="insulin pump comprehensive cover protection insurance UK"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">What's Covered</h2>
          <p className="text-slate-300 mb-4">
            <strong>Comprehensive insulin pump cover includes:</strong> Accidental damage (drops, liquid, physical), theft, loss, CGM systems, worldwide travel (90 days/year), and often accessories. Most comprehensive policies cost £8-10/month with 24-hour claims processing.
          </p>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Full Coverage Breakdown</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">✓ Accidental Damage</h3>
              <p className="text-slate-400">
                Dropped your pump? Spilled liquid on it? Physical damage from falls or impacts? All covered. Accidental damage is the #1 reason pumps need replacement - insurance covers the full cost.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">✓ Theft Protection</h3>
              <p className="text-slate-400">
                Insulin pumps are stolen from bags, cars, and homes regularly. If your pump is stolen, comprehensive cover provides full replacement cost within 24 hours. Police report required.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">✓ Loss Coverage</h3>
              <p className="text-slate-400">
                Lost your pump somewhere? Comprehensive insurance covers loss as well as theft. You'll need to provide proof of loss (receipts, photos, NHS letters for NHS pumps).
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">✓ CGM System Coverage</h3>
              <p className="text-slate-400">
                Your continuous glucose monitor is as critical as your pump. Comprehensive cover includes Dexcom, FreeStyle Libre, Medtronic Guardian transmitters and receivers.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">✓ Worldwide Travel</h3>
              <p className="text-slate-400">
                Most comprehensive policies include 90 days of worldwide travel coverage per year. If your pump is damaged or lost while traveling, 24-hour claims processing applies even abroad.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">✓ 24-Hour Replacement</h3>
              <p className="text-slate-400">
                When your pump is damaged or lost, specialist insurers typically replace it within 24 hours. Many offer loan equipment while processing your claim so you don't go without insulin delivery.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Coverage Limits & Options</h2>

          <p className="text-slate-400 mb-6">
            Choose the coverage amount that matches your device value:
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
                <td className="py-3 px-3 text-slate-300">£2,000</td>
                <td className="py-3 px-3 text-slate-300">Basic pumps, CGM only</td>
                <td className="text-center py-3 px-3 text-cyan-400">£6.95-7</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">£5,000</td>
                <td className="py-3 px-3 text-slate-300">Medtronic, most pumps ⭐</td>
                <td className="text-center py-3 px-3 text-cyan-400">£8-9</td>
              </tr>
              <tr>
                <td className="py-3 px-3 text-slate-300">£10,000</td>
                <td className="py-3 px-3 text-slate-300">Premium protection, multiple devices</td>
                <td className="text-center py-3 px-3 text-cyan-400">£10-12</td>
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
                <li>• Consumables (insulin, test strips)</li>
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
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Comprehensive Cover</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-bold text-cyan-400 mb-4">For Peace of Mind</h3>
            <p className="text-slate-300 mb-4">
              Your insulin pump is your lifeline. Comprehensive cover ensures that no matter what happens - accidental damage, theft, loss, or travel incident - you'll have replacement within 24 hours for just pennies per day.
            </p>
            <p className="text-slate-300">
              <strong>Annual cost (£96-120)</strong> vs <strong>pump replacement cost (£2,500-6,000)</strong> - the choice is obvious.
            </p>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Get Comprehensive Pump Cover</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-slate-300 mb-4">
              Protect your insulin pump with comprehensive UK cover. Get instant quotes and 24-hour replacement coverage.
            </p>
            <Link
              href="/#calculator"
              className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
            >
              Get Comprehensive Cover
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
