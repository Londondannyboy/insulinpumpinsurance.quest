import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "NHS vs Private Insulin Pump Insurance UK | Comparison Guide 2025",
  description: "Compare NHS pump provision with private insulin pump insurance. Understand coverage differences, replacement speeds, financial responsibility, and when insurance matters for NHS users.",
  alternates: {
    canonical: "https://insulinpumpinsurance.quest/nhs-vs-private-pump-insurance",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          NHS vs Private Insulin Pump Insurance
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          The NHS provides insulin pumps to eligible patients, but there are significant gaps in coverage and replacement services. Specialist private insurance complements NHS provision by offering fast replacement, financial protection, and peace of mind for pump users.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&crop=entropy"
            alt="NHS private insurance insulin pump comparison UK"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Quick Summary</h2>
          <p className="text-slate-300 mb-2">
            <strong>NHS provision:</strong> Covers pump device and replacement, but slow process (weeks/months)
          </p>
          <p className="text-slate-300">
            <strong>Private insurance:</strong> Fast replacement (24 hours), covers loss/theft, financial protection - just £8-10/month
          </p>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Detailed Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-3 text-white font-semibold">Aspect</th>
                  <th className="text-center py-4 px-3 text-slate-300">NHS Provision</th>
                  <th className="text-center py-4 px-3 text-cyan-400 font-semibold">Specialist Insurance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50 bg-slate-800/20">
                  <td className="py-4 px-3 text-slate-300 font-semibold">Replacement Speed</td>
                  <td className="text-center py-4 px-3 text-slate-400">Weeks to months</td>
                  <td className="text-center py-4 px-3 text-green-400 font-bold">24 hours</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-3 text-slate-300 font-semibold">Loss Coverage</td>
                  <td className="text-center py-4 px-3 text-red-400">Not covered</td>
                  <td className="text-center py-4 px-3 text-green-400 font-bold">Fully covered</td>
                </tr>
                <tr className="border-b border-slate-700/50 bg-slate-800/20">
                  <td className="py-4 px-3 text-slate-300 font-semibold">Theft Coverage</td>
                  <td className="text-center py-4 px-3 text-red-400">Not covered</td>
                  <td className="text-center py-4 px-3 text-green-400 font-bold">Fully covered</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-3 text-slate-300 font-semibold">Accidental Damage</td>
                  <td className="text-center py-4 px-3 text-red-400">Warranty only</td>
                  <td className="text-center py-4 px-3 text-green-400 font-bold">Fully covered</td>
                </tr>
                <tr className="border-b border-slate-700/50 bg-slate-800/20">
                  <td className="py-4 px-3 text-slate-300 font-semibold">Travel Abroad</td>
                  <td className="text-center py-4 px-3 text-red-400">Not covered</td>
                  <td className="text-center py-4 px-3 text-green-400 font-bold">90+ days/year</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-3 text-slate-300 font-semibold">Financial Responsibility</td>
                  <td className="text-center py-4 px-3 text-slate-400">You liable for loss/damage</td>
                  <td className="text-center py-4 px-3 text-green-400 font-bold">Insurer covers</td>
                </tr>
                <tr className="border-b border-slate-700/50 bg-slate-800/20">
                  <td className="py-4 px-3 text-slate-300 font-semibold">Loan Equipment</td>
                  <td className="text-center py-4 px-3 text-slate-400">Possible, not guaranteed</td>
                  <td className="text-center py-4 px-3 text-green-400 font-bold">Often included</td>
                </tr>
                <tr>
                  <td className="py-4 px-3 text-slate-300 font-semibold">Cost</td>
                  <td className="text-center py-4 px-3 text-slate-400">Free (NHS funded)</td>
                  <td className="text-center py-4 px-3 text-cyan-400">£8-10/month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Your Financial Responsibility</h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-red-500/30">
              <h3 className="text-xl font-bold text-red-400 mb-3">⚠️ Critical Point: You ARE Liable</h3>
              <p className="text-slate-400 mb-4">
                Even with an NHS pump, <strong>you remain financially responsible</strong> if it is lost, stolen, or significantly damaged. The NHS will not automatically replace your pump if YOU are responsible for the damage or loss.
              </p>
              <p className="text-slate-400">
                This is where specialist insurance becomes critical - it protects you from a potentially £2,500-4,500 replacement bill.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Scenario: Pump Stolen From Car</h3>
              <p className="text-slate-400 mb-3">
                Your NHS pump is stolen from your car during a shopping trip.
              </p>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li><strong>Without insurance:</strong> You pay full replacement cost (~£3,500-4,500)</li>
                <li><strong>With insurance:</strong> File claim, get replacement within 24 hours, pay excess only (£0-100)</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Scenario: Pump Dropped & Broken</h3>
              <p className="text-slate-400 mb-3">
                You accidentally drop your NHS pump and crack the screen - it no longer works.
              </p>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li><strong>Without insurance:</strong> Possibly liable for replacement cost</li>
                <li><strong>With insurance:</strong> Accidental damage covered, 24-hour replacement</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why Specialist Insurance Matters for NHS Users</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">1. Financial Protection</h3>
              <p className="text-slate-400">
                Insurance protects you from the £2,500-4,500 liability if your NHS pump is lost or damaged. For just £96-120/year, you eliminate this catastrophic financial risk.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">2. Speed of Replacement</h3>
              <p className="text-slate-400">
                NHS replacement takes weeks or months. Specialist insurance provides 24-hour replacement. When your diabetes management depends on continuous pump therapy, this matters.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">3. Coverage Gaps</h3>
              <p className="text-slate-400">
                NHS doesn't cover theft or loss. If your pump is stolen, you have no NHS replacement option - only insurance helps.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">4. Travel Coverage</h3>
              <p className="text-slate-400">
                NHS coverage doesn't extend abroad. Traveling with diabetes is difficult without insurance - specialist cover gives you peace of mind internationally.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Can You Get Insurance for NHS Pumps?</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-6">
            <p className="text-slate-300 mb-4">
              <strong>Yes, absolutely.</strong> Most specialist insurance providers offer specific policies for NHS-provided pumps. You remain financially responsible if a pump is lost or damaged, so insurance is recommended.
            </p>
            <p className="text-slate-300">
              When applying, you'll need to provide:
            </p>
            <ul className="text-slate-300 text-sm space-y-1 mt-3 ml-4">
              <li>• NHS letter confirming pump provision</li>
              <li>• Pump model and serial number</li>
              <li>• Date of provision</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <p className="text-slate-300">
              <strong>Note:</strong> Some private policies may cost slightly more for NHS pumps (since the insurer can't verify private purchase history), but the cost difference is minimal (usually less than £1/month more).
            </p>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Recommendation</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-slate-300 mb-4">
              <strong>If you have an NHS pump:</strong> Get specialist insurance immediately. The NHS provides the device, but insurance protects you from financial liability and provides the fast replacement your diabetes management requires.
            </p>
            <p className="text-slate-300 mb-6">
              For just £8-10/month, you get:
            </p>
            <ul className="text-slate-300 space-y-2 mb-6">
              <li>✓ Financial protection from £2,500-4,500 replacement cost</li>
              <li>✓ 24-hour replacement vs NHS weeks/months</li>
              <li>✓ Coverage for theft, loss, and damage that NHS doesn't cover</li>
              <li>✓ Worldwide travel protection</li>
              <li>✓ Peace of mind for your family</li>
            </ul>
            <Link
              href="/#calculator"
              className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
            >
              Get Protection for Your NHS Pump
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
