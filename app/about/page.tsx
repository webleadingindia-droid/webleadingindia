'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import AboutSection from '@/components/ui/about-section';
import ProcessSection from '@/components/ui/process-section';
import {
  ArrowRight, Ambulance, Award, Eye, Heart, Lock, Shield, Star, Stethoscope, Target,
  type LucideIcon,
} from 'lucide-react';

/* ───────────────────────── Data ───────────────────────── */

type TabKey = 'mission' | 'vision' | 'values';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'mission', label: 'Mission' },
  { key: 'vision', label: 'Vision' },
  { key: 'values', label: 'Values' },
];

const values: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Lock,
    title: 'Privacy-First',
    description: 'We maintain strict patient privacy and data security standards.',
  },
  {
    icon: Heart,
    title: 'Patient-First',
    description: 'We focus on connecting patients with the right healthcare providers.',
  },
  {
    icon: Award,
    title: 'Medical Ethics',
    description: 'We uphold the highest standards of healthcare marketing ethics.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We deliver measurable patient acquisition and practice growth.',
  },
];

const specialties: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Stethoscope,
    title: 'Hospitals & Clinics',
    description: 'Multi-specialty and single-specialty medical practices',
  },
  {
    icon: Heart,
    title: 'Specialty Centers',
    description: 'Cardiology, orthopedics, dental, and other specialties',
  },
  {
    icon: Ambulance,
    title: 'Emergency Care',
    description: 'Urgent care centers and emergency medical services',
  },
  {
    icon: Shield,
    title: 'Mental Health',
    description: 'Therapy practices and mental wellness centers',
  },
];

/* ───────────────────────── Pieces ───────────────────────── */

function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">{text}</p>
    </div>
  );
}

const Grad = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">{children}</span>
);

/* ───────────────────────── Page ───────────────────────── */

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('mission');

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ───────── Hero ───────── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-green-50 via-white to-white px-4 pb-20 pt-32 sm:pt-40">
        <div className="absolute -top-24 left-1/2 -z-10 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-green-200/50 blur-[110px]" />
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(16,185,129,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.07) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at top, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at top, black 20%, transparent 70%)',
          }}
        />

        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-1.5 text-xs font-semibold text-green-700 shadow-sm sm:text-sm">
            <Star className="h-4 w-4 fill-current" /> Trusted by 200+ Healthcare Providers
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
            Leading <Grad>Healthcare</Grad> Digital Growth
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-xl">
            India&apos;s premier healthcare digital marketing agency exclusively focused on helping medical practices,
            hospitals, and healthcare providers grow their patient base through strategic online marketing solutions.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-700 px-8 text-base font-semibold text-white shadow-lg shadow-green-600/30 transition-all hover:from-green-700 hover:to-green-800 sm:w-auto"
            >
              Start Your Growth Journey
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-14 w-full items-center justify-center rounded-full border border-gray-200 bg-white px-8 text-base font-semibold text-gray-900 shadow-sm transition-all hover:border-green-300 hover:bg-green-50 hover:text-green-700 sm:w-auto"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      <AboutSection />

      {/* ───────── Mission, Vision, Values ───────── */}
      <section className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHead
            eyebrow="Our foundation"
            title={
              <>
                Our Healthcare <Grad>Foundation</Grad>
              </>
            }
            text="Built on strong healthcare values and a clear vision for sustainable medical practice growth."
          />

          {/* Tabs */}
          <div className="mt-12 flex justify-center">
            <div
              role="tablist"
              aria-label="Mission, vision and values"
              className="inline-flex rounded-full border border-gray-200 bg-white p-1.5 shadow-sm"
            >
              {tabs.map((t) => {
                const on = activeTab === t.key;
                return (
                  <button
                    key={t.key}
                    role="tab"
                    id={`tab-${t.key}`}
                    aria-selected={on}
                    aria-controls={`panel-${t.key}`}
                    onClick={() => setActiveTab(t.key)}
                    className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-8 ${
                      on
                        ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-600/30'
                        : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panels */}
          <div
            key={activeTab}
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            className="mt-10 [animation:aboutPanelIn_0.45s_ease-out]"
          >
            {activeTab === 'mission' && (
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-700 via-green-600 to-green-800 p-8 text-white shadow-[0_40px_80px_-40px_rgba(16,185,129,0.7)] sm:p-12">
                <div className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-yellow-300/20 blur-3xl" />
                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                  <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-green-700 shadow-lg">
                    <Stethoscope className="h-8 w-8" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Our Mission</h3>
                    <p className="mt-4 text-[16px] leading-relaxed text-green-50/95 sm:text-lg">
                      To empower healthcare providers with specialized digital marketing solutions that connect them
                      with the right patients, enhance their online reputation, and drive sustainable practice growth
                      while maintaining the highest standards of medical ethics and patient privacy.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-12">
                <div className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 rounded-full bg-green-100 blur-3xl" />
                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                  <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-700 ring-1 ring-green-100">
                    <Eye className="h-8 w-8" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">Our Vision</h3>
                    <p className="mt-4 text-[16px] leading-relaxed text-gray-600 sm:text-lg">
                      To become India&apos;s most trusted healthcare digital marketing partner, known for delivering
                      measurable patient growth while upholding the integrity and ethics of the medical profession. We
                      envision a future where every healthcare provider can effectively reach and serve their ideal
                      patients through digital channels.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid gap-5 sm:grid-cols-2">
                {values.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={v.title}
                      className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-green-200 hover:shadow-xl"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700 ring-1 ring-green-100 transition-colors group-hover:bg-green-600 group-hover:text-white group-hover:ring-green-600">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h4 className="mt-5 text-xl font-semibold text-gray-950">{v.title}</h4>
                      <p className="mt-2 leading-relaxed text-gray-600">{v.description}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ───────── Healthcare Expertise ───────── */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="Who we serve"
            title={
              <>
                Our <Grad>Healthcare Expertise</Grad>
              </>
            }
            text="Specialized digital marketing solutions tailored for various healthcare sectors and medical specialties."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-[0_25px_50px_-25px_rgba(16,185,129,0.45)]"
                >
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-700 ring-1 ring-green-100 transition-all duration-300 group-hover:scale-105 group-hover:bg-green-600 group-hover:text-white group-hover:ring-green-600">
                    <Icon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-gray-950 transition-colors group-hover:text-green-700">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessSection />

      <Footer />

      <style>{`
        @keyframes aboutPanelIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}