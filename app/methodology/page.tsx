import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data & Methodology — How We Calculate Garnishment Rules',
  description:
    'How WageGarnishmentLaws.com sources, verifies, and calculates wage garnishment data for all 50 U.S. states. Includes official links, calculation logic, and assumptions.',
  alternates: { canonical: 'https://www.wagegarnishmentlaws.com/methodology' },
  openGraph: {
    title: 'Data & Methodology — WageGarnishmentLaws.com',
    description: 'How we source and verify 50-state wage garnishment data.',
    url: 'https://www.wagegarnishmentlaws.com/methodology',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'U.S. Wage Garnishment Rules by State',
  description:
    'State-by-state wage garnishment limits, statutes of limitations, and consumer debt protections for all 50 U.S. states and Washington D.C.',
  url: 'https://www.wagegarnishmentlaws.com/methodology',
  creator: { '@type': 'Organization', name: 'WageGarnishmentLaws.com' },
  dateModified: '2026-04-13',
  license: 'https://creativecommons.org/licenses/by/4.0/',
  spatialCoverage: { '@type': 'Place', name: 'United States' },
  temporalCoverage: '2026',
};

export default function MethodologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Data & Methodology</h1>
          <p className="text-gray-500 text-sm">Last updated: April 2026</p>
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Federal Baseline</h2>
            <p>
              The starting point for all garnishment calculations is the{' '}
              <strong>Consumer Credit Protection Act (CCPA)</strong>, Title III, codified at 15 U.S.C.
              §§ 1671–1677. Federal law sets the maximum garnishment at the{' '}
              <em>lesser</em> of:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-3 text-gray-600">
              <li>25% of an employee's disposable earnings per pay period, <em>or</em></li>
              <li>
                The amount by which disposable earnings exceed 30 times the federal minimum wage per week
                (currently $7.25/hr × 30 = $217.50/week)
              </li>
            </ul>
            <p className="mt-3">
              "Disposable earnings" under federal law means the amount remaining after legally required
              deductions — taxes, Social Security, Medicare, and state unemployment insurance — are
              withheld. Voluntary deductions (retirement contributions, health insurance premiums) do{' '}
              <em>not</em> reduce the disposable earnings figure.
            </p>
            <p className="mt-3">
              Source:{' '}
              <a
                href="https://www.dol.gov/agencies/whd/wage-garnishment"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                U.S. Department of Labor — Wage Garnishment
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">State-Level Rules</h2>
            <p>
              States may enact stronger protections than federal law but cannot reduce protections below
              the federal floor. For each state, we record:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3 text-gray-600">
              <li>
                <strong>Maximum garnishment percentage</strong> — the applicable state cap, or 0% where
                garnishment is banned for consumer debt
              </li>
              <li>
                <strong>Protection level</strong> — classified as None (banned), Strong (≤15%),
                Moderate (16–24%), or Federal (25%)
              </li>
              <li>
                <strong>Statute of limitations</strong> — the period within which a creditor may
                successfully sue on a consumer debt claim
              </li>
              <li>
                <strong>Lawsuit requirement</strong> — whether a court judgment is required before
                garnishment (true for all 50 states for private consumer debt)
              </li>
              <li>
                <strong>Alternative formula</strong> — the precise statutory language or formula where
                the state deviates from the federal standard
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Protection Level Classifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-left">
                    <th className="px-4 py-2 font-bold text-gray-700 border border-gray-200">Level</th>
                    <th className="px-4 py-2 font-bold text-gray-700 border border-gray-200">Max Rate</th>
                    <th className="px-4 py-2 font-bold text-gray-700 border border-gray-200">States</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border border-gray-200 font-semibold text-green-700">None (Banned)</td>
                    <td className="px-4 py-3 border border-gray-200">0%</td>
                    <td className="px-4 py-3 border border-gray-200">TX, PA, NC, SC</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 border border-gray-200 font-semibold text-blue-700">Strong</td>
                    <td className="px-4 py-3 border border-gray-200">≤ 15%</td>
                    <td className="px-4 py-3 border border-gray-200">NJ, NY (10%); HI (5%); DE, IL, MA, NE (15%)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-gray-200 font-semibold text-yellow-700">Moderate</td>
                    <td className="px-4 py-3 border border-gray-200">16–24%</td>
                    <td className="px-4 py-3 border border-gray-200">SD, WV, WI (20%)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 border border-gray-200 font-semibold text-gray-700">Federal</td>
                    <td className="px-4 py-3 border border-gray-200">25%</td>
                    <td className="px-4 py-3 border border-gray-200">All remaining states and D.C.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Scope and Assumptions</h2>
            <p>All data on this site applies specifically to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-3 text-gray-600">
              <li>Private consumer debt (medical, credit card, personal loan)</li>
              <li>W-2 employment income (wages, salaries)</li>
              <li>Civil court judgments obtained in standard litigation</li>
            </ul>
            <p className="mt-3">The following are <strong>outside the scope</strong> of this tool:</p>
            <ul className="list-disc pl-5 space-y-1 mt-3 text-gray-600">
              <li>Federal tax debt (IRS levy rules differ significantly)</li>
              <li>Child support and alimony (federal limits allow up to 50–65% garnishment)</li>
              <li>Federal student loan default (administrative wage garnishment without a court order)</li>
              <li>Bankruptcy proceedings</li>
              <li>Self-employed/contractor income (which may not qualify as "wages" under state law)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Primary Sources</h2>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'U.S. DOL — Wage Garnishment', url: 'https://www.dol.gov/agencies/whd/wage-garnishment' },
                { label: 'CFPB — Debt Collection Consumer Tools', url: 'https://www.consumerfinance.gov/consumer-tools/debt-collection/' },
                { label: 'National Consumer Law Center', url: 'https://www.nclc.org/' },
                { label: 'LawHelp.org — State Legal Aid Index', url: 'https://www.lawhelp.org/' },
              ].map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Update Process</h2>
            <p>
              State garnishment statutes are reviewed quarterly or when credible reports of legislative
              changes are identified. Per-state official court links are verified at each review cycle.
              The "last updated" date reflects the most recent comprehensive review.
            </p>
            <p className="mt-3">
              If you identify an error or outdated rule,{' '}
              <Link href="/contact" className="text-blue-600 hover:underline">
                please contact us
              </Link>
              . We prioritize corrections to legal data.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-sm">
          <Link href="/" className="text-blue-600 hover:underline font-semibold">← Run the Checker</Link>
          <Link href="/about" className="text-blue-600 hover:underline font-semibold">About →</Link>
          <Link href="/faq" className="text-blue-600 hover:underline font-semibold">FAQ →</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
