import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insulin Pump Insurance FAQs | Common Questions Answered",
  description: "Comprehensive FAQ about insulin pump insurance. Get answers to common questions about coverage, claims, pricing, and eligibility for pump insurance in the UK.",
  alternates: {
    canonical: "https://insulinpumpinsurance.quest/pump-insurance-frequently-asked-questions",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Insulin Pump Insurance FAQs
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          Common questions about insulin pump insurance coverage, claims, pricing, and eligibility. Get clear answers about how specialist diabetes device insurance works.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&crop=entropy"
            alt="insulin pump insurance questions answers FAQ"
            className="w-full h-full object-cover"
          />
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Coverage Questions</h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                What exactly does insulin pump insurance cover?
                <span className="text-cyan-400">+</span>
              </summary>
              <div className="text-slate-400 mt-4 space-y-3">
                <p>
                  Comprehensive insulin pump insurance typically covers:
                </p>
                <ul className="text-slate-300 space-y-2 text-sm ml-4">
                  <li>• Accidental damage (drops, impacts, physical damage)</li>
                  <li>• Liquid/water damage (spills, rain, submersion)</li>
                  <li>• Theft (with police report)</li>
                  <li>• Loss (left behind, lost while traveling)</li>
                  <li>• Fire and heat damage</li>
                  <li>• Electrical surge damage</li>
                  <li>• 24-hour replacement processing</li>
                  <li>• Worldwide travel protection (usually 90 days/year)</li>
                </ul>
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Does insurance cover CGM devices as well?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                It depends on your policy. Most providers offer separate CGM coverage or bundle coverage for pump + CGM together. You can usually add CGM protection (Dexcom, Libre, Guardian) to your pump policy. Ask your insurer about combining coverage - it's often cheaper than separate policies.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                What about accessories like infusion sets and batteries?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Basic insurance covers the pump device itself. Some premium policies include accessories (protective cases, batteries, carrying bags). Check your policy details or ask about upgrade options. Consumables like insulin and sensor packs are never covered - they're medications, not equipment.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Does insurance cover pre-existing damage?
                <span className="text-cyan-404">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                No - insurance covers damage that occurs after you apply. If your pump was already damaged before applying, insurers won't cover it. This is why you should apply for insurance soon after getting a pump and confirm it's in working condition when applying.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                What's NOT covered by insurance?
                <span className="text-cyan-400">+</span>
              </summary>
              <div className="text-slate-400 mt-3 space-y-3">
                <p>Insurance does NOT cover:</p>
                <ul className="text-slate-300 space-y-1 text-sm ml-4">
                  <li>• Manufacturer defects (warranty handles this)</li>
                  <li>• Wear and tear / normal degradation</li>
                  <li>• Intentional damage</li>
                  <li>• Maintenance/repair costs</li>
                  <li>• Software or app issues</li>
                  <li>• Loss of use or lost income</li>
                  <li>• Consumables (insulin, test strips)</li>
                  <li>• Damage outside warranty period (not true)</li>
                </ul>
              </div>
            </details>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Claims & Processing</h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                How long does 24-hour replacement actually take?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                "24-hour replacement" means processing and arranging delivery typically happens within 24 business hours from claim approval. If you claim Monday morning, replacement might be arranged by Tuesday. Many urgent claims processed same-day. Actual delivery depends on courier, but most arrive next business day.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                How do I file a claim?
                <span className="text-cyan-400">+</span>
              </summary>
              <div className="text-slate-400 mt-3 space-y-3">
                <p>Most insurers offer multiple claim methods:</p>
                <ul className="text-slate-300 space-y-2 text-sm ml-4">
                  <li>• 24-hour emergency phone line for urgent claims</li>
                  <li>• Online portal/app for submitting claims digitally</li>
                  <li>• Email for detailed claim submissions</li>
                  <li>• Post for formal documentation</li>
                </ul>
                <p>
                  Most claims are filed online or by phone. Call your insurer's emergency number within 24-48 hours of damage/theft/loss for fastest processing.
                </p>
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                What do I need to claim?
                <span className="text-cyan-400">+</span>
              </summary>
              <div className="text-slate-400 mt-3 space-y-3">
                <p>Basic claim requirements:</p>
                <ul className="text-slate-300 space-y-2 text-sm ml-4">
                  <li>• Original proof of purchase/NHS letter</li>
                  <li>• Device serial number</li>
                  <li>• Photos of damage/loss</li>
                  <li>• Detailed description of what happened</li>
                  <li>• Crime reference number (if theft/loss)</li>
                  <li>• Police report (for theft)</li>
                </ul>
                <p>
                  Having these documented saves time. Your insurer will tell you exactly what they need when you report the claim.
                </p>
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                What if my claim is denied?
                <span className="text-cyan-404">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                If your claim is denied, insurers must explain why (e.g., damage was pre-existing, not covered incident, outside policy terms). You have the right to appeal. Most insurers offer disputes resolution. If you disagree with their decision, you can escalate to the Financial Ombudsman Service who mediates between you and the insurer.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Can I claim multiple times?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Yes - there's no limit on claims per year. You can claim as many times as damage occurs. However, frequent claims might affect renewal terms. Each claim is processed individually. Some policies have a maximum payout per year (usually £5,000-10,000 per device), but individual damage typically won't exceed that.
              </p>
            </details>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Pricing & Payment</h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                How much does insulin pump insurance cost?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Typical pricing: Basic (accidental damage only) £6.95-7/month. Comprehensive (damage + theft + loss) £8-10/month. Premium (comprehensive + extras) £10-15/month. Rates vary slightly by provider and device type but are generally consistent across the market. Exact price depends on your specific coverage choices.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                What's an insurance excess?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                The excess is the amount you pay towards a claim. Typical options: £0, £25, £50, or £100. Higher excess = lower monthly premium. Lower excess = higher monthly premium. When you claim, you pay your excess and insurer covers the rest. Excess is applied per claim, not annual.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Can I pay monthly or annually?
                <span className="text-cyan-404">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Most providers offer both. Monthly payments (e.g., £9/month) are convenient but add up (£108/year). Annual payments (e.g., £96/year) save money upfront. Some insurers offer discounts for annual payment. Choose what suits your budget - monthly is often better for trying insurance initially.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Will my premium increase if I make a claim?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                With specialist diabetes insurance, claims typically don't increase premiums like with car/home insurance. Your rate is based on coverage type, not claim history. However, if you have exceptionally high claim frequency, renewal terms might change. Generally, making one claim won't affect your renewal price.
              </p>
            </details>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Eligibility & Devices</h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Can I insure my NHS pump?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Yes - absolutely. NHS-provided pumps can be insured. You'll just need to provide your NHS letter confirming pump provision instead of a purchase receipt. Insurance is actually MORE important for NHS users because you're financially responsible if it's lost/damaged and NHS won't replace it due to your fault.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Is there an age limit for pump users?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                No age restrictions. Insurance is available from infants through adults. Children's coverage is the same price as adult coverage. Young children's pumps are often managed by parents but are equally vulnerable to damage. Coverage continues through adolescence and adulthood.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Which pump brands are covered?
                <span className="text-cyan-400">+</span>
              </summary>
              <div className="text-slate-400 mt-3">
                <p className="mb-2">All major brands covered:</p>
                <ul className="text-slate-300 space-y-1 text-sm ml-4">
                  <li>• Medtronic (780G, 670G, 640G)</li>
                  <li>• Omnipod (Dash, Omnipod 5)</li>
                  <li>• Tandem (t:slim X2)</li>
                  <li>• Ypsomed (Mylife)</li>
                  <li>• Roche (Accu-Chek)</li>
                  <li>• All CGM brands (Dexcom, Libre, Guardian)</li>
                </ul>
                <p className="mt-2">If your brand isn't listed, contact insurer to confirm coverage.</p>
              </div>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Can I insure a used/second-hand pump?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Yes - refurbished, second-hand, and used pumps are all insurable. Price doesn't change based on pump age. You'll need proof of current ownership and pump should be in working condition at time of application. Check our dedicated second-hand pump insurance guide for more details.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Can I insure a pump I just got?
                <span className="text-cyan-404">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Yes - you can apply immediately after receiving a pump. There's no waiting period. Many users apply within the first week to ensure immediate protection. Coverage typically begins immediately after approval (often within hours).
              </p>
            </details>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Travel & Geographic Coverage</h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Does insurance cover travel abroad?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Yes - comprehensive policies include 90 days of worldwide travel coverage per year. This covers Europe, Asia, Americas, Africa - all destinations equally. Travel coverage includes 24-hour claims processing even while you're traveling, so you can get replacement pumps delivered abroad or held for collection.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                How does the 90-day travel limit work?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                90 days = combined total per year, not per trip. If you take a 30-day holiday, a 20-day placement, and 40 days visiting family abroad, that's your 90 days for the year. Plan accordingly. On your 91st day abroad, you'd need to return home or extend coverage (ask insurer about options).
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                What if I damage my pump while traveling?
                <span className="text-cyan-404">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                File a claim via phone, email, or online portal while abroad. Provide photos of damage and describe what happened. Insurer arranges replacement - either delivered to your destination (if time permits) or held for collection when you return home. Some providers have international partners for faster replacements.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Do I need separate travel insurance for my pump?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                No - pump insurance covers travel automatically with 90 days worldwide coverage. You don't need separate travel insurance for the pump. If getting regular travel insurance for your trip, clarify that medical devices (pump) are covered via specialist insurance, not travel insurance.
              </p>
            </details>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Other Questions</h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Is insulin pump insurance available if I have other health conditions?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Yes - insurance doesn't depend on your overall health. It's device insurance, not health insurance. Other health conditions don't affect eligibility or premiums. Only the pump itself and your coverage choices affect the cost.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Does warranty or NHS cover apply if I have insurance?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Yes - warranty and insurance are complementary. Warranty covers manufacturer defects (use that first). Insurance covers accidental damage (not warranty's job). NHS covers pump provision but not replacement for your fault (use insurance). Always check what should be covered where before making claims.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Can I add insurance if I already lost a pump?
                <span className="text-cyan-404">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                No - insurance covers damage/loss that occurs AFTER you apply. If you've already lost a pump, that's covered by your current device (if NHS, you'd need to apply for replacement through NHS/clinic). Apply insurance now for future protection before anything else happens.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                How do I cancel or switch insurance?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Usually 30 days notice in writing (email/post). No penalty for cancellation, though you lose coverage immediately. If switching providers, apply with new insurer first, then cancel old one to ensure continuous protection. Annual policies can usually be changed at renewal without penalty.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Will my insurance increase when I renew?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Premiums might increase slightly on renewal (inflation adjustment), but not significantly. Claims don't typically increase rates for specialist pump insurance like they do for car insurance. Shop around at renewal - you might find better rates with different providers or by combining pump + CGM coverage.
              </p>
            </details>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Still Have Questions?</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-slate-300 mb-4">
              Can't find the answer you're looking for? Check our detailed guides or use our quote calculator for personalized information about coverage options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#calculator"
                className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="/do-you-need-insulin-pump-insurance"
                className="inline-block px-6 py-3 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
