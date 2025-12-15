import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pump Warranty vs Insurance | Key Differences & Coverage Explained",
  description: "Understand the crucial differences between insulin pump warranty and specialist insurance. Learn what each covers, when to use each, and why you might need both.",
  alternates: {
    canonical: "https://insulinpumpinsurance.quest/insulin-pump-warranty-vs-insurance",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Pump Warranty vs Insurance: What's the Difference?
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          Insulin pump warranty and specialist insurance serve different purposes. Your pump's manufacturer warranty covers defects and mechanical failures, while insurance covers accidental damage, theft, and loss. Understanding both helps you make informed protection decisions.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&crop=entropy"
            alt="insulin pump warranty vs insurance comparison"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Quick Answer</h2>
          <p className="text-slate-300">
            <strong>Warranty:</strong> Covers manufacturer defects (≤4 years). <strong>Insurance:</strong> Covers accidental damage, theft, loss (while you own it). You need both - they cover completely different scenarios.
          </p>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Side-by-Side Comparison</h2>

          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-4 px-3 text-white font-semibold">Aspect</th>
                <th className="text-center py-4 px-3 text-slate-300">Manufacturer Warranty</th>
                <th className="text-center py-4 px-3 text-cyan-400 font-semibold">Specialist Insurance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700/50 bg-slate-800/20">
                <td className="py-4 px-3 text-slate-300 font-semibold">Covers Defects</td>
                <td className="text-center py-4 px-3 text-slate-400">✓ Yes (manufacturer issues)</td>
                <td className="text-center py-4 px-3 text-red-400">✗ No (warranty handles)</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-4 px-3 text-slate-300 font-semibold">Accidental Damage</td>
                <td className="text-center py-4 px-3 text-red-400">✗ No</td>
                <td className="text-center py-4 px-3 text-green-400 font-bold">✓ Yes</td>
              </tr>
              <tr className="border-b border-slate-700/50 bg-slate-800/20">
                <td className="py-4 px-3 text-slate-300 font-semibold">Liquid/Water Damage</td>
                <td className="text-center py-4 px-3 text-red-400">✗ Not usually</td>
                <td className="text-center py-4 px-3 text-green-400 font-bold">✓ Yes</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-4 px-3 text-slate-300 font-semibold">Theft Coverage</td>
                <td className="text-center py-4 px-3 text-red-400">✗ No</td>
                <td className="text-center py-4 px-3 text-green-400 font-bold">✓ Yes</td>
              </tr>
              <tr className="border-b border-slate-700/50 bg-slate-800/20">
                <td className="py-4 px-3 text-slate-300 font-semibold">Loss Coverage</td>
                <td className="text-center py-4 px-3 text-red-400">✗ No</td>
                <td className="text-center py-4 px-3 text-green-400 font-bold">✓ Yes</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-4 px-3 text-slate-300 font-semibold">Duration</td>
                <td className="text-center py-4 px-3 text-slate-400">4 years (typical)</td>
                <td className="text-center py-4 px-3 text-cyan-400">While you own device</td>
              </tr>
              <tr className="border-b border-slate-700/50 bg-slate-800/20">
                <td className="py-4 px-3 text-slate-300 font-semibold">Replacement Speed</td>
                <td className="text-center py-4 px-3 text-slate-400">2-6 weeks</td>
                <td className="text-center py-4 px-3 text-green-400 font-bold">24 hours</td>
              </tr>
              <tr>
                <td className="py-4 px-3 text-slate-300 font-semibold">Cost</td>
                <td className="text-center py-4 px-3 text-slate-400">Included with pump</td>
                <td className="text-center py-4 px-3 text-cyan-400">£6.95-12/month</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">What Warranty Actually Covers</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-bold text-blue-400 mb-3">✓ Warranty DOES Cover:</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Manufacturing defects (motor failure, screen issues, button malfunctions)</li>
                <li>• Electronic/software failures not caused by user damage</li>
                <li>• Battery issues (defective batteries)</li>
                <li>• Connector problems from manufacturing</li>
                <li>• Display failures</li>
                <li>• Free replacement or repair (during warranty period)</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-red-500/30">
              <h3 className="text-lg font-bold text-red-400 mb-3">✗ Warranty Does NOT Cover:</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Dropped/impacted damage</li>
                <li>• Liquid or water damage</li>
                <li>• Normal wear and tear</li>
                <li>• Misuse or abuse</li>
                <li>• Intentional damage</li>
                <li>• Loss or theft</li>
                <li>• Damage after warranty expires</li>
                <li>• Accidental drops or impacts</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">What Insurance Actually Covers</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-green-500/30">
              <h3 className="text-lg font-bold text-green-400 mb-3">✓ Insurance DOES Cover:</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Accidental damage (dropped, knocked, crushed)</li>
                <li>• Liquid/water damage (spilled on, rained on, dropped in water)</li>
                <li>• Theft with police report</li>
                <li>• Loss (left behind, lost while traveling)</li>
                <li>• Fire/heat damage</li>
                <li>• Electrical surge damage</li>
                <li>• 24-hour replacement (fast processing)</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-red-500/30">
              <h3 className="text-lg font-bold text-red-400 mb-3">✗ Insurance Does NOT Cover:</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Pre-existing damage</li>
                <li>• Manufacturer defects (warranty covers)</li>
                <li>• Wear and tear (normal degradation)</li>
                <li>• Intentional damage</li>
                <li>• Software/app issues</li>
                <li>• Loss of use/income</li>
                <li>• Repair (only replacement)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Real-World Scenarios</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Scenario 1: Screen Goes Black (Dead Battery)</h3>
              <p className="text-slate-400 mb-3">
                Your pump screen won't turn on, even when fully charged. This is likely a manufacturing defect or battery issue.
              </p>
              <p className="text-slate-300 text-sm">
                <strong>Warranty handles this:</strong> Contact manufacturer, send in pump, get replacement within weeks at no cost (if within warranty period).
              </p>
              <p className="text-slate-300 text-sm mt-2">
                <strong>Insurance not needed:</strong> This is a warranty claim, not accidental damage.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Scenario 2: Drop and Crack the Screen</h3>
              <p className="text-slate-400 mb-3">
                You accidentally drop your pump - the screen cracks and no longer responds to touch.
              </p>
              <p className="text-slate-300 text-sm">
                <strong>Warranty won't help:</strong> Accidental damage isn't covered by warranty, no matter how new the pump.
              </p>
              <p className="text-slate-300 text-sm mt-2">
                <strong>Insurance handles this:</strong> File claim, get replacement within 24 hours (minus excess).
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Scenario 3: Spill Water on Pump</h3>
              <p className="text-slate-400 mb-3">
                You spill water on your pump while cooking - it stops working.
              </p>
              <p className="text-slate-300 text-sm">
                <strong>Warranty likely won't help:</strong> Water damage often isn't covered by warranty, especially if not manufactured to be fully waterproof.
              </p>
              <p className="text-slate-300 text-sm mt-2">
                <strong>Insurance handles this:</strong> Liquid damage coverage applies immediately.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-cyan-404 mb-3">Scenario 4: Pump Stolen from Car</h3>
              <p className="text-slate-400 mb-3">
                Your pump is stolen from your car while you're shopping.
              </p>
              <p className="text-slate-300 text-sm">
                <strong>Warranty won't help:</strong> Theft is never covered by warranty.
              </p>
              <p className="text-slate-300 text-sm mt-2">
                <strong>Insurance handles this:</strong> Theft coverage applies with police report. 24-hour replacement.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Common Questions About Warranty vs Insurance</h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Do I need insurance if I still have warranty?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Yes. Warranty covers manufacturing defects (rare). Insurance covers what warranty doesn't - accidental damage, theft, loss, liquid damage. They're complementary, not overlapping. Most accidental damage happens long after warranty issues would appear.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Can I claim both warranty and insurance on the same pump?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                No - you claim one or the other based on what caused the failure. If it's a manufacturing defect, warranty handles it. If it's accidental damage/theft/loss, insurance handles it. They cover mutually exclusive scenarios.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                What happens when warranty expires?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                After 4 years (typical warranty), if a manufacturing defect develops, you're stuck with repair costs or replacement costs. This is why insurance is crucial - it covers your pump for as long as you own it, even after warranty ends.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Does insurance cover warranty claims?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                No - insurance is for accidental damage and theft only. If it's a manufacturing defect, always contact the pump manufacturer's warranty team first. Insurance won't cover what warranty should handle.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Why is insurance faster than warranty claims?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Insurance processes claims within 24 hours with replacement devices kept in stock for exactly this reason. Warranty requires manufacturer investigation of the defect, diagnostic testing, potentially sending pump back, etc. - taking weeks.
              </p>
            </details>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">The Bottom Line</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-6">
            <p className="text-slate-300 mb-4">
              <strong>You need both:</strong> Warranty covers rare manufacturing defects for a limited time. Insurance covers the most likely scenarios - accidental damage, theft, loss - immediately and for 24-hour replacement.
            </p>
            <p className="text-slate-300 mb-4">
              The chances of accidental damage (high) far exceed the chances of manufacturing defects (low). Insurance is essential protection.
            </p>
            <p className="text-slate-300">
              <strong>Cost comparison:</strong> Warranty costs are included in pump purchase. Insurance costs just £6.95-12/month - far less than a single £2,500-6,000 replacement pump.
            </p>
          </div>

          <Link
            href="/#calculator"
            className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
          >
            Get Accidental Damage Coverage
          </Link>
        </section>
      </article>
    </div>
  )
}
