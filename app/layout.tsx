import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wagegarnishmentlaws.com'),
  title: {
    default: 'Wage Garnishment Laws by State 2026 — Free Checker Tool',
    template: '%s | WageGarnishmentLaws.com',
  },
  description:
    'Instantly check wage garnishment laws in your state for medical debt, credit cards, and personal loans. See garnishment limits, lawsuit timelines, and your protections — free, no signup.',
  openGraph: {
    type: 'website',
    siteName: 'WageGarnishmentLaws.com',
    url: 'https://www.wagegarnishmentlaws.com',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_ID;

  return (
    <html lang="en">
      <head>
        {umamiId && (
          <script
            defer
            src="https://umami-production-943c.up.railway.app/script.js"
            data-website-id={umamiId}
          />
        )}
        {/* Ezoic */}
        <script src="//www.ezojs.com/ezoic/sa.min.js" async />
        <script
          dangerouslySetInnerHTML={{
            __html:
              'window.ezstandalone = window.ezstandalone || {}; ezstandalone.cmd = ezstandalone.cmd || [];',
          }}
        />
      </head>
      <body className="bg-slate-50 text-gray-900 antialiased">
        {children}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
