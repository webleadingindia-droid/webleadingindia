'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Sparkles, Heart, Stethoscope, TrendingUp, Building2 } from 'lucide-react';

const texts = [
  'Healthcare Digital Marketing',
  'Medical SEO Solutions',
  'Patient Acquisition Strategies',
  'Healthcare Brand Growth',
];

const metrics = [
  { label: 'New Patient Inquiries', value: '+185%', bar: 'w-[85%]' },
  { label: 'Appointment Bookings', value: '+220%', bar: 'w-[95%]' },
  { label: 'Medical SEO Rankings', value: 'Top 5', bar: 'w-[70%]' },
  { label: 'Patient Reviews', value: '+150%', bar: 'w-[78%]' },
];

// `alt` sirf accessibility/SEO ke liye hai, screen par naam nahi dikhta.
// logo load na ho to ek neutral placeholder tile dikhega.
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

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % texts.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-white" />
        <div className="absolute -top-32 left-1/2 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-green-200/50 blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-72 w-72 rounded-full bg-green-200/40 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(16,185,129,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.08) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at top, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at top, black 20%, transparent 70%)',
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-16 pt-28 sm:px-6 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:pb-20 lg:pt-44">
        {/* Left */}
        <div className="text-center lg:text-left">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-1.5 text-xs font-medium text-green-700 shadow-sm sm:text-sm">
            <Sparkles className="h-4 w-4" />
            #1 Healthcare Digital Marketing Agency
          </div>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-6xl">
            Grow Your
            <span className="mt-1 block min-h-[2.3em] overflow-hidden sm:min-h-[1.2em]">
              <span
                key={current}
                className="block animate-[heroIn_0.7s_ease-out] bg-gradient-to-r from-green-600 via-green-500 to-green-500 bg-clip-text text-transparent"
              >
                {texts[current]}
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0">
            We help healthcare providers, clinics, and medical practices attract more patients with
            proven digital marketing strategies built for the healthcare industry.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
            {['200+ Healthcare Clients', '95% Patient Satisfaction', '5+ Years Experience'].map((s) => (
              <div key={s} className="flex items-center text-sm font-medium text-gray-700">
                <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                {s}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
            <Link href="/quote">
              <Button className="group h-14 w-full rounded-full bg-green-600 px-8 text-base font-semibold text-white shadow-lg shadow-green-600/30 transition-all hover:bg-green-700 sm:w-auto">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="h-14 w-full rounded-full border-gray-200 bg-white px-8 text-base font-semibold text-gray-900 shadow-sm transition-all hover:border-green-300 hover:bg-green-50 hover:text-green-700 sm:w-auto"
              >
                Contact us
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: dashboard */}
        <div className="relative mx-auto w-full max-w-lg px-3 sm:px-0">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-green-300/40 to-green-200/0 blur-2xl" />
          <div className="relative rounded-3xl border border-gray-200/80 bg-white p-5 shadow-[0_40px_80px_-30px_rgba(16,185,129,0.35)] sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-widest text-green-600">Live Overview</p>
                <h3 className="mt-1 text-base font-semibold text-gray-950 sm:text-lg">Healthcare Results Dashboard</h3>
              </div>
              <div className="flex flex-shrink-0 items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                <TrendingUp className="h-3.5 w-3.5" /> Growing
              </div>
            </div>

            <svg viewBox="0 0 300 80" className="mb-5 h-20 w-full">
              <defs>
                <linearGradient id="sparkLight" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 65 C40 60 60 50 90 52 S140 30 170 32 S230 12 300 6 V80 H0Z" fill="url(#sparkLight)" />
              <path
                d="M0 65 C40 60 60 50 90 52 S140 30 170 32 S230 12 300 6"
                fill="none"
                stroke="#059669"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            <div className="space-y-3">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-xl bg-gray-50 p-3.5">
                  <div className="mb-2 flex items-center justify-between gap-2 text-sm">
                    <span className="text-gray-600">{m.label}</span>
                    <span className="font-semibold text-green-600">{m.value}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-200">
                    <div className={`h-full rounded-full bg-gradient-to-r from-green-500 to-green-400 ${m.bar}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -right-1 -top-5 animate-bounce rounded-2xl bg-green-500 p-3 text-white shadow-xl shadow-green-500/30 [animation-duration:3s] sm:-right-4">
            <Heart className="h-6 w-6" />
          </div>
          <div className="absolute -bottom-5 -left-1 animate-pulse rounded-2xl border border-gray-100 bg-white p-3 text-green-600 shadow-xl sm:-left-4">
            <Stethoscope className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Client logos */}
      <div className="relative pb-16 pt-6 sm:pb-20">
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
      </div>

      <style>{`
        @keyframes heroIn {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes clientsMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 0.5rem)); }
        }
        @keyframes clientsMarqueeReverse {
          from { transform: translateX(calc(-50% - 0.5rem)); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}