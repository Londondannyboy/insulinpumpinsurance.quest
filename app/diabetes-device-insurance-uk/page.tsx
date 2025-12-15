import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diabetes Device Insurance UK | Insulin Pumps & CGM Coverage 2025",
  description: "Complete diabetes technology insurance covering insulin pumps, CGM devices, and glucose monitors. Protect your Type 1 diabetes devices from accidental damage, theft, and loss.",
  alternates: {
    canonical: "https://insulinpumpinsurance.quest/diabetes-device-insurance-uk",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Diabetes Device Insurance UK
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          Comprehensive diabetes technology insurance protects all your essential devices - insulin pumps, continuous glucose monitors, and diabetes accessories. With 24-hour claims processing and worldwide coverage, you can manage Type 1 diabetes with confidence knowing your technology is protected.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&crop=entropy"
            alt="diabetes device insurance pump CGM protection"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Full Device Coverage</h2>
          <p className="text-slate-300 mb-4">
            <strong>Diabetes device insurance includes:</strong> All insulin pump brands (Medtronic, Omnipod, Tandem), all CGM systems (Dexcom, Libre, Guardian), accidental damage, theft, loss, liquid damage, worldwide travel, and accessories. Coverage from £6.95-12/month with 24-hour claims processing.
          </p>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why Diabetes Device Insurance Matters</h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">💰 High Replacement Cost</h3>
              <p className="text-slate-400">
                Insulin pumps cost £2,500-6,000 to replace. CGM devices cost £300-600. Type 1 diabetes technology is expensive - insurance removes the financial burden of unexpected replacement.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">⚡ Uninterrupted Diabetes Management</h3>
              <p className="text-slate-400">
                When your pump or CGM fails, you can't wait weeks for NHS replacement or can't afford private costs. Insurance ensures 24-hour replacement so your insulin delivery and glucose monitoring never stops.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">🛡️ Coverage Gaps</h3>
              <p className="text-slate-400">
                NHS covers device provision but not replacement for loss, theft, or damage. Private pumps have no coverage for these scenarios. Insurance fills these critical gaps in protection.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">🌍 Travel Peace of Mind</h3>
              <p className="text-slate-400">
                Traveling with diabetes technology is risky - devices get damaged, lost, or stolen. Insurance includes 90 days of worldwide travel coverage per year with 24-hour claims even abroad.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-404 mb-3">👨‍👩‍👧 Family Protection</h3>
              <p className="text-slate-400">
                Whether you manage diabetes independently or as a parent, knowing your family's diabetes technology is protected from loss and damage provides peace of mind for continuous, uninterrupted care.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Diabetes Devices Covered</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-4">Insulin Pumps</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ Medtronic (780G, 670G, 640G)</li>
                <li>✓ Omnipod Dash & Omnipod 5</li>
                <li>✓ Tandem t:slim X2</li>
                <li>✓ Ypsomed (Mylife)</li>
                <li>✓ Roche Accu-Chek Spirit</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-4">CGM Systems</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ Dexcom G6 & G7</li>
                <li>✓ FreeStyle Libre 2 & 3</li>
                <li>✓ Medtronic Guardian 4</li>
                <li>✓ All transmitters & receivers</li>
                <li>✓ Compatible accessories</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
            <h3 className="text-lg font-bold text-white mb-4">Associated Devices & Accessories</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-slate-300 text-sm">
              <li>• Infusion sets</li>
              <li>• Reservoirs</li>
              <li>• Batteries & chargers</li>
              <li>• Carrying cases</li>
              <li>• Sensor applicators</li>
              <li>• Protective covers</li>
            </ul>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Coverage Options Available</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Basic Coverage (Accidental Damage)</h3>
              <p className="text-slate-400 text-sm mb-3">
                Covers accidental damage only. Best for careful users who want financial protection against drops, impacts, and physical damage.
              </p>
              <p className="text-cyan-400 font-semibold">£6.95-7/month</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Comprehensive Coverage ⭐ (Recommended)</h3>
              <p className="text-slate-400 text-sm mb-3">
                Full protection: accidental damage, theft, loss, liquid damage, and worldwide travel. Best for complete peace of mind and active lifestyles.
              </p>
              <p className="text-cyan-400 font-semibold">£8-10/month</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-white mb-3">Premium Coverage (Full Protection)</h3>
              <p className="text-slate-400 text-sm mb-3">
                Enhanced coverage with loan equipment included, extended worldwide travel (120+ days), priority claims, and premium excess options.
              </p>
              <p className="text-cyan-400 font-semibold">£10-15/month</p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">What's Covered in Comprehensive Plans</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-cyan-400 mb-4">✓ What IS Covered</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Accidental damage (drops, impacts)</li>
                <li>• Liquid/water damage</li>
                <li>• Theft (with police report)</li>
                <li>• Loss coverage</li>
                <li>• 24-hour claims processing</li>
                <li>• Worldwide travel (90-120 days/year)</li>
                <li>• Loan equipment (often included)</li>
                <li>• All device brands covered</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-red-500/30">
              <h3 className="text-lg font-bold text-red-400 mb-4">✗ What's NOT Covered</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Pre-existing damage</li>
                <li>• Manufacturer defects</li>
                <li>• Wear and tear</li>
                <li>• Intentional damage</li>
                <li>• Software/app issues</li>
                <li>• Consumables (insulin, strips)</li>
                <li>• Loss of use/income</li>
                <li>• Maintenance costs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Coverage Examples & Scenarios</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Scenario 1: Pump Dropped & Cracked</h3>
              <p className="text-slate-400 text-sm mb-2">
                You accidentally drop your Medtronic pump - the screen cracks and it won't function.
              </p>
              <p className="text-slate-300 text-sm">
                <strong>With insurance:</strong> File claim, receive replacement pump within 24 hours, pay excess only (£0-100). Your insulin delivery never stops.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Scenario 2: Dexcom Stolen from Bag</h3>
              <p className="text-slate-400 text-sm mb-2">
                Your Dexcom receiver is stolen from your gym bag while you're exercising.
              </p>
              <p className="text-slate-300 text-sm">
                <strong>With insurance:</strong> Report to police, file claim with insurer, receive replacement receiver within 24 hours. Continuous glucose monitoring resumes immediately.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Scenario 3: Libre Liquid Damaged on Holiday</h3>
              <p className="text-slate-400 text-sm mb-2">
                Your FreeStyle Libre reader gets damaged by liquid while you're traveling in Spain.
              </p>
              <p className="text-slate-300 text-sm">
                <strong>With insurance:</strong> File 24-hour claim from abroad, get replacement reader shipped while traveling, or use app-based backup access. No interruption to your trip or glucose monitoring.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-cyan-404 mb-3">Scenario 4: Omnipod Damaged During Sports</h3>
              <p className="text-slate-400 text-sm mb-2">
                Your child's Omnipod pod is damaged during school football match - the tubing snaps.
              </p>
              <p className="text-slate-300 text-sm">
                <strong>With insurance:</strong> File claim as accidental damage, receive replacement within 24 hours. No worries about school activities causing financial burden.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Pricing by Device & Coverage</h2>

          <table className="w-full text-sm mb-6">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-3 text-white font-semibold">Device Type</th>
                <th className="text-center py-3 px-3 text-white font-semibold">Basic/Month</th>
                <th className="text-center py-3 px-3 text-white font-semibold">Comprehensive/Month</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">Insulin Pump Only</td>
                <td className="text-center py-3 px-3 text-cyan-400">£6.95</td>
                <td className="text-center py-3 px-3 text-cyan-400">£8-9</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">CGM Only</td>
                <td className="text-center py-3 px-3 text-cyan-400">£4-5</td>
                <td className="text-center py-3 px-3 text-cyan-400">£6-7</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">Pump + CGM Bundle ⭐</td>
                <td className="text-center py-3 px-3 text-cyan-400">£8-9</td>
                <td className="text-center py-3 px-3 text-cyan-400">£10-12</td>
              </tr>
              <tr>
                <td className="py-3 px-3 text-slate-300">Multiple Devices/Premium</td>
                <td className="text-center py-3 px-3 text-cyan-400">£10+</td>
                <td className="text-center py-3 px-3 text-cyan-400">£12-15</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Who Should Get Diabetes Device Insurance</h2>

          <div className="space-y-3">
            <div className="bg-slate-800/50 rounded-2xl p-4 border border-cyan-500/30">
              <p className="text-slate-300"><strong>✓ Anyone with Type 1 diabetes using technology:</strong> If you rely on a pump or CGM, insurance protects you financially and ensures treatment continuity.</p>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-4 border border-cyan-500/30">
              <p className="text-slate-300"><strong>✓ Parents of children with Type 1 diabetes:</strong> Kids are more active and more prone to device damage. Insurance removes stress about accidental damage costs.</p>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-4 border border-cyan-500/30">
              <p className="text-slate-300"><strong>✓ Active adults or travelers:</strong> If you travel internationally or participate in sports, device protection is essential.</p>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-4 border border-cyan-500/30">
              <p className="text-slate-300"><strong>✓ NHS and private pump users:</strong> Even NHS users face financial responsibility for lost/damaged devices. Insurance covers this liability.</p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Get Complete Diabetes Device Protection</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-slate-300 mb-4">
              Your diabetes technology is your lifeline. Comprehensive device insurance ensures that accidental damage, theft, or loss never interrupts your diabetes management. With 24-hour replacement and worldwide coverage, live life with confidence.
            </p>
            <Link
              href="/#calculator"
              className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
            >
              Get Device Protection
            </Link>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Related Pages</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/insulin-pump-cover" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              → Comprehensive Pump Cover
            </Link>
            <Link href="/cgm-insurance-cover" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              → CGM Insurance Cover
            </Link>
            <Link href="/nhs-vs-private-pump-insurance" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              → NHS vs Private Insurance
            </Link>
            <Link href="/travel-insulin-pump-insurance" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              → Travel Coverage
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
