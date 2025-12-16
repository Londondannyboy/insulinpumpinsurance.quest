import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How We Compare Insulin Pump Insurance Providers | Our Methodology',
  description: 'Learn about our independent comparison methodology for insulin pump insurance providers. Complete transparency about how we evaluate coverage, pricing, and service quality.',
  alternates: {
    canonical: 'https://insulinpumpinsurance.quest/how-we-compare',
  },
}

export default function HowWeComparePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&crop=entropy"
            alt="How we compare insulin pump insurance providers methodology"
            title="Insulin Pump Insurance Comparison Methodology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/85"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            How We Compare <span className="text-cyan-400">Insulin Pump Insurance</span> Providers
          </h1>
          <p className="text-xl text-slate-100 mb-4 font-light">
            Complete transparency about our independent comparison methodology and service limitations
          </p>
          <p className="text-slate-300">
            Last updated: December 2024
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Who We Are (And Who We're NOT)</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">✓ We ARE:</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                  <span>An <strong>independent comparison and information service</strong> for insulin pump insurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                  <span>A <strong>free educational resource</strong> about diabetes device protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                  <span>Committed to <strong>accuracy and transparency</strong> in all information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                  <span>Currently in <strong>beta development</strong> (continuously improving)</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">✗ We are NOT:</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                  <span>An insurance company, underwriter, or policy issuer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                  <span>An insurance broker or intermediary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                  <span>Affiliated with, owned by, or paid by any insurance provider</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                  <span>Able to provide official quotes or sell insurance policies</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-6">
            <p className="text-slate-300 mb-2">
              <strong className="text-white">Important:</strong> We do not receive commissions, referral fees, or any form of payment from insurance providers. Our service is completely independent and free to use.
            </p>
            <p className="text-slate-300 text-sm">
              All provider information is sourced from publicly available websites, regulatory filings, and direct verification with providers.
            </p>
          </div>
        </div>
      </section>

      {/* Our Comparison Methodology */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Our Comparison Methodology</h2>

          <div className="space-y-6">
            {/* Criterion 1 */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-white">1. Provider Identification & Verification</h3>
              </div>
              <p className="text-slate-300 mb-3">
                We identify specialist insulin pump insurance providers operating in the UK market through:
              </p>
              <ul className="space-y-2 text-slate-400 text-sm ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Search for FCA-regulated insurers specializing in diabetes devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Verification of <a href="https://www.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">FCA registration</a> and authorization status</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Recommendations from <a href="https://www.diabetes.org.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Diabetes UK</a> and <a href="https://breakthrought1d.org.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Breakthrough T1D UK</a> communities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Review of provider websites for policy details and coverage information</span>
                </li>
              </ul>
            </div>

            {/* Criterion 2 */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-white">2. Pricing Information</h3>
              </div>
              <p className="text-slate-300 mb-3">
                Pricing information is gathered from:
              </p>
              <ul className="space-y-2 text-slate-400 text-sm ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Provider websites (publicly listed pricing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Sample quotes using standardized coverage scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Price ranges reflect typical monthly premiums (not exact quotes)</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-amber-900/20 border border-amber-500/30 rounded-lg">
                <p className="text-amber-200 text-sm">
                  <strong>Important:</strong> Actual premiums vary based on device type, value, coverage level, excess chosen, and individual circumstances. Always obtain official quotes from providers directly.
                </p>
              </div>
            </div>

            {/* Criterion 3 */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-white">3. Coverage Assessment</h3>
              </div>
              <p className="text-slate-300 mb-3">
                We evaluate provider coverage across these key areas:
              </p>
              <ul className="space-y-2 text-slate-400 text-sm ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong className="text-white">Accidental Damage:</strong> Coverage for drops, impacts, screen damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong className="text-white">Theft & Loss:</strong> Protection against stolen or lost devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong className="text-white">Liquid Damage:</strong> Coverage for water exposure and spillages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong className="text-white">Travel Coverage:</strong> Worldwide protection duration and limits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong className="text-white">Device Compatibility:</strong> Which pump brands and CGM systems are covered</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong className="text-white">Accessories:</strong> Coverage for transmitters, PDMs, sensors, receivers</span>
                </li>
              </ul>
            </div>

            {/* Criterion 4 */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⏱️</span>
                </div>
                <h3 className="text-xl font-bold text-white">4. Claims Processing</h3>
              </div>
              <p className="text-slate-300 mb-3">
                We assess claims service quality based on:
              </p>
              <ul className="space-y-2 text-slate-400 text-sm ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Provider-stated claim processing times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Emergency support availability (24/7, business hours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Loan equipment options during claim processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Claims submission methods (online, phone, email)</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-lg">
                <p className="text-slate-300 text-sm">
                  We cannot verify actual customer claim experiences. Information is based on provider policy documentation and publicly available service descriptions.
                </p>
              </div>
            </div>

            {/* Criterion 5 */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-white">5. FCA Regulation Verification</h3>
              </div>
              <p className="text-slate-300 mb-3">
                All providers are verified for regulatory compliance:
              </p>
              <ul className="space-y-2 text-slate-400 text-sm ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Check FCA Financial Services Register for authorization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Verify current regulatory status (authorized, not suspended)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span>Confirm permissions include insurance distribution</span>
                </li>
              </ul>
              <p className="text-slate-300 text-sm mt-4">
                You can verify any provider's FCA status at <a href="https://www.fca.org.uk/register" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">fca.org.uk/register</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We DON'T Do */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">What We DON'T Do (Important Limitations)</h2>

          <div className="space-y-4">
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-400 mb-3">✗ We DO NOT Provide Official Quotes</h3>
              <p className="text-slate-300 text-sm">
                The pricing information on our site is indicative only and based on publicly available information. For official quotes tailored to your specific circumstances, you must contact providers directly.
              </p>
            </div>

            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-400 mb-3">✗ We DO NOT Verify Customer Reviews</h3>
              <p className="text-slate-300 text-sm">
                We do not collect, verify, or publish customer reviews or testimonials. We are a comparison service, not a review platform. For customer feedback, search independent review sites or diabetes community forums.
              </p>
            </div>

            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-400 mb-3">✗ We DO NOT Audit Provider Financial Strength</h3>
              <p className="text-slate-300 text-sm">
                While we verify FCA regulation, we do not assess insurers' financial stability or claims-paying ability. Check provider financial ratings from agencies like AM Best or Fitch Ratings if this is important to you.
              </p>
            </div>

            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-red-400 mb-3">✗ We DO NOT Provide Medical or Financial Advice</h3>
              <p className="text-slate-300 text-sm">
                Our content is educational only. For medical guidance about insulin pumps and diabetes management, consult your healthcare team or visit <a href="https://www.nhs.uk/conditions/type-1-diabetes/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">NHS Type 1 Diabetes guidance</a>. For financial advice about insurance, consult an FCA-authorized financial adviser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Update Frequency */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Information Accuracy & Update Frequency</h2>

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Regular Verification Schedule</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-cyan-400 font-semibold mb-3">Monthly Checks:</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">→</span>
                    <span>Provider website pricing updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">→</span>
                    <span>Coverage policy changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">→</span>
                    <span>Link verification (no broken links)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-cyan-400 font-semibold mb-3">Quarterly Reviews:</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">→</span>
                    <span>FCA registration status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">→</span>
                    <span>New provider identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400">→</span>
                    <span>Market changes and trends</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
            <p className="text-amber-200 mb-3">
              <strong>Despite our best efforts:</strong> Insurance provider policies, pricing, and terms can change at any time. Information accuracy is verified as of the last update date shown on each page.
            </p>
            <p className="text-amber-200 text-sm">
              <strong>Always verify current information directly with providers before making insurance purchase decisions.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Reporting Inaccuracies */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-y border-cyan-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Found Incorrect Information?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            We're committed to accuracy. If you notice outdated pricing, incorrect coverage details, broken links, or any other inaccuracies, please let us know immediately.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
          >
            Report an Inaccuracy
          </a>
          <p className="text-slate-400 text-sm mt-6">
            We aim to respond to all accuracy reports within 48 hours and update information within 7 days.
          </p>
        </div>
      </section>

      {/* Authority Sources */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Authoritative Sources We Reference</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://www.nhs.uk/conditions/type-1-diabetes/insulin-pumps/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">NHS - Insulin Pumps Guidance</h3>
              <p className="text-slate-400 text-sm">Official NHS information about insulin pump provision, eligibility, and support</p>
            </a>

            <a href="https://www.diabetes.org.uk/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">Diabetes UK</h3>
              <p className="text-slate-400 text-sm">UK's leading diabetes charity providing evidence-based information and support</p>
            </a>

            <a href="https://breakthrought1d.org.uk/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">Breakthrough T1D UK (JDRF)</h3>
              <p className="text-slate-400 text-sm">Type 1 diabetes research and advocacy organization</p>
            </a>

            <a href="https://www.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">Financial Conduct Authority (FCA)</h3>
              <p className="text-slate-400 text-sm">UK financial services regulator - we verify all providers on the FCA register</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Compare Providers?</h2>
          <p className="text-slate-300 mb-8">
            Use our comparison table to evaluate coverage options and pricing from specialist UK insurers
          </p>
          <a
            href="/#calculator"
            className="inline-block px-8 py-4 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
          >
            View Provider Comparison
          </a>
        </div>
      </section>
    </div>
  )
}
