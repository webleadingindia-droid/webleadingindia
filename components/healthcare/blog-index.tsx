'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { BLOGS, BLOG_CATEGORIES, fmtDate } from '@/lib/blogs';

const GRADS = ['from-green-600 to-emerald-500', 'from-teal-600 to-green-500', 'from-lime-600 to-green-600', 'from-emerald-700 to-teal-500'];

export default function BlogIndex() {
  const [cat, setCat] = useState('All');
  const list = BLOGS.filter((b) => cat === 'All' || b.category === cat);
  const [featured, ...rest] = list;

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {['All', ...BLOG_CATEGORIES].map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              cat === c ? 'bg-green-600 text-white shadow-md shadow-green-600/25' : 'border border-gray-200 bg-white text-gray-700 hover:border-green-300 hover:text-green-700'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {!featured && <p className="py-16 text-center text-gray-500">No articles in this category yet.</p>}

      {featured && (
        <Link href={`/blogs/${featured.slug}`} className="group mb-10 grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-xl md:grid-cols-2">
          <div className={`flex min-h-[220px] items-center justify-center bg-gradient-to-br ${GRADS[0]}`}>
            <BookOpen className="h-16 w-16 text-white/80" />
          </div>
          <div className="p-7 sm:p-10">
            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-100">Featured · {featured.category}</span>
            <h2 className="mt-4 text-2xl font-bold leading-snug text-gray-900 group-hover:text-green-700 sm:text-3xl">{featured.title}</h2>
            <p className="mt-3 text-gray-600">{featured.excerpt}</p>
            <div className="mt-5 flex items-center gap-4 text-sm text-gray-500">
              <span>{fmtDate(featured.date)}</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" />{featured.readTime}</span>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-green-700">Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
          </div>
        </Link>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((b, i) => (
          <Link key={b.slug} href={`/blogs/${b.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className={`flex h-36 items-center justify-center bg-gradient-to-br ${GRADS[(i + 1) % GRADS.length]}`}>
              <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">{b.category}</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold leading-snug text-gray-900 group-hover:text-green-700">{b.title}</h3>
              <p className="mt-2 line-clamp-3 flex-1 text-sm text-gray-600">{b.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <span>{fmtDate(b.date)}</span><span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{b.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
