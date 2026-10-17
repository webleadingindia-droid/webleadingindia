'use client';

import Link from 'next/link';
import { Code, Palette, Search, Share2, ShoppingCart, TrendingUp, ArrowUpRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from './reveal';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Professional healthcare websites with patient portals, appointment systems, and secure medical data handling.',
    features: ['Medical Website Development', 'Patient Portal Integration', 'Appointment Booking System', 'HIPAA Compliant Security'],
    href: '/services/healthcare-web-development',
  },
  {
    icon: Palette,
    title: 'Web Design',
    description:
      'Patient-friendly designs that build trust, improve user experience, and convert visitors into patients.',
    features: ['Healthcare UI/UX Design', 'Responsive Medical Websites', 'Patient-Centric Design', 'Brand Identity Development'],
    href: '/services/healthcare-web-design',
  },
  {
    icon: Search,
    title: 'SEO Services',
    description:
      'Medical SEO to help healthcare providers rank higher and attract more patients through organic search.',
    features: ['Medical Keyword Research', 'Local SEO for Clinics', 'Healthcare Content Strategy', 'Medical Directory Optimization'],
    href: '/services/healthcare-seo-services',
  },
  {
    icon: Share2,
    title: 'SMO Services',
    description:
      'Healthcare social media management to build trust, engage patients, and grow your practice online.',
    features: ['Medical Content Strategy', 'Patient Community Building', 'Healthcare Brand Management', 'Social Media Advertising'],
    href: '/services/healthcare-social-media-marketing',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Development',
    description:
      'Secure e-commerce for medical supplies, pharmacy products, and healthcare equipment sales.',
    features: ['Medical E-commerce Stores', 'Pharmacy Online Sales', 'Payment Gateway Integration', 'Inventory Management'],
    href: '/services/healthcare-ecommerce-development',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description:
      'Comprehensive strategies tailored for healthcare providers to increase patient acquisition.',
    features: ['Healthcare PPC Campaigns', 'Patient Acquisition Funnels', 'Medical Content Marketing', 'Conversion Rate Optimization'],
    href: '/services/healthcare-digital-marketing',
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6faf7] py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[800px] -translate-x-1/2 rounded-full bg-green-300/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-20 max-w-3xl text-center">
          <span className="mb-5 inline-block rounded-full border border-green-600/20 bg-green-600/10 px-4 py-1.5 text-sm font-medium text-green-700">
            Healthcare Digital Solutions
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-gray-950 md:text-6xl">
            Specialized{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Healthcare Services
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Complete digital solutions designed for healthcare providers, medical practices, and
            organizations to build a strong online presence and attract more patients.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 80} className="h-full">
                <Link
                  href={s.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-green-300 hover:shadow-[0_30px_60px_-20px_rgba(16,185,129,0.35)]"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-400/0 blur-3xl transition-all duration-500 group-hover:bg-green-400/30" />

                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-600/25 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-sm font-medium tabular-nums text-gray-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold tracking-tight text-gray-950">{s.title}</h3>
                  <p className="mb-6 leading-relaxed text-gray-600">{s.description}</p>

                  <ul className="mb-8 space-y-2.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center text-sm text-gray-700">
                        <span className="mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-5 text-sm font-semibold text-gray-950">
                    Learn more
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
