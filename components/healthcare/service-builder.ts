import {
  Activity, Award, BadgeCheck, BarChart3, Bell, Briefcase, Building2, Calendar, CalendarCheck, Camera,
  CheckCircle2, ClipboardList, Clock, Code2, Database, Eye, Film, FileText, Gauge, Globe, Heart, Layers,
  LineChart, Link as LinkIcon, Lock, Mail, MapPin, Megaphone, MessageCircle, Mic, Monitor, MousePointerClick,
  Palette, PenLine, Phone, PlayCircle, RefreshCw, Rocket, Search, Send, Settings, Share2, Shield, ShieldCheck,
  ShoppingBag, Smartphone, Sparkles, Star, Stethoscope, Tag, Target, ThumbsUp, TrendingUp, UserRound, Users,
  Video, Wrench, Zap,
} from 'lucide-react';
import type { IconType, ServicePageProps } from './service-page';

export const ICONS: Record<string, IconType> = {
  Activity, Award, BadgeCheck, BarChart3, Bell, Briefcase, Building2, Calendar, CalendarCheck, Camera,
  CheckCircle2, ClipboardList, Clock, Code2, Database, Eye, Film, FileText, Gauge, Globe, Heart, Layers,
  LineChart, LinkIcon, Lock, Mail, MapPin, Megaphone, MessageCircle, Mic, Monitor, MousePointerClick,
  Palette, PenLine, Phone, PlayCircle, RefreshCw, Rocket, Search, Send, Settings, Share2, Shield, ShieldCheck,
  ShoppingBag, Smartphone, Sparkles, Star, Stethoscope, Tag, Target, ThumbsUp, TrendingUp, UserRound, Users,
  Video, Wrench, Zap,
};

const ic = (n: string): IconType => ICONS[n] ?? Sparkles;

const ACCENTS = [
  'from-emerald-500 to-teal-500',
  'from-green-500 to-lime-500',
  'from-violet-500 to-fuchsia-500',
  'from-orange-500 to-amber-500',
  'from-sky-500 to-indigo-500',
  'from-rose-500 to-pink-500',
];
const STEP_ICONS = ['Stethoscope', 'Target', 'Zap', 'Rocket', 'Eye', 'BarChart3'];

/** Serializable (string-only) config: safe to read in server components for metadata. */
export interface ServiceCfg {
  slug: string;
  short: string; // e.g. "Local SEO"
  metaTitle: string;
  metaDesc: string;
  keywords: string[];
  badge: [string, string]; // icon, text
  hero: [string, string, string]; // before, accent, after
  desc: string;
  cta: string;
  dash: [string, string, string, [string, string, string][], string, string];
  stats: [string, string, string][]; // value, label, icon
  svc: [string, string, [string, string, string, string][]]; // title, subtitle, items[icon,title,desc,"f1|f2|f3|f4"]
  tools: [string, string, [string, string, [string, string][]][]]; // title, subtitle, tabs[label, icon, items[name, desc]]
  steps: [string, string][];
  proof: [string, string, string][];
  plans: [string, string, string, string, string, string][]; // name, price, period, desc, "f|f|f", cta
  end: [string, string, string]; // icon, title, desc
}

export function buildService(c: ServiceCfg): ServicePageProps {
  const [dIcon, dTitle, dSub, dRows, dFL, dFV] = c.dash;
  return {
    hero: {
      badge: { icon: ic(c.badge[0]), text: c.badge[1] },
      before: c.hero[0],
      accent: c.hero[1],
      after: c.hero[2],
      description: c.desc,
      primary: { label: c.cta, href: '/quote' },
      secondary: { label: 'Contact Us', href: '/contact', icon: Eye },
      trust: 'Trusted by 200+ Healthcare Providers',
      rating: '4.9/5 Rating',
    },
    dashboard: {
      icon: ic(dIcon),
      title: dTitle,
      subtitle: dSub,
      badge: 'Live',
      rows: dRows.map(([label, value, change]) => ({ label, value, change })),
      footerLabel: dFL,
      footerValue: dFV,
      footerIcon: TrendingUp,
    },
    stats: c.stats.map(([value, label, icon]) => ({ value, label, icon: ic(icon) })),
    services: {
      badge: 'Healthcare Specialized',
      badgeIcon: BadgeCheck,
      title: c.svc[0],
      subtitle: c.svc[1],
      defaultCta: 'Learn More',
      defaultHref: '/contact',
      items: c.svc[2].map(([icon, title, description, f], i) => ({
        icon: ic(icon),
        title,
        description,
        features: f.split('|'),
        accent: ACCENTS[i % ACCENTS.length],
      })),
    },
    tools: {
      title: c.tools[0],
      subtitle: c.tools[1],
      tabs: c.tools[2].map(([label, icon, items], i) => ({
        key: `t${i}`,
        label,
        icon: ic(icon),
        items: items.map(([name, description], j) => ({ name, description, icon: ic(STEP_ICONS[(i + j) % 6]) })),
      })),
    },
    process: {
      badge: 'Proven Process',
      badgeIcon: Zap,
      title: `Our ${c.short} Process`,
      subtitle: `A structured, results-driven approach designed specifically for healthcare ${c.short.toLowerCase()} success.`,
      items: c.steps.map(([title, description], i) => ({
        step: String(i + 1).padStart(2, '0'),
        title,
        description,
        icon: ic(STEP_ICONS[i % 6]),
      })),
    },
    testimonials: {
      id: 'casestudies',
      badge: 'Success Stories',
      title: 'Trusted by Healthcare Professionals',
      subtitle: `See how our ${c.short.toLowerCase()} work has helped medical practices grow.`,
      items: c.proof.map(([name, role, content]) => ({ name, role, content, rating: 5 })),
    },
    pricing: {
      title: `${c.short} Packages`,
      subtitle: 'Clear pricing for every stage of your practice. Custom plans available for hospital groups.',
      items: c.plans.map(([name, price, period, description, f, cta], i) => ({
        name, price, period, description, features: f.split('|'), cta, popular: i === 1,
      })),
    },
    cta: {
      icon: ic(c.end[0]),
      title: c.end[1],
      description: c.end[2],
      primary: { label: c.cta, href: '/quote' },
      badges: [
        { icon: ShieldCheck, text: 'Healthcare Specialized' },
        { icon: Clock, text: 'Fast Turnaround' },
        { icon: Award, text: 'Certified Experts' },
        { icon: LineChart, text: 'Transparent Reporting' },
      ],
    },
  };
}
