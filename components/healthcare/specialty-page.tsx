'use client';

import ServicePage from '@/components/healthcare/service-page';
import { getSpecialtyProps } from '@/lib/specialties';

export default function SpecialtyPage({ slug }: { slug: string }) {
  const props = getSpecialtyProps(slug);
  if (!props) return null;
  return <ServicePage {...props} />;
}
