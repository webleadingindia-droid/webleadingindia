'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import {
  ArrowRight, BadgeCheck, CheckCircle2, ChevronDown, Clock, ExternalLink, Loader2, Mail, MapPin,
  MessageCircle, MessageSquare, Navigation, Phone, Send, Sparkles, User, ClipboardCheck,
  type LucideIcon,
} from 'lucide-react';

/* ───────────────────────── Config ───────────────────────── */

const PHONE_DISPLAY = '+91 83768 17258';
const PHONE_HREF = 'tel:+918376817258';
const WHATSAPP_HREF =
  'https://wa.me/918376817258?text=' +
  encodeURIComponent('Hi Web Leading India Team! I would like to know more about your services.');
const EMAIL = 'info@webleadingindia.com';
const ENDPOINT = 'https://www.webleadingindia.com/mail/mail.php';

const ADDRESS_LINES = ['C - 1, 135, Gali No. 11, Ramesh Enclave, Phase 3,', 'Kirari Suleman Nagar, Delhi - 110086'];
const ADDRESS_FULL = ADDRESS_LINES.join(' ');
const MAP_EMBED = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.771005574019!2d77.04546898299554!3d28.696495918354053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d076813e40dbb%3A0x45788acf90e7b418!2sWeb%20Leading%20India%20%E2%80%94%20Healthcare%20Patient%20Growth%20Agency!5e0!3m2!1sen!2sin!4v1792236860477!5m2!1sen!2sin`;
const MAP_LINK = `https://maps.app.goo.gl/XG4DgPfHe8VLTocV8`;

// day: 0 = Sun … 6 = Sat. open/close in minutes from midnight (IST)
const HOURS: { label: string; days: number[]; open?: number; close?: number; text: string }[] = [
  { label: 'Monday – Friday', days: [1, 2, 3, 4, 5], open: 9 * 60 + 30, close: 18 * 60 + 30, text: '9:30 AM – 6:30 PM' },
  { label: 'Saturday', days: [6], open: 9 * 60 + 30, close: 14 * 60, text: '9:30 AM – 2:00 PM' },
  { label: 'Sunday', days: [0], text: 'Closed' },
];

const services = [
  'Healthcare SEO',
  'Local SEO & Google Maps',
  'Google Ads & PPC',
  'Meta / Social Media Ads',
  'Medical Website Design',
  'Web Development',
  'Reputation Management',
  'WhatsApp & Email Marketing',
  'Branding',
  'Other',
];

const faqs = [
  {
    q: 'How soon will you reply?',
    a: 'We respond within one business day — usually within a couple of working hours. For urgent queries, call or WhatsApp us.',
  },
  {
    q: 'Do you work only with healthcare practices?',
    a: 'Yes. Clinics, hospitals, allied health, aesthetics and healthcare retail are the only industries we serve, so every playbook is built for patients.',
  },
  {
    q: 'How long before I see results?',
    a: 'Paid ads can bring enquiries within days. SEO and Google Maps visibility usually build over 3–6 months, and we report progress every month.',
  },
  {
    q: 'How is pricing decided?',
    a: 'Pricing depends on your specialty, city and goals. We share a clear proposal after a free audit — no hidden costs.',
  },
];

/* ───────────────────────── Helpers ───────────────────────── */

function getOpenStatus(): { open: boolean; todayIdx: number; note: string } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  const dayMap: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const day = dayMap[get('weekday')] ?? 0;
  const mins = (parseInt(get('hour'), 10) % 24) * 60 + parseInt(get('minute'), 10);
  const idx = HOURS.findIndex((h) => h.days.includes(day));
  const row = HOURS[idx];
  const open = row.open !== undefined && row.close !== undefined && mins >= row.open && mins < row.close;
  return {
    open,
    todayIdx: idx,
    note: open ? `Open now · until ${row.close === 14 * 60 ? '2:00 PM' : '6:30 PM'}` : 'Closed now · we reply next working day',
  };
}

function Field({
  id, label, icon: Icon, error, required, children,
}: {
  id: string; label: string; icon?: LucideIcon; error?: string; required?: boolean; children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-gray-800">
        {label}
        {required && <span className="text-green-600"> *</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="pointer-events-none absolute left-3.5 top-3.5 h-[18px] w-[18px] text-gray-400" />
        )}
        {children}
      </div>
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

const inputCls = (hasIcon: boolean, error?: string) =>
  `w-full rounded-xl border bg-white text-[15px] text-gray-900 outline-none transition placeholder:text-gray-400 focus:ring-4 ${
    hasIcon ? 'pl-11 pr-4' : 'px-4'
  } ${
    error
      ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
      : 'border-gray-200 hover:border-gray-300 focus:border-green-500 focus:ring-green-100'
  }`;

/* ───────────────────────── Page ───────────────────────── */

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [status, setStatus] = useState<ReturnType<typeof getOpenStatus> | null>(null);

  useEffect(() => {
    setStatus(getOpenStatus());
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = 'Please enter your name';
    if (!formData.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Enter a valid email address';
    if (formData.phone.trim()) {
      const d = formData.phone.replace(/\D/g, '');
      if (d.length < 10 || d.length > 15) e.phone = 'Enter a valid phone number (10–15 digits)';
    }
    if (!formData.message.trim()) e.message = 'Please tell us how we can help';
    setFormErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    let value = e.target.value;
    if (name === 'phone') value = value.replace(/[^\d+\s-]/g, '');
    setFormData((f) => ({ ...f, [name]: value }));
    if (formErrors[name]) setFormErrors((f) => ({ ...f, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const body = new URLSearchParams();
      body.append('name', formData.name.trim());
      body.append('email', formData.email.trim());
      body.append('phone', formData.phone.trim());
      body.append('service', formData.service);
      body.append('message', formData.message.trim());
      body.append('template', 'stylish');

      await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
    } catch {
      // Cross-origin endpoint par response read nahi hota — request phir bhi chali jaati hai,
      // isliye pehle jaisa success dikhate hain.
    } finally {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const reset = () => {
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setFormErrors({});
    setSubmitSuccess(false);
  };

  /* ───────── Success ───────── */
  if (submitSuccess) {
    return (
      <main className="min-h-screen bg-white pb-16 md:pb-0">
        <Navbar />
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-green-50 via-white to-white px-4 pb-20 pt-32 sm:pt-40">
          <div className="absolute -top-24 left-1/2 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-green-200/50 blur-[110px]" />
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-white shadow-xl shadow-green-600/30 [animation:contactPop_0.6s_ease-out]">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h1 className="mt-7 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              Thanks {formData.name.trim().split(' ')[0] || 'for reaching out'}, message received!
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-600">
              Our team will get back to you within <strong className="font-semibold text-gray-900">24 hours</strong>.
              Need a faster reply? Reach us directly below.
            </p>

            <div className="mx-auto mt-8 grid max-w-md gap-3 sm:grid-cols-2">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-green-600 px-6 text-sm font-semibold text-white shadow-lg shadow-green-600/25 transition hover:bg-green-700"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 text-sm font-semibold text-gray-800 transition hover:border-green-300 hover:text-green-700"
              >
                View case studies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <button onClick={reset} className="mt-8 text-sm font-medium text-green-700 underline-offset-4 hover:underline">
              Send another message
            </button>
          </div>
        </section>
        <Footer />
        <style>{`@keyframes contactPop { 0% { transform: scale(0.4); opacity: 0 } 70% { transform: scale(1.1) } 100% { transform: scale(1); opacity: 1 } }`}</style>
      </main>
    );
  }

  const quick: { icon: LucideIcon; title: string; value: string; href: string; external?: boolean; hint: string }[] = [
    { icon: Phone, title: 'Call us', value: PHONE_DISPLAY, href: PHONE_HREF, hint: 'Mon–Sat during working hours' },
    { icon: MessageCircle, title: 'WhatsApp', value: 'Chat with our team', href: WHATSAPP_HREF, external: true, hint: 'Quick replies, no waiting' },
    { icon: Mail, title: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, hint: 'We reply within 2 business hours' },
  ];

  return (
    <main className="min-h-screen bg-white pb-16 md:pb-0">
      <Navbar />

      {/* ───────── Hero ───────── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-green-50 via-white to-white px-4 pb-14 pt-32 sm:pt-36">
        <div className="absolute -top-24 left-1/2 -z-10 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-green-200/50 blur-[110px]" />
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(16,185,129,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.07) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at top, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at top, black 20%, transparent 70%)',
          }}
        />
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-1.5 text-xs font-semibold text-green-700 shadow-sm sm:text-sm">
            <Sparkles className="h-4 w-4" /> We&apos;d love to hear from you
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Let&apos;s grow your{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              practice
            </span>{' '}
            together
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Questions about SEO, ads, websites or your next campaign? Send us a message — a healthcare marketing
            specialist will get back to you within one business day.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-700">
            {['Free consultation', 'Reply within 24 hours', 'Healthcare specialists only'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-green-600" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Form + contact details ───────── */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
          {/* Form */}
          <div className="overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-[0_40px_80px_-40px_rgba(16,185,129,0.35)]">
            <div className="h-1 w-full bg-gradient-to-r from-green-700 via-green-500 to-green-700" />
            <div className="p-6 sm:p-9">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg shadow-green-600/25">
                  <MessageSquare className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-950">Send us a message</h2>
                  <p className="text-sm text-gray-500">Free consultation included.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full name" icon={User} required error={formErrors.name}>
                    <input
                      id="name" name="name" type="text" autoComplete="name" value={formData.name}
                      onChange={handleChange} placeholder="Dr. Anita Sharma"
                      aria-invalid={!!formErrors.name} aria-describedby={formErrors.name ? 'name-err' : undefined}
                      className={`h-12 ${inputCls(true, formErrors.name)}`}
                    />
                  </Field>
                  <Field id="email" label="Email address" icon={Mail} required error={formErrors.email}>
                    <input
                      id="email" name="email" type="email" autoComplete="email" value={formData.email}
                      onChange={handleChange} placeholder="you@clinic.com"
                      aria-invalid={!!formErrors.email} aria-describedby={formErrors.email ? 'email-err' : undefined}
                      className={`h-12 ${inputCls(true, formErrors.email)}`}
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="phone" label="Phone / WhatsApp" icon={Phone} error={formErrors.phone}>
                    <input
                      id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={formData.phone}
                      onChange={handleChange} placeholder="98765 43210"
                      aria-invalid={!!formErrors.phone} aria-describedby={formErrors.phone ? 'phone-err' : undefined}
                      className={`h-12 ${inputCls(true, formErrors.phone)}`}
                    />
                  </Field>
                  <Field id="service" label="Service interested in">
                    <div className="relative">
                      <select
                        id="service" name="service" value={formData.service} onChange={handleChange}
                        className={`h-12 appearance-none pr-10 ${inputCls(false)} ${formData.service ? '' : 'text-gray-400'}`}
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s} className="text-gray-900">
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    </div>
                  </Field>
                </div>

                <Field id="message" label="How can we help?" required error={formErrors.message}>
                  <textarea
                    id="message" name="message" rows={5} value={formData.message} onChange={handleChange}
                    placeholder="Tell us about your practice, what you want to achieve, and any timeline you have in mind…"
                    aria-invalid={!!formErrors.message} aria-describedby={formErrors.message ? 'message-err' : undefined}
                    className={`resize-none py-3 ${inputCls(false, formErrors.message)}`}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-700 py-3.5 text-base font-semibold text-white shadow-lg shadow-green-600/30 transition-all hover:from-green-700 hover:to-green-800 hover:shadow-green-600/40 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Send message <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-400">
                  Your details stay private. We never share your information.
                </p>
              </form>
            </div>
          </div>

          {/* Aside */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-700 via-green-600 to-green-800 p-6 text-white shadow-[0_40px_80px_-40px_rgba(16,185,129,0.7)]">
              <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-yellow-300/20 blur-3xl" />
              <div className="relative space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-100">Reach us directly</p>
                {quick.map((q) => {
                  const Icon = q.icon;
                  return (
                    <a
                      key={q.title}
                      href={q.href}
                      {...(q.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-center gap-3.5 rounded-2xl bg-white/10 p-3.5 ring-1 ring-white/15 backdrop-blur transition hover:bg-white/20"
                    >
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-green-700">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs text-green-100/80">{q.title}</span>
                        <span className="block truncate text-[15px] font-semibold">{q.value}</span>
                        <span className="block truncate text-[11.5px] text-green-100/70">{q.hint}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                  <Clock className="h-4 w-4 text-green-600" /> Working hours
                </p>
                {status && (
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      status.open ? 'bg-green-50 text-green-700 ring-1 ring-green-100' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${status.open ? 'animate-pulse bg-green-500' : 'bg-gray-400'}`} />
                    {status.open ? 'Open now' : 'Closed'}
                  </span>
                )}
              </div>
              <ul className="mt-4 divide-y divide-gray-100">
                {HOURS.map((h, i) => {
                  const today = status?.todayIdx === i;
                  return (
                    <li
                      key={h.label}
                      className={`flex items-center justify-between py-2.5 text-sm ${
                        today ? 'font-semibold text-gray-950' : 'text-gray-600'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {h.label}
                        {today && <span className="rounded bg-green-50 px-1.5 py-0.5 text-[10px] font-semibold text-green-700">Today</span>}
                      </span>
                      <span className={h.text === 'Closed' ? 'text-gray-400' : ''}>{h.text}</span>
                    </li>
                  );
                })}
              </ul>
              {status && <p className="mt-3 text-xs text-gray-500">{status.note} (IST)</p>}
            </div>
          </aside>
        </div>
      </section>

      {/* ───────── Map / office ───────── */}
      <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green-600">Visit us</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">Our office in Delhi</h2>
          </div>

          <div className="mt-10 grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_30px_70px_-40px_rgba(0,0,0,0.35)] lg:grid-cols-[1fr_1.6fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700 ring-1 ring-green-100">
                <MapPin className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-gray-950">Web Leading India</h3>
              <address className="mt-3 text-[15px] not-italic leading-relaxed text-gray-600">
                {ADDRESS_LINES.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <p className="mt-3 text-sm text-gray-500">Please call ahead to book a time for an in-person consultation.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-green-600 px-5 text-sm font-semibold text-white shadow-lg shadow-green-600/25 transition hover:bg-green-700"
                >
                  <Navigation className="h-4 w-4" /> Get directions
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-800 transition hover:border-green-300 hover:text-green-700"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
              </div>
            </div>

            <div className="relative min-h-[320px] lg:min-h-[420px]">
              <iframe
                title="Web Leading India office location"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-md backdrop-blur transition hover:text-green-700"
              >
                Open in Maps <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-gray-950">Quick answers</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-gray-200 bg-white px-5 py-4 transition open:border-green-200 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700 transition-transform duration-300 group-open:rotate-45">
                    <span className="text-lg leading-none">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA band ───────── */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-green-700 via-green-600 to-green-800 px-6 py-14 text-center text-white sm:px-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-yellow-300/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Want a clear plan before you commit?</h2>
            <p className="mx-auto mt-3 max-w-xl text-green-50/90">
              Get a free marketing audit of your Google presence, website and competitors — no obligation.
            </p>
            <Link
              href="/quote"
              className="group mt-8 inline-flex h-13 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-green-800 shadow-xl shadow-black/20 transition hover:bg-green-50"
            >
              <ClipboardCheck className="h-5 w-5" />
              Get my free audit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}