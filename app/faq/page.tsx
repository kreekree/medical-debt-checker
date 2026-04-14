import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wage Garnishment FAQ — 12 Common Questions Answered',
  description:
    'Answers to the most common questions about wage garnishment, medical debt lawsuits, state-specific rules, and how to stop a garnishment. Covers all 50 states.',
  alternates: { canonical: 'https://www.wagegarnishmentlaws.com/faq' },
  openGraph: {
    title: 'Wage Garnishment FAQ — 12 Common Questions Answered',
    description: 'Clear answers on garnishment law, medical debt lawsuits, state rules, and how to fight back.',
    url: 'https://www.wagegarnishmentlaws.com/faq',
  },
};

const FAQS = [
  {
    q: 'Can a creditor garnish my wages without suing me first?',
    a: `For most private consumer debts — including medical bills, credit cards, and personal loans — a creditor must sue you and obtain a court judgment before garnishing wages. This means you will receive a court summons, typically have 20–30 days to respond, and only face garnishment if the creditor wins or you don't respond. However, there are important exceptions: federal tax debt (IRS), federal student loans, and child support or alimony obligations can sometimes be collected through wage withholding without a court order. Always check whether the creditor contacting you is a private collector or a government agency.`,
  },
  {
    q: 'How long does a creditor have to sue me for medical debt?',
    a: `The statute of limitations for medical debt varies by state, typically ranging from 3 to 6 years — though some states allow 8 or even 10 years. Once this period expires, the debt is considered "time-barred," and a creditor who sues you can be defeated on that grounds. However, a time-barred debt does not simply vanish. Collectors can still contact you, and making a payment, entering a payment arrangement, or even acknowledging the debt in writing can restart the limitations clock in some states. If you receive a lawsuit on what you believe is an old debt, research your state's statute of limitations before responding.`,
  },
  {
    q: 'Which states prohibit wage garnishment for most consumer debt?',
    a: `Four states — Texas, Pennsylvania, North Carolina, and South Carolina — broadly prohibit wage garnishment for most private consumer debts. Even when a creditor wins a judgment in court in these states, they generally cannot instruct your employer to withhold wages for credit card bills, medical debt, or personal loans. This does not mean you're fully protected: creditors in these states can still pursue bank account levies (freezing and seizing money already in your account), place liens on real property, or take other post-judgment collection actions. Federal debts, including IRS obligations and federal student loans, are also not covered by these state prohibitions.`,
  },
  {
    q: 'What percentage of my paycheck can be garnished?',
    a: `Federal law under the Consumer Credit Protection Act (CCPA) caps wage garnishment at 25% of disposable income per pay period, or the amount by which your disposable income exceeds 30 times the federal minimum wage per week — whichever is less. Many states have set lower limits. New York and New Jersey cap garnishment at 10% of gross wages. Illinois and Massachusetts limit it to 15%. Hawaii uses a tiered formula that results in even lower effective rates for most earners. States like Florida offer a head-of-household exemption that can reduce or eliminate garnishment for qualifying earners who support dependents. Use our checker tool to see your specific state's limit.`,
  },
  {
    q: 'Can a garnishment be stopped once it starts?',
    a: `Yes, there are several avenues to stop or reduce a garnishment in progress. First, filing for bankruptcy (Chapter 7 or Chapter 13) triggers an automatic stay that immediately halts most garnishments. Second, you can negotiate a settlement or voluntary payment plan directly with the creditor — many will stop a garnishment in exchange for a lump-sum payment at a discount. Third, you may be able to claim an exemption (such as Florida's head-of-household exemption) by filing the appropriate form with the court within the required response window. Fourth, if the underlying judgment was improperly obtained — for example, if you were never properly served with the lawsuit — an attorney may be able to vacate the judgment. Acting quickly is critical; each missed paycheck represents money you may not recover.`,
  },
  {
    q: "What's the difference between wage garnishment and a bank levy?",
    a: `Wage garnishment takes money from your paycheck before you receive it. Your employer receives a court order, withholds the specified percentage, and sends it to the creditor each pay period until the debt is paid. A bank levy, by contrast, targets funds already deposited in your bank or credit union account — it freezes the account and allows the creditor to seize the funds. Both require a court judgment for private consumer debts. Critically, states that protect wages from garnishment (Texas, Pennsylvania, North Carolina, and South Carolina) do not necessarily protect bank accounts. Creditors in those states often pursue bank levies as an alternative. Keeping large balances in a bank account in a "wage-protected" state can still put those funds at risk.`,
  },
  {
    q: 'Does medical debt still affect my credit score?',
    a: `The credit reporting landscape for medical debt changed significantly in 2022–2023. The three major credit bureaus — Equifax, Experian, and TransUnion — removed all paid medical debt from reports and stopped reporting medical debt collections under $500. Unpaid medical debt over $500 that has been in collections for at least one year can still appear on credit reports under current rules. The Consumer Financial Protection Bureau (CFPB) has proposed rules to further restrict medical debt from credit reports, but those proposals had not been finalized as of early 2026. Check your report directly at AnnualCreditReport.com and dispute any medical debt entries that appear to violate current bureau policies.`,
  },
  {
    q: 'Can I negotiate medical debt before a lawsuit is filed?',
    a: `Negotiating before a lawsuit is filed is often your strongest position. Hospitals and medical providers regularly accept less than the full balance — particularly when you can demonstrate financial hardship or offer a lump-sum settlement. Many nonprofit hospitals are legally required by their IRS status to offer charity care programs, which can reduce or eliminate bills for qualifying patients. Before negotiating, always request an itemized bill and review it carefully: medical billing errors are common, with studies suggesting a significant percentage of hospital bills contain overcharges. If you are uninsured or under-insured, ask about the hospital's financial assistance policy before accepting a payment plan.`,
  },
  {
    q: 'What happens if I ignore a debt lawsuit?',
    a: `Ignoring a lawsuit is one of the most costly mistakes a debtor can make. If you fail to respond within the court's deadline — typically 20–30 days after being served — the court will enter a "default judgment" against you automatically. The creditor wins without presenting any evidence or arguing their case. With that judgment in hand, they can then pursue wage garnishment, bank levies, and property liens depending on your state. In states that normally require detailed evidence of the debt, a default judgment skips that review entirely. If you receive a court summons, respond before the deadline even if you're unsure what to say. Many states allow a simple written answer that preserves your rights while you seek legal help.`,
  },
  {
    q: 'Are Social Security benefits protected from garnishment?',
    a: `Social Security benefits are broadly protected from private creditor garnishment. Federal law generally prohibits private debt collectors from garnishing Social Security income, whether it's retirement benefits, disability (SSDI), or Supplemental Security Income (SSI). However, this protection can be complicated in practice. If Social Security deposits are mixed with other funds in a bank account, a bank levy could freeze the account — forcing you to prove which funds are protected. Federal law requires banks to automatically protect two months of Social Security deposits from levy, but you may need to file a claim to recover anything above that threshold. Federal tax debt, child support, alimony, and federally guaranteed student loans can still be collected from Social Security under separate rules.`,
  },
  {
    q: 'How do I respond to a wage garnishment notice?',
    a: `When you receive a garnishment notice, act immediately. You typically have a short window — often 10 to 30 days depending on your state — to file a claim of exemption if you believe your wages are protected. First, read the notice carefully to understand who the creditor is, the judgment amount, and the response deadline. Then check your state's exemption rules: if you're a head of household in Florida, or your income falls below your state's protected threshold, you may be able to stop or reduce the garnishment by filing a simple form with the court. Even if no exemption applies, contacting the creditor directly to propose a payment plan can sometimes lead to a voluntary suspension of the garnishment. Consider consulting a consumer law attorney — many offer free initial consultations, and addressing a garnishment quickly can save significant money.`,
  },
  {
    q: 'What protections do I have as head of household?',
    a: `Several states offer a head-of-household exemption — also called a "breadwinner exemption" — that provides significant protection for people who are the primary financial support for a dependent. Florida's version is among the strongest: if you provide more than half the financial support for a dependent child or other family member, your wages may be fully exempt from garnishment. Other states offering similar exemptions include Oklahoma and certain circumstances in other jurisdictions. To use this protection, you must affirmatively claim it — typically by filing a written claim of exemption with the court within the required response window after receiving the garnishment notice. The exemption is not automatic. Missing the response deadline usually means losing the right to claim it, so time is critical.`,
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Wage Garnishment FAQ
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Straight answers on debt collection, lawsuits, state rules, and how to protect yourself.
          </p>
        </div>

        <div className="space-y-6">
          {FAQS.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
              <details className="group">
                <summary className="flex items-start justify-between gap-4 px-6 py-5 bg-white hover:bg-gray-50 cursor-pointer list-none transition">
                  <h2 className="font-bold text-gray-900 text-base sm:text-lg leading-snug">{item.q}</h2>
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="bg-slate-50 border-t border-gray-100 px-6 py-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              </details>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-sm">
          <Link href="/" className="text-blue-600 hover:underline font-semibold">← Run the Checker</Link>
          <Link href="/blog" className="text-blue-600 hover:underline font-semibold">Read Our Guides →</Link>
          <Link href="/methodology" className="text-blue-600 hover:underline font-semibold">Methodology →</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
