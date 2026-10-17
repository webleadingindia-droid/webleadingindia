'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowRight, Building2 } from 'lucide-react';

/* ───────────────────────── Slides ───────────────────────── */

// Har slide: background image + heading (2 lines) + description.
// Images /public me rakho (ya remote URL do — next.config me domain allow karna).
const SLIDE_INTERVAL = 6000; // ms

const slides: { image: string; line1: string; line2: string; text: string }[] = [
  {
    image: 'https://plain-apac-prod-public.komododecks.com/202610/17/txsYfdLlZVbeJcsvuMfj/image.png',
    line1: 'Healthcare Digital',
    line2: 'Marketing Agency.',
    text: "India's specialist healthcare marketing agency, working exclusively with clinics, hospitals and medical practices to bring in more patients.",
  },
  {
    image: 'https://www.medkeon.com/wp-content/uploads/2026/01/healthcare-marketing-agency-for-doctors.jpg',
    line1: 'More Patients,',
    line2: 'Every Single Month.',
    text: 'SEO, Google Ads and social media that put your clinic in front of patients who are actively searching for care.',
  },
  {
    image: 'https://eremedium.in/wp-content/uploads/2020/11/Healthcare-Marketing-Agency-in-India.jpg',
    line1: 'Websites That Turn Visitors',
    line2: 'Into Appointments.',
    text: 'Conversion-built clinic websites, landing pages and booking systems designed to make booking effortless.',
  },
];

const stats = [
  { value: '200+', label: 'Healthcare Clients' },
  { value: '95%', label: 'Patient Satisfaction' },
  { value: '5+', label: 'Years Experience' },
];

/* ───────────────────────── Client logos ───────────────────────── */

// `alt` sirf accessibility/SEO ke liye hai. Logo load na ho to placeholder tile dikhega.
const clients: { alt: string; logo?: string }[] = [
  { alt: 'Bansal Eye Hospital', logo: '/client-logo/bansal-eye-hospital.png' },
  { alt: 'Asha Centre', logo: '/client-logo/asha-centre.png' },
  { alt: 'Ashish Hospital', logo: '/client-logo/ashish-hospital.jpg' },
  { alt: 'Derma Plus', logo: '/client-logo/derma-plus.png' },
  { alt: 'Divine IVF', logo: '/client-logo/divine-ivf.webp' },
  { alt: 'Arunima Care', logo: '/client-logo/arunima-care.jpg' },
  { alt: 'Dr. Pooja', logo: '/client-logo/dr-pooja.png' },
  { alt: 'Eye Match Artificial', logo: '/client-logo/eye-match-artificial.png' },
  { alt: 'Jeevan Sphere', logo: '/client-logo/jeevan-sphere.png' },
  { alt: 'Midnapore', logo: '/client-logo/midnapore.png' },
  { alt: 'Nav Dristi', logo: '/client-logo/nav-dristi.png' },
  { alt: 'Netram', logo: '/client-logo/netram.webp' },
  { alt: 'Polite Healthcare', logo: '/client-logo/polite-healthcare.png' },
  { alt: 'Sahara Hospital', logo: '/client-logo/sahara-hospital.png' },
  { alt: 'Sai Hospital', logo: '/client-logo/sai-hospital.webp' },
  { alt: 'Shree Shyam Clinic', logo: '/client-logo/shree-shyam-clinic.png' },
  { alt: 'SRK Skin Centre', logo: '/client-logo/srk-skin-centre.png' },
  { alt: 'Physio Strength', logo: '/client-logo/physio-strength.jpg' },
  { alt: 'Vikash Eye Hospital', logo: '/client-logo/vikash-eye-hospital.png' },
  { alt: 'We Care Medical Zone', logo: '/client-logo/we-care-medical-zone.png' },
];

function LogoTile({ alt, logo }: { alt: string; logo?: string }) {
  const [failed, setFailed] = useState(false);
  const hasLogo = !!logo && !failed;

  return (
    <div className="group/logo flex h-20 w-44 flex-shrink-0 items-center justify-center rounded-2xl border border-gray-200/70 bg-white/90 px-6 shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-green-300 hover:shadow-[0_20px_40px_-20px_rgba(16,185,129,0.45)] sm:h-24 sm:w-52">
      {hasLogo ? (
        <img
          src={logo}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="max-h-10 w-full object-contain transition-transform duration-500 group-hover/logo:scale-105 sm:max-h-12"
        />
      ) : (
        <Building2
          aria-label={alt}
          className="h-8 w-8 text-gray-300 transition-colors duration-500 group-hover/logo:text-green-400"
          strokeWidth={1.5}
        />
      )}
    </div>
  );
}

function MarqueeRow({ reverse = false, speed = 40 }: { reverse?: boolean; speed?: number }) {
  const items = reverse ? [...clients].reverse() : clients;
  return (
    <div
      className="group relative overflow-hidden py-4"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
      }}
    >
      <div
        className="flex w-max gap-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animation: `${reverse ? 'clientsMarqueeReverse' : 'clientsMarquee'} ${speed}s linear infinite` }}
      >
        {[...items, ...items].map((c, i) => (
          <div key={`${c.alt}-${i}`} aria-hidden={i >= items.length}>
            <LogoTile alt={c.alt} logo={c.logo} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto-slide — koi click/arrow control nahi, banner khud badalta rehta hai.
  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* ───────── Hero carousel (navbar is fixed on top of this) ───────── */}
      <section className="p-2 sm:p-3 lg:p-4">
        <div className="relative isolate flex min-h-[640px] flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-green-900/70 via-green-800 to-gray-950 sm:rounded-[2.25rem] lg:min-h-[calc(100svh-2rem)]">
          {/* Background slides: crossfade + slow Ken Burns zoom */}
          {slides.map((s, i) => {
            const on = i === current;
            return (
              <div
                key={s.image}
                aria-hidden="true"
                className="absolute inset-0 -z-20"
                style={{
                  opacity: on ? 1 : 0,
                  transition: 'opacity 1400ms ease-in-out',
                }}
              >
                <Image
                  src={s.image}
                  alt=""
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover object-center motion-reduce:!transform-none"
                  style={{
                    transform: on ? 'scale(1)' : 'scale(1.12)',
                    transition: on
                      ? `transform ${SLIDE_INTERVAL + 2500}ms ease-out`
                      : 'transform 0ms linear 1400ms',
                  }}
                />
              </div>
            );
          })}

          {/* Overlays for readability */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/30 to-black/80" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.25),transparent_70%)]" />

          {/* Centered content */}
          <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-5 pb-8 pt-32 text-center sm:px-6 sm:pt-36">
            <p className="text-[13px] font-medium tracking-wide text-white/90 sm:text-sm">
              Trusted by 200+ healthcare clients
            </p>

            {/* Stacked slide copy — sab ek hi cell me, isliye height stable rehti hai */}
            <div className="mt-5 grid w-full">
              {slides.map((s, i) => {
                const on = i === current;
                const Heading = i === 0 ? 'h1' : 'h2';
                return (
                  <div
                    key={s.line1}
                    aria-hidden={!on}
                    className={`col-start-1 row-start-1 flex flex-col items-center transition-all ease-out motion-reduce:transition-none ${
                      on
                        ? 'translate-y-0 opacity-100 blur-0 duration-[900ms] delay-500'
                        : 'pointer-events-none translate-y-6 opacity-0 blur-sm duration-500'
                    }`}
                  >
                    <Heading className="text-[2.3rem] leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
                      <span className="block font-bold">{s.line1}</span>
                      <span className="block font-light">{s.line2}</span>
                    </Heading>
                    <p className="mx-auto mt-6 max-w-xl text-[14px] leading-relaxed text-white/90 sm:text-lg lg:text-[19px]">
                      {s.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <Link
                href="/quote"
                className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-semibold text-green-800 shadow-xl shadow-black/20 transition-all hover:bg-green-50 sm:w-auto"
              >
                Get Free Consultation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto"
              >
                Contact us
              </Link>
            </div>

            {/* Progress indicator — sirf dikhane ke liye, click nahi hota */}
            <div aria-hidden="true" className="pointer-events-none mt-8 flex items-center gap-2">
              {slides.map((_, i) => (
                <span key={i} className="relative h-[3px] w-10 overflow-hidden rounded-full bg-white/25 sm:w-14">
                  {i === current && (
                    <span
                      key={`bar-${current}`}
                      className="absolute inset-y-0 left-0 rounded-full bg-white motion-reduce:w-full"
                      style={{ animation: `heroProgress ${SLIDE_INTERVAL}ms linear forwards` }}
                    />
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Stats strip */}
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-6 sm:px-8 sm:pb-8">
            <div className="grid grid-cols-3 border-t border-white/20 pt-5 sm:pt-6">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-2 text-center sm:px-4 ${i > 0 ? 'border-l border-white/20' : ''}`}
                >
                  <p className="text-2xl font-bold tracking-tight text-white sm:text-4xl">{s.value}</p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75 sm:text-xs">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Client logos ───────── */}
      <section className="relative bg-white pb-16 pt-12 sm:pb-20">
        <div className="mx-auto mb-10 flex max-w-3xl items-center gap-5 px-4 sm:px-6">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-green-200" />
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500 sm:text-xs">
            Trusted by leading healthcare brands
          </p>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-green-200" />
        </div>

        <div>
          <MarqueeRow speed={90} />
          <MarqueeRow reverse speed={110} />
        </div>

        <style>{`
          @keyframes clientsMarquee {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-50% - 0.5rem)); }
          }
          @keyframes clientsMarqueeReverse {
            from { transform: translateX(calc(-50% - 0.5rem)); }
            to { transform: translateX(0); }
          }
          @keyframes heroProgress {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}</style>
      </section>
    </>
  );
}