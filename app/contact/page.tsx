import Link from "next/link"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Insulin Pump Insurance UK',
  description: 'Contact Insulin Pump Insurance UK. Get in touch with questions about insulin pump insurance, quotes, coverage comparisons, or device protection.',
  alternates: {
    canonical: 'https://insulinpumpinsurance.quest/contact',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>

        <p className="text-lg text-slate-400 mb-8">
          Have questions about insulin pump insurance? We're here to help. Get in touch with our team about coverage, quotes, or device protection options.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Get In Touch</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-xl bg-slate-900/50 border border-slate-600 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500" placeholder="Your name"/>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-xl bg-slate-900/50 border border-slate-600 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500" placeholder="your@email.com"/>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea className="w-full px-4 py-2 rounded-xl bg-slate-900/50 border border-slate-600 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500" rows={4} placeholder="Your message..."></textarea>
              </div>
              
              <button type="submit" className="w-full px-6 py-3 bg-cyan-600 text-white font-semibold rounded-xl hover:bg-cyan-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-2">Email</h3>
                <p className="text-slate-400">support@insulinpumpinsurance.quest</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-2">Quick Links</h3>
                <ul className="text-slate-400 space-y-2">
                  <li><Link href="/#calculator" className="hover:text-cyan-400 transition-colors">Get Quote</Link></li>
                  <li><Link href="/compare-insulin-pump-insurance-uk" className="hover:text-cyan-400 transition-colors">Compare Providers</Link></li>
                  <li><Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-2">FAQs</h3>
                <p className="text-slate-400 text-sm">
                  Browse our comprehensive FAQs on the homepage for answers to common questions about insulin pump insurance coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
