'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Calendar, Shield, Clock, Star, CheckCircle2 } from 'lucide-react';
import Reveal from './reveal';

const perks = [
  { icon: Shield, title: 'HIPAA Compliant', text: 'Full healthcare privacy & security compliance' },
  { icon: Star, title: 'Free Consultation', text: 'No-obligation custom strategy session' },
  { icon: Clock, title: 'Quick Start', text: 'Begin your project within 48 hours' },
];

export default function CTASection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <Reveal>
        <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-green-100 bg-gradient-to-br from-green-50 via-white to-green-50 px-5 py-14 shadow-[0_40px_80px_-40px_rgba(16,185,129,0.4)] sm:rounded-[2.5rem] sm:px-12 sm:py-20 lg:px-20">
          <div className="absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-green-300/40 blur-[100px] sm:h-96 sm:w-96" />
          <div className="absolute -bottom-24 -right-24 -z-10 h-72 w-72 rounded-full bg-green-300/40 blur-[100px] sm:h-96 sm:w-96" />
          <div
            className="absolute inset-0 -z-10 opacity-70"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(16,185,129,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.08) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 75%)',
            }}
          />

          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-1.5 text-xs font-medium text-green-700 shadow-sm sm:text-sm">
              <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Limited Time Offer
            </span>

            <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Transform Your
              <span className="block bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Medical Practice
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Join 200+ healthcare providers who've{' '}
              <span className="font-semibold text-green-700">increased patient acquisition</span> by 3x
              with our proven digital strategies.
            </p>

            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link href="/quote">
                <Button className="group h-14 w-full rounded-full bg-green-600 px-7 text-base font-semibold text-white shadow-lg shadow-green-600/30 transition-all hover:bg-green-700 sm:w-auto">
                  <Calendar className="mr-2 h-5 w-5" />
                  Get Free Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="tel:+918376817258">
                <Button
                  variant="outline"
                  className="h-14 w-full rounded-full border-gray-200 bg-white px-7 text-base font-semibold text-gray-900 shadow-sm transition-all hover:border-green-300 hover:bg-green-50 hover:text-green-700 sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  <span className="sm:hidden">Call Now</span>
                  <span className="hidden sm:inline">Call Now: +91 83768 17258</span>
                </Button>
              </a>
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-4">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group flex items-start gap-4 rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg sm:flex-col sm:items-center sm:text-center"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-950">{p.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{p.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl items-center justify-center gap-2 border-t border-green-100 pt-8 text-center text-sm text-gray-600">
            <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-500" />
            Trusted by 200+ healthcare professionals across India
          </div>
        </div>
      </Reveal>
    </section>
  );
}
