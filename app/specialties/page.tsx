import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Stethoscope } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { SPECIALTIES } from '@/lib/specialties-data';

export const metadata: Metadata = {
  title: 'Healthcare Specialties We Serve | Web Leading India',
  description: 'Digital marketing for hospitals, clinics, dental, dermatology, IVF, eye care, physiotherapy, pharmacies and 20+ more healthcare specialties.',
  alternates: { canonical: 'https://www.webleadingindia.com/specialties' },
};

export default function SpecialtiesIndex() {
  const groups = Array.from(new Set(SPECIALTIES.map((s) => s.group)));
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100 via-white to-white pt-32 pb-12 lg:pt-44">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Marketing built for <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">every specialty</span></h1>
          <p className="mt-5 text-lg text-gray-600">Choose your specialty to see the playbook we use to bring more patients to practices like yours.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          {groups.map((g) => (
            <div key={g}>
              <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-gray-900 sm:text-2xl"><span className="h-px w-8 bg-green-500" />{g}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {SPECIALTIES.filter((s) => s.group === g).map((s) => (
                  <Link key={s.slug} href={`/specialties/${s.slug}`} className="group flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-green-300 hover:shadow-lg">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 ring-1 ring-green-100 group-hover:bg-green-600 group-hover:text-white"><Stethoscope className="h-5 w-5" /></span>
                    <span className="min-w-0">
                      <span className="flex items-center justify-between gap-2 font-semibold text-gray-900">{s.title}<ArrowRight className="h-4 w-4 text-green-600 opacity-0 transition-opacity group-hover:opacity-100" /></span>
                      <span className="mt-1 line-clamp-2 block text-sm text-gray-500">{s.tagline}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
