import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { BLOGS, fmtDate, getPost } from '@/lib/blogs';

const SITE = 'https://www.webleadingindia.com';
const id = (h: string) => h.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOGS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const url = `${SITE}/blogs/${p.slug}`;
  return {
    title: `${p.title} | Web Leading India`,
    description: p.excerpt,
    keywords: p.keywords,
    alternates: { canonical: url },
    openGraph: { title: p.title, description: p.excerpt, url, siteName: 'Web Leading India', locale: 'en_IN', type: 'article', publishedTime: p.date },
    twitter: { card: 'summary_large_image', title: p.title, description: p.excerpt },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = BLOGS.filter((b) => b.slug !== post.slug && b.category === post.category).concat(BLOGS.filter((b) => b.category !== post.category && b.slug !== post.slug)).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.excerpt,
    datePublished: post.date, author: { '@type': 'Organization', name: post.author },
    publisher: { '@type': 'Organization', name: 'Web Leading India', logo: { '@type': 'ImageObject', url: `${SITE}/Logo.png` } },
    mainEntityOfPage: `${SITE}/blogs/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100 via-white to-white pt-32 pb-10 lg:pt-44">
        <div className="mx-auto max-w-3xl px-4">
          <Link href="/blogs" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800"><ArrowLeft className="h-4 w-4" /> All articles</Link>
          <span className="block w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-100">{post.category}</span>
          <h1 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg text-gray-600">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" />{post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{fmtDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readTime}</span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[1fr_260px]">
        <article className="mx-auto w-full max-w-3xl">
          {post.sections.map((s) => (
            <section key={s.h} id={id(s.h)} className="mb-10 scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">{s.h}</h2>
              {s.p.map((t, i) => (<p key={i} className="mb-4 text-[17px] leading-8 text-gray-700">{t}</p>))}
              {s.ul && (
                <ul className="mb-4 space-y-2.5">
                  {s.ul.map((li) => (
                    <li key={li} className="flex gap-3 text-[17px] leading-7 text-gray-700"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-green-500" />{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="mt-12 rounded-3xl bg-gradient-to-br from-green-700 via-green-600 to-green-800 p-8 text-center text-white">
            <h3 className="text-2xl font-bold">Want results like these for your practice?</h3>
            <p className="mx-auto mt-2 max-w-xl text-green-50/90">Get a free marketing audit from our healthcare specialists.</p>
            <Link href="/quote" className="mt-6 inline-block"><Button className="h-12 rounded-xl bg-white px-7 font-semibold text-green-700 hover:bg-green-50">Get Free Audit <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">In this article</p>
            <ul className="space-y-2">
              {post.sections.map((s) => (<li key={s.h}><a href={`#${id(s.h)}`} className="block text-sm text-gray-600 transition-colors hover:text-green-700">{s.h}</a></li>))}
            </ul>
          </div>
        </aside>
      </div>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold">Keep reading</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/blogs/${r.slug}`} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="text-xs font-semibold text-green-700">{r.category}</span>
                <h3 className="mt-2 font-bold leading-snug text-gray-900 group-hover:text-green-700">{r.title}</h3>
                <p className="mt-2 text-xs text-gray-500">{r.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
