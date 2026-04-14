import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wage Garnishment Blog — Guides on Debt Collection Law',
  description:
    'In-depth guides on wage garnishment, medical debt lawsuits, state-by-state rules, and how to protect your paycheck from creditors.',
  alternates: { canonical: 'https://www.wagegarnishmentlaws.com/blog' },
  openGraph: {
    title: 'Wage Garnishment Blog — WageGarnishmentLaws.com',
    description: 'Practical guides on debt collection law, medical debt, and how to fight garnishment.',
    url: 'https://www.wagegarnishmentlaws.com/blog',
  },
};

const POSTS = [
  {
    slug: 'how-to-stop-wage-garnishment',
    title: 'How to Stop Wage Garnishment: 5 Legal Options That Actually Work',
    excerpt:
      'A garnishment notice doesn\'t have to mean permanent paycheck cuts. Learn which five strategies consumers use to halt or reduce garnishment — from bankruptcy stays to exemption claims to direct creditor negotiation.',
    date: 'April 2026',
    readTime: '8 min read',
  },
  {
    slug: 'medical-debt-garnishment-by-state',
    title: 'Medical Debt Garnishment by State: The Complete 2026 Guide',
    excerpt:
      'Medical debt is the number one cause of bankruptcy in the U.S. — but garnishment rules vary dramatically by state. This guide breaks down what creditors can actually do after a judgment in every state.',
    date: 'April 2026',
    readTime: '10 min read',
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Blog</h1>
          <p className="text-gray-500 text-lg">
            Data-driven guides on wage garnishment law, medical debt, and consumer debt rights.
          </p>
        </div>

        <div className="space-y-8">
          {POSTS.map((post) => (
            <article key={post.slug} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition bg-white">
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 font-medium">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-extrabold text-gray-900 mb-3 leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition"
              >
                Read full guide →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-sm">
          <Link href="/" className="text-blue-600 hover:underline font-semibold">← Run the Checker</Link>
          <Link href="/faq" className="text-blue-600 hover:underline font-semibold">FAQ →</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
