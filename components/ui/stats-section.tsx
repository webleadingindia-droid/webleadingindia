'use client';

import { useEffect, useState } from 'react';
import { useInView } from './reveal';

const finalCounts = {
  clients: 200,
  patients: 10000,
  experience: 5,
  satisfaction: 95,
};

export default function StatsSection() {
  const { ref, inView } = useInView<HTMLElement>(0.3);
  const [p, setP] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2200;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setP(1 - Math.pow(1 - t, 3));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  const val = (n: number) => Math.round(n * p);

  const stats = [
    { number: `${val(finalCounts.clients)}+`, label: 'Healthcare Clients' },
    { number: `${val(finalCounts.patients).toLocaleString()}+`, label: 'Patients Reached' },
    { number: `${val(finalCounts.experience)}+`, label: 'Years Experience' },
    { number: `${val(finalCounts.satisfaction)}%`, label: 'Client Satisfaction' },
  ];

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-[#f6faf7] py-20 sm:py-28">
      <div className="absolute left-1/2 top-0 -z-10 h-64 w-[800px] -translate-x-1/2 rounded-full bg-green-200/50 blur-[110px]" />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(16,185,129,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.07) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="mb-5 inline-block rounded-full border border-green-200 bg-white px-4 py-1.5 text-sm font-medium text-green-700 shadow-sm">
            By the Numbers
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
            Our Healthcare Impact
          </h2>
          <p className="mt-5 text-base text-gray-600 sm:text-lg">
            Transforming healthcare practices through specialized digital marketing strategies.
          </p>
        </div>

        <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-xl shadow-green-900/5 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-6 text-center sm:p-10 md:p-12 ${i % 2 === 1 ? 'border-l border-gray-100' : ''} ${
                i >= 2 ? 'border-t border-gray-100 md:border-t-0' : ''
              } ${i > 0 ? 'md:border-l md:border-gray-100' : ''}`}
            >
              <div className="bg-gradient-to-b from-green-600 to-green-500 bg-clip-text text-4xl font-semibold tabular-nums tracking-tight text-transparent sm:text-5xl md:text-6xl">
                {s.number}
              </div>
              <div className="mt-3 text-xs font-medium uppercase tracking-widest text-gray-500 sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
