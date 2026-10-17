'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import FooterContactBar from './FooterContactBar';
import {
  Menu, X, ChevronDown, Mail, Search, ArrowRight, ArrowUpRight, Sparkles, ClipboardCheck,
  Monitor, MousePointerClick, MapPin, PenLine, Share2, Target, Megaphone, PlayCircle,
  TrendingUp, Video, MessageCircle, Users, Star, UserRound, Palette, Code2, CalendarCheck,
  Smartphone, ShoppingBag, BarChart3, Bot, Wrench, Stethoscope, Home, Info, Briefcase,
  BookOpen, CornerDownLeft, type LucideIcon,
} from 'lucide-react';

/* ───────────────────────── Menu data ───────────────────────── */

type MenuChild = { name: string; href: string };
type MenuItem = {
  name: string;
  href: string;
  desc?: string;
  badge?: string;
  icon?: LucideIcon;
  children?: MenuChild[];
};
type MenuColumn = { title: string; items: MenuItem[] };

const serviceColumns: MenuColumn[] = [
  {
    title: 'Digital Presence',
    items: [
      { name: 'Medical Web Design', desc: 'Conversion-built clinic sites', href: '/services/healthcare-web-design', icon: Monitor },
      { name: 'Landing Pages', desc: 'High-intent campaign pages', href: '/services/healthcare-landing-pages', icon: MousePointerClick },
      { name: 'Healthcare SEO', desc: 'Rank for the right patients', href: '/services/healthcare-seo-services', icon: Search },
      { name: 'Local SEO & Google Maps', desc: 'Win the "near me" searches', href: '/services/healthcare-local-seo', icon: MapPin },
      { name: 'Content Marketing', desc: 'Authority that compounds', href: '/services/healthcare-content-marketing', icon: PenLine },
      { name: 'Social Media Marketing', desc: 'Always-on, on-brand presence', href: '/services/healthcare-social-media-marketing', icon: Share2 },
    ],
  },
  {
    title: 'Paid Advertising',
    items: [
      { name: 'Google Ads & PPC', desc: 'Capture patient demand at scale', href: '/services/healthcare-ppc-services', icon: Target },
      { name: 'Meta Ads', desc: 'Facebook & Instagram campaigns', href: '/services/healthcare-meta-ads', icon: Megaphone },
      { name: 'YouTube Ads', desc: 'Video reach for your practice', href: '/services/healthcare-youtube-ads', icon: PlayCircle },
      { name: 'Digital Marketing', desc: 'Full-funnel patient acquisition', href: '/services/healthcare-digital-marketing', icon: TrendingUp },
      { name: 'Video & Reels Production', desc: 'Patient stories & explainers', href: '/services/healthcare-video-marketing', icon: Video },
    ],
  },
  {
    title: 'Growth & Retention',
    items: [
      { name: 'WhatsApp & Email Marketing', desc: 'Reminders, follow-ups & nurture', href: '/services/healthcare-whatsapp-email-marketing', icon: MessageCircle },
      { name: 'Patient Lead Generation', desc: 'Predictable new-patient flow', href: '/services/healthcare-lead-generation', icon: Users },
      { name: 'Reputation Management', desc: 'Reviews, ratings & trust', href: '/services/healthcare-reputation-management', icon: Star },
      { name: 'Doctor Personal Branding', desc: 'Build authority as a specialist', href: '/services/doctor-personal-branding', icon: UserRound },
      { name: 'Healthcare Branding', desc: 'Logo, identity & guidelines', href: '/services/healthcare-branding', icon: Palette },
    ],
  },
  {
    title: 'Technology & Systems',
    items: [
      { name: 'Web Development', desc: 'Portals, booking & secure data', href: '/services/healthcare-web-development', icon: Code2 },
      { name: 'Appointment Booking System', desc: 'Online booking & patient portals', href: '/services/appointment-booking-system', badge: 'New', icon: CalendarCheck },
      { name: 'Pharmacy E-commerce', desc: 'Sell medical products online', href: '/services/healthcare-ecommerce-development', icon: ShoppingBag },
      { name: 'Analytics & Reporting', desc: 'Decision-ready performance views', href: '/services/analytics-reporting', icon: BarChart3 },
      { name: 'Website Maintenance', desc: 'Speed, security & support', href: '/services/website-maintenance', icon: Wrench },
    ],
  },
];

const industryColumns: MenuColumn[] = [
  {
    title: 'Hospitals & Clinics',
    items: [
      { name: 'Hospitals', href: '/specialties/hospital-marketing' },
      { name: 'Multi-Specialty Clinics', href: '/specialties/clinic-marketing' },
      { name: 'Telemedicine Clinics', href: '/specialties/telemedicine-marketing' },
      { name: 'Diagnostic Labs & Imaging', href: '/specialties/diagnostic-lab-marketing' },
      { name: 'Day-Care & Surgery Centres', href: '/specialties/surgery-centre-marketing' },
      { name: 'Weight Management Clinics', href: '/specialties/weight-management-marketing' },
    ],
  },
  {
    title: 'Allied Health & Wellness',
    items: [
      {
        name: 'Rehab & Therapy',
        href: '/specialties/physiotherapy-marketing',
        children: [
          { name: 'Physiotherapy', href: '/specialties/physiotherapy-marketing' },
          { name: 'Occupational Therapy', href: '/specialties/occupational-therapy-marketing' },
          { name: 'Speech Therapy', href: '/specialties/speech-therapy-marketing' },
          { name: 'Chiropractors', href: '/specialties/chiropractic-marketing' },
        ],
      },
      {
        name: 'Mental Health & Nutrition',
        href: '/specialties/psychologist-marketing',
        children: [
          { name: 'Psychologists & Counsellors', href: '/specialties/psychologist-marketing' },
          { name: 'Dietitians & Nutritionists', href: '/specialties/dietitian-marketing' },
        ],
      },
      { name: 'Ayurveda & AYUSH', href: '/specialties/ayurveda-marketing' },
      { name: 'Yoga & Wellness Centres', href: '/specialties/wellness-marketing' },
    ],
  },
  {
    title: 'Aesthetics & Cosmetic',
    items: [
      { name: 'Dermatology & Skin', href: '/specialties/dermatology-marketing' },
      { name: 'Cosmetic & Aesthetic Clinics', href: '/specialties/aesthetic-clinic-marketing' },
      { name: 'Hair Transplant Clinics', href: '/specialties/hair-transplant-marketing' },
      {
        name: 'Cosmetic Surgery',
        href: '/specialties/cosmetic-surgery-marketing',
        children: [
          { name: 'Plastic Surgery', href: '/specialties/plastic-surgery-marketing' },
          { name: 'Facial & Rhinoplasty', href: '/specialties/facial-surgery-marketing' },
          { name: 'Body Contouring', href: '/specialties/body-contouring-marketing' },
        ],
      },
    ],
  },
  {
    title: 'Specialty & Retail',
    items: [
      { name: 'Dental Clinics', href: '/specialties/dental-marketing' },
      { name: 'Eye Care', href: '/specialties/eye-hospital-marketing' },
      { name: 'Fertility & IVF', href: '/specialties/ivf-marketing' },
      { name: 'Pharmacies (Retail)', href: '/specialties/pharmacy-marketing' },
      { name: 'Health E-commerce', href: '/specialties/health-ecommerce-marketing' },
      { name: 'Senior Care & Home Healthcare', href: '/specialties/senior-care-marketing' },
      { name: 'Veterinary', href: '/specialties/veterinary-marketing' },
    ],
  },
];

type MenuKey = 'services' | 'industries';

const MENUS: Record<
  MenuKey,
  {
    label: string;
    columns: MenuColumn[];
    showDesc: boolean;
    eyebrow: string;
    title: string;
    text: string;
    ctaLabel: string;
    ctaHref: string;
    footNote: string;
  }
> = {
  services: {
    label: 'Services',
    columns: serviceColumns,
    showDesc: true,
    eyebrow: 'What we do',
    title: 'Full-funnel growth for healthcare brands',
    text: 'From the first Google search to the booked appointment — websites, ads, SEO and automation under one roof.',
    ctaLabel: 'Get a free marketing audit',
    ctaHref: '/quote',
    footNote: 'Not sure where to start? We will map the right mix for your practice.',
  },
  industries: {
    label: 'Industries',
    columns: industryColumns,
    showDesc: false,
    eyebrow: 'Who we serve',
    title: 'Built for every kind of practice',
    text: 'Specialty-specific playbooks for clinics, hospitals, allied health, aesthetics and healthcare retail.',
    ctaLabel: 'Explore all specialties',
    ctaHref: '/specialties',
    footNote: 'Don’t see your specialty? We work with every kind of practice.',
  },
};

const NAV_LINKS = [
  { name: 'Case Studies', href: '/portfolio' },
  { name: 'Research & Insights', href: '/blogs' },
  { name: 'About', href: '/about' },
];

const EMAIL = 'info@webleadingindia.com';

/* ───────────────────────── Search index ───────────────────────── */

type SearchType = 'Service' | 'Industry' | 'Page';
type SearchEntry = {
  name: string;
  href: string;
  type: SearchType;
  group?: string; // column title
  parent?: string; // parent item (for nested specialties)
  desc?: string;
  icon: LucideIcon;
  haystack: string;
};

const PAGE_ENTRIES: { name: string; href: string; desc: string; icon: LucideIcon }[] = [
  { name: 'Home', href: '/', desc: 'Back to the homepage', icon: Home },
  { name: 'About', href: '/about', desc: 'Who we are & how we work', icon: Info },
  { name: 'Case Studies', href: '/portfolio', desc: 'Portfolio & client results', icon: Briefcase },
  { name: 'Research & Insights', href: '/blogs', desc: 'Blogs, guides & resources', icon: BookOpen },
  { name: 'Contact', href: '/contact', desc: 'Talk to our team', icon: Mail },
  { name: 'Free Marketing Audit', href: '/quote', desc: 'Get a free audit & quote', icon: ClipboardCheck },
];

const buildIndex = (): SearchEntry[] => {
  const out: SearchEntry[] = [];
  const mk = (e: Omit<SearchEntry, 'haystack'>): SearchEntry => ({
    ...e,
    haystack: [e.name, e.desc, e.group, e.parent, e.type].filter(Boolean).join(' ').toLowerCase(),
  });

  serviceColumns.forEach((col) =>
    col.items.forEach((i) =>
      out.push(mk({ name: i.name, href: i.href, type: 'Service', group: col.title, desc: i.desc, icon: i.icon ?? Sparkles })),
    ),
  );
  industryColumns.forEach((col) =>
    col.items.forEach((i) => {
      out.push(mk({ name: i.name, href: i.href, type: 'Industry', group: col.title, icon: Stethoscope }));
      i.children?.forEach((c) =>
        out.push(mk({ name: c.name, href: c.href, type: 'Industry', group: col.title, parent: i.name, icon: Stethoscope })),
      );
    }),
  );
  PAGE_ENTRIES.forEach((p) => out.push(mk({ name: p.name, href: p.href, type: 'Page', desc: p.desc, icon: p.icon })));
  return out;
};

const SEARCH_INDEX = buildIndex();
const SEARCH_TYPES: SearchType[] = ['Service', 'Industry', 'Page'];
const TYPE_LABEL: Record<SearchType, string> = { Service: 'Services', Industry: 'Industries', Page: 'Pages' };
const POPULAR_NAMES = [
  'Healthcare SEO',
  'Google Ads & PPC',
  'Medical Web Design',
  'Dental Clinics',
  'Fertility & IVF',
  'Free Marketing Audit',
];
const POPULAR = POPULAR_NAMES.map((n) => SEARCH_INDEX.find((e) => e.name === n)).filter(Boolean) as SearchEntry[];

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const Highlight = ({ text, tokens }: { text: string; tokens: string[] }) => {
  if (!tokens.length) return <>{text}</>;
  const re = new RegExp(`(${tokens.map(escapeRegExp).join('|')})`, 'ig');
  return (
    <>
      {text.split(re).map((part, i) =>
        tokens.some((t) => t.toLowerCase() === part.toLowerCase()) ? (
          <mark key={i} className="rounded bg-green-100 px-0.5 text-green-800">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
};

const Badge = ({ text }: { text: string }) => (
  <span className="ml-2 inline-block rounded-full bg-green-50 px-2 py-0.5 align-middle text-[10px] font-semibold text-green-700 ring-1 ring-green-100">
    {text}
  </span>
);

/* ───────────────────────── Component ───────────────────────── */

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<MenuKey | null>(null);

  /* Search state */
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const q = query.trim().toLowerCase();
  const tokens = useMemo(() => (q ? q.split(/\s+/) : []), [q]);

  const groups = useMemo(() => {
    if (!tokens.length) return [] as { type: SearchType; items: SearchEntry[] }[];
    const scored = SEARCH_INDEX.map((e) => {
      if (!tokens.every((t) => e.haystack.includes(t))) return null;
      const n = e.name.toLowerCase();
      let score = 0;
      tokens.forEach((t) => {
        score += n.startsWith(t) ? 3 : n.includes(t) ? 2 : 1;
      });
      return { e, score };
    }).filter(Boolean) as { e: SearchEntry; score: number }[];

    return SEARCH_TYPES.map((type) => ({
      type,
      items: scored
        .filter((s) => s.e.type === type)
        .sort((a, b) => b.score - a.score)
        .map((s) => s.e),
    })).filter((g) => g.items.length);
  }, [tokens]);

  const flat = useMemo(() => (tokens.length ? groups.flatMap((g) => g.items) : POPULAR), [groups, tokens]);

  const openSearch = () => {
    setIsOpen(false);
    setOpenMenu(null);
    setSearchOpen(true);
  };
  const closeSearch = () => {
    setSearchOpen(false);
    setQuery('');
    setActive(0);
  };
  const go = (href: string) => {
    closeSearch();
    router.push(href);
  };

  /* Effects */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen || searchOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, searchOpen]);

  useEffect(() => {
    setIsOpen(false);
    setOpenMenu(null);
    setSearchOpen(false);
    setQuery('');
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setIsOpen(false);
        closeSearch();
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen(false);
        setOpenMenu(null);
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [searchOpen]);

  useEffect(() => setActive(0), [q]);

  useEffect(() => {
    document.getElementById(`sr-${active}`)?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => (flat.length ? (a + 1) % flat.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => (flat.length ? (a - 1 + flat.length) % flat.length : 0));
    } else if (e.key === 'Enter' && flat[active]) {
      e.preventDefault();
      go(flat[active].href);
    }
  };

  /* Helpers */
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : !!pathname?.startsWith(href.replace(/\/$/, ''));
  const menuActive = (key: MenuKey) =>
    key === 'services' ? !!pathname?.startsWith('/services') : !!pathname?.startsWith('/specialties');

  const pill = (activeState: boolean) =>
    `relative flex items-center gap-1 rounded-full px-4 py-2 text-[14.5px] font-medium transition-all duration-300 ${
      activeState
        ? 'bg-green-50 text-green-700 ring-1 ring-green-100'
        : 'text-gray-700 hover:bg-gray-100/80 hover:text-green-700'
    }`;

  /* ───────── Mega panel ───────── */
  const renderMega = (key: MenuKey) => {
    const m = MENUS[key];
    const open = openMenu === key;
    return (
      <div
        key={key}
        className={`absolute inset-x-0 top-full hidden px-4 pt-2 transition-all duration-300 sm:px-6 lg:block lg:px-8 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-h-[calc(100vh-9rem)] overflow-y-auto rounded-3xl border border-gray-200/80 bg-white/95 shadow-[0_50px_100px_-30px_rgba(16,185,129,0.35)] ring-1 ring-black/[0.02] backdrop-blur-xl">
            <div className="h-1 w-full bg-gradient-to-r from-green-700 via-green-500 to-green-700" />
            <div className="p-7">
              <div className="grid grid-cols-12 gap-7">
                {/* Featured card */}
                <div className="col-span-3">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-green-700 via-green-600 to-green-800 p-6 text-white">
                    <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
                    <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-yellow-300/20 blur-3xl" />
                    <div className="relative flex h-full flex-col">
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-green-50 backdrop-blur">
                        <Sparkles className="h-3 w-3 text-yellow-300" />
                        {m.eyebrow}
                      </span>
                      <h3 className="mt-5 text-[22px] font-semibold leading-snug tracking-tight">{m.title}</h3>
                      <p className="mt-3 text-[13.5px] leading-relaxed text-green-50/85">{m.text}</p>
                      <Link
                        href={m.ctaHref}
                        className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-green-700 shadow-lg shadow-green-900/20 transition-all hover:bg-green-50"
                      >
                        {m.ctaLabel}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Columns */}
                <div className="col-span-9 grid grid-cols-4 gap-x-5">
                  {m.columns.map((col) => (
                    <div key={col.title}>
                      <p className="flex items-center gap-2 pb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                        <span className="h-px w-4 bg-green-500" />
                        {col.title}
                      </p>
                      <ul className="space-y-0.5">
                        {col.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="group flex items-start gap-3 rounded-xl px-2 py-2 transition-all duration-200 hover:bg-green-50/70"
                              >
                                {m.showDesc && Icon && (
                                  <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 ring-1 ring-green-100 transition-all duration-200 group-hover:bg-green-600 group-hover:text-white group-hover:ring-green-600">
                                    <Icon className="h-[18px] w-[18px]" />
                                  </span>
                                )}
                                <span className="min-w-0 flex-1">
                                  <span className="flex items-center text-[14.5px] font-semibold leading-tight text-gray-950 transition-colors group-hover:text-green-700">
                                    {item.name}
                                    {item.badge && <Badge text={item.badge} />}
                                    {!m.showDesc && (
                                      <ArrowRight className="ml-auto h-3.5 w-3.5 -translate-x-1 text-green-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                    )}
                                  </span>
                                  {m.showDesc && item.desc && (
                                    <span className="mt-0.5 block text-[12.5px] leading-snug text-gray-500">{item.desc}</span>
                                  )}
                                </span>
                              </Link>
                              {item.children && (
                                <ul className="mb-2 ml-4 mt-0.5 space-y-0.5 border-l border-green-100 pl-3">
                                  {item.children.map((c) => (
                                    <li key={c.href}>
                                      <Link
                                        href={c.href}
                                        className="block rounded-md px-2 py-1 text-[13.5px] text-gray-500 transition-colors hover:bg-green-50/70 hover:text-green-700"
                                      >
                                        {c.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-6 border-t border-gray-200/80 pt-5">
                <p className="text-sm text-gray-500">{m.footNote}</p>
                <Link
                  href={m.ctaHref}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-green-700 transition-colors hover:text-green-800"
                >
                  {m.ctaLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  /* ───────── Search result row ───────── */
  const renderRow = (e: SearchEntry, idx: number) => {
    const Icon = e.icon;
    const isAct = idx === active;
    const meta = [e.parent, e.group].filter(Boolean).join(' · ');
    return (
      <button
        key={`${e.type}-${e.name}-${e.href}`}
        id={`sr-${idx}`}
        type="button"
        onMouseEnter={() => setActive(idx)}
        onClick={() => go(e.href)}
        className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
          isAct ? 'bg-green-50' : 'hover:bg-gray-50'
        }`}
      >
        <span
          className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl ring-1 transition-colors ${
            isAct ? 'bg-green-600 text-white ring-green-600' : 'bg-green-50 text-green-700 ring-green-100'
          }`}
        >
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[14.5px] font-semibold text-gray-950">
            <Highlight text={e.name} tokens={tokens} />
          </span>
          {(e.desc || meta) && (
            <span className="block truncate text-[12.5px] text-gray-500">{e.type === 'Industry' ? meta : e.desc}</span>
          )}
        </span>
        <CornerDownLeft className={`h-4 w-4 flex-shrink-0 text-green-600 transition-opacity ${isAct ? 'opacity-100' : 'opacity-0'}`} />
      </button>
    );
  };

  /* Running index for grouped results */
  let runningIdx = 0;

  return (
    <>
      {/* ───────── Top bar ───────── */}
      <div className="relative h-10 overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-20%,rgba(255,255,255,0.18),transparent_50%)]" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center justify-center gap-4 px-4 text-xs sm:justify-between sm:px-6 sm:text-[13px] lg:px-8">
          <a href={`mailto:${EMAIL}`} className="hidden items-center gap-1.5 transition-colors hover:text-green-100 sm:flex">
            <Mail className="h-3.5 w-3.5" />
            {EMAIL}
          </a>
          <Link href="/quote" className="group flex items-center gap-1.5 font-medium">
            <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
            <span className="hidden md:inline">Get 20% OFF on your first project!</span>
            <span className="md:hidden">20% OFF first project</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* ───────── Main nav ───────── */}
      <header
        onMouseLeave={() => setOpenMenu(null)}
        className={`fixed inset-x-0 z-40 transition-all duration-300 ${isScrolled ? 'top-0' : 'top-10'}`}
      >
        <div
          className={`border-b transition-all duration-300 ${
            isScrolled
              ? 'border-gray-200/70 bg-white/85 py-2 shadow-[0_10px_30px_-15px_rgba(16,185,129,0.25)] backdrop-blur-xl'
              : 'border-transparent bg-white/70 py-3.5 backdrop-blur-md'
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="flex flex-shrink-0 items-center" aria-label="Web Leading India – Home">
                <Image src="/Logo.png" alt="Web Leading India" width={180} height={60} priority className="h-10 w-auto sm:h-11" />
              </Link>

              {/* Desktop menu */}
              <nav className="hidden items-center gap-0.5 rounded-full border border-gray-200/70 bg-white/60 p-1 shadow-sm backdrop-blur lg:flex" aria-label="Main">
                {(Object.keys(MENUS) as MenuKey[]).map((key) => {
                  const open = openMenu === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={open}
                      onMouseEnter={() => setOpenMenu(key)}
                      onFocus={() => setOpenMenu(key)}
                      onClick={() => setOpenMenu(open ? null : key)}
                      className={pill(menuActive(key) || open)}
                    >
                      {MENUS[key].label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                    </button>
                  );
                })}

                {NAV_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} className={pill(isActive(l.href))} onMouseEnter={() => setOpenMenu(null)}>
                    {l.name}
                  </Link>
                ))}
              </nav>

              {/* Right actions */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Desktop search pill */}
                <button
                  type="button"
                  onClick={openSearch}
                  onMouseEnter={() => setOpenMenu(null)}
                  aria-label="Search"
                  className="hidden h-11 items-center gap-2.5 rounded-full border border-gray-200 bg-white/80 pl-4 pr-2.5 text-sm text-gray-500 shadow-sm transition-all hover:border-green-300 hover:text-green-700 hover:shadow-md lg:flex"
                >
                  <Search className="h-4 w-4" />
                  <span className="hidden xl:inline">Search</span>
                  <kbd className="hidden rounded-md border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-[11px] font-medium text-gray-400 xl:inline">
                    Ctrl K
                  </kbd>
                </button>

                <Link href="/quote" className="hidden sm:block" onMouseEnter={() => setOpenMenu(null)}>
                  <Button className="group h-11 rounded-full bg-gradient-to-r from-green-600 to-green-700 px-5 text-sm font-semibold text-white shadow-lg shadow-green-600/30 transition-all hover:from-green-700 hover:to-green-800 hover:shadow-green-600/40">
                    <ClipboardCheck className="mr-2 h-4 w-4" />
                    Free Marketing Audit
                    <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Button>
                </Link>

                {/* Mobile search */}
                <button
                  onClick={openSearch}
                  aria-label="Search"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm transition-colors hover:border-green-300 hover:text-green-700 lg:hidden"
                >
                  <Search className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setIsOpen(true)}
                  aria-label="Open menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm transition-colors hover:border-green-300 hover:text-green-700 lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {(Object.keys(MENUS) as MenuKey[]).map(renderMega)}
      </header>

      {/* ───────── Search popup ───────── */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-200 ${
          searchOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!searchOpen}
      >
        <div onClick={closeSearch} className="absolute inset-0 bg-gray-950/50 backdrop-blur-sm" />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search"
          className={`relative mx-auto mt-[8vh] w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.45)] transition-all duration-300 ${
            searchOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'
          }`}
        >
          <div className="h-1 w-full bg-gradient-to-r from-green-700 via-green-500 to-green-700" />
          <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4">
            <Search className="h-5 w-5 flex-shrink-0 text-green-600" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onInputKey}
              placeholder="Search services, specialties, pages…"
              className="min-w-0 flex-1 bg-transparent text-base text-gray-950 outline-none placeholder:text-gray-400"
              autoComplete="off"
              spellCheck={false}
            />
            {query && (
              <button
                onClick={() => {
                  setQuery('');
                  inputRef.current?.focus();
                }}
                aria-label="Clear"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
            <button
              onClick={closeSearch}
              className="hidden rounded-md border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-[11px] font-medium text-gray-400 transition-colors hover:text-gray-600 sm:block"
            >
              ESC
            </button>
          </div>

          <div className="max-h-[56vh] overflow-y-auto p-3">
            {!q && (
              <>
                <p className="px-3 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Popular searches
                </p>
                {POPULAR.map((e, i) => renderRow(e, i))}
                <p className="px-3 pb-1 pt-4 text-xs text-gray-400">
                  Tip: type anything — a service, a specialty like “dental”, or a page like “contact”.
                </p>
              </>
            )}

            {q && flat.length === 0 && (
              <div className="px-4 py-10 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                  <Search className="h-5 w-5" />
                </div>
                <p className="mt-4 text-[15px] font-semibold text-gray-950">No results for “{query.trim()}”</p>
                <p className="mt-1 text-sm text-gray-500">Try a different keyword, or talk to our team directly.</p>
                <button
                  onClick={() => go('/contact')}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                >
                  Contact us <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}

            {q &&
              groups.map((g) => (
                <div key={g.type} className="mb-1">
                  <p className="flex items-center justify-between px-3 pb-1.5 pt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    {TYPE_LABEL[g.type]}
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] tracking-normal text-gray-500">
                      {g.items.length}
                    </span>
                  </p>
                  {g.items.map((e) => renderRow(e, runningIdx++))}
                </div>
              ))}
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/70 px-5 py-3 text-[11.5px] text-gray-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <kbd className="rounded border border-gray-200 bg-white px-1.5 py-0.5 font-medium">↑</kbd>
                <kbd className="rounded border border-gray-200 bg-white px-1.5 py-0.5 font-medium">↓</kbd>
                navigate
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="rounded border border-gray-200 bg-white px-1.5 py-0.5 font-medium">↵</kbd>
                open
              </span>
            </div>
            {q && flat.length > 0 && <span>{flat.length} results</span>}
          </div>
        </div>
      </div>

      {/* ───────── Mobile drawer ───────── */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-50 bg-gray-950/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <Image src="/Logo.png" alt="Web Leading India" width={150} height={50} className="h-9 w-auto" />
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-green-50 hover:text-green-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3">
          <button
            onClick={openSearch}
            className="mb-2 flex w-full items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-500 transition-colors hover:border-green-300"
          >
            <Search className="h-4 w-4 text-green-600" />
            Search services, specialties…
          </button>

          {[{ name: 'Home', href: '/' }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center rounded-xl px-3 py-3 text-[15px] font-medium transition-colors ${
                isActive(l.href) ? 'bg-green-50 text-green-700' : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              {l.name}
            </Link>
          ))}

          {(Object.keys(MENUS) as MenuKey[]).map((key) => {
            const open = mobileAccordion === key;
            const m = MENUS[key];
            return (
              <div key={key}>
                <button
                  onClick={() => setMobileAccordion(open ? null : key)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium text-gray-800 transition-colors hover:bg-gray-50"
                >
                  {m.label}
                  <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="ml-3 border-l-2 border-green-100 pb-2 pl-3">
                      {m.columns.map((col) => (
                        <div key={col.title}>
                          <p className="px-2 pb-1 pt-3 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                            {col.title}
                          </p>
                          {col.items.map((item) => (
                            <div key={item.name}>
                              <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center rounded-lg px-2 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-green-50 hover:text-green-700"
                              >
                                {item.name}
                                {item.badge && <Badge text={item.badge} />}
                              </Link>
                              {item.children && (
                                <div className="ml-2 border-l border-gray-200 pl-3">
                                  {item.children.map((c) => (
                                    <Link
                                      key={c.href}
                                      href={c.href}
                                      onClick={() => setIsOpen(false)}
                                      className="block rounded-lg px-2 py-1.5 text-[13px] text-gray-500 transition-colors hover:text-green-700"
                                    >
                                      {c.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {[...NAV_LINKS, { name: 'Contact', href: '/contact' }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center rounded-xl px-3 py-3 text-[15px] font-medium transition-colors ${
                isActive(l.href) ? 'bg-green-50 text-green-700' : 'text-gray-800 hover:bg-gray-50'
              }`}
            >
              {l.name}
            </Link>
          ))}
        </div>

        <div className="border-t border-gray-100 p-4">
          <Link href="/quote" onClick={() => setIsOpen(false)} className="block">
            <Button className="h-12 w-full rounded-full bg-gradient-to-r from-green-600 to-green-700 text-sm font-semibold text-white shadow-lg shadow-green-600/25 hover:from-green-700 hover:to-green-800">
              <ClipboardCheck className="mr-2 h-4 w-4" />
              Get Free Marketing Audit
            </Button>
          </Link>
        </div>
      </aside>

      {/* ───────── Bottom contact bar (Call / WhatsApp / Appointment) ───────── */}
      <FooterContactBar />
    </>
  );
}