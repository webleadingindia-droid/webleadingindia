import type { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/services-data';
import { SPECIALTIES } from '@/lib/specialties-data';
import { BLOGS } from '@/lib/blogs';

const SITE = 'https://www.webleadingindia.com';

const EXISTING_SERVICES = [
  'healthcare-web-design', 'healthcare-web-development', 'healthcare-seo-services',
  'healthcare-social-media-marketing', 'healthcare-ecommerce-development', 'healthcare-digital-marketing',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const core = ['', '/about', '/services', '/specialties', '/services-area', '/portfolio', '/blogs', '/contact', '/quote', '/privacy-policy'];
  return [
    ...core.map((p) => ({ url: `${SITE}${p}`, lastModified: now, changeFrequency: 'weekly' as const, priority: p === '' ? 1 : 0.8 })),
    ...[...EXISTING_SERVICES, ...SERVICES.map((s) => s.slug)].map((s) => ({ url: `${SITE}/services/${s}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...SPECIALTIES.map((s) => ({ url: `${SITE}/specialties/${s.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...BLOGS.map((b) => ({ url: `${SITE}/blogs/${b.slug}`, lastModified: new Date(b.date), changeFrequency: 'monthly' as const, priority: 0.6 })),
  ];
}
