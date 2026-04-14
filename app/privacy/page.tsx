import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — WageGarnishmentLaws.com',
  description:
    'Privacy policy for WageGarnishmentLaws.com. Covers data collection, cookie usage, analytics, and advertising.',
  alternates: { canonical: 'https://www.wagegarnishmentlaws.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: April 2026</p>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Overview</h2>
            <p>
              WageGarnishmentLaws.com (&quot;this site&quot;) is committed to protecting your privacy.
              This policy explains what data is collected when you visit this site, how it is used,
              and your choices regarding that data.
            </p>
            <p className="mt-3">
              The garnishment checker tool on the home page runs entirely in your browser. No form
              inputs (state, debt amount, or debt type) are transmitted to any server or stored anywhere.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Data We Collect</h2>
            <p>This site collects limited, non-personally-identifiable data through third-party services:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3 text-gray-600">
              <li>
                <strong>Google Analytics 4 (GA4):</strong> Page views, session duration, referral source,
                browser and device type, and geographic region (city/country level). Google Analytics uses
                cookies to distinguish unique visitors. IP addresses are anonymized.
              </li>
              <li>
                <strong>Umami Analytics:</strong> Privacy-focused, cookie-free page view analytics.
                No personal identifiers are stored. Data is not shared with third parties.
              </li>
              <li>
                <strong>Ezoic:</strong> This site may display advertisements served by Ezoic. Ezoic
                and its advertising partners may use cookies to serve interest-based ads. See
                Ezoic&apos;s privacy policy at{' '}
                <a href="https://www.ezoic.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  ezoic.com/privacy-policy
                </a>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Cookies</h2>
            <p>
              This site uses cookies for analytics and advertising purposes only. These include:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-3 text-gray-600">
              <li>
                <strong>_ga, _ga_*, _gid:</strong> Google Analytics cookies that distinguish users and
                sessions. Expire after 2 years and 24 hours respectively.
              </li>
              <li>
                <strong>Ezoic cookies:</strong> Used for ad personalization and A/B testing. Duration
                varies by cookie type.
              </li>
            </ul>
            <p className="mt-3">
              You can opt out of Google Analytics tracking using the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Google Analytics Opt-Out Browser Add-On
              </a>
              . Most modern browsers also allow you to block or delete cookies through browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Third-Party Links</h2>
            <p>
              This site links to external websites including state court portals, legal aid organizations,
              and government resources. We are not responsible for the privacy practices of external sites.
              Links marked with ↗ open in a new tab and leave this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Retention</h2>
            <p>
              Google Analytics data is retained for 14 months by default. Umami analytics data is
              retained on our self-hosted server. No personally identifiable information is retained
              by this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Children&apos;s Privacy</h2>
            <p>
              This site is not directed at children under 13. We do not knowingly collect data from
              children. If you believe a child has submitted information through this site, contact us
              and we will take appropriate action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Changes to This Policy</h2>
            <p>
              This privacy policy may be updated periodically. Material changes will be reflected in
              the "Last updated" date at the top of this page. Continued use of this site after a
              policy update constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact</h2>
            <p>
              Questions about this privacy policy?{' '}
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contact us here.
              </Link>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4 text-sm">
          <Link href="/" className="text-blue-600 hover:underline font-semibold">← Home</Link>
          <Link href="/contact" className="text-blue-600 hover:underline font-semibold">Contact →</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
