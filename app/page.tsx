import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GarnishmentChecker from './GarnishmentChecker';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wage Garnishment Laws by State 2026 — Free Checker Tool',
  description:
    'Instantly check wage garnishment laws in your state for medical debt, credit cards, and personal loans. See garnishment limits, lawsuit timelines, and your protections — free, no signup.',
  alternates: { canonical: 'https://www.wagegarnishmentlaws.com/' },
  openGraph: {
    title: 'Wage Garnishment Laws by State 2026 — Free Checker Tool',
    description:
      "Check your state's wage garnishment rules for medical debt, credit cards, and personal loans. Free, instant, no signup required.",
    url: 'https://www.wagegarnishmentlaws.com/',
  },
  twitter: {
    title: 'Wage Garnishment Laws by State 2026',
    description: "Check your state's wage garnishment rules instantly — free, no signup.",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Medical Debt Wage Garnishment Checker',
      description:
        'A free tool to check wage garnishment rules by U.S. state for medical debt and other consumer debts.',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can a creditor garnish my wages without suing me first?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For most private consumer debts a creditor must sue you and obtain a court judgment before garnishing wages. Government debts like federal taxes and student loans can sometimes be garnished without a court order.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which states prohibit wage garnishment for consumer debt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Texas, Pennsylvania, North Carolina, and South Carolina broadly prohibit wage garnishment for most private consumer debts.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a garnishment be stopped once it starts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Options include filing for bankruptcy, negotiating a settlement, claiming an exemption, or showing the judgment was improperly obtained.',
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <div id="ezoic-pub-ad-placeholder-101" />
      <main>

        {/* ── HERO ── */}
        <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 text-teal-700 text-sm font-medium mb-8">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free · Instant · No signup required
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              Are Your Wages at Risk<br className="hidden sm:block" /> of Garnishment?
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Medical bills, credit cards, personal loans — find out exactly what creditors
              can do in your state and what protections you have. Takes under a minute.
            </p>

            <a
              href="#checker"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-xl text-base transition shadow-sm shadow-teal-200"
            >
              Check My State Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-slate-400 text-sm">
              {[
                'All 50 states + D.C.',
                'No data collected',
                'Runs in your browser',
              ].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST STATS ── */}
        <section className="bg-slate-50 border-y border-slate-200 py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: '$88B+', label: 'Medical debt held by Americans' },
                { stat: '4 States', label: 'Fully ban consumer wage garnishment' },
                { stat: '3–6 yrs', label: 'Typical statute of limitations' },
                { stat: '25%', label: 'Federal garnishment cap' },
              ].map(({ stat, label }) => (
                <div key={stat}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-800">{stat}</div>
                  <div className="text-slate-500 text-xs sm:text-sm mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="learn" className="py-16 sm:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                How Wage Garnishment Works
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                Understanding the process helps you know what to expect — and when to act.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Wage garnishment is a legal process where a creditor instructs your employer to
                  withhold a portion of your paycheck and send it directly to them — but only after
                  winning a court judgment against you.
                </p>
                <p>
                  For most private consumer debts — including{' '}
                  <strong className="text-slate-800">medical bills, credit cards, and personal loans</strong> —
                  creditors must sue first. You'll receive a summons and have a window to respond
                  before any judgment can be entered.
                </p>
                <p>
                  Federal law caps garnishment at{' '}
                  <strong className="text-slate-800">25% of disposable income</strong> or the amount
                  over 30× the federal minimum wage, whichever is less. Many states set lower caps,
                  and four states ban it entirely for consumer debt.
                </p>
                <p>
                  Knowing your state's rules lets you negotiate more effectively, respond to lawsuits
                  in time, or seek legal help before things escalate.
                </p>
                <div className="flex flex-wrap gap-4 pt-1">
                  <Link href="/faq" className="text-teal-600 hover:text-teal-700 font-semibold text-sm">
                    Common Questions →
                  </Link>
                  <Link href="/blog" className="text-teal-600 hover:text-teal-700 font-semibold text-sm">
                    Read Our Guides →
                  </Link>
                </div>
              </div>

              <ol className="space-y-3">
                {[
                  {
                    n: '01',
                    h: 'Creditor files a lawsuit',
                    p: 'Creditor sues in civil court. You are served and typically have 20–30 days to respond.',
                  },
                  {
                    n: '02',
                    h: 'Judgment is entered',
                    p: "If you don't respond or lose, the court enters a judgment against you. Judgments can often be renewed.",
                  },
                  {
                    n: '03',
                    h: 'Garnishment order issued',
                    p: 'Creditor applies for a garnishment order. Your employer is legally required to comply.',
                  },
                  {
                    n: '04',
                    h: 'Wages withheld each pay period',
                    p: 'A percentage of each paycheck is sent to the creditor until the debt is paid in full.',
                  },
                ].map((step) => (
                  <li key={step.n} className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex gap-4">
                    <span className="text-xl font-extrabold text-teal-200 leading-none flex-shrink-0 mt-0.5">{step.n}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{step.h}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.p}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── CHECKER TOOL ── */}
        <GarnishmentChecker />

        <div id="ezoic-pub-ad-placeholder-102" />

        {/* ── FAQ PREVIEW ── */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Have more questions?
            </h2>
            <p className="text-slate-500 text-base mb-6">
              We've answered the most common questions about debt collection, lawsuits, and garnishment law.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl text-sm transition"
            >
              View all FAQs →
            </Link>
          </div>
        </section>

        {/* ── EXPERT CTA ── */}
        <section className="bg-teal-700 text-white py-14 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Still unsure about your situation?
            </h2>
            <p className="text-teal-100 text-base mb-8 max-w-xl mx-auto leading-relaxed">
              This tool is a starting point, not a final answer. A consumer law attorney can
              review your specific case — many offer free initial consultations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://www.lawhelp.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-teal-800 font-bold px-7 py-3.5 rounded-xl hover:bg-teal-50 transition"
              >
                Find Free Legal Help ↗
              </a>
              <a
                href="https://www.consumerfinance.gov/consumer-tools/debt-collection/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 border border-teal-500 text-white font-semibold px-7 py-3.5 rounded-xl transition"
              >
                CFPB Debt Resources ↗
              </a>
            </div>
          </div>
        </section>

      </main>

      <div id="ezoic-pub-ad-placeholder-103" />
      <script
        dangerouslySetInnerHTML={{
          __html: 'ezstandalone.cmd.push(function(){ezstandalone.showAds(101,102,103);});',
        }}
      />
      <Footer />
    </>
  );
}
