import type { MetadataRoute } from 'next';

const BASE = 'https://www.wagegarnishmentlaws.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: '2026-04-13', changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/about`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/methodology`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: '2026-04-13', changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/blog/how-to-stop-wage-garnishment`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog/medical-debt-garnishment-by-state`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: '2026-04-13', changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: '2026-04-13', changeFrequency: 'yearly', priority: 0.3 },
  ];
}
