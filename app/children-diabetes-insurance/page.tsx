import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Children's Insulin Pump Insurance UK | Type 1 Diabetes Device Cover",
  description: "Specialist insurance for children with Type 1 diabetes and insulin pumps. Protect your child's pump, CGM, and diabetes technology with comprehensive UK cover.",
  alternates: {
    canonical: "https://insulinpumpinsurance.quest/children-diabetes-insurance",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Children's Insulin Pump Insurance UK
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          Children with Type 1 diabetes are more likely to damage their insulin pumps through active play, sports, and accidents. Specialist insurance protects your child's essential diabetes technology with fast replacement and comprehensive coverage.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&crop=entropy"
            alt="children kids diabetes insulin pump insurance protection"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Quick Overview</h2>
          <p className="text-slate-300 mb-4">
            <strong>No age restrictions.</strong> Children's insulin pump insurance is available from birth through adulthood. Comprehensive cover for your child's pump and CGM costs just £6.95-10/month with 24-hour replacement.
          </p>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why Children Need Pump Insurance</h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">🏃 Active Lifestyle</h3>
              <p className="text-slate-400">
                Children are active, playing sports and engaging in physical activities. Pumps get dropped, knocked, and damaged far more often in active children than adults managing diabetes independently.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">🎒 School & Adventure</h3>
              <p className="text-slate-400">
                Pumps in backpacks, pockets, and sports bags are vulnerable to damage. Swimming lessons, school sports, and outdoor play mean more exposure to liquid damage and impacts.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">💰 Financial Protection</h3>
              <p className="text-slate-400">
                A replacement pump costs £2,500-6,000. For families managing childhood Type 1 diabetes, insurance removes financial stress and ensures continuous diabetes management without interruption.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">⚡ Uninterrupted Therapy</h3>
              <p className="text-slate-400">
                When a child's pump is damaged, they can't wait weeks for NHS replacement. Insurance ensures 24-hour replacement so your child can continue insulin delivery without any gap.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-404 mb-3">🏫 School Confidence</h3>
              <p className="text-slate-400">
                With insurance, you can let your child participate fully in school activities and sports knowing their pump is protected. No restrictions due to damage fears.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Coverage for Young People</h2>

          <p className="text-slate-400 mb-6">
            No age restrictions - children can be insured from diagnosis onwards:
          </p>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Babies & Toddlers (Under 5)</h3>
              <p className="text-slate-400">
                Young children benefit from protection during the learning phase of pump management. Parents manage the pump, but accidents still happen during play and care routines.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">School Age (5-12)</h3>
              <p className="text-slate-400">
                Maximum risk period for pump damage. Active play, sports, and school activities mean increased exposure. Insurance covers school incidents and after-school activities.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Teenagers (13+)</h3>
              <p className="text-slate-400">
                Teens become more independent in pump management but face new risks - carrying devices in bags, sports, and social activities. Same comprehensive coverage available.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">What's Covered</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-cyan-400 mb-4">✓ Covered</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• All insulin pump brands (Medtronic, Omnipod, Tandem)</li>
                <li>• All CGM systems (Dexcom, Libre, Guardian)</li>
                <li>• Accidental damage from play & sports</li>
                <li>• Water/liquid damage (swimming, rain)</li>
                <li>• Theft and loss</li>
                <li>• 24-hour replacement</li>
                <li>• No upper age limit (covers through adulthood)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-400 mb-4">✗ Not Covered</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Pre-existing damage</li>
                <li>• Manufacturer defects</li>
                <li>• Normal wear and tear</li>
                <li>• Intentional damage</li>
                <li>• Consumables (insulin)</li>
                <li>• Loss of use/income</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Pricing for Children</h2>

          <p className="text-slate-400 mb-6">
            Same affordable rates as adult coverage:
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
                <td className="py-3 px-3 text-slate-300">Basic (Accidental)</td>
                <td className="text-center py-3 px-3 text-cyan-400">£6.95-7</td>
                <td className="text-center py-3 px-3 text-cyan-400">£84-90</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">Comprehensive ⭐</td>
                <td className="text-center py-3 px-3 text-cyan-400">£8-10</td>
                <td className="text-center py-3 px-3 text-cyan-400">£96-120</td>
              </tr>
              <tr>
                <td className="py-3 px-3 text-slate-300">Premium</td>
                <td className="text-center py-3 px-3 text-cyan-400">£10-12</td>
                <td className="text-center py-3 px-3 text-cyan-400">£120-144</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Parent Tips</h2>

          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="text-cyan-400 font-bold">1.</span>
              <div>
                <h3 className="font-bold text-white">Get Insured Immediately</h3>
                <p className="text-slate-400 text-sm">Don't wait - insure your child's pump from diagnosis. Coverage available within 24 hours.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 font-bold">2.</span>
              <div>
                <h3 className="font-bold text-white">Choose Comprehensive Cover</h3>
                <p className="text-slate-400 text-sm">Given children's activity levels, comprehensive coverage (accidental + theft) is highly recommended.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 font-bold">3.</span>
              <div>
                <h3 className="font-bold text-white">Teach Pump Care</h3>
                <p className="text-slate-400 text-sm">Even with insurance, help your child learn careful pump handling to minimize risks.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 font-bold">4.</span>
              <div>
                <h3 className="font-bold text-white">Keep Documentation</h3>
                <p className="text-slate-400 text-sm">Keep receipts, NHS letters, and policy documents for claims - especially important with children's items.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Protect Your Child's Health</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-slate-300 mb-4">
              Your child's insulin pump is their lifeline. For less than the cost of a coffee per day, ensure they have uninterrupted diabetes management no matter what happens.
            </p>
            <Link
              href="/#calculator"
              className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
            >
              Get Your Child's Coverage
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
