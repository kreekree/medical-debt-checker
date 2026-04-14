import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About WageGarnishmentLaws.com — Mission & Data Sources',
  description:
    'Learn who built WageGarnishmentLaws.com, why we built it, and where our 50-state garnishment data comes from. Verified against official court and government sources.',
  alternates: { canonical: 'https://www.wagegarnishmentlaws.com/about' },
  openGraph: {
    title: 'About WageGarnishmentLaws.com',
    description: 'The mission behind the free wage garnishment checker and our data sources.',
    url: 'https://www.wagegarnishmentlaws.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About This Site</h1>
          <p className="text-gray-500 text-sm">Last updated: April 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why We Built This</h2>
            <p>
              Millions of Americans carry medical debt. Many don't know what creditors can legally do — and
              what they can't. State laws vary dramatically: four states outright ban wage garnishment for
              consumer debt, while others limit it to as little as 10% of gross wages. Most people don't
              find out what applies to them until a garnishment notice arrives.
            </p>
            <p>
              WageGarnishmentLaws.com was built to close that information gap. Our goal is simple: give
              anyone in the U.S. fast, clear access to their state's garnishment rules before a creditor
              lawsuit becomes a paycheck problem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What This Tool Does</h2>
            <p>
              The garnishment checker runs entirely in your browser — no data is sent to any server, no
              account is required. Select your state, enter your debt amount, and the tool immediately
              surfaces:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Your state's maximum garnishment percentage</li>
              <li>The statute of limitations for consumer debt lawsuits</li>
              <li>Whether a court judgment is required before garnishment</li>
              <li>State-specific exemptions and protections</li>
              <li>Links to official state court resources</li>
            </ul>
            <p>
              The tool covers all 50 states plus Washington D.C. Data is sourced from official state
              statutes, federal Consumer Credit Protection Act (CCPA) guidelines, and published legal
              aid organization summaries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Sources</h2>
            <p>Garnishment rules on this site are drawn from the following authoritative sources:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>
                <a href="https://www.dol.gov/agencies/whd/wage-garnishment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  U.S. Department of Labor — Wage Garnishment
                </a>{' '}
                — federal baseline rules under the CCPA
              </li>
              <li>
                <a href="https://www.consumerfinance.gov/consumer-tools/debt-collection/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Consumer Financial Protection Bureau — Debt Collection Resources
                </a>
              </li>
              <li>
                Individual state court self-help portals — cited per-state in the checker results
              </li>
              <li>
                State legal aid organization summaries, cross-referenced against current state statutes
              </li>
            </ul>
            <p>
              All data is reviewed for accuracy and updated periodically. See our{' '}
              <Link href="/methodology" className="text-blue-600 hover:underline">
                Methodology page
              </Link>{' '}
              for full detail on how rules are calculated and what assumptions are made.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Important Limitations</h2>
            <p>
              This tool provides general information only. It is{' '}
              <strong>not legal advice</strong>. Laws change, and individual circumstances matter.
              The tool does not account for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Tax debt, child support, alimony, or federal student loans (which follow different rules)</li>
              <li>Local court practices that may differ from state law</li>
              <li>Income-based exemptions that require individual calculation</li>
              <li>Bankruptcy protections</li>
            </ul>
            <p>
              If you've received a lawsuit, summons, or garnishment notice, consult a consumer law
              attorney. Many offer free consultations.{' '}
              <a href="https://www.lawhelp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                LawHelp.org
              </a>{' '}
              connects you with free legal aid by state.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact</h2>
            <p>
              Questions, corrections, or feedback? Use our{' '}
              <Link href="/contact" className="text-blue-600 hover:underline">
                contact page
              </Link>
              . We review and respond to all substantive messages, especially reports of outdated or
              incorrect legal information.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-sm">
          <Link href="/" className="text-blue-600 hover:underline font-semibold">← Run the Checker</Link>
          <Link href="/methodology" className="text-blue-600 hover:underline font-semibold">Methodology →</Link>
          <Link href="/faq" className="text-blue-600 hover:underline font-semibold">FAQ →</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
