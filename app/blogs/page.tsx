import type { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import BlogIndex from '@/components/healthcare/blog-index';

export const metadata: Metadata = {
  title: 'Healthcare Marketing Blog: Research, Guides & Insights | Web Leading India',
  description: 'Practical guides on healthcare SEO, Google Ads, website design, social media and reputation management for doctors, clinics and hospitals.',
  alternates: { canonical: 'https://www.webleadingindia.com/blogs' },
  openGraph: { title: 'Healthcare Marketing Blog | Web Leading India', description: 'Guides and insights to help clinics and hospitals attract more patients online.', url: 'https://www.webleadingindia.com/blogs', siteName: 'Web Leading India', locale: 'en_IN', type: 'website' },
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100 via-white to-white pt-32 pb-10 lg:pt-44">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Research & Insights</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Healthcare marketing, <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">explained simply</span></h1>
          <p className="mt-5 text-lg text-gray-600">Actionable guides for doctors, clinics and hospitals who want more patients and better results online.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><BlogIndex /></div>
      </section>
      <Footer />
    </main>
  );
}
