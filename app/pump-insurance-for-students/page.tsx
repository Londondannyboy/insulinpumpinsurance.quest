import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insulin Pump Insurance for Students UK | Diabetes at University",
  description: "University student insulin pump insurance. Protect your pump during student life with travel cover, 24-hour replacement, and affordable rates for Type 1 diabetes.",
  alternates: {
    canonical: "https://insulinpumpinsurance.quest/pump-insurance-for-students",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Insulin Pump Insurance for Students
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          Managing Type 1 diabetes as a university student means extra risks for your insulin pump - accommodation changes, student halls, social activities, and travel all increase damage risk. Specialized student pump insurance provides 24-hour replacement and worldwide travel coverage at affordable rates designed for student budgets.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-cyan-500/20">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&crop=entropy"
            alt="student diabetes insulin pump insurance university"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Student Pump Insurance Overview</h2>
          <p className="text-slate-300">
            Same comprehensive coverage as other users but designed with student life in mind: affordable rates (£6.95-10/month), worldwide travel protection for student exchanges/gap years, dorm-friendly claims processing, and coverage for all the accidents that happen during university years.
          </p>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why Students Need Pump Insurance</h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">🎓 Student Life = Higher Risk</h3>
              <p className="text-slate-400">
                University involves new environments, shared accommodation, parties, active sports, and frequent bag-carrying. Your pump gets knocked, dropped, sat on, and exposed to liquid damage far more than during school years or stable working life.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">✈️ Travel for Placement & Exchange</h3>
              <p className="text-slate-400">
                Many students do placements abroad or exchange semesters. Pump damage while traveling is complicated and expensive. Insurance includes 90 days worldwide travel per year - perfect for Erasmus+ placements, work placements, or gap year travel.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">💰 Limited Student Budget</h3>
              <p className="text-slate-400">
                Student budgets are tight. A £3,000 pump replacement cost is financially catastrophic. For just £6.95-10/month (less than a coffee per week), insurance removes this financial worry during studies.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">🏠 Changing Accommodation</h3>
              <p className="text-slate-400">
                Student accommodation changes annually - student halls first year, shared house, uni accommodation again, or home. Each move increases risk during packing, unpacking, and settling into new spaces. Insurance covers all these transition periods.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-cyan-404 mb-3">📚 Busy & Distracted</h3>
              <p className="text-slate-400">
                University life is hectic - exams, assignments, social life, student societies. You're more likely to accidentally damage your pump when juggling 10 different things at once. Insurance protects against these human mistakes.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Common Student Risk Scenarios</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Scenario 1: Shared Accommodation Mishap</h3>
              <p className="text-slate-400 mb-3">
                You're in student halls. A housemate bumps into your pump while you're getting changed. It falls and cracks the screen.
              </p>
              <p className="text-slate-300 text-sm">
                <strong>With insurance:</strong> File claim same day, get replacement within 24 hours. Continue diabetes management without interruption during exam week.
              </p>
              <p className="text-red-400 text-sm mt-2">
                <strong>Without insurance:</strong> £3,000+ replacement cost, NHS replacement takes weeks (affecting your studies), or financial hardship for replacement.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Scenario 2: Liquid Damage at Party</h3>
              <p className="text-slate-400 mb-3">
                You're at a house party. Someone spills a drink on your backpack containing your pump. It stops working.
              </p>
              <p className="text-slate-300 text-sm">
                <strong>With insurance:</strong> Report damage, get replacement within 24 hours. Back to normal in time for lectures next week.
              </p>
              <p className="text-red-400 text-sm mt-2">
                <strong>Without insurance:</strong> Expensive replacement, missed classes while sorting replacement, stress during assessment period.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Scenario 3: Work Placement Abroad</h3>
              <p className="text-slate-400 mb-3">
                You're doing a placement in France. You drop your pump and crack the screen. NHS won't help you abroad - you need immediate replacement.
              </p>
              <p className="text-slate-300 text-sm">
                <strong>With insurance:</strong> 24-hour claims processing available internationally. Replacement arranged to your placement location or held for collection when you return.
              </p>
              <p className="text-red-400 text-sm mt-2">
                <strong>Without insurance:</strong> Stuck without pump in another country, expensive international shipping, missed work days, employer stress.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-cyan-404 mb-3">Scenario 4: Sports & Recreation</h3>
              <p className="text-slate-400 mb-3">
                You go to the gym/university sports. You drop your pump while changing, or it gets knocked during activity.
              </p>
              <p className="text-slate-300 text-sm">
                <strong>With insurance:</strong> Accidental damage coverage applies. Get replacement quickly and resume sports participation without financial worry.
              </p>
              <p className="text-red-400 text-sm mt-2">
                <strong>Without insurance:</strong> Fear of damage means avoiding activities, missed social opportunities, or expensive replacement costs.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Student-Specific Coverage</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-bold text-cyan-400 mb-4">What's Included in Student Coverage</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-slate-300 text-sm">
              <li>✓ Accidental damage (drops, spills, impacts)</li>
              <li>✓ Theft from accommodation</li>
              <li>✓ Loss during travels</li>
              <li>✓ Liquid/water damage</li>
              <li>✓ 24-hour replacement</li>
              <li>✓ Worldwide travel (90 days/year)</li>
              <li>✓ Coverage for accommodation changes</li>
              <li>✓ International placement support</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Travel Coverage (Essential for Students)</h3>
              <p className="text-slate-400 text-sm mb-3">
                Most student policies include 90 days of worldwide travel per year:
              </p>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>• Erasmus+ / exchange placements</li>
                <li>• Work placements abroad</li>
                <li>• Gap year travel</li>
                <li>• Holiday trips during breaks</li>
                <li>• 24-hour claims while traveling</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Accommodation Coverage</h3>
              <p className="text-slate-400 text-sm mb-3">
                Coverage includes:
              </p>
              <ul className="text-slate-300 space-y-2 text-sm ml-4">
                <li>• Student halls of residence</li>
                <li>• Shared student houses</li>
                <li>• Private rented accommodation</li>
                <li>• Family home during holidays</li>
                <li>• Temporary accommodation during transitions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Student Pricing</h2>

          <p className="text-slate-400 mb-6">
            Student pump insurance is designed to be affordable on a student budget:
          </p>

          <table className="w-full text-sm mb-6">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-3 text-white font-semibold">Coverage Type</th>
                <th className="text-center py-3 px-3 text-white font-semibold">Per Month</th>
                <th className="text-center py-3 px-3 text-white font-semibold">Per Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">Basic Accidental Damage</td>
                <td className="text-center py-3 px-3 text-cyan-400">£6.95-7</td>
                <td className="text-center py-3 px-3 text-cyan-400">£84-90</td>
              </tr>
              <tr className="border-b border-slate-700/50">
                <td className="py-3 px-3 text-slate-300">Comprehensive (Recommended) ⭐</td>
                <td className="text-center py-3 px-3 text-cyan-400">£8-10</td>
                <td className="text-center py-3 px-3 text-cyan-400">£96-120</td>
              </tr>
              <tr>
                <td className="py-3 px-3 text-slate-300">Premium (Extra Travel)</td>
                <td className="text-center py-3 px-3 text-cyan-400">£10-12</td>
                <td className="text-center py-3 px-3 text-cyan-400">£120-144</td>
              </tr>
            </tbody>
          </table>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
            <p className="text-slate-300 text-sm">
              💡 <strong>Cost perspective:</strong> £10/month is about £0.30/day - less than a daily coffee. For protection against £3,000+ pump replacement, it's excellent value.
            </p>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Tips for Student Pump Users</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Before University</h3>
              <ol className="space-y-2 text-slate-300 text-sm">
                <li>1. Get insured before moving to accommodation</li>
                <li>2. Keep policy documentation accessible</li>
                <li>3. Memorize emergency claims number</li>
                <li>4. Take care-of-pump workshop at uni (often available)</li>
                <li>5. Register pump with insurer on arrival</li>
              </ol>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">During University</h3>
              <ol className="space-y-2 text-slate-300 text-sm">
                <li>1. Carry pump in protective case</li>
                <li>2. Don't leave pump unattended in shared spaces</li>
                <li>3. Keep backup supplies in accessible location</li>
                <li>4. Tell close friends your pump is expensive</li>
                <li>5. Know how to file claims digitally</li>
              </ol>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">When Traveling (Placement/Gap Year)</h3>
              <ol className="space-y-2 text-slate-300 text-sm">
                <li>1. Email yourself policy details before traveling</li>
                <li>2. Save insurer number in your phone</li>
                <li>3. Carry physical backup of documentation</li>
                <li>4. Keep pump in checked baggage with care</li>
                <li>5. Report damage immediately (24h window)</li>
              </ol>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Returning Home</h3>
              <ol className="space-y-2 text-slate-300 text-sm">
                <li>1. Update address on insurance if moving</li>
                <li>2. Continue coverage during summer break</li>
                <li>3. Review policy annually</li>
                <li>4. Consider increasing coverage if planning travel</li>
                <li>5. Renew before graduation/work start</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Common Student Questions</h2>

          <div className="space-y-4">
            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Can I get insurance if my pump is NHS-provided?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Yes - absolutely. If you got your pump on the NHS through a diabetes clinic, you can still get insurance. Provide your NHS letter confirming pump provision. Insurance is even more important for NHS users.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Does student insurance cover study abroad/Erasmus?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Yes - 90 days of worldwide travel per year is included in most comprehensive student policies. Perfect for Erasmus+ placements, work placements abroad, or extended gap year travel after graduation.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                What if my pump is damaged during student hall parties?
                <span className="text-cyan-400">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Accidental damage from spills, impacts, or other incidents at social events is covered. Just report within 24-48 hours with photos showing damage. You don't need to explain the situation - insurance covers accidental damage regardless of context.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 group cursor-pointer">
              <summary className="font-semibold text-white flex justify-between items-center">
                Can I claim if my pump is stolen from my room?
                <span className="text-cyan-404">+</span>
              </summary>
              <p className="text-slate-400 mt-3">
                Yes - theft is covered. You'll need to report to police and get a crime reference number. Provide that along with your claim and photos of your room showing it was locked/secured. Insurer will process your claim.
              </p>
            </details>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Study Without Worry</h2>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-slate-300 mb-4">
              University is stressful enough without worrying about your insulin pump. For less than the cost of a weekly coffee, get comprehensive insurance that covers all the accidents that happen during student life - from shared accommodation mishaps to travel abroad.
            </p>
            <p className="text-slate-300 mb-4">
              Focus on your studies. Let insurance handle the "what-ifs".
            </p>
            <Link
              href="/#calculator"
              className="inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
            >
              Get Student Coverage
            </Link>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Related Pages</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/travel-insulin-pump-insurance" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              → Travel Insurance for Students
            </Link>
            <Link href="/children-diabetes-insurance" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              → Insurance for Young People
            </Link>
            <Link href="/do-you-need-insulin-pump-insurance" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              → Do You Need Insurance?
            </Link>
            <Link href="/best-insulin-pump-insurance-uk" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              → Best Providers
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
