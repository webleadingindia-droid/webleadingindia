import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SpecialtyPage from '@/components/healthcare/specialty-page';
import { specialtySlugs, getSpecialtyMeta } from '@/lib/specialties';

export const dynamicParams = false;

export function generateStaticParams() {
  return specialtySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getSpecialtyMeta(slug);
  return meta ? { title: meta.title, description: meta.description } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!specialtySlugs.includes(slug)) notFound();
  return <SpecialtyPage slug={slug} />;
}
