import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medical Debt Garnishment by State: Complete 2026 Guide',
  description:
    'State-by-state breakdown of what creditors can do after winning a medical debt judgment. Covers garnishment caps, statutes of limitations, and key protections in all 50 states.',
  alternates: { canonical: 'https://www.wagegarnishmentlaws.com/blog/medical-debt-garnishment-by-state' },
  openGraph: {
    title: 'Medical Debt Garnishment by State: Complete 2026 Guide',
    description: 'What creditors can actually do in your state after a medical debt judgment. All 50 states.',
    url: 'https://www.wagegarnishmentlaws.com/blog/medical-debt-garnishment-by-state',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Medical Debt Garnishment by State: The Complete 2026 Guide',
  description:
    'A comprehensive state-by-state guide to wage garnishment rules for medical debt, including caps, statutes of limitations, and consumer protections.',
  url: 'https://www.wagegarnishmentlaws.com/blog/medical-debt-garnishment-by-state',
  datePublished: '2026-04-13',
  dateModified: '2026-04-13',
  author: { '@type': 'Organization', name: 'WageGarnishmentLaws.com' },
  publisher: {
    '@type': 'Organization',
    name: 'WageGarnishmentLaws.com',
    url: 'https://www.wagegarnishmentlaws.com',
  },
};

const STATE_TIERS = [
  {
    heading: 'States Where Wage Garnishment Is Banned (Consumer Debt)',
    color: 'bg-green-50 border-green-200',
    headingColor: 'text-green-800',
    states: [
      { name: 'Texas', notes: 'No wage garnishment for consumer debt. One of the most debtor-protective states in the country. Bank levies and property liens remain available to creditors.' },
      { name: 'Pennsylvania', notes: 'Wages are broadly protected. Creditors rely on bank levies and liens. Exceptions exist for taxes, child support, and federal student loans.' },
      { name: 'North Carolina', notes: 'Prohibits wage garnishment for most private consumer debts after judgment. Creditors can still levy bank accounts.' },
      { name: 'South Carolina', notes: 'Wages cannot be garnished for consumer debts including medical bills. Bank account levies remain a risk.' },
    ],
  },
  {
    heading: 'States With Strong Caps (≤15%)',
    color: 'bg-blue-50 border-blue-200',
    headingColor: 'text-blue-800',
    states: [
      { name: 'New Jersey', notes: '10% of gross wages — one of the lowest caps in the country. A court judgment is required.' },
      { name: 'New York', notes: '10% of gross wages or 25% of disposable income, whichever is less. Judgment required.' },
      { name: 'Hawaii', notes: 'Tiered formula: 5% of first $100/month, 10% of next $100, up to 20% above that. Most earners see less than 10%.' },
      { name: 'Delaware', notes: '15% of disposable income cap. Short 3-year statute of limitations.' },
      { name: 'Illinois', notes: '15% of gross wages. One of the most debtor-protective Midwestern states.' },
      { name: 'Massachusetts', notes: '15% of gross wages with additional protections for low-income earners.' },
      { name: 'Nebraska', notes: '15% of disposable income. Social Security and unemployment income are exempt.' },
    ],
  },
  {
    heading: 'States With Moderate Caps (16–24%)',
    color: 'bg-yellow-50 border-yellow-200',
    headingColor: 'text-yellow-800',
    states: [
      { name: 'South Dakota', notes: '20% of disposable earnings. Judgment required.' },
      { name: 'West Virginia', notes: '20% cap. Note the unusually long 10-year statute of limitations — old debts remain actionable.' },
      { name: 'Wisconsin', notes: '20% of disposable earnings. Head-of-household protections may apply in some cases.' },
    ],
  },
  {
    heading: 'States Following Federal Baseline (25%)',
    color: 'bg-gray-50 border-gray-200',
    headingColor: 'text-gray-700',
    states: [
      { name: 'California', notes: 'Uses a state-specific formula: lesser of 25% or amount over 40× state minimum wage/week. More protective for lower-wage earners.' },
      { name: 'Florida', notes: '25% cap, but a powerful head-of-household exemption may fully protect wages for primary breadwinners.' },
      { name: 'Nevada', notes: 'Alternative: amount over 50× federal minimum wage/week — substantially protective.' },
      { name: 'Oregon', notes: 'Alternative: amount over 40× state minimum wage/week. Protective for lower earners.' },
      { name: 'Rhode Island', notes: '25% cap with $50/week floor exemption. Long 10-year statute of limitations — watch this.' },
      { name: 'All other states', notes: 'Follow the federal CCPA formula: lesser of 25% of disposable earnings or amount over 30× federal minimum wage/week.' },
    ],
  },
];

export default function MedicalDebtByStatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 font-medium">
            <Link href="/blog" className="hover:text-gray-600 transition">Blog</Link>
            <span>·</span>
            <span>April 2026</span>
            <span>·</span>
            <span>10 min read</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Medical Debt Garnishment by State: The Complete 2026 Guide
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Medical debt drives more wage garnishment actions than any other consumer debt category.
            But most patients don't know their state's rules until a creditor wins in court.
            Here's what the data actually shows — state by state.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
          <p className="text-amber-800 text-sm font-semibold mb-1">Not legal advice</p>
          <p className="text-amber-700 text-sm">
            This guide provides general information only. Laws change and individual circumstances vary.
            For personal legal situations, consult a consumer law attorney.
          </p>
        </div>

        <article className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">The Scope of Medical Debt in America</h2>
            <p>
              More than 100 million Americans carry some form of medical debt, with total outstanding
              balances estimated at over $88 billion. Unlike credit card debt, medical debt is often
              unexpected, large, and hits households with no prior financial distress. A single hospitalization
              can generate bills from multiple providers — the hospital, surgeons, anesthesiologists,
              radiologists — each potentially billing separately.
            </p>
            <p>
              When those bills go unpaid, they follow the same legal path as any consumer debt: the provider
              (or a debt collector they've sold the account to) can sue. If they win — and most default
              judgments are won because the defendant simply never responded — they gain the legal authority
              to pursue collection. What that collection looks like depends entirely on which state you live in.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">State-by-State Rules</h2>
            <p className="text-sm text-gray-500 mb-6">
              For the complete interactive lookup tool, use our{' '}
              <Link href="/#checker" className="text-blue-600 hover:underline">
                garnishment checker
              </Link>
              . The breakdown below groups states by protection level.
            </p>

            <div className="space-y-6">
              {STATE_TIERS.map((tier) => (
                <div key={tier.heading} className={`border rounded-2xl overflow-hidden ${tier.color}`}>
                  <h3 className={`px-5 py-3 font-extrabold text-base ${tier.headingColor} border-b border-current/20`}>
                    {tier.heading}
                  </h3>
                  <div className="divide-y divide-gray-100">
                    {tier.states.map((s) => (
                      <div key={s.name} className="px-5 py-3 bg-white/70">
                        <span className="font-bold text-gray-900 text-sm">{s.name}: </span>
                        <span className="text-gray-600 text-sm">{s.notes}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">The Lawsuit Requirement: What It Actually Means</h2>
            <p>
              In all 50 states, private consumer creditors — including medical providers and debt collectors —
              must obtain a court judgment before garnishing wages. This is not a technicality. It means:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>The creditor must file a lawsuit in civil court</li>
              <li>You must be properly served with notice of the lawsuit</li>
              <li>You have the right to respond and defend yourself</li>
              <li>Only if the creditor wins (or you default) can they pursue garnishment</li>
            </ul>
            <p>
              <strong>Data shows:</strong> The majority of garnishment judgments are default judgments —
              won because the defendant didn't respond. Responding to a lawsuit, even without an attorney,
              forces the creditor to prove their case. Many debt buyers — who purchased your account at
              a fraction of face value — cannot produce adequate documentation to prove the debt in court.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Statute of Limitations: The Time-Barred Defense</h2>
            <p>
              Every state sets a window within which a creditor can successfully sue on a consumer debt.
              After this period, the debt is "time-barred" — the creditor loses the right to enforce it
              through the courts.
            </p>
            <p>
              For medical debt, most states use a 3–6 year limitation period. A few outliers:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li><strong>Rhode Island and West Virginia</strong>: 10-year limitation — unusually long</li>
              <li><strong>Wyoming</strong>: 8 years</li>
              <li><strong>Alaska, Delaware, Maryland, Mississippi, New Hampshire, D.C.</strong>: 3 years</li>
            </ul>
            <p>
              <strong>Watch this:</strong> Making a payment, entering a payment arrangement, or
              acknowledging the debt in writing can restart the limitations clock in some states.
              If you're being contacted about an old medical debt, verify when the last activity
              occurred before making any payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Recent Changes: Medical Debt and Credit Reporting</h2>
            <p>
              Separately from garnishment law, medical debt credit reporting changed significantly in 2023.
              The major bureaus removed all paid medical debt from credit reports and stopped reporting
              balances under $500. These changes affect your credit score but do not change a creditor's
              legal ability to sue or garnish — those processes are governed by court systems, not credit bureaus.
            </p>
            <p>
              The CFPB proposed additional rules in 2024 that would broadly eliminate medical debt from
              credit reports. As of early 2026, those proposals had not been finalized into binding rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Practical Steps If You Have Medical Debt</h2>
            <ol className="list-decimal pl-5 space-y-3 text-gray-600">
              <li>
                <strong>Know your state's rules.</strong> Use our{' '}
                <Link href="/#checker" className="text-blue-600 hover:underline">free checker</Link> to see
                your garnishment cap, statute of limitations, and official court resources.
              </li>
              <li>
                <strong>Request an itemized bill.</strong> Medical billing errors are common. An itemized
                bill lets you dispute specific charges before a balance reaches collections.
              </li>
              <li>
                <strong>Ask about charity care.</strong> Nonprofit hospitals are legally required to have
                financial assistance programs. Many patients with incomes up to 200–400% of the federal
                poverty level qualify for substantial discounts or write-offs.
              </li>
              <li>
                <strong>Respond to any lawsuit.</strong> Never ignore a court summons, even if you believe
                the debt is wrong or time-barred. Failing to respond results in automatic default judgment.
              </li>
              <li>
                <strong>Consult a consumer attorney if garnishment begins.</strong>{' '}
                <a href="https://www.lawhelp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  LawHelp.org
                </a>{' '}
                connects you with free legal aid in your state.
              </li>
            </ol>
          </section>

        </article>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-sm">
          <Link href="/blog" className="text-blue-600 hover:underline font-semibold">← Back to Blog</Link>
          <Link href="/blog/how-to-stop-wage-garnishment" className="text-blue-600 hover:underline font-semibold">How to Stop Garnishment →</Link>
          <Link href="/#checker" className="text-blue-600 hover:underline font-semibold">Run the Checker →</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
