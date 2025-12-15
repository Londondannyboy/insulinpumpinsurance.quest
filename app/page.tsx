import { Metadata } from 'next'
import { QuoteCalculator } from '@/components/QuoteCalculator'

export const metadata: Metadata = {
  title: 'Insulin Pump Insurance UK 2025 | Compare Diabetes Device Cover from £6.95/month',
  description: 'Insulin pump insurance UK - compare quotes from specialist providers. Get comprehensive diabetes device cover for insulin pumps, CGM systems & diabetes technology. Protect your devices from £6.95/month.',
  alternates: {
    canonical: 'https://insulinpumpinsurance.quest',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are insulin pumps covered by insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The NHS provides insulin pumps to eligible patients, but coverage varies and replacement times can be long (weeks or months). Specialist diabetes device insurance from private providers covers accidental damage, theft, and loss quickly - often within 24 hours. Insurance complements NHS coverage by providing faster replacement and covering scenarios where NHS replacement may not apply.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does insulin pump insurance cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Comprehensive insulin pump insurance covers accidental damage (drops, liquid damage, physical damage), theft and loss, and often includes CGM systems, transmitters, and accessories. Most policies include worldwide travel cover for up to 90 days per year. Coverage limits range from £2,000 to £10,000 depending on your policy, with excess options from £0 to £100.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does insulin pump insurance cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Insulin pump insurance typically costs between £6.95-£10 per month depending on coverage type, coverage amount, and excess level. Basic accidental damage cover starts from around £6.95/month, while comprehensive cover including theft and worldwide travel ranges from £8-£10/month. Annual costs are typically £84-£120 for comprehensive coverage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I add my insulin pump to my home insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You may be able to add your insulin pump to your home contents insurance as a single item, but specialist diabetes device insurance is usually better value and provides faster claims processing (24 hours vs several days). Home insurance excesses are typically higher, and specialist insurers understand diabetes technology better and process claims faster.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my insulin pump is stolen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your pump is stolen and you have specialist insurance, most providers will process your claim within 24 hours. You\'ll need to report it to police first and obtain a crime reference number, then submit this with your insurance claim. The insurer will replace your pump or provide a cash settlement depending on your policy. Many providers also offer temporary loan equipment while your claim is processed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does insulin pump insurance cover liquid damage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most comprehensive insulin pump insurance policies cover liquid damage from accidental spillage, rain, or submersion - despite many pumps being water-resistant. Water-resistant does not mean waterproof, and damage from liquids is one of the most common claims. Comprehensive policies typically cover up to the full device value for liquid damage claims.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get insulin pump insurance if I have an NHS pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, many providers offer special insurance for NHS-provided insulin pumps. You remain financially responsible if an NHS pump is lost or significantly damaged, so insurance protects you from that liability. Some insurers require you to notify the NHS if your pump is damaged, and others will coordinate with the NHS for the repair/replacement process.',
      },
    },
    {
      '@type': 'Question',
      name: 'What diabetes devices can be insured?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Specialist diabetes device insurance covers insulin pumps (Medtronic, Omnipod, Tandem, Ypsomed, Roche), CGM systems (Dexcom, FreeStyle Libre, Medtronic Guardian, Senseonics), pump handsets/PDMs, and often accessories like transmitters, infusion sets, and readers. Some policies also cover backup equipment and loan devices used during claims processing.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&crop=entropy"
            alt="Insulin pump insurance UK - diabetes device protection and CGM coverage"
            title="Insulin Pump Insurance - Compare Quotes for Diabetes Device Cover"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl">💉</span>
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-sm font-semibold">
              Specialist Diabetes Cover
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Compare <span className="text-cyan-400">Insulin Pump Insurance</span> Quotes from Specialist UK Providers
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8">
            Comprehensive <strong>insulin pump insurance</strong> protection with complete peace of mind from <strong>£6.95/month</strong>
          </p>

          <p className="text-lg text-slate-400 mb-8 max-w-2xl">
            Comprehensive insurance for insulin pumps, CGM systems & diabetes devices. Get fast claims processing, worldwide travel cover, and protection for your essential diabetes technology.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Accidental Damage
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Theft & Loss
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Worldwide Cover
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              24 Hour Claims
            </div>
          </div>

          <a
            href="#calculator"
            className="inline-block px-8 py-4 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
          >
            Get Quote Now
          </a>

          {/* Image Caption & Description */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-slate-400 italic">
              <strong>Insulin pump insurance</strong> protects your diabetes devices including insulin pumps (Medtronic, Omnipod, Tandem), continuous glucose monitors (Dexcom, FreeStyle Libre), and related diabetes technology from accidental damage, theft, and loss.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Calculator Section */}
      <section id="calculator" className="py-16 px-4 bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get Your Quote in Minutes</h2>
            <p className="text-lg text-slate-400">Tell us about your devices and get instant price estimates</p>
          </div>
          <QuoteCalculator />
        </div>
      </section>

      {/* Why Insurance Section */}
      <section id="coverage" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Insulin Pump Insurance?</h2>
            <p className="text-lg text-slate-400">Your diabetes technology is too important to leave unprotected</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-semibold text-white mb-3">High Replacement Cost</h3>
              <p className="text-slate-400">Insulin pumps cost £2,000-£6,000 to replace. Without insurance, you'd pay the full cost yourself if your device is lost or significantly damaged.</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Accidental Damage</h3>
              <p className="text-slate-400">Pumps get dropped, exposed to liquid, and damaged daily. Standard warranties don't cover accidents, but specialist insurance does.</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">Theft Protection</h3>
              <p className="text-slate-400">Insulin pumps are stolen from bags, homes, and cars. Specialist insurance covers theft, which home contents insurance often doesn't.</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <div className="text-3xl mb-3">💧</div>
              <h3 className="text-xl font-semibold text-white mb-3">Liquid Damage</h3>
              <p className="text-slate-400">Water-resistant doesn't mean waterproof. Liquid damage from spills, rain, and submersion happens often and is covered by specialist insurance.</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <div className="text-3xl mb-3">✈️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Worldwide Travel</h3>
              <p className="text-slate-400">Most policies include 90 days of worldwide travel cover per year. Get peace of mind when traveling with your diabetes technology.</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Fast Claims</h3>
              <p className="text-slate-400">Specialist insurers process claims in 24 hours vs. weeks for NHS replacement. Get back to your normal routine quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Details Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">What's Covered?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">✓ Covered</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>Insulin pumps (Medtronic, Omnipod, Tandem, Ypsomed, Roche)</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>CGM systems (Dexcom, FreeStyle Libre, Guardian)</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>Accidental damage (drops, liquid, physical damage)</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>Theft and loss coverage</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>Worldwide travel (90 days per year)</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>Accessories (transmitters, sensors, infusion sets)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-red-400 mb-6">✗ Not Covered</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-300">
                  <span className="text-red-400 font-bold mt-1">✗</span>
                  <span>Pre-existing damage</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-red-400 font-bold mt-1">✗</span>
                  <span>Wear and tear</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-red-400 font-bold mt-1">✗</span>
                  <span>Manufacturer defects (covered by warranty)</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-red-400 font-bold mt-1">✗</span>
                  <span>Consumables (insulin, test strips)</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-red-400 font-bold mt-1">✗</span>
                  <span>Intentional damage</span>
                </li>
                <li className="flex gap-3 text-slate-300">
                  <span className="text-red-400 font-bold mt-1">✗</span>
                  <span>Loss of use or income</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section id="devices" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Devices We Cover</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Insulin Pumps</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> Medtronic 780G, 670G, 640G
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> Omnipod Dash & Omnipod 5
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> Tandem t:slim X2
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> Ypsomed MyLife
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> Roche Accu-Chek
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">CGM Systems</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> Dexcom G6 & G7
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> Abbott FreeStyle Libre 2 & 3
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> Medtronic Guardian 4
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> Senseonics Eversense
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Accessories</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> Transmitters
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> PDM/Handsets
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> Infusion sets
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> Readers & sensors
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span> Loan equipment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NHS vs Insurance Comparison */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">NHS vs Specialist Insurance</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-4 text-white font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-slate-300">NHS Provision</th>
                  <th className="text-center py-4 px-4 text-cyan-400 font-semibold">Specialist Insurance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-4 text-slate-300">Replacement Speed</td>
                  <td className="text-center py-4 px-4 text-slate-400">Weeks to months</td>
                  <td className="text-center py-4 px-4 text-green-400 font-semibold">24 hours</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-4 text-slate-300">Loss Coverage</td>
                  <td className="text-center py-4 px-4 text-slate-400">Limited/None</td>
                  <td className="text-center py-4 px-4 text-green-400 font-semibold">Fully covered</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-4 text-slate-300">Damage Coverage</td>
                  <td className="text-center py-4 px-4 text-slate-400">Warranty only</td>
                  <td className="text-center py-4 px-4 text-green-400 font-semibold">Accidental damage</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-4 px-4 text-slate-300">Travel Abroad</td>
                  <td className="text-center py-4 px-4 text-slate-400">Not covered</td>
                  <td className="text-center py-4 px-4 text-green-400 font-semibold">90 days/year</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-slate-300">Financial Responsibility</td>
                  <td className="text-center py-4 px-4 text-red-400 font-semibold">You're liable</td>
                  <td className="text-center py-4 px-4 text-green-400 font-semibold">Insurer covers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: 'Are insulin pumps covered by insurance?',
                a: 'The NHS provides insulin pumps but replacement times vary. Specialist insurance ensures fast replacement (24 hours) and covers scenarios where NHS replacement may not apply. It\'s an ideal complement to NHS coverage.'
              },
              {
                q: 'How much does insulin pump insurance cost?',
                a: 'Comprehensive coverage typically costs £6.95-£10 per month (£84-£120 annually). Costs vary based on coverage type, coverage amount (£2,000-£10,000), and excess level (£0-£100).'
              },
              {
                q: 'Do I need insurance if my pump is on the NHS?',
                a: 'Yes. You remain financially responsible if an NHS pump is lost or significantly damaged. Insurance protects you from that liability and provides faster replacement than NHS processes.'
              },
              {
                q: 'What devices can I insure?',
                a: 'You can insure insulin pumps (Medtronic, Omnipod, Tandem, Ypsomed, Roche), CGM systems (Dexcom, Libre, Guardian), handsets, and accessories like transmitters, sensors, and infusion sets.'
              },
              {
                q: 'How quickly are claims processed?',
                a: 'Most specialist insurers process claims within 24 hours. You\'ll need a police reference number for theft claims. Many offer loan equipment while processing your replacement.'
              },
              {
                q: 'Can I add my pump to my home insurance?',
                a: 'You may be able to add it as a single item, but specialist insurance is usually better value, offers faster claims, and provides better understanding of diabetes technology.'
              },
              {
                q: 'Is there an age limit?',
                a: 'No. Insulin pump insurance is available to people of all ages using insulin pumps or CGM systems.'
              },
              {
                q: 'Does it cover worldwide travel?',
                a: 'Yes. Most comprehensive policies include 90 days of worldwide travel coverage per year, with 24-hour claims processing.'
              },
            ].map((item, i) => (
              <details key={i} className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-white">
                  {item.q}
                  <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-slate-400 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/10 via-slate-800/50 to-teal-500/10 border-y border-slate-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Protect Your Devices?</h2>
          <p className="text-lg text-slate-400 mb-8">Get your insulin pump insurance quote in minutes and enjoy peace of mind</p>
          <a
            href="#calculator"
            className="inline-block px-8 py-4 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
          >
            Get a Quote Now
          </a>
        </div>
      </section>
    </div>
  )
}
