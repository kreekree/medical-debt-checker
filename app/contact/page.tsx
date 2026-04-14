import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact — WageGarnishmentLaws.com',
  description:
    'Contact WageGarnishmentLaws.com with questions, corrections, or feedback. We review all messages and prioritize reports of outdated legal information.',
  alternates: { canonical: 'https://www.wagegarnishmentlaws.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            Questions, corrections, or feedback — we read everything. Reports of outdated or incorrect
            legal data get highest priority.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
          <p className="text-amber-800 text-sm font-semibold mb-1">Not legal advice</p>
          <p className="text-amber-700 text-sm">
            We cannot provide legal advice, review individual cases, or recommend attorneys.
            For legal help, visit{' '}
            <a href="https://www.lawhelp.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-900">
              LawHelp.org
            </a>{' '}
            to find free legal aid in your state.
          </p>
        </div>

        <form
          action="https://formspree.io/f/wagegarnishmentlaws"
          method="POST"
          className="space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition appearance-none"
            >
              <option value="data-correction">Data correction / outdated law</option>
              <option value="general">General question</option>
              <option value="feedback">Feedback on the tool</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
              placeholder="Describe your question or correction…"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-sm transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-sm">
          <Link href="/" className="text-blue-600 hover:underline font-semibold">← Home</Link>
          <Link href="/faq" className="text-blue-600 hover:underline font-semibold">FAQ →</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
