import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SpecialtyPage from '@/components/healthcare/specialty-page';
import { SPECIALTIES, getSpecialty } from '@/lib/specialties-data';

const SITE = 'https://www.webleadingindia.com';

export const dynamicParams = false;

export function generateStaticParams() {
  return SPECIALTIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getSpecialty(slug);
  if (!s) return {};
  const title = `${s.title} Marketing Services in India | Web Leading India`;
  const description = `${s.tagline} SEO, ads, websites and patient-acquisition systems for ${s.noun}.`;
  const url = `${SITE}/specialties/${s.slug}`;
  return {
    title, description, alternates: { canonical: url },
    keywords: [`${s.noun} marketing`, `${s.title} digital marketing`, `${s.title} SEO`, ...s.focus.slice(0, 3)],
    openGraph: { title, description, url, siteName: 'Web Leading India', locale: 'en_IN', type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSpecialty(slug);
  if (!s) notFound();
  return <SpecialtyPage s={s} />;
}
