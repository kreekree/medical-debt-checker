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
      'Check your state\'s wage garnishment rules for medical debt, credit cards, and personal loans. Free, instant, no signup required.',
    url: 'https://www.wagegarnishmentlaws.com/',
  },
  twitter: {
    title: 'Wage Garnishment Laws by State 2026',
    description: 'Check your state\'s wage garnishment rules instantly — free, no signup.',
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
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-7">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free · Instant · No signup · All 50 states
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              See If Your Wages<br />
              <span className="text-blue-400">Are at Risk</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Medical bills, credit cards, personal loans — find out exactly what creditors can do in your
              state, how long they have to sue, and what protections you have. In under a minute.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#checker"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition shadow-xl shadow-blue-900/40"
              >
                Check My State Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#learn"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition"
              >
                How It Works
              </a>
            </div>
            <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-slate-400 text-sm">
              {['All 50 States + D.C.', 'No Data Collected', 'Runs in Your Browser'].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="bg-blue-600 text-white py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div><div className="text-3xl font-extrabold">$88B+</div><div className="text-blue-200 text-sm mt-1">Medical debt held by Americans</div></div>
              <div><div className="text-3xl font-extrabold">4 States</div><div className="text-blue-200 text-sm mt-1">Ban consumer wage garnishment</div></div>
              <div><div className="text-3xl font-extrabold">3–6 yrs</div><div className="text-blue-200 text-sm mt-1">Typical statute of limitations</div></div>
              <div><div className="text-3xl font-extrabold">25%</div><div className="text-blue-200 text-sm mt-1">Federal garnishment cap</div></div>
            </div>
          </div>
        </section>

        {/* WHAT IS GARNISHMENT */}
        <section id="learn" className="py-16 sm:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">What Is Wage Garnishment?</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Understanding the process helps you know what to expect — and what options you have.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-5 text-gray-600 leading-relaxed text-base">
                <p>
                  Wage garnishment is a legal process where a creditor instructs your employer to withhold a
                  portion of your paycheck and send it directly to them — but only after winning a court
                  judgment against you.
                </p>
                <p>
                  For most private consumer debts — including{' '}
                  <strong className="text-gray-800">medical bills, credit cards, and personal loans</strong> —
                  creditors must sue first. You'll receive a summons and have a window to respond before any
                  judgment can be entered.
                </p>
                <p>
                  Federal law caps garnishment at{' '}
                  <strong className="text-gray-800">25% of disposable income</strong> or the amount over 30× the
                  federal minimum wage, whichever is less. Many states set lower caps, and four states ban it
                  entirely for consumer debt.
                </p>
                <p>
                  Knowing your state's rules lets you negotiate more effectively, respond to lawsuits in time,
                  or seek legal help before things escalate.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <Link href="/faq" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                    Common Questions →
                  </Link>
                  <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                    Read Our Guides →
                  </Link>
                </div>
              </div>
              <ol className="space-y-4">
                {[
                  { n: '01', h: 'Creditor files a lawsuit', p: 'Creditor sues in civil court. You are served and typically have 20–30 days to respond.' },
                  { n: '02', h: 'Judgment is entered', p: 'If you don\'t respond or lose, the court enters a judgment against you. Judgments can often be renewed.' },
                  { n: '03', h: 'Garnishment order issued', p: 'Creditor applies for a garnishment order. Your employer is legally required to comply.' },
                  { n: '04', h: 'Wages withheld each pay period', p: 'A percentage of each paycheck is sent to the creditor until the debt is paid in full.' },
                ].map((step) => (
                  <li key={step.n} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex gap-4">
                    <span className="text-2xl font-extrabold text-blue-200 leading-none flex-shrink-0">{step.n}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{step.h}</h3>
                      <p className="text-sm text-gray-500">{step.p}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* CHECKER TOOL (client component) */}
        <GarnishmentChecker />

        <div id="ezoic-pub-ad-placeholder-102" />

        {/* FAQ PREVIEW */}
        <section id="faq" className="py-16 sm:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 text-base">
                Common questions about debt collection, lawsuits, and wage garnishment law.
              </p>
            </div>
            <div className="text-center mt-4">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                View all questions on the FAQ page →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="text-5xl mb-5">⚖️</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Still Unsure About Your Situation?</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              This tool is a starting point, not a final answer. A consumer law attorney can review your
              specific case — many offer free initial consultations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://www.lawhelp.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-7 py-4 rounded-xl hover:bg-gray-100 transition shadow-lg"
              >
                Find Free Legal Help ↗
              </a>
              <a
                href="https://www.consumerfinance.gov/consumer-tools/debt-collection/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-xl transition"
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
          __html: "ezstandalone.cmd.push(function(){ezstandalone.showAds(101,102,103);});",
        }}
      />
      <Footer />
    </>
  );
}
