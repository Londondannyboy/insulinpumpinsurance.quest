import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Compare Insulin Pump Insurance UK 2025 | Coverage & Providers",
  description: "Compare insulin pump insurance providers and coverage options in the UK. Find the best specialist diabetes device insurance with fast claims, comprehensive protection, and flexible pricing.",
  alternates: {
    canonical: "https://insulinpumpinsurance.quest/compare-insulin-pump-insurance-uk",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Compare Insulin Pump Insurance UK 2025
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          Not all insulin pump insurance is created equal. Different providers offer varying coverage levels, claims speeds, and pricing. This comprehensive comparison helps you find the perfect policy for your diabetes technology needs.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&crop=entropy"
            alt="insulin pump insurance comparison providers coverage options"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Comparison Overview</h2>
          <p className="text-slate-300 mb-4">
            Top UK insulin pump insurance providers offer <strong>comprehensive coverage from £6.95-10/month</strong> with 24-hour claims processing. Key differences: coverage limits (£2,000-£10,000), excess options (£0-£100), additional extras, and claim processing speeds.
          </p>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Provider Coverage Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-3 text-white font-semibold">Feature</th>
                  <th className="text-center py-4 px-3 text-slate-300">Provider A</th>
                  <th className="text-center py-4 px-3 text-slate-300">Provider B</th>
                  <th className="text-center py-4 px-3 text-cyan-400 font-semibold">Best Choice</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-3 text-slate-300">Base Monthly Cost</td>
                  <td className="text-center py-4 px-3 text-slate-300">£6.95</td>
                  <td className="text-center py-4 px-3 text-slate-300">£7.50</td>
                  <td className="text-center py-4 px-3 text-green-400">Provider A</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-3 text-slate-300">Max Coverage Limit</td>
                  <td className="text-center py-4 px-3 text-slate-300">£8,000</td>
                  <td className="text-center py-4 px-3 text-slate-300">£10,000</td>
                  <td className="text-center py-4 px-3 text-green-400">Provider B</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-3 text-slate-300">Claims Processing</td>
                  <td className="text-center py-4 px-3 text-slate-300">24 hours</td>
                  <td className="text-center py-4 px-3 text-slate-300">24 hours</td>
                  <td className="text-center py-4 px-3 text-slate-400">Tie</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-3 text-slate-300">Accessories Covered</td>
                  <td className="text-center py-4 px-3 text-slate-300">Basic</td>
                  <td className="text-center py-4 px-3 text-slate-300">Full</td>
                  <td className="text-center py-4 px-3 text-green-400">Provider B</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-3 text-slate-300">Worldwide Travel</td>
                  <td className="text-center py-4 px-3 text-slate-300">90 days</td>
                  <td className="text-center py-4 px-3 text-slate-300">120 days</td>
                  <td className="text-center py-4 px-3 text-green-400">Provider B</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-3 text-slate-300">Loan Equipment</td>
                  <td className="text-center py-4 px-3 text-slate-300">Yes</td>
                  <td className="text-center py-4 px-3 text-slate-300">Yes</td>
                  <td className="text-center py-4 px-3 text-slate-400">Tie</td>
                </tr>
                <tr>
                  <td className="py-4 px-3 text-slate-300">Customer Service</td>
                  <td className="text-center py-4 px-3 text-slate-300">Good</td>
                  <td className="text-center py-4 px-3 text-slate-300">Excellent</td>
                  <td className="text-center py-4 px-3 text-green-400">Provider B</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-slate-400 mt-6 text-sm">
            Note: Actual providers and coverage vary. This is a representative comparison. Always check specific policy documents for exact coverage details.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Coverage Tiers Breakdown</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Basic Plan (~£6.95/month)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-cyan-400 font-semibold mb-2">✓ Included:</p>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• Accidental damage</li>
                    <li>• UK coverage only</li>
                    <li>• £2,000-3,000 limit</li>
                    <li>• £50 excess</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-red-400 font-semibold mb-2">✗ Not included:</p>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• Theft/loss</li>
                    <li>• Travel cover</li>
                    <li>• Accessories</li>
                    <li>• Loan equipment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Standard Plan (~£8/month) - MOST POPULAR</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-cyan-400 font-semibold mb-2">✓ Included:</p>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• Accidental damage</li>
                    <li>• Theft & loss</li>
                    <li>• 90 days travel</li>
                    <li>• £5,000 limit</li>
                    <li>• £25 excess</li>
                    <li>• CGM covered</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-red-400 font-semibold mb-2">✗ Not included:</p>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• Accessories (full)</li>
                    <li>• Extended travel</li>
                    <li>• Priority service</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Premium Plan (~£10-15/month)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-cyan-400 font-semibold mb-2">✓ Included:</p>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• Everything in Standard +</li>
                    <li>• £0-10 excess option</li>
                    <li>• £10,000 limit</li>
                    <li>• Full accessories cover</li>
                    <li>• 120+ days travel</li>
                    <li>• Loan equipment</li>
                    <li>• Priority claims</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-green-400 font-semibold mb-2">✓ All covered</p>
                  <p className="text-sm text-slate-400">Complete protection with all bells and whistles.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Key Differences to Consider</h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Claims Speed</h3>
              <p className="text-slate-400">
                Most providers process claims within 24 hours. <strong>Verify this</strong> before purchasing - it's critical for diabetes management. Ask about next-day replacement options.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Device Coverage</h3>
              <p className="text-slate-400">
                All major brands covered (Medtronic, Omnipod, Tandem, Dexcom, Libre, Guardian). <strong>Confirm your specific model</strong> is covered before purchasing. Some providers may have restrictions on very new or very old devices.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Excess Amount</h3>
              <p className="text-slate-400">
                Higher excess = lower premium. £25 excess is common sweet spot. £0 excess available but costs more. Consider how often you'd claim - if rarely, higher excess saves money.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Coverage Limits</h3>
              <p className="text-slate-400">
                Match limit to your pump value. Medtronic/Tandem (~£3,500-£4,500) need £5,000+ limit. Omnipod (~£2,500) okay with £2,000-£3,000. Consider accessories too if including transmitters.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Travel Coverage</h3>
              <p className="text-slate-400">
                Standard: 90 days/year. Premium: 120-180 days/year. If you travel frequently, verify coverage extends to your destinations and includes worldwide replacement.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">How to Choose</h2>

          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="text-cyan-400 font-bold text-lg">1.</span>
              <div>
                <h3 className="text-lg font-bold text-white">Identify Your Needs</h3>
                <p className="text-slate-400">Travel frequently? Need maximum coverage? Basic protection okay?</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 font-bold text-lg">2.</span>
              <div>
                <h3 className="text-lg font-bold text-white">Check Device Coverage</h3>
                <p className="text-slate-400">Verify your pump/CGM model is covered. Call providers to confirm.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 font-bold text-lg">3.</span>
              <div>
                <h3 className="text-lg font-bold text-white">Compare Pricing</h3>
                <p className="text-slate-400">Get quotes for your specific scenario (device type, coverage amount, excess).</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 font-bold text-lg">4.</span>
              <div>
                <h3 className="text-lg font-bold text-white">Verify Claims Service</h3>
                <p className="text-slate-400">Call customer service. Ask about 24-hour claims, loan equipment, and response times.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 font-bold text-lg">5.</span>
              <div>
                <h3 className="text-lg font-bold text-white">Read Reviews</h3>
                <p className="text-slate-400">Check feedback on claims speed and customer service quality.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Get Your Comparison Quote</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-slate-300 mb-4">
              Compare coverage options and pricing for your specific pump and needs. Get instant quotes in 3 minutes.
            </p>
            <Link
              href="/#calculator"
              className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
            >
              Compare Plans Now
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
