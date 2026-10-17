'use client';

import { Stethoscope, Target, FileText, BarChart3 } from 'lucide-react';
import Reveal from './reveal';

const steps = [
  {
    icon: Stethoscope,
    title: 'Discovery & Analysis',
    description: 'Comprehensive assessment of your practice, competitors, and target patient demographics.',
    features: ['Practice Audit', 'Competitor Analysis', 'Patient Demographics', 'Market Research'],
  },
  {
    icon: Target,
    title: 'Strategy Development',
    description: 'Tailored marketing strategies focused on your ideal patient acquisition.',
    features: ['Patient Personas', 'Channel Strategy', 'Content Planning', 'KPI Setting'],
  },
  {
    icon: FileText,
    title: 'Implementation',
    description: 'Healthcare-compliant campaigns executed across digital channels.',
    features: ['Campaign Launch', 'Content Creation', 'Platform Setup', 'Tracking Implementation'],
  },
  {
    icon: BarChart3,
    title: 'Optimization',
    description: 'Continuous monitoring and improvement for maximum patient acquisition.',
    features: ['Performance Analysis', 'ROI Tracking', 'A/B Testing', 'Strategy Refinement'],
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-green-100/70 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            Our Process
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl md:text-6xl">
            How We Drive{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Healthcare Growth
            </span>
          </h2>
          <p className="mt-5 text-base text-gray-600 sm:text-lg">
            A streamlined 4-step process designed to deliver measurable results for your medical practice.
          </p>
        </Reveal>

        <div className="relative">
          <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-transparent via-green-300 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 120} className="h-full">
                  <div className="group relative h-full">
                    <div className="relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-lg font-semibold text-white shadow-lg shadow-green-600/30 ring-4 ring-white transition-transform duration-500 group-hover:scale-110">
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    <div className="relative h-full overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-green-300 hover:shadow-[0_30px_60px_-20px_rgba(16,185,129,0.3)] sm:p-7">
                      <span className="pointer-events-none absolute -right-2 -top-6 select-none text-[7rem] font-bold leading-none text-green-500/[0.07]">
                        {i + 1}
                      </span>
                      <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition-colors duration-300 group-hover:bg-green-500 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="relative mb-3 text-xl font-semibold tracking-tight text-gray-950">{s.title}</h3>
                      <p className="relative mb-6 text-sm leading-relaxed text-gray-600">{s.description}</p>
                      <ul className="relative space-y-2.5 border-t border-gray-100 pt-5">
                        {s.features.map((f) => (
                          <li key={f} className="flex items-center text-sm text-gray-700">
                            <span className="mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
