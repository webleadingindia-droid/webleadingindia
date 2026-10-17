import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceRenderer from '@/components/healthcare/service-renderer';
import { SERVICES, getService } from '@/lib/services-data';

const SITE = 'https://www.webleadingindia.com';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const url = `${SITE}/services/${s.slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDesc,
    keywords: s.keywords,
    alternates: { canonical: url },
    openGraph: { title: s.metaTitle, description: s.metaDesc, url, siteName: 'Web Leading India', locale: 'en_IN', type: 'website' },
    twitter: { card: 'summary_large_image', title: s.metaTitle, description: s.metaDesc },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  return <ServiceRenderer cfg={s} />;
}
