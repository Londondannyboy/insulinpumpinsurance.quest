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
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Insulin Pump Insurance UK. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Compare <strong>insulin pump insurance</strong> quotes from UK specialist providers.
            We help you find comprehensive diabetes device cover for insulin pumps, CGM systems, and other diabetes technology.
          </p>
        </div>
      </div>
    </footer>
  )
}
