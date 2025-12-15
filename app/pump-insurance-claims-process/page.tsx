import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insulin Pump Insurance Claims Process | 24-Hour Processing Guide",
  description: "Step-by-step guide to claiming insulin pump insurance. Learn how to file claims, what documentation is needed, and get 24-hour replacement coverage.",
  alternates: {
    canonical: "https://insulinpumpinsurance.quest/pump-insurance-claims-process",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Insulin Pump Insurance Claims Process
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          When your insulin pump is damaged, lost, or stolen, knowing how to file a claim quickly ensures you get your replacement within 24 hours. This comprehensive guide walks you through every step of the claims process.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&crop=entropy"
            alt="insulin pump claims process insurance replacement"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Quick Summary</h2>
          <p className="text-slate-300">
            Most specialist insurers process pump claims within 24 hours. Report damage immediately, gather documentation (photos, receipts, police report if theft), contact your insurer within 24-48 hours, and submit claim via phone, email, or online portal.
          </p>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Step-by-Step Claims Process</h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Step 1: Secure the Device (Within Minutes)</h3>
              <p className="text-slate-400 mb-3">
                If your pump is lost or stolen, stop using it immediately (if possible). If damaged, stop using it to prevent further damage or injury. Take several clear photographs from multiple angles showing:
              </p>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>• Full device showing damage/condition</li>
                <li>• Close-up of damage area</li>
                <li>• Serial number (usually on back)</li>
                <li>• Any identifying marks</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Step 2: Report Theft/Loss to Police (If Applicable)</h3>
              <p className="text-slate-400 mb-3">
                <strong>Required for theft or loss claims.</strong> Contact local police to report:
              </p>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>• Location and time of theft/loss</li>
                <li>• What was taken (insulin pump, CGM, etc.)</li>
                <li>• Device serial number and brand</li>
                <li>• Any witnesses</li>
              </ul>
              <p className="text-slate-400 mt-3">
                Request a crime reference number - you'll need this for your insurance claim.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Step 3: Contact Your Insurer Within 24-48 Hours</h3>
              <p className="text-slate-400 mb-3">
                Time is critical. Contact your insurance provider immediately:
              </p>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>• Call 24-hour emergency claims line (check your policy)</li>
                <li>• Use online claims portal if available</li>
                <li>• Email claim notification if urgent line unavailable</li>
                <li>• Have policy number ready</li>
              </ul>
              <p className="text-slate-400 mt-3">
                Many insurers offer same-day interim replacements while processing formal claims.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Step 4: Gather Documentation (Within 24-48 Hours)</h3>
              <p className="text-slate-400 mb-3">
                Prepare the following documents for your claim:
              </p>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>• Original receipt or proof of purchase</li>
                <li>• NHS letter confirming pump provision (if NHS-funded)</li>
                <li>• Device serial number</li>
                <li>• Policy documentation/insurance certificate</li>
                <li>• Photos of damage</li>
                <li>• Crime reference number (if theft/loss)</li>
                <li>• Damage description (circumstances, date, time)</li>
                <li>• Receipts for any temporary replacement items</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Step 5: Submit Full Claim (Within 3-5 Business Days)</h3>
              <p className="text-slate-400 mb-3">
                Submit your complete claim package via your insurer's preferred method:
              </p>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>• Online portal upload (fastest)</li>
                <li>• Email with all documents</li>
                <li>• Post if required (keep copy)</li>
              </ul>
              <p className="text-slate-400 mt-3">
                <strong>Important:</strong> Keep copies of everything you submit. Get confirmation of receipt and a claim reference number.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Step 6: Await Processing & Replacement (24 Hours)</h3>
              <p className="text-slate-400 mb-3">
                After submitting your claim:
              </p>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>• Insurer reviews claim (typically 24 hours)</li>
                <li>• Approves replacement device</li>
                <li>• Arranges courier delivery or in-store pickup</li>
                <li>• Sends you tracking information</li>
              </ul>
              <p className="text-slate-400 mt-3">
                Many insurers arrange next-business-day delivery for approved urgent claims.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Step 7: Receive & Activate Replacement</h3>
              <p className="text-slate-400 mb-3">
                When your replacement arrives:
              </p>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>• Check package for all items</li>
                <li>• Inspect device for damage</li>
                <li>• Set up new device (or contact pump support)</li>
                <li>• Download any required apps</li>
                <li>• Configure settings from your old device</li>
              </ul>
              <p className="text-slate-400 mt-3">
                <strong>Keep packaging:</strong> Some insurers may ask for the damaged device to be returned as part of the claim process.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Required Documentation by Claim Type</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Accidental Damage Claims</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>✓ Original receipt or proof of purchase</li>
                <li>✓ Detailed description of how damage occurred</li>
                <li>✓ High-quality photos of damage from multiple angles</li>
                <li>✓ Device serial number</li>
                <li>✓ Policy documentation</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Theft Claims</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>✓ Crime reference number from police</li>
                <li>✓ Police incident report or reference</li>
                <li>✓ Description of what was stolen</li>
                <li>✓ Original receipt or proof of purchase</li>
                <li>✓ Device serial number</li>
                <li>✓ Policy documentation</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Loss Claims</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>✓ Detailed description of circumstances</li>
                <li>✓ Last location where device was seen</li>
                <li>✓ Search efforts undertaken</li>
                <li>✓ Original receipt or proof of purchase</li>
                <li>✓ Device serial number</li>
                <li>✓ Policy documentation</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-cyan-404 mb-3">NHS Pump Claims</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>✓ NHS letter confirming pump provision</li>
                <li>✓ Device serial number</li>
                <li>✓ Proof of damage/loss/theft</li>
                <li>✓ Original NHS provision documentation</li>
                <li>✓ Damage photos or police report</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Common Questions About Claims</h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                How long does 24-hour processing actually take?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                "24-hour processing" typically means from claim approval to delivery arrangement. If you submit at 9am Monday, replacement might be arranged by 9am Tuesday with courier next-day delivery. In practice, many urgent claims are processed same-day for emergency situations.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                What if I don't have the original receipt?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Many insurers accept alternative proof of ownership: credit card statements, NHS prescription letters, device serial number registration, or bank statements. Contact your insurer to ask what documentation they'll accept instead.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Will I have to pay excess on my claim?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Most policies include an excess (£0-100) that you pay when filing a claim. The insurer covers the remaining replacement cost. Your specific excess amount is shown in your policy documents.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                What if I'm traveling abroad when damage occurs?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Most comprehensive policies cover travel claims internationally. File your claim via phone, email, or online portal while abroad. Many insurers arrange replacement to be shipped to your destination or held for collection when you return.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Can I claim multiple devices in one incident?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Yes - if your pump and CGM are both damaged in the same incident, you can claim both. Each device counts as a separate claim item. Make sure your policy covers multiple devices.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                What happens to my old damaged device?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Some insurers request you return the damaged device with proof of damage. Others just need photos. Check your claim documentation. The insurer may refurbish it or properly dispose of it following medical device regulations.
              </p>
            </details>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Pro Tips for Smooth Claims</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Before Damage Happens</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Keep receipts organized</li>
                <li>• Record serial numbers</li>
                <li>• Take device photos for records</li>
                <li>• Bookmark insurer contact info</li>
                <li>• Review your policy coverage</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">During/After Damage</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Take multiple clear photos</li>
                <li>• Write down what happened</li>
                <li>• Report theft to police immediately</li>
                <li>• Call insurer same day if possible</li>
                <li>• Keep all documentation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">File Your Claim Today</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-slate-300 mb-4">
              When your insulin pump is damaged or lost, don't delay. Fast action ensures you get your 24-hour replacement coverage. Most insurers have dedicated claims teams ready to help immediately.
            </p>
            <Link
              href="/#calculator"
              className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
            >
              Get Claims Coverage
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
