'use client';

import { useRef, useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import {
  ArrowLeft, ArrowRight, BadgeCheck, Baby, Building2, CalendarCheck, CheckCircle2, Clock, ClipboardCheck,
  Eye, FlaskConical, Globe, HeartPulse, Mail, MapPin, Megaphone, MessageCircle, Monitor, Palette,
  Phone, Rocket, Search, Send, ShieldCheck, Smile, Sparkles, Star, Stethoscope, Target,
  TrendingUp, User, Users, Wrench, HelpCircle, Share2, Loader2,
  type LucideIcon,
} from 'lucide-react';

/* ───────────────────────── Config ───────────────────────── */

const PHONE_DISPLAY = '+91 83768 17258';
const PHONE_HREF = 'tel:+918376817258';
const WHATSAPP_HREF =
  'https://wa.me/918376817258?text=' +
  encodeURIComponent('Hi Web Leading India Team! I would like a free marketing audit for my practice.');
const EMAIL = 'info@webleadingindia.com';
const ENDPOINT = 'https://www.webleadingindia.com/mail/inquiry.php';

type Option = { id: string; name: string; desc?: string; icon: LucideIcon };

const practiceTypes: Option[] = [
  { id: 'hospital', name: 'Hospital', icon: Building2 },
  { id: 'multi-clinic', name: 'Multi-Specialty Clinic', icon: Users },
  { id: 'dental', name: 'Dental Clinic', icon: Smile },
  { id: 'ivf', name: 'Fertility & IVF', icon: Baby },
  { id: 'eye', name: 'Eye Care', icon: Eye },
  { id: 'skin', name: 'Skin & Aesthetics', icon: Sparkles },
  { id: 'lab', name: 'Diagnostic Lab', icon: FlaskConical },
  { id: 'other', name: 'Other Practice', icon: Stethoscope },
];

const projectTypes: Option[] = [
  { id: 'new', name: 'Starting from scratch', desc: 'New practice or first-time marketing', icon: Rocket },
  { id: 'grow', name: 'Grow what I have', desc: 'More patients from existing channels', icon: TrendingUp },
  { id: 'revamp', name: 'Revamp my website', desc: 'Redesign or rebuild my online presence', icon: Monitor },
  { id: 'unsure', name: 'Not sure yet', desc: "Let's figure out the best plan together", icon: HelpCircle },
];

const services: Option[] = [
  { id: 'seo', name: 'Healthcare SEO', desc: 'Rank for the right patients', icon: Search },
  { id: 'local-seo', name: 'Local SEO & Maps', desc: 'Win "near me" searches', icon: MapPin },
  { id: 'google-ads', name: 'Google Ads & PPC', desc: 'Capture demand at scale', icon: Target },
  { id: 'meta-ads', name: 'Meta Ads', desc: 'Facebook & Instagram', icon: Megaphone },
  { id: 'web-design', name: 'Website Design', desc: 'Conversion-built clinic sites', icon: Monitor },
  { id: 'social', name: 'Social Media', desc: 'On-brand, always-on presence', icon: Share2 },
  { id: 'reputation', name: 'Reputation Management', desc: 'Reviews, ratings & trust', icon: Star },
  { id: 'whatsapp', name: 'WhatsApp & Email', desc: 'Reminders and follow-ups', icon: MessageCircle },
  { id: 'branding', name: 'Branding', desc: 'Logo, identity & guidelines', icon: Palette },
  { id: 'booking', name: 'Appointment Booking', desc: 'Online booking system', icon: CalendarCheck },
  { id: 'maintenance', name: 'Website Maintenance', desc: 'Speed, security & support', icon: Wrench },
];

const budgetRanges: { id: string; name: string; note: string }[] = [
  { id: 'b1', name: 'Under ₹25,000', note: 'per month' },
  { id: 'b2', name: '₹25,000 – ₹50,000', note: 'per month' },
  { id: 'b3', name: '₹50,000 – ₹1,00,000', note: 'per month' },
  { id: 'b4', name: 'Above ₹1,00,000', note: 'per month' },
  { id: 'b5', name: 'Not sure yet', note: "we'll advise" },
];

const steps = [
  { title: 'About You', sub: 'How we reach you' },
  { title: 'Your Practice', sub: 'What you need' },
  { title: 'Goals & Budget', sub: 'Final details' },
];

const nextSteps = [
  { icon: ClipboardCheck, title: 'You submit the form', text: 'Takes under 2 minutes — no payment, no commitment.' },
  { icon: Search, title: 'We audit your presence', text: 'Google ranking, website, ads and competitors reviewed by a specialist.' },
  { icon: Users, title: 'Strategy call', text: 'We walk you through findings and a practical growth plan.' },
  { icon: Rocket, title: 'Launch & grow', text: 'If it is a fit, we start — with clear reporting from day one.' },
];

const faqs = [
  { q: 'Is the audit really free?', a: 'Yes. The audit and strategy call are completely free with no obligation to hire us.' },
  { q: 'How soon will I hear back?', a: 'Our team responds within one business day — usually much sooner on working hours.' },
  { q: 'Do you only work with healthcare?', a: 'Yes. Clinics, hospitals, allied health, aesthetics and healthcare retail are all we do.' },
  { q: 'What if I do not know my budget?', a: 'Pick "Not sure yet". We will suggest options that fit your goals and patient volume.' },
];

/* ───────────────────────── Types ───────────────────────── */

interface FormData {
  name: string;
  email: string;
  phone: string;
  clinicName: string;
  city: string;
  website: string;
  practiceType: string;
  projectType: string;
  services: string[];
  budget: string;
  description: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const EMPTY: FormData = {
  name: '', email: '', phone: '', clinicName: '', city: '', website: '',
  practiceType: '', projectType: '', services: [], budget: '', description: '',
};

/* ───────────────────────── Small UI pieces ───────────────────────── */

function TextField({
  id, label, icon: Icon, error, required, optional, ...props
}: {
  id: string; label: string; icon: LucideIcon; error?: string; required?: boolean; optional?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-center justify-between text-sm font-medium text-gray-800">
        <span>
          {label}
          {required && <span className="text-green-600"> *</span>}
        </span>
        {optional && <span className="text-xs font-normal text-gray-400">Optional</span>}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400" />
        <input
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
          className={`h-12 w-full rounded-xl border bg-white pl-11 pr-4 text-[15px] text-gray-900 outline-none transition placeholder:text-gray-400 focus:ring-4 ${
            error
              ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
              : 'border-gray-200 hover:border-gray-300 focus:border-green-500 focus:ring-green-100'
          }`}
          {...props}
        />
      </div>
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function OptionCard({
  selected, onClick, icon: Icon, title, desc, multi, compact,
}: {
  selected: boolean; onClick: () => void; icon: LucideIcon; title: string; desc?: string; multi?: boolean; compact?: boolean;
}) {
  return (
    <button
      type="button"
      role={multi ? 'checkbox' : 'radio'}
      aria-checked={selected}
      onClick={onClick}
      className={`group relative flex w-full items-center gap-3 rounded-2xl border text-left transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-100 ${
        compact ? 'p-3' : 'p-3.5'
      } ${
        selected
          ? 'border-green-500 bg-green-50/80 shadow-[0_8px_24px_-12px_rgba(16,185,129,0.5)]'
          : 'border-gray-200 bg-white hover:-translate-y-0.5 hover:border-green-300 hover:shadow-md'
      }`}
    >
      <span
        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ring-1 transition-colors ${
          selected ? 'bg-green-600 text-white ring-green-600' : 'bg-green-50 text-green-700 ring-green-100 group-hover:bg-green-100'
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[14.5px] font-semibold leading-tight text-gray-900">{title}</span>
        {desc && <span className="mt-0.5 block text-[12.5px] leading-snug text-gray-500">{desc}</span>}
      </span>
      <span
        className={`flex h-5 w-5 flex-shrink-0 items-center justify-center border-2 transition-all ${
          multi ? 'rounded-md' : 'rounded-full'
        } ${selected ? 'border-green-600 bg-green-600 text-white' : 'border-gray-300 bg-white text-transparent'}`}
      >
        <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
    </button>
  );
}

/* ───────────────────────── Page ───────────────────────── */

export default function QuotePage() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formTop = useRef<HTMLDivElement>(null);

  const totalSteps = steps.length;

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const toggleService = (id: string) =>
    set('services', form.services.includes(id) ? form.services.filter((s) => s !== id) : [...form.services, id]);

  const labelOf = (list: { id: string; name: string }[], id: string) => list.find((o) => o.id === id)?.name ?? id;

  const validate = (s: number): boolean => {
    const e: FormErrors = {};
    if (s === 1) {
      if (!form.name.trim()) e.name = 'Please enter your name';
      if (!form.email.trim()) e.email = 'Please enter your email';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';
      const digits = form.phone.replace(/\D/g, '');
      if (!digits) e.phone = 'Please enter your phone number';
      else if (digits.length < 10 || digits.length > 15) e.phone = 'Enter a valid phone number (10–15 digits)';
    }
    if (s === 2) {
      if (!form.practiceType) e.practiceType = 'Select your practice type';
      if (!form.projectType) e.projectType = 'Tell us where you are today';
      if (form.services.length === 0) e.services = 'Select at least one service';
    }
    if (s === 3) {
      if (!form.budget) e.budget = 'Select a monthly budget range';
      if (!form.description.trim()) e.description = 'Tell us a little about your goals';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const scrollToForm = () =>
    setTimeout(() => formTop.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30);

  const goNext = () => {
    if (validate(step)) {
      setStep((s) => s + 1);
      scrollToForm();
    }
  };
  const goBack = () => {
    setErrors({});
    setStep((s) => s - 1);
    scrollToForm();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) return goNext();
    if (!validate(step)) return;

    setIsSubmitting(true);
    const extra = [
      form.clinicName && `Clinic / Practice: ${form.clinicName}`,
      form.city && `City: ${form.city}`,
      form.website && `Website: ${form.website}`,
      `Practice type: ${labelOf(practiceTypes, form.practiceType)}`,
    ]
      .filter(Boolean)
      .join('\n');

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      projectType: labelOf(projectTypes, form.projectType),
      services: form.services.map((id) => labelOf(services, id)),
      budget: labelOf(budgetRanges, form.budget),
      description: `${form.description.trim()}\n\n— Details —\n${extra}`,
      // Extra fields (backend ignore kare to koi dikkat nahi — sab description me bhi hai)
      practiceType: labelOf(practiceTypes, form.practiceType),
      clinicName: form.clinicName.trim(),
      city: form.city.trim(),
      website: form.website.trim(),
    };

    try {
      await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
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
    setForm(EMPTY);
    setErrors({});
    setStep(1);
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
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-white shadow-xl shadow-green-600/30 [animation:quotePop_0.6s_ease-out]">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h1 className="mt-7 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              Thank you, {form.name.trim().split(' ')[0] || 'there'}! Your request is in.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-600">
              A healthcare marketing specialist will review your details and contact you within{' '}
              <strong className="font-semibold text-gray-900">24 hours</strong> with your free audit and next steps.
            </p>

            <div className="mx-auto mt-8 grid max-w-md gap-3 sm:grid-cols-2">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-green-600 px-6 text-sm font-semibold text-white shadow-lg shadow-green-600/25 transition hover:bg-green-700"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 text-sm font-semibold text-gray-800 transition hover:border-green-300 hover:text-green-700"
              >
                <Phone className="h-4 w-4" /> Call us now
              </a>
            </div>

            <button onClick={reset} className="mt-8 text-sm font-medium text-green-700 underline-offset-4 hover:underline">
              Submit another request
            </button>
          </div>
        </section>
        <Footer />
        <style>{`@keyframes quotePop { 0% { transform: scale(0.4); opacity: 0 } 70% { transform: scale(1.1) } 100% { transform: scale(1); opacity: 1 } }`}</style>
      </main>
    );
  }

  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <main className="min-h-screen bg-white pb-16 md:pb-0">
      <Navbar />

      {/* ───────── Hero ───────── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-green-50 via-white to-white px-4 pb-12 pt-32 sm:pt-36">
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
            <Sparkles className="h-4 w-4" /> Free for clinics, hospitals & doctors
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Get your free{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              marketing audit
            </span>{' '}
            & quote
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Answer three quick steps. We will review your online presence and send a clear plan to bring in more
            patients — no obligation.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-700">
            {['100% free audit', 'Reply within 24 hours', 'Healthcare specialists only'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-green-600" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Form + aside ───────── */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.55fr_1fr] lg:gap-10">
          {/* Form card */}
          <div ref={formTop} className="scroll-mt-28">
            <div className="overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-[0_40px_80px_-40px_rgba(16,185,129,0.35)]">
              <div className="h-1 w-full bg-gradient-to-r from-green-700 via-green-500 to-green-700" />

              {/* Stepper */}
              <div className="border-b border-gray-100 bg-gray-50/60 px-5 py-5 sm:px-8">
                <div className="relative">
                  <div className="absolute left-4 right-4 top-4 h-0.5 bg-gray-200" />
                  <div
                    className="absolute left-4 top-4 h-0.5 bg-green-500 transition-all duration-500"
                    style={{ width: `calc((100% - 2rem) * ${progress / 100})` }}
                  />
                  <ol className="relative flex items-start justify-between">
                    {steps.map((s, i) => {
                      const n = i + 1;
                      const done = n < step;
                      const on = n === step;
                      return (
                        <li key={s.title} className="flex w-24 flex-col items-center text-center sm:w-32">
                          <span
                            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ring-4 ring-gray-50 transition-all duration-300 ${
                              done
                                ? 'bg-green-600 text-white'
                                : on
                                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                                  : 'border border-gray-300 bg-white text-gray-400'
                            }`}
                            aria-current={on ? 'step' : undefined}
                          >
                            {done ? <CheckCircle2 className="h-4 w-4" /> : n}
                          </span>
                          <span className={`mt-2 text-xs font-semibold sm:text-sm ${on || done ? 'text-gray-900' : 'text-gray-400'}`}>
                            {s.title}
                          </span>
                          <span className="hidden text-[11px] text-gray-400 sm:block">{s.sub}</span>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div key={step} className="px-5 py-7 sm:px-8 sm:py-9 [animation:quoteStepIn_0.45s_ease-out]">
                  {/* Step 1 */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-2xl font-semibold tracking-tight text-gray-950">Let&apos;s start with you</h2>
                      <p className="mt-1.5 text-gray-500">So our specialist knows who to get in touch with.</p>

                      <div className="mt-7 grid gap-5 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <TextField
                            id="name" label="Your name" icon={User} required placeholder="Dr. Anita Sharma"
                            autoComplete="name" value={form.name} error={errors.name}
                            onChange={(e) => set('name', e.target.value)}
                          />
                        </div>
                        <TextField
                          id="phone" label="Phone / WhatsApp" icon={Phone} required type="tel" inputMode="tel"
                          placeholder="98765 43210" autoComplete="tel" value={form.phone} error={errors.phone}
                          onChange={(e) => set('phone', e.target.value.replace(/[^\d+\s-]/g, ''))}
                        />
                        <TextField
                          id="email" label="Email address" icon={Mail} required type="email"
                          placeholder="you@clinic.com" autoComplete="email" value={form.email} error={errors.email}
                          onChange={(e) => set('email', e.target.value)}
                        />
                        <TextField
                          id="clinicName" label="Clinic / hospital name" icon={Building2} optional
                          placeholder="Sharma Dental Care" value={form.clinicName}
                          onChange={(e) => set('clinicName', e.target.value)}
                        />
                        <TextField
                          id="city" label="City" icon={MapPin} optional placeholder="Delhi"
                          autoComplete="address-level2" value={form.city}
                          onChange={(e) => set('city', e.target.value)}
                        />
                        <div className="sm:col-span-2">
                          <TextField
                            id="website" label="Website" icon={Globe} optional placeholder="www.yourclinic.com"
                            autoComplete="url" value={form.website}
                            onChange={(e) => set('website', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div className="space-y-9">
                      <div>
                        <h2 className="text-2xl font-semibold tracking-tight text-gray-950">Tell us about your practice</h2>
                        <p className="mt-1.5 text-gray-500">We tailor the audit to your specialty and goals.</p>
                      </div>

                      <fieldset>
                        <legend className="mb-3 text-[15px] font-semibold text-gray-900">
                          What kind of practice is it? <span className="text-green-600">*</span>
                        </legend>
                        <div role="radiogroup" className="grid grid-cols-2 gap-3 md:grid-cols-4">
                          {practiceTypes.map((p) => {
                            const on = form.practiceType === p.id;
                            const Icon = p.icon;
                            return (
                              <button
                                key={p.id}
                                type="button"
                                role="radio"
                                aria-checked={on}
                                onClick={() => set('practiceType', p.id)}
                                className={`flex flex-col items-center gap-2 rounded-2xl border px-2 py-4 text-center transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-100 ${
                                  on
                                    ? 'border-green-500 bg-green-50/80 shadow-[0_8px_24px_-12px_rgba(16,185,129,0.5)]'
                                    : 'border-gray-200 bg-white hover:-translate-y-0.5 hover:border-green-300 hover:shadow-md'
                                }`}
                              >
                                <span
                                  className={`flex h-10 w-10 items-center justify-center rounded-xl ring-1 transition-colors ${
                                    on ? 'bg-green-600 text-white ring-green-600' : 'bg-green-50 text-green-700 ring-green-100'
                                  }`}
                                >
                                  <Icon className="h-5 w-5" />
                                </span>
                                <span className="text-[13px] font-semibold leading-tight text-gray-900">{p.name}</span>
                              </button>
                            );
                          })}
                        </div>
                        {errors.practiceType && <p className="mt-2 text-sm text-red-600">{errors.practiceType}</p>}
                      </fieldset>

                      <fieldset>
                        <legend className="mb-3 text-[15px] font-semibold text-gray-900">
                          Where are you today? <span className="text-green-600">*</span>
                        </legend>
                        <div role="radiogroup" className="grid gap-3 sm:grid-cols-2">
                          {projectTypes.map((p) => (
                            <OptionCard
                              key={p.id} selected={form.projectType === p.id} icon={p.icon}
                              title={p.name} desc={p.desc} onClick={() => set('projectType', p.id)}
                            />
                          ))}
                        </div>
                        {errors.projectType && <p className="mt-2 text-sm text-red-600">{errors.projectType}</p>}
                      </fieldset>

                      <fieldset>
                        <legend className="mb-1 text-[15px] font-semibold text-gray-900">
                          Which services interest you? <span className="text-green-600">*</span>
                        </legend>
                        <p className="mb-3 text-sm text-gray-500">Select all that apply.</p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {services.map((s) => (
                            <OptionCard
                              key={s.id} multi compact selected={form.services.includes(s.id)} icon={s.icon}
                              title={s.name} desc={s.desc} onClick={() => toggleService(s.id)}
                            />
                          ))}
                        </div>
                        {errors.services && <p className="mt-2 text-sm text-red-600">{errors.services}</p>}
                      </fieldset>
                    </div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-semibold tracking-tight text-gray-950">Goals & budget</h2>
                        <p className="mt-1.5 text-gray-500">Last step — this helps us recommend the right mix.</p>
                      </div>

                      <fieldset>
                        <legend className="mb-3 text-[15px] font-semibold text-gray-900">
                          Monthly marketing budget <span className="text-green-600">*</span>
                        </legend>
                        <div role="radiogroup" className="grid gap-3 sm:grid-cols-2">
                          {budgetRanges.map((b) => {
                            const on = form.budget === b.id;
                            return (
                              <button
                                key={b.id}
                                type="button"
                                role="radio"
                                aria-checked={on}
                                onClick={() => set('budget', b.id)}
                                className={`flex items-center justify-between rounded-2xl border px-4 py-3.5 text-left transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-100 ${
                                  on
                                    ? 'border-green-500 bg-green-50/80 shadow-[0_8px_24px_-12px_rgba(16,185,129,0.5)]'
                                    : 'border-gray-200 bg-white hover:-translate-y-0.5 hover:border-green-300 hover:shadow-md'
                                }`}
                              >
                                <span>
                                  <span className="block text-[14.5px] font-semibold text-gray-900">{b.name}</span>
                                  <span className="block text-xs text-gray-500">{b.note}</span>
                                </span>
                                <span
                                  className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
                                    on ? 'border-green-600 bg-green-600 text-white' : 'border-gray-300 text-transparent'
                                  }`}
                                >
                                  <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={3} />
                                </span>
                              </button>
                            );
                          })}
                        </div>
                        {errors.budget && <p className="mt-2 text-sm text-red-600">{errors.budget}</p>}
                      </fieldset>

                      <div>
                        <label htmlFor="description" className="mb-1.5 block text-[15px] font-semibold text-gray-900">
                          What do you want to achieve? <span className="text-green-600">*</span>
                        </label>
                        <textarea
                          id="description"
                          rows={5}
                          value={form.description}
                          onChange={(e) => set('description', e.target.value)}
                          aria-invalid={!!errors.description}
                          placeholder="e.g. We want more implant patients in South Delhi, our website gets traffic but few calls, and competitors outrank us on Google Maps…"
                          className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-[15px] text-gray-900 outline-none transition placeholder:text-gray-400 focus:ring-4 ${
                            errors.description
                              ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                              : 'border-gray-200 hover:border-gray-300 focus:border-green-500 focus:ring-green-100'
                          }`}
                        />
                        {errors.description && <p className="mt-1.5 text-sm text-red-600">{errors.description}</p>}
                      </div>

                      {/* Review */}
                      <div className="rounded-2xl border border-green-100 bg-green-50/60 p-4 sm:p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">Your request</p>
                        <p className="mt-2 text-sm text-gray-700">
                          <strong className="font-semibold text-gray-900">{form.name || '—'}</strong>
                          {form.clinicName && ` · ${form.clinicName}`}
                          {form.city && ` · ${form.city}`}
                          {form.practiceType && ` · ${labelOf(practiceTypes, form.practiceType)}`}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {form.services.map((id) => (
                            <span
                              key={id}
                              className="rounded-full bg-white px-3 py-1 text-xs font-medium text-green-800 ring-1 ring-green-200"
                            >
                              {labelOf(services, id)}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-3 border-t border-gray-100 bg-gray-50/60 px-5 py-4 sm:px-8">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={goBack}
                      className="inline-flex h-12 items-center gap-2 rounded-full border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-700 transition hover:border-green-300 hover:text-green-700"
                    >
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                  ) : (
                    <span className="hidden items-center gap-2 text-xs text-gray-500 sm:flex">
                      <ShieldCheck className="h-4 w-4 text-green-600" /> Your details stay private. No spam.
                    </span>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group ml-auto inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-700 px-7 text-sm font-semibold text-white shadow-lg shadow-green-600/30 transition-all hover:from-green-700 hover:to-green-800 hover:shadow-green-600/40 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {step < totalSteps ? (
                      <>
                        Continue <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    ) : isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Get my free audit <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            <p className="mt-4 text-center text-xs text-gray-400">
              By submitting, you agree to be contacted about your request. We never share your information.
            </p>
          </div>

          {/* Aside */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-700 via-green-600 to-green-800 p-7 text-white shadow-[0_40px_80px_-40px_rgba(16,185,129,0.7)]">
              <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-yellow-300/20 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur">
                  <HeartPulse className="h-3.5 w-3.5 text-yellow-300" /> What you get
                </span>
                <h2 className="mt-5 text-2xl font-semibold leading-snug tracking-tight">
                  A clear plan to fill your appointment book
                </h2>
                <ul className="mt-6 space-y-3.5">
                  {[
                    'Google ranking & Maps visibility check',
                    'Website speed, SEO & conversion review',
                    'Competitor snapshot in your city',
                    'Recommended channels and budget split',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-[14.5px] text-green-50">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-300" />
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 grid grid-cols-3 gap-2 border-t border-white/20 pt-5 text-center">
                  {[
                    ['200+', 'Clients'],
                    ['95%', 'Satisfaction'],
                    ['24h', 'Response'],
                  ].map(([v, l]) => (
                    <div key={l}>
                      <p className="text-2xl font-bold">{v}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-green-100/80">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-gray-900">Prefer to talk right now?</p>
              <div className="mt-4 space-y-2.5">
                <a
                  href={PHONE_HREF}
                  className="group flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition hover:border-green-300 hover:bg-green-50/60"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-700 ring-1 ring-green-100">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs text-gray-500">Call us</span>
                    <span className="block text-sm font-semibold text-gray-900">{PHONE_DISPLAY}</span>
                  </span>
                </a>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition hover:border-green-300 hover:bg-green-50/60"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-700 ring-1 ring-green-100">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs text-gray-500">WhatsApp</span>
                    <span className="block text-sm font-semibold text-gray-900">Chat with our team</span>
                  </span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition hover:border-green-300 hover:bg-green-50/60"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-700 ring-1 ring-green-100">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-gray-500">Email</span>
                    <span className="block truncate text-sm font-semibold text-gray-900">{EMAIL}</span>
                  </span>
                </a>
              </div>
              <p className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                <Clock className="h-3.5 w-3.5 text-green-600" /> Mon–Sat, 10 AM – 7 PM IST
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ───────── What happens next ───────── */}
      <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green-600">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              What happens after you submit
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {nextSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
                >
                  <span className="absolute right-5 top-4 text-4xl font-bold text-green-100">{i + 1}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-700 ring-1 ring-green-100">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[16px] font-semibold text-gray-950">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{s.text}</p>
                </div>
              );
            })}
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
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-gray-900">
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

      <Footer />

      <style>{`
        @keyframes quoteStepIn {
          from { opacity: 0; transform: translateX(18px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="quoteStepIn"], .\\[animation\\:quoteStepIn_0\\.45s_ease-out\\] { animation: none !important; }
        }
      `}</style>
    </main>
  );
}