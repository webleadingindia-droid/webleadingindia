'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from './reveal';

const testimonials = [
  {
    name: 'Dr. Rajesh Verma',
    position: 'Cardiologist, HeartCare Hospital',
    company: 'Multi-Specialty Hospital',
    rating: 5,
    text: 'Web Leading India transformed our online presence completely. Our patient inquiries increased by 185% and appointment bookings doubled within 6 months. Their medical SEO expertise is exceptional!',
    image: 'https://plain-apac-prod-public.komododecks.com/202610/18/ujn502gWaj9GihQkumLT/image.png',
    results: ['185% Increase', 'Double Bookings', '6 Months'],
  },
  {
    name: 'Dr. Priya Sharma',
    position: 'Dental Surgeon, SmileCare Clinics',
    company: 'Dental Clinic Chain',
    rating: 5,
    text: 'The team delivered outstanding social media marketing that perfectly captured our brand essence. Our patient reviews increased by 200% and we gained thousands of new followers.',
    image: 'https://plain-apac-prod-public.komododecks.com/202610/18/iNStzo2F9oUa8j1hjl6T/image.png',
    results: ['200% Growth', 'Thousands Followers', '5★ Reviews'],
  },
  {
    name: 'Dr. Amit Patel',
    position: 'Orthopedic Specialist, Bone & Joint Center',
    company: 'Specialty Clinic',
    rating: 5,
    text: 'Outstanding patient acquisition services! Our qualified leads increased by 220% and we consistently rank #1 for orthopedic services in our area. The results speak for themselves.',
    image: 'https://plain-apac-prod-public.komododecks.com/202610/18/KxFYnjZwUMdpGpnxDj6N/image.png',
    results: ['220% Leads', '#1 Ranking', 'Proven Results'],
  },
  {
    name: 'Dr. Sneha Gupta',
    position: 'Pediatrician, ChildCare Center',
    company: 'Pediatric Clinic',
    rating: 5,
    text: 'Their healthcare content strategy helped us establish thought leadership in pediatric care. We now get 3x more online appointments and our patient education materials are highly appreciated.',
    image: 'https://plain-apac-prod-public.komododecks.com/202610/18/9Fxcit3RfqC8syKPl8NA/image.png',
    results: ['3x Appointments', 'Thought Leader', 'Patient Trust'],
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCurrent((p) => (p + 1) % total), 6000);
    return () => clearInterval(id);
  }, [paused, total]);

  const t = testimonials[current];
  const next = () => setCurrent((p) => (p + 1) % total);
  const prev = () => setCurrent((p) => (p - 1 + total) % total);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-green-300/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-5 inline-block rounded-full border border-green-600/20 bg-green-600/10 px-4 py-1.5 text-sm font-medium text-green-700">
            Testimonials
          </span>
          <h2 className="text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Healthcare Professionals
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            See how doctors and medical practitioners are achieving remarkable growth.
          </p>
        </Reveal>

        <Reveal>
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="grid overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white shadow-2xl shadow-green-900/10 lg:grid-cols-[0.8fr_1.2fr]"
          >
            {/* Profile */}
            <div className="relative flex flex-col items-center justify-center overflow-hidden border-b border-green-100 bg-gradient-to-br from-green-50 to-green-50 p-8 text-center text-gray-900 sm:p-10 lg:border-b-0 lg:border-r">
              <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-green-300/40 blur-[80px]" />
              <div key={current} className="relative animate-[fadeUp_0.6s_ease-out]">
                <div className="relative mx-auto mb-6 h-28 w-28">
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-green-300 to-green-500" />
                  <img
                    src={t.image}
                    alt={t.name}
                    className="relative h-full w-full rounded-full border-4 border-white object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 rounded-full bg-green-600 p-2 text-white">
                    <Quote className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="mt-1 text-sm font-medium text-green-700">{t.position}</p>
                <p className="text-xs text-gray-500">{t.company}</p>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {t.results.map((r) => (
                    <span
                      key={r}
                      className="rounded-full border border-green-200 bg-white px-3 py-1 text-xs font-medium text-green-700"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-14">
              <div key={`q-${current}`} className="animate-[fadeUp_0.6s_ease-out]">
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="mb-4 h-10 w-10 text-green-500/30" />
                <blockquote className="text-lg font-medium leading-relaxed tracking-tight text-gray-900 sm:text-xl md:text-2xl">
                  {t.text}
                </blockquote>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Show testimonial ${i + 1}`}
                      onClick={() => setCurrent(i)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        i === current ? 'w-8 bg-green-500' : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  {[
                    { fn: prev, Icon: ChevronLeft, label: 'Previous' },
                    { fn: next, Icon: ChevronRight, label: 'Next' },
                  ].map(({ fn, Icon, label }) => (
                    <button
                      key={label}
                      aria-label={label}
                      onClick={fn}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-white"
                    >
                      <Icon className="h-5 w-5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mini cards */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {testimonials.map((m, i) => (
            <button
              key={m.name}
              onClick={() => setCurrent(i)}
              className={`flex items-center gap-3 rounded-2xl border bg-white p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                i === current ? 'border-green-500 ring-2 ring-green-500/20' : 'border-gray-200'
              }`}
            >
              <img src={m.image} alt={m.name} className="h-11 w-11 flex-shrink-0 rounded-full object-cover" />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-gray-900">{m.name}</p>
                <p className="truncate text-xs text-gray-500">{m.company}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
