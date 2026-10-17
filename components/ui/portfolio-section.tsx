'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Search, Share2, Code, TrendingUp } from 'lucide-react';
import Reveal from './reveal';

type Project = {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  results: string[];
  tags: string[];
};

const tabs = [
  { key: 'website', label: 'Websites', icon: Code },
  { key: 'seo', label: 'SEO', icon: Search },
  { key: 'smo', label: 'SMO', icon: Share2 },
] as const;

type TabKey = (typeof tabs)[number]['key'];

const data: Record<TabKey, Project[]> = {
  website: [
    { id: 1, title: 'MediCare Hospital', image: 'https://i.pinimg.com/1200x/31/d6/a3/31d6a396445664fca2a553338cb4cf25.jpg', category: 'Hospital Website', description: 'Complete hospital website with patient portal and appointment system', results: ['300% online appointments', '95% patient satisfaction'], tags: ['React', 'Node.js', 'MongoDB'] },
    { id: 2, title: 'Dental Care Clinic', image: 'https://i.pinimg.com/736x/0a/56/ea/0a56eaba0b8cb46a2757c482dc2e8a56.jpg', category: 'Dental Clinic', description: 'Dental practice website with treatment showcase and online booking', results: ['200% new patients', '150% consultation growth'], tags: ['WordPress', 'PHP', 'MySQL'] },
    { id: 3, title: 'TeleMed Platform', image: 'https://i.pinimg.com/736x/58/92/7d/58927d747c22d50b8244ca632cc81e83.jpg', category: 'Telemedicine', description: 'Virtual healthcare platform with video consultations', results: ['15K+ consultations', '98% satisfaction rate'], tags: ['Next.js', 'React', 'WebRTC'] },
    { id: 4, title: 'PharmaCare Store', image: 'https://i.pinimg.com/1200x/f8/f0/f9/f8f0f9e8d46440f2e3b4534bf3d20784.jpg', category: 'Pharmacy', description: 'Online pharmacy with inventory and ordering system', results: ['40% online orders', '60% efficiency gain'], tags: ['React', 'Tailwind', 'Node.js'] },
    { id: 5, title: 'Cardiology Center', image: 'https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Specialty Clinic', description: 'Cardiology practice website with service showcase', results: ['185% inquiries', 'Double bookings'], tags: ['Vue.js', 'Firebase', 'API'] },
    { id: 6, title: 'Mental Health Clinic', image: 'https://images.pexels.com/photos/5726708/pexels-photo-5726708.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Mental Health', description: 'Therapy practice website with online sessions', results: ['280% therapy inquiries', '320% consultations'], tags: ['React', 'Stripe', 'WebRTC'] },
  ],
  seo: [
    { id: 1, title: 'Cardiology Center SEO', image: 'https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Cardiology', description: 'Medical SEO for heart care services and patient acquisition', results: ['400% patient inquiries', 'Top 3 for 60+ keywords'], tags: ['cardiology specialist', 'heart doctor', 'cardiac care'] },
    { id: 2, title: 'Hospital SEO Strategy', image: 'https://images.pexels.com/photos/7587445/pexels-photo-7587445.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Multi-Specialty', description: 'Comprehensive SEO for multi-specialty hospital services', results: ['500% emergency inquiries', '350% appointments'], tags: ['multi-specialty hospital', 'emergency care', 'surgical specialists'] },
    { id: 3, title: 'Pediatric Clinic SEO', image: 'https://images.pexels.com/photos/7587428/pexels-photo-7587428.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Pediatrics', description: 'Child healthcare SEO focusing on parent needs', results: ['350% new patients', 'Top 5 for 80+ keywords'], tags: ['pediatrician', 'child healthcare', 'kids doctor'] },
    { id: 4, title: 'Mental Health SEO', image: 'https://images.pexels.com/photos/5726708/pexels-photo-5726708.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Mental Health', description: 'Therapy and mental wellness SEO strategy', results: ['280% therapy inquiries', 'Featured snippets'], tags: ['psychologist', 'mental health therapy', 'anxiety treatment'] },
    { id: 5, title: 'Dental Practice SEO', image: 'https://images.pexels.com/photos/7587445/pexels-photo-7587445.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Dentistry', description: 'Dental services SEO for local patient acquisition', results: ['250% bookings', 'Local map rankings'], tags: ['dentist near me', 'dental care', 'teeth cleaning'] },
  ],
  smo: [
    { id: 1, title: 'Hospital Social Media', image: 'https://images.pexels.com/photos/7587445/pexels-photo-7587445.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Hospital', description: 'Social media management for hospital brand building', results: ['200% engagement', '50K+ followers'], tags: ['Facebook', 'Instagram', 'LinkedIn'] },
    { id: 2, title: 'Clinic Community', image: 'https://images.pexels.com/photos/7587428/pexels-photo-7587428.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Clinic', description: 'Healthcare community building and patient engagement', results: ['300% reviews', 'Viral health content'], tags: ['Instagram', 'YouTube', 'Community'] },
    { id: 3, title: 'Doctor Branding', image: 'https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Personal Branding', description: 'Social media branding for healthcare professionals', results: ['Expert positioning', 'Patient trust building'], tags: ['LinkedIn', 'Twitter', 'Professional'] },
    { id: 4, title: 'Health Campaign', image: 'https://images.pexels.com/photos/5726708/pexels-photo-5726708.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Awareness', description: 'Healthcare awareness social media campaigns', results: ['2M+ reach', 'Viral health tips'], tags: ['All Platforms', 'Video Content', 'Campaigns'] },
  ],
};

export default function HealthcarePortfolioPage() {
  const [active, setActive] = useState<TabKey>('website');
  const projects = data[active];

  return (
    <main className="bg-[#f6faf7]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-green-50 via-white to-[#f6faf7] pb-20 pt-28 sm:pb-24 sm:pt-36 lg:pt-40">
        <div className="absolute -top-32 left-1/2 -z-10 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-green-200/50 blur-[120px]" />
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(16,185,129,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.08) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at top, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at top, black 20%, transparent 70%)',
          }}
        />
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="mb-6 inline-block rounded-full border border-green-200 bg-white px-4 py-1.5 text-sm font-medium text-green-700 shadow-sm">
            Our Work
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-7xl">
            Healthcare{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600 sm:mt-6 sm:text-lg">
            Discover how we've helped healthcare providers succeed with digital solutions.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="relative z-20 -mt-7 px-4 sm:-mt-8">
        <div className="mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-gray-200 bg-white p-1.5 shadow-xl shadow-green-900/10">
          {tabs.map((t) => {
            const on = active === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-semibold transition-all duration-300 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm ${
                  on
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md shadow-green-600/30'
                    : 'text-gray-600 hover:text-green-700'
                }`}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    on ? 'bg-white/25' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {data[t.key].length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <section className="py-12 sm:py-20">
        <div
          key={active}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:gap-7 sm:px-6 lg:grid-cols-3 lg:px-8"
        >
          {projects.map((p, i) => (
            <Reveal key={`${active}-${p.id}`} delay={i * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200/80 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-green-300 hover:shadow-[0_30px_60px_-20px_rgba(16,185,129,0.35)]">
                <div className="relative h-48 overflow-hidden sm:h-52 lg:h-56">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur">
                    {p.category}
                  </span>
                  <Link
                    href="/quote"
                    className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-green-700 shadow-lg transition-all duration-300 hover:bg-green-500 hover:text-white sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
                    aria-label={`Learn more about ${p.title}`}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-gray-950">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.description}</p>

                  <div className="my-5 space-y-2 rounded-2xl bg-green-50 p-4">
                    {p.results.map((r) => (
                      <div key={r} className="flex items-start break-words text-sm font-semibold text-green-700">
                        <TrendingUp className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
                        {r}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
