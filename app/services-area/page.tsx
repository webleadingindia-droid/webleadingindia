import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Service Areas: Healthcare Marketing Across India | Web Leading India',
  description: 'We serve hospitals, clinics and doctors across Delhi NCR and all major Indian cities with SEO, ads, web design and patient-acquisition services.',
  alternates: { canonical: 'https://www.webleadingindia.com/services-area' },
};

const REGIONS: [string, string[]][] = [
  ['Delhi NCR', ['Delhi', 'Noida', 'Gurugram', 'Faridabad', 'Ghaziabad']],
  ['North India', ['Chandigarh', 'Jaipur', 'Lucknow', 'Dehradun', 'Amritsar', 'Ludhiana']],
  ['West India', ['Mumbai', 'Pune', 'Ahmedabad', 'Surat', 'Nagpur', 'Indore']],
  ['South India', ['Bengaluru', 'Hyderabad', 'Chennai', 'Kochi', 'Coimbatore', 'Visakhapatnam']],
  ['East & Central', ['Kolkata', 'Bhubaneswar', 'Patna', 'Ranchi', 'Guwahati', 'Bhopal']],
];

export default function ServiceAreaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100 via-white to-white pt-32 pb-10 lg:pt-44">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Healthcare marketing, <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">across India</span></h1>
          <p className="mt-5 text-lg text-gray-600">We work remotely with hospitals, clinics and doctors in every major city, with local-market expertise wherever you practise.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONS.map(([r, cities]) => (
            <div key={r} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-bold text-gray-900">{r}</h2>
              <ul className="space-y-2">
                {cities.map((c) => (<li key={c} className="flex items-center gap-2 text-gray-700"><MapPin className="h-4 w-4 text-green-600" />{c}</li>))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-green-700 to-green-600 p-6 text-white">
            <h2 className="text-lg font-bold">Not listed?</h2>
            <p className="mt-2 text-sm text-green-50/90">We serve clinics in smaller towns too. Tell us where you are.</p>
            <Link href="/contact" className="mt-4"><Button className="rounded-xl bg-white font-semibold text-green-700 hover:bg-green-50">Contact us <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
