import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="font-bold text-white">GarnishmentCheck</span>
            </div>
            <p className="text-sm leading-relaxed">
              A free tool helping Americans understand wage garnishment laws across all 50 states.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-300 mb-3">Government Resources</p>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Consumer Financial Protection Bureau</a></li>
              <li><a href="https://www.usa.gov/debt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">USA.gov — Managing Debt</a></li>
              <li><a href="https://www.dol.gov/agencies/whd/wage-garnishment" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">DOL — Wage Garnishment Laws</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-300 mb-3">Free Legal Help</p>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.lawhelp.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LawHelp.org</a></li>
              <li><a href="https://www.lsc.gov/about-lsc/what-legal-aid/get-legal-help" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Legal Services Corporation</a></li>
              <li><a href="https://www.nclc.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">National Consumer Law Center</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-500 text-xs text-center mb-4 leading-relaxed">
            This site is for informational purposes only. Not legal, financial, or professional advice.
            Nothing on this site creates an attorney-client relationship. Laws change — always consult a
            licensed attorney in your state.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-600 mb-3">
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/faq" className="hover:text-white transition">FAQ</Link>
            <Link href="/methodology" className="hover:text-white transition">Methodology</Link>
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          </div>
          <p className="text-xs text-slate-700 text-center">
            © 2026 WageGarnishmentLaws.com · Not affiliated with any government agency
          </p>
        </div>
      </div>
    </footer>
  );
}
