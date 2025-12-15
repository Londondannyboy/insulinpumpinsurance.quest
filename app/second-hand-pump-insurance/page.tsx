import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Second-Hand Insulin Pump Insurance UK | Used Device Cover",
  description: "Can you insure a used or refurbished insulin pump? Yes - get comprehensive insurance for second-hand pumps with same 24-hour replacement and accidental damage coverage.",
  alternates: {
    canonical: "https://insulinpumpinsurance.quest/second-hand-pump-insurance",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Second-Hand Insulin Pump Insurance UK
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          Yes, you can insure a used or refurbished insulin pump in the UK. Second-hand pumps are significantly cheaper than new devices but equally vulnerable to damage. Specialist insurance covers used pumps with the same comprehensive protection as new devices.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&crop=entropy"
            alt="second-hand refurbished insulin pump insurance"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Quick Summary</h2>
          <p className="text-slate-300 mb-3">
            <strong>Used pumps are absolutely insurable.</strong> Whether refurbished by manufacturers, purchased second-hand privately, or received as hand-me-downs, you can get comprehensive coverage:
          </p>
          <ul className="text-slate-300 space-y-1 text-sm ml-4">
            <li>✓ Same coverage as new pumps</li>
            <li>✓ Often cheaper to insure</li>
            <li>✓ Fast approval process</li>
            <li>✓ 24-hour replacement included</li>
          </ul>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why Insure a Second-Hand Pump</h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">💰 Cost Savings Matter Even More</h3>
              <p className="text-slate-400">
                Used pumps cost £500-1,200 vs £4,000-6,000 new. You saved significantly on the pump itself - losing or damaging it is still a major financial hit. Insurance at £6-10/month protects that investment.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">📦 Older Pumps May Be More Fragile</h3>
              <p className="text-slate-400">
                Second-hand pumps might be 3-5 years old. Components may be more wear-prone than new devices. Insurance covers exactly these scenarios - accidental damage becomes more likely with age.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">⚠️ Limited Warranty Remaining</h3>
              <p className="text-slate-400">
                Pumps have 4-year manufacturer warranties. A 3-year-old second-hand pump might only have 1 year of warranty left. Insurance fills the gap after warranty expires, providing protection through the device's remaining lifespan.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-404 mb-3">🤝 No Warranty for Private Sales</h3>
              <p className="text-slate-400">
                If you bought second-hand from another person, there's no manufacturer warranty at all. Insurance becomes your only protection if damage occurs after purchase.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Types of Second-Hand Pumps You Can Insure</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Manufacturer Refurbished</h3>
              <p className="text-slate-400 mb-3">
                Pumps refurbished and sold by the manufacturer (Medtronic, Tandem, Omnipod) as certified used:
              </p>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>• Typically 30-50% cheaper than new</li>
                <li>• Come with partial warranty (often 1-2 years)</li>
                <li>• Thoroughly cleaned and tested</li>
                <li>• Full eligibility for insurance</li>
              </ul>
              <p className="text-slate-300 text-sm mt-3">
                <strong>Insurance recommendation:</strong> Get insured immediately after purchase to extend coverage beyond remaining warranty period.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Private Second-Hand Sale</h3>
              <p className="text-slate-400 mb-3">
                Purchased from another individual through online marketplaces or personal sales:
              </p>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>• Usually 50-70% cheaper than new</li>
                <li>• May have no warranty at all</li>
                <li>• Condition varies (get inspection)</li>
                <li>• Insurable with proper documentation</li>
              </ul>
              <p className="text-slate-300 text-sm mt-3">
                <strong>Insurance recommendation:</strong> Essential for protection - you have zero manufacturer coverage with private sales.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Hand-Me-Down (Family/Friend)</h3>
              <p className="text-slate-400 mb-3">
                Received from family member or friend who no longer uses it:
              </p>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>• No cost but may have warranty remaining</li>
                <li>• Original owner may need to transfer ownership</li>
                <li>• Condition should be verified</li>
                <li>• Fully insurable once registered</li>
              </ul>
              <p className="text-slate-300 text-sm mt-3">
                <strong>Insurance recommendation:</strong> Get insured even for free hand-me-downs to protect against your own accidental damage.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Insurance Company Replacement</h3>
              <p className="text-slate-400 mb-3">
                When your original pump is damaged and you receive a replacement from your insurer:
              </p>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>• Replacement pump is usually refurbished</li>
                <li>• Coverage continues on your policy</li>
                <li>• Same protection applies immediately</li>
                <li>• No new application needed</li>
              </ul>
              <p className="text-slate-300 text-sm mt-3">
                <strong>Insurance note:</strong> Your replacement pump is protected the same day you receive it.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">How to Get a Used Pump Insured</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-bold text-cyan-400 mb-4">Step-by-Step Process</h3>

            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-cyan-400 font-bold">1.</span>
                <div>
                  <p className="text-slate-300 font-semibold mb-1">Verify Pump Condition</p>
                  <p className="text-slate-400 text-sm">Turn it on, check screen, test buttons, verify it holds power. Take photos showing working condition from multiple angles.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-cyan-400 font-bold">2.</span>
                <div>
                  <p className="text-slate-300 font-semibold mb-1">Get Pump Details</p>
                  <p className="text-slate-400 text-sm">Record: Brand, model, serial number (usually on back), approximate age. Take photo of serial number for your records.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-cyan-400 font-bold">3.</span>
                <div>
                  <p className="text-slate-300 font-semibold mb-1">Gather Proof of Purchase</p>
                  <p className="text-slate-400 text-sm">If refurbished: original receipt or seller documentation. If private sale: receipt from seller or confirmation email. If hand-me-down: get original owner to provide proof of ownership.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-cyan-400 font-bold">4.</span>
                <div>
                  <p className="text-slate-300 font-semibold mb-1">Get a Quote</p>
                  <p className="text-slate-400 text-sm">Use our calculator - second-hand status doesn't typically affect rates. Coverage is based on device type, not condition or age.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-cyan-400 font-bold">5.</span>
                <div>
                  <p className="text-slate-300 font-semibold mb-1">Apply with Documentation</p>
                  <p className="text-slate-400 text-sm">Submit application with proof of purchase/ownership. May require photos of pump showing serial number and working condition.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-cyan-400 font-bold">6.</span>
                <div>
                  <p className="text-slate-300 font-semibold mb-1">Approval & Coverage Begins</p>
                  <p className="text-slate-400 text-sm">Most insurers approve within hours. Coverage begins immediately - you're protected from day one of ownership.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Insurance Rates for Used Pumps</h2>

          <p className="text-slate-400 mb-6">
            Good news: Used pumps cost the same to insure as new pumps. Insurance rates are based on device type and coverage type, not pump age or original purchase price.
          </p>

          <table className="w-full text-sm mb-6">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-3 text-white font-semibold">Pump Type</th>
                <th className="text-center py-3 px-3 text-white font-semibold">Basic/Month</th>
                <th className="text-center py-3 px-3 text-white font-semibold">Comprehensive/Month</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">Used Medtronic Pump</td>
                <td className="text-center py-3 px-3 text-cyan-400">£6.95</td>
                <td className="text-center py-3 px-3 text-cyan-400">£8-9</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">Used Omnipod/Tandem</td>
                <td className="text-center py-3 px-3 text-cyan-400">£6.95-7</td>
                <td className="text-center py-3 px-3 text-cyan-400">£8-10</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">Used Pump + CGM Bundle</td>
                <td className="text-center py-3 px-3 text-cyan-400">£8-9</td>
                <td className="text-center py-3 px-3 text-cyan-400">£10-12</td>
              </tr>
              <tr>
                <td className="py-3 px-3 text-slate-300 text-xs">⭐ Same rates regardless of pump age</td>
                <td colSpan={2} className="text-center py-3 px-3 text-cyan-400 text-sm font-semibold">Coverage is identical to new pump coverage</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Common Questions About Used Pump Insurance</h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Will insurance reject a used pump application?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                No - used pumps are standard for insurance. However, insurers may require proof of current working condition (photos, documentation) to confirm it's not already damaged before application. This protects both you and them.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                What if I can't prove where I got the pump?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Insurers prefer documentation, but understand that used pump ownership can be complex. If you can provide: device serial number, proof of current possession, photos showing working condition, and your statement of ownership, most will approve. Contact insurer to discuss options.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Can I insure a hand-me-down from family?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Yes - but original owner may need to transfer ownership or provide a letter confirming they've given you the pump. Insurer needs to confirm you legally own it and aren't just borrowing it temporarily.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                What if the pump is quite old (5+ years)?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Age doesn't matter for insurance eligibility. If it's working now, you can insure it. However, very old pumps may be reaching end-of-life (technology becomes unsupported). Check if manufacturer still supports it before purchasing.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Can I claim if the used pump had hidden damage?
                <span className="text-cyan-404">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Insurance covers accidental damage that occurs after you purchase it. Pre-existing damage (that was already there) isn't covered. This is why you should inspect used pumps carefully before buying and before applying for insurance.
              </p>
            </details>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Tips for Buying & Insuring Used Pumps</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">When Buying Used</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ Test all buttons and functions</li>
                <li>✓ Check screen for dead pixels</li>
                <li>✓ Verify battery charges fully</li>
                <li>✓ Ask about remaining warranty</li>
                <li>✓ Get photos/documentation</li>
                <li>✓ Ask what caused previous sale</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">When Applying for Insurance</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ Apply immediately after purchase</li>
                <li>✓ Take clear condition photos</li>
                <li>✓ Keep all receipts/documentation</li>
                <li>✓ Note serial number carefully</li>
                <li>✓ Be honest about pump age/condition</li>
                <li>✓ Ask about transfer process</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Get Your Used Pump Insured</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-slate-300 mb-4">
              Whether you bought a refurbished pump to save money or received a hand-me-down, you deserve the same protection as new pump owners. Specialist insurance covers used pumps completely - same comprehensive coverage, same 24-hour replacement, same affordable rates.
            </p>
            <Link
              href="/#calculator"
              className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
            >
              Get Used Pump Coverage
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
