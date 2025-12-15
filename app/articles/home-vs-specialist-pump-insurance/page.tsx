import type { Metadata } from "next"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Home vs Specialist Insulin Pump Insurance | Which is Right for You?",
  description: "Complete comparison of adding insulin pump to home insurance versus specialist device coverage. Learn pros, cons, and which option is best.",
  keywords: [
    "home insurance pump coverage",
    "specialist pump insurance",
    "home vs specialist insurance",
    "insulin pump home insurance",
    "device coverage options"
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Home vs Specialist Insulin Pump Insurance Comparison",
  description: "Comprehensive comparison of home insurance add-ons versus specialist device insurance for insulin pumps.",
  author: {
    "@type": "Organization",
    name: "Insulin Pump Insurance UK"
  },
  datePublished: "2024-12-15",
  dateModified: "2024-12-15",
  image: "https://insulinpumpinsurance.quest/og-image.jpg",
  isPartOf: {
    "@type": "WebSite",
    name: "Insulin Pump Insurance UK",
    url: "https://insulinpumpinsurance.quest"
  },
}

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="bg-slate-800/50 py-4 px-4 border-b border-slate-700">
        <div className="max-w-4xl mx-auto text-sm">
          <Link href="/articles" className="text-cyan-400 hover:text-cyan-300">Articles</Link>
          <span className="text-slate-500 mx-2">/</span>
          <span className="text-slate-300">Home vs Specialist Insurance</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-cyan-900 to-slate-900 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop&q=80"
                alt="home insurance vs specialist pump insurance comparison"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="inline-block bg-cyan-500/30 text-cyan-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Comparison Guide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Home vs Specialist
            <span className="text-cyan-400"> Pump Insurance</span>
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Complete comparison of adding insulin pump coverage to your home insurance versus using specialist diabetes device insurance providers.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span>December 2024</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-900/30 to-slate-900/30 border border-cyan-500/30 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">The Verdict</h2>
          <p className="text-slate-300 mb-4">
            <strong>Specialist device insurance is better for insulin pumps.</strong> While you can add pumps to home insurance, specialist providers offer faster claims, better coverage, and lower premiums specifically designed for diabetes devices.
          </p>
          <p className="text-cyan-400 text-sm font-semibold">Specialist wins: £8-10/month vs home add-on £15-25/month, 24-hour replacement, better device knowledge</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Home Insurance Add-On vs Specialist Coverage</h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Most UK homeowners can add insulin pump coverage to their home or contents insurance. But should you? This guide compares both options so you can choose the right coverage for your needs.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Option 1: Home Insurance Add-On</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Adding insulin pump coverage to your existing contents insurance (often called a "personal possessions" or "specified items" rider).
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-3">Advantages</h4>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>✓ <strong>Single policy:</strong> Everything in one place with your existing insurer</li>
                <li>✓ <strong>Convenience:</strong> No need to manage multiple policies</li>
                <li>✓ <strong>Known provider:</strong> Your current home insurance company</li>
                <li>✓ <strong>Bundle discount:</strong> May qualify for slight discount with existing insurer</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-red-500/30">
              <h4 className="text-lg font-bold text-white mb-3">Disadvantages</h4>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>✗ <strong>Higher cost:</strong> £15-25/month (2-3x specialist rates)</li>
                <li>✗ <strong>Slower claims:</strong> General insurers, not diabetes specialists—may take 5-10 days</li>
                <li>✗ <strong>Medical knowledge gap:</strong> Claims handlers unfamiliar with insulin pumps</li>
                <li>✗ <strong>Coverage gaps:</strong> May not cover specific pump models or CGM devices</li>
                <li>✗ <strong>Worldwide limitation:</strong> Often only covers 30-60 days travel vs 90 days specialist</li>
                <li>✗ <strong>Excess limits:</strong> Higher excesses (£100-150) vs specialist (£0-50)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Option 2: Specialist Device Insurance</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Using a dedicated insurance provider that specializes in diabetes device coverage (insulin pumps, CGM, meters, etc.).
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30">
              <h4 className="text-lg font-bold text-white mb-3">Advantages</h4>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>✓ <strong>Lower cost:</strong> £6.95-10/month (best value available)</li>
                <li>✓ <strong>Fast claims:</strong> 24-hour claims line and replacement—specialists understand urgency</li>
                <li>✓ <strong>Medical expertise:</strong> Claims handlers trained on insulin pumps, CGM devices, models</li>
                <li>✓ <strong>Better coverage:</strong> All major pump brands covered (Medtronic, Omnipod, Tandem)</li>
                <li>✓ <strong>Worldwide travel:</strong> 90 days/year international coverage as standard</li>
                <li>✓ <strong>CGM bundle:</strong> Add Dexcom/Libre protection easily</li>
                <li>✓ <strong>No claims history impact:</strong> Claims don't affect your home insurance premiums</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-red-500/30">
              <h4 className="text-lg font-bold text-white mb-3">Disadvantages</h4>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>✗ <strong>Separate policy:</strong> Need to manage alongside home insurance</li>
                <li>✗ <strong>No bundle discount:</strong> Separate from home insurance</li>
                <li>✗ <strong>New provider relationship:</strong> Different company from home insurance</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Direct Comparison Table</h3>

          <table className="w-full mb-6 text-sm text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-white">Factor</th>
                <th className="text-center py-3 px-4 text-white">Home Insurance</th>
                <th className="text-center py-3 px-4 text-white">Specialist</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4"><strong>Monthly Cost</strong></td>
                <td className="text-center py-3 px-4">£15-25/month</td>
                <td className="text-center py-3 px-4 text-cyan-400">£6.95-10/month</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4"><strong>Annual Savings</strong></td>
                <td className="text-center py-3 px-4">-</td>
                <td className="text-center py-3 px-4 text-cyan-400">£75-180/year</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4"><strong>Claims Timeline</strong></td>
                <td className="text-center py-3 px-4">5-10 days</td>
                <td className="text-center py-3 px-4 text-cyan-400">24 hours</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4"><strong>Claims Handler</strong></td>
                <td className="text-center py-3 px-4">General insurance staff</td>
                <td className="text-center py-3 px-4 text-cyan-400">Diabetes device experts</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4"><strong>Device Knowledge</strong></td>
                <td className="text-center py-3 px-4">Limited</td>
                <td className="text-center py-3 px-4 text-cyan-400">Specialized training</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4"><strong>Excess/Deductible</strong></td>
                <td className="text-center py-3 px-4">£100-150</td>
                <td className="text-center py-3 px-4 text-cyan-400">£0-50</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4"><strong>Travel Coverage</strong></td>
                <td className="text-center py-3 px-4">30-60 days</td>
                <td className="text-center py-3 px-4 text-cyan-400">90 days/year</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4"><strong>CGM Coverage</strong></td>
                <td className="text-center py-3 px-4">Additional cost</td>
                <td className="text-center py-3 px-4 text-cyan-400">Bundle available</td>
              </tr>
              <tr>
                <td className="py-3 px-4"><strong>Claims Impact on Home Insurance</strong></td>
                <td className="text-center py-3 px-4">Affects premiums</td>
                <td className="text-center py-3 px-4 text-cyan-400">No impact</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-bold mb-4 mt-8">Real-World Scenario: What Happens When You Make a Claim?</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <h4 className="text-lg font-bold text-white mb-3">Scenario: Your pump is damaged by spilled coffee</h4>

              <p className="text-slate-400 text-sm mb-4"><strong>With Home Insurance Add-On:</strong></p>
              <ol className="text-slate-300 text-sm space-y-2 ml-4 mb-4">
                <li>1. Call your home insurance claims line</li>
                <li>2. Explain you have an insulin pump (claims handler may not know what that is)</li>
                <li>3. Submit paperwork and photos</li>
                <li>4. Wait 5-10 days for assessment</li>
                <li>5. Claims handler researches insulin pump replacement cost</li>
                <li>6. Claim approved, check sent by post (more days)</li>
                <li>7. You arrange replacement yourself with NHS or private provider</li>
                <li>8. Without your pump for 1-2 weeks, you experience glucose monitoring gaps</li>
              </ol>

              <p className="text-slate-400 text-sm mb-4"><strong>With Specialist Device Insurance:</strong></p>
              <ol className="text-slate-300 text-sm space-y-2 ml-4">
                <li>1. Call specialist insurer's 24-hour claims line</li>
                <li>2. Explain damage (claims handler familiar with pumps—asks specific questions)</li>
                <li>3. Claim approved during call based on pump model and damage description</li>
                <li>4. Insurer arranges courier delivery or pickup within 24 hours</li>
                <li>5. You receive replacement pump next business day</li>
                <li>6. Minimal interruption to diabetes management</li>
              </ol>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">When Home Insurance Might Make Sense</h3>

          <ul className="space-y-3 text-slate-300 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">•</span>
              <div>
                <strong>Already high home insurance cost:</strong> If you've exhausted discounts and specialist insurance isn't available to you for some reason
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">•</span>
              <div>
                <strong>Low-cost home insurance:</strong> If your home insurance provider offers very cheap add-ons (rare)
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">•</span>
              <div>
                <strong>Insist on single provider:</strong> If you prefer one point of contact for all insurance (convenience over cost/speed)
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">When Specialist Insurance is Better</h3>

          <ul className="space-y-3 text-slate-300 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div>
                <strong>You want 24-hour replacement:</strong> Only specialists guarantee next-day delivery
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div>
                <strong>You travel internationally:</strong> Need 90 days/year coverage (home insurance only 30-60)
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div>
                <strong>You use a CGM:</strong> Specialists bundle pump + CGM at better rates than home insurance add-ons
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div>
                <strong>You want fastest claims:</strong> Specialist handlers understand diabetes technology urgency
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div>
                <strong>You want better value:</strong> Specialist insurance is 50% cheaper than home insurance add-ons
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div>
                <strong>You don't want claim history impact:</strong> Claims with home insurer can affect future premiums
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">The Financial Case</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Over 3 years:
          </p>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 mb-6">
            <p className="text-slate-300 mb-3"><strong>Home Insurance Add-On:</strong></p>
            <p className="text-cyan-400 text-lg">£20/month × 36 months = <strong>£720</strong></p>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30 mb-6">
            <p className="text-slate-300 mb-3"><strong>Specialist Insurance:</strong></p>
            <p className="text-cyan-400 text-lg">£8/month × 36 months = <strong>£288</strong></p>
          </div>

          <p className="text-slate-300 leading-relaxed mb-4">
            <strong>Savings with specialist: £432 over 3 years</strong>—plus faster claims, better coverage, and zero impact on your home insurance.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Recommendation</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            <strong>Choose specialist device insurance.</strong> It's cheaper, faster, more comprehensive, and specifically designed for insulin pumps and CGM devices. Your claims won't affect your home insurance premiums, and you'll get 24-hour replacement instead of waiting 5-10 days.
          </p>

          <p className="text-slate-300 leading-relaxed">
            Home insurance add-ons are convenient if you already have home insurance, but they don't compare to specialist coverage for diabetes devices. Save money, get better coverage, and get faster claims—choose specialist insurance every time.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/best-insulin-pump-insurance-uk"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                Best Providers
              </h4>
              <p className="text-slate-400 text-sm">
                Compare specialist insurance providers.
              </p>
            </Link>
            <Link
              href="/do-you-need-insulin-pump-insurance"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                Do You Need Insurance?
              </h4>
              <p className="text-slate-400 text-sm">
                Assessment guide for insulin pump coverage.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-900/30 to-cyan-600/20 py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Choose Specialist Insurance
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Better coverage, faster claims, and 50% cheaper than home insurance add-ons.
          </p>
          <a
            href="/#calculator"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Specialist Coverage
          </a>
        </div>
      </section>
    </main>
  )
}
