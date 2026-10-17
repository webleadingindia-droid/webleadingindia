'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Target, ArrowRight, Stethoscope, Shield, Award } from 'lucide-react';
import Reveal from './reveal';

const features = [
  {
    icon: Stethoscope,
    title: 'Healthcare Specialists',
    description: 'Digital marketers who specialize in healthcare industry regulations and patient acquisition.',
  },
  {
    icon: Target,
    title: 'Patient-Focused',
    description: 'Strategies that connect healthcare providers with the right patients at the right time.',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Every solution maintains strict healthcare compliance and patient privacy standards.',
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6faf7] py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-green-200/40 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        {/* Image */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-green-400/30 via-transparent to-green-400/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 shadow-2xl">
              <img
                src="https://plain-apac-prod-public.komododecks.com/202610/16/lUXv07dlfepv4p1lB2G0/image.jpg"
                alt="Healthcare team working"
                className="aspect-[4/4.5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 -right-4 flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl md:-right-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-tight text-gray-950">200+</p>
                <p className="text-sm text-gray-500">Healthcare clients served</p>
              </div>
            </div>

            <div className="absolute -left-4 top-10 rounded-2xl border border-green-100 bg-white px-5 py-3 shadow-xl md:-left-8">
              <p className="text-2xl font-semibold tracking-tight text-green-600">5+</p>
              <p className="text-xs text-gray-500">Years of experience</p>
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={150} className="order-1 lg:order-2">
          <span className="mb-5 inline-block rounded-full border border-green-600/20 bg-green-600/10 px-4 py-1.5 text-sm font-medium text-green-700">
            About Us
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">
            About{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Web Leading India
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            We are India's premier healthcare digital marketing agency, exclusively focused on helping
            medical practices, hospitals, and healthcare providers grow their patient base through
            strategic online marketing.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            With over 5 years of specialized experience in healthcare marketing and 200+ successful
            medical clients, we understand the unique challenges and opportunities in the healthcare
            industry.
          </p>

          <div className="mt-10 space-y-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group flex items-start gap-4 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-green-200 hover:bg-green-50/60"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-950">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{f.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link href="/about" className="mt-10 inline-block">
            <Button className="group h-14 rounded-full bg-green-600 px-8 text-base font-semibold text-white shadow-lg shadow-green-600/30 transition-all hover:bg-green-700">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
