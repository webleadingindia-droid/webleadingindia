'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown, Sparkles, Stethoscope, TrendingUp, Users, Star, AlertCircle, Target } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { SPECIALTIES, SERVICE_NAMES, type Specialty } from '@/lib/specialties-data';

const STEPS = [
  ['Audit & Research', 'We study your practice, patients, competitors and local demand.'],
  ['Strategy & Setup', 'A clear plan, budget and tracking tailored to your goals.'],
  ['Launch & Optimise', 'Campaigns, content and website improvements go live and get refined weekly.'],
  ['Report & Scale', 'Monthly reports tie marketing to patients, then we scale what works.'],
];

export default function SpecialtyPage({ s }: { s: Specialty }) {
  const related = SPECIALTIES.filter((x) => x.group === s.group && x.slug !== s.slug).slice(0, 4);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white pb-20 text-gray-900 lg:pb-0">
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100 via-white to-white" />
        <div className="absolute -top-24 -left-24 -z-10 h-80 w-80 rounded-full bg-green-200/40 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-green-700">Home</Link> / <Link href="/specialties" className="hover:text-green-700">Specialties</Link> / <span className="text-gray-800">{s.title}</span>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-xs font-semibold text-green-700 shadow-sm sm:text-sm">
                <Stethoscope className="h-4 w-4" /> {s.group}
              </div>
              <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Digital Marketing for{' '}
                <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">{s.title}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">{s.tagline}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/quote"><Button className="group h-12 w-full rounded-xl bg-gradient-to-r from-green-600 to-green-500 px-7 text-base font-semibold text-white shadow-lg shadow-green-500/25 sm:w-auto">Get a Free Marketing Audit <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Button></Link>
                <Link href="/contact"><Button variant="outline" className="h-12 w-full rounded-xl border-2 border-green-500/60 bg-white/70 px-7 text-base font-semibold text-green-700 hover:bg-green-50 sm:w-auto">Talk to Our Team</Button></Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-2xl shadow-green-900/10">
                <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-green-700"><Target className="h-4 w-4" /> What patients search for</p>
                <div className="flex flex-wrap gap-2">
                  {s.focus.map((f) => (
                    <span key={f} className="rounded-full bg-green-50 px-3 py-1.5 text-sm font-medium text-green-800 ring-1 ring-green-100">{f}</span>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-gray-100 pt-5 text-center">
                  {[['200+', 'Providers'], ['3x', 'Lead Growth'], ['4.9★', 'Rating']].map(([v, l]) => (
                    <div key={l}><div className="text-2xl font-extrabold text-gray-900">{v}</div><div className="text-xs text-gray-500">{l}</div></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Challenges {s.noun} face today</h2>
            <p className="mt-4 text-lg text-gray-600">We have worked with {s.noun} long enough to know what holds growth back, and how to fix it.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {s.pains.map((p, i) => (
              <div key={p} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600"><AlertCircle className="h-5 w-5" /></div>
                <p className="text-sm font-semibold text-gray-400">0{i + 1}</p>
                <p className="mt-1 text-lg font-semibold leading-snug text-gray-900">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">How we grow your practice</h2>
            <p className="mt-4 text-lg text-gray-600">A focused mix of services chosen for {s.noun}, not a generic package.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.services.map((slug) => (
              <Link key={slug} href={`/services/${slug}`} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-green-300 hover:shadow-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-md"><TrendingUp className="h-6 w-6" /></div>
                <h3 className="text-lg font-bold text-gray-900">{SERVICE_NAMES[slug]}</h3>
                <p className="mt-2 text-sm text-gray-600">See how {SERVICE_NAMES[slug].toLowerCase()} helps {s.noun} attract and retain patients.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-green-700">Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-green-800 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-bold sm:text-3xl md:text-4xl">Our approach for {s.noun}</h2>
          <div className="grid gap-5 md:grid-cols-4">
            {STEPS.map(([t, d], i) => (
              <div key={t} className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
                <div className="mb-3 text-3xl font-extrabold text-yellow-300">0{i + 1}</div>
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-green-50/90">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl md:text-4xl">Frequently asked questions</h2>
          <div className="space-y-3">
            {s.faq.map(([q, a]) => (
              <details key={q} className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm open:border-green-300">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-gray-900">
                  {q}<ChevronDown className="h-5 w-5 shrink-0 text-green-600 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 leading-relaxed text-gray-600">{a}</p>
              </details>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org', '@type': 'FAQPage',
                mainEntity: s.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
              }),
            }}
          />
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-xl font-bold sm:text-2xl">Related specialties</h2>
            <div className="flex flex-wrap gap-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/specialties/${r.slug}`} className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm transition-colors hover:border-green-300 hover:text-green-700">{r.title}</Link>
              ))}
              <Link href="/specialties" className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700">All specialties</Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-green-700 via-green-600 to-green-800 p-8 text-center text-white shadow-2xl sm:p-14">
          <Sparkles className="mx-auto mb-4 h-8 w-8 text-yellow-300" />
          <h2 className="text-2xl font-bold sm:text-4xl">Ready to grow your {s.title.toLowerCase()} practice?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-green-50/90">Get a free audit and a clear plan to bring more of the right patients to your door.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/quote"><Button className="h-12 rounded-xl bg-white px-7 font-semibold text-green-700 hover:bg-green-50">Get Free Audit</Button></Link>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"><Users className="h-4 w-4" /> Speak to a specialist <Star className="h-4 w-4 text-yellow-300" /></Link>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-green-50/90">
            {['Healthcare specialised', 'No long lock-ins', 'Transparent reporting'].map((b) => (
              <li key={b} className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-yellow-300" />{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
