import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">Insulin Pump Insurance UK</h3>
            <p className="text-slate-400 text-sm">
              Compare <strong>insulin pump insurance</strong> quotes from specialist UK providers.
              Get comprehensive diabetes device cover for insulin pumps and CGM systems.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Coverage Types</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/insulin-pump-cover" className="hover:text-white transition-colors">Insulin Pump Insurance</Link></li>
              <li><Link href="/dexcom-cgm-insurance" className="hover:text-white transition-colors">Dexcom Insurance</Link></li>
              <li><Link href="/freestyle-libre-insurance" className="hover:text-white transition-colors">FreeStyle Libre Cover</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Guides</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/do-you-need-insulin-pump-insurance" className="hover:text-white transition-colors">Do You Need Insurance?</Link></li>
              <li><Link href="/compare-insulin-pump-insurance-uk" className="hover:text-white transition-colors">Compare Providers</Link></li>
              <li><Link href="/how-much-does-insulin-pump-insurance-cost" className="hover:text-white transition-colors">Insurance Costs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Articles</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/articles" className="hover:text-white transition-colors">All Articles</Link></li>
              <li><Link href="/articles/insulin-pump-insurance-costs-guide" className="hover:text-white transition-colors">Costs Guide</Link></li>
              <li><Link href="/articles/nhs-pump-insurance-requirements" className="hover:text-white transition-colors">NHS vs Insurance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Medical & Insurance Disclaimer + Information Sources */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="bg-slate-800/30 rounded-lg p-6 mb-6">
            <h4 className="text-white font-semibold mb-3 text-sm">Medical & Insurance Disclaimer</h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              <strong className="text-slate-300">Important:</strong> This website is currently in beta development and provides general information about insulin pump insurance for educational purposes only. The content should not be considered medical advice, financial advice, or a substitute for professional consultation.
            </p>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              <strong className="text-slate-300">Medical Information:</strong> For medical guidance about insulin pumps, continuous glucose monitors, or diabetes management, always consult your diabetes specialist, endocrinologist, or diabetes specialist nurse. Information about medical devices and diabetes management is provided for general awareness and should be verified with healthcare professionals.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-300">Insurance Information:</strong> Insurance coverage details, pricing, and policy terms may vary by provider and are subject to change. Always verify coverage details, exclusions, and terms directly with insurance providers before purchasing. This site is not affiliated with or endorsed by any insurance company. Insurance policies are regulated by the <a href="https://www.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Financial Conduct Authority (FCA)</a>.
            </p>
          </div>

          <div className="bg-slate-800/20 rounded-lg p-6 mb-6">
            <h4 className="text-white font-semibold mb-3 text-sm">Information Sources & References</h4>
            <p className="text-xs text-slate-400 mb-3">
              Medical and diabetes information referenced from authoritative sources:
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <a href="https://www.nhs.uk/conditions/type-1-diabetes/insulin-pumps/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">NHS - Insulin Pumps Guidance</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <a href="https://www.diabetes.org.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Diabetes UK - National Charity</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <a href="https://breakthrought1d.org.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Breakthrough T1D UK (JDRF)</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <a href="https://www.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Financial Conduct Authority (FCA)</a>
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-3 italic">
              All external links verified as of December 2024. We are not affiliated with these organizations but reference their publicly available guidance for educational purposes.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Insulin Pump Insurance UK. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Compare <strong>insulin pump insurance</strong> quotes from UK specialist providers.
            We help you find comprehensive diabetes device cover for insulin pumps, CGM systems, and other diabetes technology.
          </p>
          <p className="mt-2 text-xs text-slate-600">
            Beta Version - Site Under Development | Last Updated: December 2024
          </p>
        </div>
      </div>
    </footer>
  )
}
