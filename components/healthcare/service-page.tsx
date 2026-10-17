'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  Phone,
  Quote,
  Sparkles,
  Star,
} from 'lucide-react';

/* ----------------------------- Types ----------------------------- */

export type IconType = React.ComponentType<{ className?: string }>;

export interface ServiceItem {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  accent: string;
  cta?: string;
  href?: string;
}

export interface ToolItem {
  name: string;
  description: string;
  icon: IconType;
}

export interface ToolTab {
  key: string;
  label: string;
  icon: IconType;
  items: ToolItem[];
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  icon: IconType;
}

export interface PlanItem {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: IconType;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  rating: number;
  tag?: string;
}

export interface SectionCopy {
  badge?: string;
  badgeIcon?: IconType;
  title: string;
  subtitle: string;
}

export interface ServicePageProps {
  hero: {
    badge: { icon: IconType; text: string };
    before: string;
    accent: string;
    after?: string;
    description: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string; icon: IconType };
    trust: string;
    rating: string;
  };
  dashboard: {
    icon: IconType;
    title: string;
    subtitle: string;
    badge: string;
    rows: { label: string; value: string; change: string }[];
    footerLabel: string;
    footerValue: string;
    footerIcon: IconType;
  };
  stats: StatItem[];
  services: SectionCopy & { items: ServiceItem[]; defaultCta?: string; defaultHref?: string };
  tools: SectionCopy & { tabs: ToolTab[] };
  process: SectionCopy & { items: StepItem[] };
  testimonials: SectionCopy & { items: TestimonialItem[]; id?: string };
  pricing: SectionCopy & { items: PlanItem[] };
  cta: {
    icon: IconType;
    title: string;
    description: string;
    primary: { label: string; href: string };
    badges: { icon: IconType; text: string }[];
  };
  phone?: { display: string; href: string };
}

/* ---------------------------- Helpers ---------------------------- */

const tones = [
  'bg-green-50 text-green-700',
  'bg-green-50 text-green-700',
  'bg-violet-50 text-violet-700',
  'bg-amber-50 text-amber-700',
];

const initials = (name: string) =>
  name
    .replace(/^Dr\.\s*/i, '')
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');

function SectionHeading({ badge, badgeIcon: BadgeIcon, title, subtitle }: SectionCopy) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      {badge && BadgeIcon && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-700 sm:text-sm">
          <BadgeIcon className="h-4 w-4" />
          {badge}
        </div>
      )}
      <h2 className="text-balance text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">{subtitle}</p>
    </div>
  );
}

/* ----------------------------- Template --------------------------- */

export default function ServicePage(props: ServicePageProps) {
  const { hero, dashboard, stats, services, tools, process, testimonials, pricing, cta } = props;
  const phone = props.phone ?? { display: '+91-8376817258', href: 'tel:+918376817258' };
  const [activeTab, setActiveTab] = useState(0);

  const HeroBadgeIcon = hero.badge.icon;
  const SecondaryIcon = hero.secondary.icon;
  const DashIcon = dashboard.icon;
  const DashFooterIcon = dashboard.footerIcon;
  const CtaIcon = cta.icon;
  const currentTab = tools.tabs[activeTab] ?? tools.tabs[0];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white pb-20 text-gray-900 lg:pb-0">
      <Navbar />

      {/* ============================ HERO ============================ */}
      <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100 via-white to-white" />
        <div className="absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full bg-green-200/40 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute top-40 -right-24 -z-10 h-72 w-72 rounded-full bg-green-200/50 blur-3xl sm:h-96 sm:w-96" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgb(16 185 129 / 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgb(16 185 129 / 0.12) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="text-center lg:col-span-7 lg:text-left">
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-xs font-semibold text-green-700 shadow-sm backdrop-blur sm:text-sm lg:mx-0">
                <HeroBadgeIcon className="h-4 w-4" />
                {hero.badge.text}
              </div>

              <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                {hero.before}{' '}
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-500 bg-clip-text text-transparent">
                  {hero.accent}
                </span>
                {hero.after ? ` ${hero.after}` : ''}
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0 lg:text-xl">
                {hero.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link href={hero.primary.href} className="w-full sm:w-auto">
                  <Button className="group h-12 w-full rounded-xl bg-gradient-to-r from-green-600 to-green-500 px-7 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-500/30 sm:w-auto">
                    {hero.primary.label}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href={hero.secondary.href} className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="h-12 w-full rounded-xl border-2 border-green-500/60 bg-white/70 px-7 text-base font-semibold text-green-700 backdrop-blur hover:bg-green-50 sm:w-auto"
                  >
                    <SecondaryIcon className="mr-2 h-5 w-5" />
                    {hero.secondary.label}
                  </Button>
                </Link>
              </div>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {['A', 'P', 'R', 'S'].map((l) => (
                    <div
                      key={l}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-green-400 to-green-500 text-xs font-bold text-white shadow"
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-semibold text-gray-900">{hero.trust}</p>
                  <div className="mt-0.5 flex items-center justify-center gap-0.5 sm:justify-start">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{hero.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard card */}
            <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-green-300/40 via-green-200/30 to-transparent blur-2xl" />
              <div className="relative rounded-3xl border border-white/60 bg-white/80 p-5 shadow-2xl shadow-green-900/10 backdrop-blur-xl sm:p-7">
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-500 text-white shadow-md">
                      <DashIcon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-bold leading-tight text-gray-900">{dashboard.title}</h3>
                      <p className="truncate text-xs text-gray-500">{dashboard.subtitle}</p>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    {dashboard.badge}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {dashboard.rows.map((row, i) => (
                    <div key={row.label} className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                      <p className="text-xs text-gray-500">{row.label}</p>
                      <p className="mt-1 text-2xl font-bold text-gray-900">{row.value}</p>
                      <span
                        className={`mt-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${tones[i % tones.length]}`}
                      >
                        {row.change}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-green-600 to-green-500 px-4 py-3 text-white">
                  <span className="text-sm font-medium">{dashboard.footerLabel}</span>
                  <span className="flex items-center gap-1.5 text-right text-sm font-bold">
                    <DashFooterIcon className="h-4 w-4 shrink-0" />
                    {dashboard.footerValue}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ STATS ============================ */}
      <section className="relative z-10 -mt-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-green-100 bg-green-100 shadow-xl shadow-green-900/5 md:grid-cols-4">
          {stats.map((stat) => {
            const StatIcon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center bg-white px-4 py-6 text-center sm:py-8">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600 sm:h-12 sm:w-12">
                  <StatIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs font-medium text-gray-600 sm:text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================== SERVICES =========================== */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={services.badge}
            badgeIcon={services.badgeIcon ?? BadgeCheck}
            title={services.title}
            subtitle={services.subtitle}
          />

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {services.items.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-green-900/10 sm:p-7"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.accent} opacity-0 transition-opacity group-hover:opacity-100`}
                  />
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg`}
                  >
                    <ServiceIcon className="h-7 w-7" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">{service.description}</p>

                  <ul className="mt-5 space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm font-medium text-gray-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <Link
                      href={service.href ?? services.defaultHref ?? '../contact'}
                      className="inline-flex items-center text-sm font-semibold text-green-700 hover:text-green-800"
                    >
                      {service.cta ?? services.defaultCta ?? 'Learn More'}
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ TOOLS ============================ */}
      <section className="bg-gradient-to-b from-green-50/70 to-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={tools.badge ?? 'Our Toolkit'}
            badgeIcon={tools.badgeIcon ?? Sparkles}
            title={tools.title}
            subtitle={tools.subtitle}
          />

          <div className="-mx-4 mb-10 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
            <div
              role="tablist"
              className="mx-auto flex w-max gap-2 rounded-full border border-gray-200 bg-white p-1.5 shadow-sm"
            >
              {tools.tabs.map((tab, i) => {
                const TabIcon = tab.icon;
                const active = activeTab === i;
                return (
                  <button
                    key={tab.key}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-all sm:px-6 ${
                      active
                        ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md'
                        : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
                    }`}
                  >
                    <TabIcon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {currentTab.items.map((tool) => {
              const ToolIcon = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                    <ToolIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 sm:text-lg">{tool.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{tool.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================== PROCESS =========================== */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={process.badge}
            badgeIcon={process.badgeIcon}
            title={process.title}
            subtitle={process.subtitle}
          />

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {process.items.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-xl sm:p-8"
                >
                  <span className="pointer-events-none absolute -right-2 -top-4 select-none text-8xl font-black text-green-50">
                    {step.step}
                  </span>
                  <div className="relative">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-500 text-white shadow-md">
                      <StepIcon className="h-6 w-6" />
                    </div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-green-600">
                      Step {step.step}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= TESTIMONIALS ========================= */}
      <section
        id={testimonials.id}
        className="bg-gradient-to-b from-white to-green-50/70 py-16 sm:py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={testimonials.badge}
            badgeIcon={testimonials.badgeIcon ?? Star}
            title={testimonials.title}
            subtitle={testimonials.subtitle}
          />

          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {testimonials.items.map((t) => (
              <figure
                key={t.name}
                className="relative flex flex-col rounded-3xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-xl sm:p-8"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-green-100" />
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="flex-1 text-base leading-relaxed text-gray-700">
                  &ldquo;{t.content}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-500 text-sm font-bold text-white">
                    {initials(t.name)}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500 sm:text-sm">{t.role}</p>
                    {t.tag && <p className="mt-0.5 text-xs font-semibold text-green-600">{t.tag}</p>}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ PRICING ============================ */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={pricing.badge ?? 'Transparent Pricing'}
            badgeIcon={pricing.badgeIcon ?? Award}
            title={pricing.title}
            subtitle={pricing.subtitle}
          />

          <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
            {pricing.items.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border-2 bg-white p-6 transition-all duration-300 sm:p-8 ${
                  plan.popular
                    ? 'border-green-500 shadow-2xl shadow-green-500/15 lg:-my-4'
                    : 'border-gray-200 hover:border-green-300 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-green-600 to-green-500 px-5 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">{plan.price}</span>
                  <span className="text-sm font-medium text-gray-500">{plan.period}</span>
                </div>

                <ul className="my-8 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-700 sm:text-base">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button
                    className={`h-12 w-full rounded-xl text-base font-semibold text-white ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-600 to-green-500 shadow-lg shadow-green-500/25 hover:from-green-700 hover:to-green-600'
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= CTA ============================= */}
      <section id="contact" className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-green-700 via-green-600 to-green-600 px-6 py-14 text-center shadow-2xl shadow-green-900/20 sm:px-12 sm:py-20">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />

          <div className="relative">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <CtaIcon className="h-9 w-9 text-white" />
            </div>

            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-extrabold text-white sm:text-4xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-green-50 sm:text-lg">{cta.description}</p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href={cta.primary.href} className="w-full sm:w-auto">
                <Button className="group h-12 w-full rounded-xl bg-white px-8 text-base font-semibold text-green-700 shadow-xl hover:bg-green-50 sm:w-auto">
                  {cta.primary.label}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href={phone.href} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="h-12 w-full rounded-xl border-2 border-white/80 bg-transparent px-8 text-base font-semibold text-white hover:bg-white hover:text-green-700 sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Expert: {phone.display}
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-green-50">
              {cta.badges.map((b) => {
                const BIcon = b.icon;
                return (
                  <span key={b.text} className="flex items-center gap-2">
                    <BIcon className="h-5 w-5" /> {b.text}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile sticky action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/90 p-3 backdrop-blur-lg lg:hidden">
        <div className="mx-auto flex max-w-md gap-2">
          <Link href={phone.href} className="flex-1">
            <Button variant="outline" className="h-11 w-full rounded-xl border-green-500 font-semibold text-green-700">
              <Phone className="mr-2 h-4 w-4" />
              Call
            </Button>
          </Link>
          <Link href={hero.primary.href} className="flex-[2]">
            <Button className="h-11 w-full rounded-xl bg-gradient-to-r from-green-600 to-green-500 font-semibold text-white">
              Get Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
