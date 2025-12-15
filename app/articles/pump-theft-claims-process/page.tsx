import type { Metadata } from "next"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Pump Theft Claims Process | Step-by-Step Insurance Guide",
  description: "Complete guide to claiming insulin pump insurance after theft. Step-by-step process, police report requirements, and 24-hour replacement.",
  keywords: [
    "pump theft claims",
    "stolen insulin pump",
    "pump theft insurance",
    "claims process theft",
    "police report pump"
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Pump Theft Claims Process Guide",
  description: "Complete guide to filing theft claims for stolen insulin pumps.",
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
          <span className="text-slate-300">Theft Claims Process</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-cyan-900 to-slate-900 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop&q=80"
                alt="insulin pump theft claims insurance process"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="inline-block bg-cyan-500/30 text-cyan-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Claims Guide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Pump Theft Claims Process
            <span className="text-cyan-400"> Complete Guide</span>
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Step-by-step guide to claiming insulin pump insurance when your pump is stolen, including police report requirements and 24-hour replacement process.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span>December 2024</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-900/30 to-slate-900/30 border border-red-500/30 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Theft is Covered</h2>
          <p className="text-slate-300 mb-4">
            If your insulin pump is stolen, specialist insurance covers the full replacement cost. The key requirement: report to police and get a crime reference number within 24-48 hours.
          </p>
          <p className="text-cyan-400 text-sm font-semibold">⏰ Act quickly: Report theft and claim within 48 hours for fastest processing</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Theft Claims: Step-by-Step</h2>

          <h3 className="text-2xl font-bold mb-4 mt-8">Immediate Actions (Within Hours)</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-red-500/30">
              <h4 className="text-lg font-bold text-white mb-2">1. Report to Police (First Priority)</h4>
              <p className="text-slate-400 text-sm mb-3">
                Call police immediately or visit your local police station to report the theft. Provide:
              </p>
              <ul className="text-slate-300 space-y-1 text-sm ml-4">
                <li>• Pump brand and model (e.g., Medtronic 780G)</li>
                <li>• Serial number (if you know it)</li>
                <li>• When and where it was stolen</li>
                <li>• Value (approximately £3,000-6,000)</li>
                <li>• Any identifying marks or characteristics</li>
              </ul>
              <p className="text-cyan-400 text-sm mt-3"><strong>Critical:</strong> Get a crime reference number. You MUST have this for insurance claim.</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-red-500/30">
              <h4 className="text-lg font-bold text-white mb-2">2. Take Photos & Gather Details</h4>
              <p className="text-slate-400 text-sm mb-3">
                While details are fresh:
              </p>
              <ul className="text-slate-300 space-y-1 text-sm ml-4">
                <li>• Photo of police crime reference number</li>
                <li>• Write down where/when pump was stolen</li>
                <li>• Note who was present</li>
                <li>• Describe how/why you believe it was theft (not loss)</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-red-500/30">
              <h4 className="text-lg font-bold text-white mb-2">3. Locate Your Insurance Documents</h4>
              <p className="text-slate-400 text-sm">
                Find your insurance policy number, provider contact details, and 24-hour claims line number. Have this ready before calling.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">File Your Claim (Within 24-48 Hours)</h3>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30 mb-6">
            <h4 className="text-lg font-bold text-white mb-3">Call Your Insurer's Claims Line</h4>
            <p className="text-slate-400 text-sm mb-3">
              Call the 24-hour claims number on your policy. Have ready:
            </p>
            <ul className="text-slate-300 space-y-2 text-sm ml-4">
              <li>• Policy number</li>
              <li>• Crime reference number from police</li>
              <li>• Date/time/location of theft</li>
              <li>• Your pump details (brand, model, serial if known)</li>
              <li>• Your contact information</li>
            </ul>
            <p className="text-cyan-400 text-sm mt-3"><strong>Key point:</strong> The insurer will confirm your theft qualifies for coverage and begin processing replacement.</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Documentation Phase (24-48 Hours)</h3>

          <div className="space-y-4 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <h4 className="text-lg font-bold text-white mb-2">Submit Police Report</h4>
              <p className="text-slate-400 text-sm">
                Email or post the police crime reference number to your insurer. Some insurers want a copy of the police report; others just need the reference number.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <h4 className="text-lg font-bold text-white mb-2">Provide Proof of Ownership</h4>
              <p className="text-slate-400 text-sm">
                Submit proof that you owned the pump:
              </p>
              <ul className="text-slate-300 space-y-1 text-sm ml-4 mt-2">
                <li>• Original receipt (if private pump)</li>
                <li>• NHS letter (if NHS pump)</li>
                <li>• Bank statement showing pump-related purchase</li>
                <li>• Prescription documentation</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <h4 className="text-lg font-bold text-white mb-2">Confirm Pump Details</h4>
              <p className="text-slate-400 text-sm">
                Provide serial number, photos (if you have them), and any identifying information about your stolen pump.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Replacement Phase (24 Hours)</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            After insurance approves your claim:
          </p>

          <ol className="text-slate-300 space-y-3 text-sm mb-6 ml-4">
            <li><strong>1. Approval:</strong> Insurer confirms theft claim and approves replacement</li>
            <li><strong>2. Arrangement:</strong> Insurer arranges courier delivery or pickup</li>
            <li><strong>3. Tracking:</strong> You receive tracking information for replacement pump</li>
            <li><strong>4. Delivery:</strong> Replacement typically arrives next business day</li>
            <li><strong>5. Payment:</strong> You pay your excess (£0-100); insurer covers rest</li>
          </ol>

          <h3 className="text-2xl font-bold mb-4 mt-8">Timeline Summary</h3>

          <table className="w-full mb-6 text-sm text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-white">When</th>
                <th className="text-left py-3 px-4 text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Within 1 hour</td>
                <td className="py-3 px-4">Report to police, get crime reference</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Within 24 hours</td>
                <td className="py-3 px-4">Call insurer's claims line with crime reference</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Within 48 hours</td>
                <td className="py-3 px-4">Submit police report and proof of ownership</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Within 24 hours of approval</td>
                <td className="py-3 px-4">Receive replacement pump delivery</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-bold mb-4 mt-8">Important Points</h3>

          <ul className="space-y-3 text-slate-300 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div>
                <strong>Police report is ESSENTIAL:</strong> Without a crime reference number, insurers cannot process theft claims.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div>
                <strong>Speed matters:</strong> Report within hours, not days. Delayed reporting can affect claim processing.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div>
                <strong>Honesty is critical:</strong> Clearly explain it was theft, not loss. Insurance teams understand the difference.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">✓</span>
              <div>
                <strong>Keep documentation:</strong> Save all police reports, insurance correspondence, and receipts.
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Conclusion</h3>

          <p className="text-slate-300 leading-relaxed">
            If your pump is stolen, act quickly: report to police immediately, then call your insurer within 24 hours. With a crime reference number and proof of ownership, most theft claims are approved and replacements arranged within 24 hours. Insurance protects you from the £3,000-6,000 replacement cost and ensures you're not without pump therapy for long.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/pump-insurance-claims-process"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                General Claims Process
              </h4>
              <p className="text-slate-400 text-sm">
                Complete guide to all types of insurance claims.
              </p>
            </Link>
            <Link
              href="/insurance-pump-cover"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-cyan-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-cyan-400 transition-colors mb-2">
                Comprehensive Cover
              </h4>
              <p className="text-slate-400 text-sm">
                Overview of what comprehensive insurance covers.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-900/30 to-cyan-600/20 py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Protected Against Theft
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Comprehensive insurance covers theft with fast claims processing and 24-hour replacement.
          </p>
          <a
            href="/#calculator"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Theft Protection
          </a>
        </div>
      </section>
    </main>
  )
}
