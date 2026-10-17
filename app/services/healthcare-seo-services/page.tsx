'use client';

import ServicePage, { ServicePageProps } from '@/components/healthcare/service-page';
import {
  Activity,
  Award,
  BadgeCheck,
  BarChart3,
  Clock,
  Eye,
  FileText,
  Globe,
  Heart,
  Link as LinkIcon,
  LineChart,
  MapPin,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Tag,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';

const props: ServicePageProps = {
  hero: {
    badge: { icon: ShieldCheck, text: 'Healthcare SEO Specialists' },
    before: 'Professional',
    accent: 'Healthcare SEO',
    after: 'Services',
    description:
      'Boost your medical website rankings and drive qualified patient traffic with expert healthcare SEO. Show up where patients are searching and turn visits into appointments.',
    primary: { label: 'Get Free SEO Audit', href: '/quote' },
    secondary: { label: 'Contact Us', href: '../contact', icon: Eye },
    trust: 'Trusted by 150+ Healthcare Providers',
    rating: '4.9/5 Rating',
  },
  dashboard: {
    icon: TrendingUp,
    title: 'Medical SEO Performance',
    subtitle: 'Real-time Ranking Analytics',
    badge: 'Live',
    rows: [
      { label: 'Top 3 Medical Keywords', value: '45', change: '+12' },
      { label: 'Monthly Patient Traffic', value: '8.2K', change: '+68%' },
      { label: 'Organic Conversions', value: '189', change: '+42%' },
      { label: 'Domain Authority', value: '48', change: '+15' },
    ],
    footerLabel: 'SEO Growth (6 Months)',
    footerValue: '312% Increase',
    footerIcon: TrendingUp,
  },
  stats: [
    { value: '90%', label: 'Client Retention Rate', icon: Heart },
    { value: '300+', label: 'Medical Keywords Ranked', icon: Target },
    { value: '24/7', label: 'SEO Monitoring', icon: Clock },
    { value: '89%', label: 'Patient Traffic Growth', icon: TrendingUp },
  ],
  services: {
    badge: 'Healthcare Specialized',
    badgeIcon: BadgeCheck,
    title: 'Comprehensive Healthcare SEO Services',
    subtitle:
      'Specialized SEO solutions for healthcare providers to improve medical search rankings and attract qualified patients.',
    defaultCta: 'Learn More',
    defaultHref: '../contact',
    items: [
      {
        icon: Search,
        title: 'Medical SEO Services',
        description: 'Specialized SEO strategies to rank higher in medical searches and attract qualified patients.',
        features: ['Medical Keyword Research', 'Healthcare Content Strategy', 'Medical On-Page SEO', 'Healthcare Analytics'],
        accent: 'from-emerald-500 to-teal-500',
      },
      {
        icon: MapPin,
        title: 'Healthcare Local SEO',
        description: 'Dominate local medical search results and attract nearby patients with an optimized local presence.',
        features: ['Google Business Profile', 'Medical Citations', 'Patient Reviews', 'Local Keywords'],
        accent: 'from-green-500 to-lime-500',
      },
      {
        icon: LinkIcon,
        title: 'Healthcare Link Building',
        description: 'Build high-quality backlinks from authoritative medical websites to boost domain authority.',
        features: ['Medical Guest Posts', 'Healthcare Directories', 'Resource Links', 'Partnership Links'],
        accent: 'from-violet-500 to-fuchsia-500',
      },
      {
        icon: BarChart3,
        title: 'Healthcare SEO Analytics',
        description: 'Detailed performance tracking and comprehensive healthcare SEO reporting.',
        features: ['Ranking Tracking', 'Traffic Analysis', 'Conversion Monitoring', 'Monthly Reports'],
        accent: 'from-orange-500 to-amber-500',
      },
      {
        icon: Target,
        title: 'Medical Content SEO',
        description: 'Healthcare-focused content creation and optimization for better search visibility.',
        features: ['Medical Blog Posts', 'Service Page SEO', 'Healthcare FAQs', 'Treatment Guides'],
        accent: 'from-sky-500 to-indigo-500',
      },
      {
        icon: Shield,
        title: 'Healthcare Technical SEO',
        description: 'Technical optimization for improved site performance and search rankings.',
        features: ['Site Speed', 'Mobile Optimization', 'Schema Markup', 'Technical Audits'],
        accent: 'from-rose-500 to-pink-500',
      },
    ],
  },
  tools: {
    title: 'Advanced Healthcare SEO Tools',
    subtitle: 'Specialized healthcare SEO tools and proven medical strategies for exceptional search results.',
    tabs: [
      {
        key: 'onpage',
        label: 'On-Page SEO',
        icon: Search,
        items: [
          { name: 'Medical Keyword Research', description: 'Healthcare-specific keyword analysis and search intent mapping.', icon: Search },
          { name: 'Medical Content Optimization', description: 'SEO-friendly healthcare content creation and optimization.', icon: FileText },
          { name: 'Healthcare Meta Tags', description: 'Medical title tags, meta descriptions, and header optimization.', icon: Tag },
          { name: 'Medical Internal Linking', description: 'Strategic content linking for SEO and user experience.', icon: LinkIcon },
        ],
      },
      {
        key: 'offpage',
        label: 'Off-Page SEO',
        icon: LinkIcon,
        items: [
          { name: 'Healthcare Link Building', description: 'High-quality medical backlink acquisition from authoritative sources.', icon: LinkIcon },
          { name: 'Medical Local SEO', description: 'Google Business Profile and local citation optimization for clinics.', icon: MapPin },
          { name: 'Healthcare Directory Listings', description: 'Medical directory and profile optimization for visibility.', icon: Globe },
          { name: 'Medical Brand Mentions', description: 'Building healthcare authority through strategic brand mentions.', icon: Activity },
        ],
      },
      {
        key: 'technical',
        label: 'Technical SEO',
        icon: Settings,
        items: [
          { name: 'Medical Site Speed Optimization', description: 'Website performance improvement for better rankings.', icon: Zap },
          { name: 'Healthcare Mobile Optimization', description: 'Mobile-first medical website optimization for all devices.', icon: Smartphone },
          { name: 'Medical Schema Markup', description: 'Structured data implementation for rich results.', icon: FileText },
          { name: 'Healthcare Technical Audits', description: 'Comprehensive technical analysis and fixes.', icon: Settings },
        ],
      },
      {
        key: 'analytics',
        label: 'SEO Analytics',
        icon: BarChart3,
        items: [
          { name: 'Medical Ranking Tracking', description: 'Daily monitoring of healthcare keyword positions.', icon: TrendingUp },
          { name: 'Patient Traffic Analysis', description: 'Detailed analysis of healthcare website visitor behavior.', icon: Eye },
          { name: 'Healthcare Competitor Analysis', description: 'Monitoring and analyzing medical competitors’ performance.', icon: Target },
          { name: 'Medical SEO Reports', description: 'Comprehensive healthcare SEO performance reports.', icon: BarChart3 },
        ],
      },
    ],
  },
  process: {
    badge: 'Proven Process',
    badgeIcon: Zap,
    title: 'Our Healthcare SEO Process',
    subtitle: 'A structured, results-driven approach designed specifically for healthcare SEO success.',
    items: [
      { step: '01', title: 'Healthcare SEO Audit', description: 'Comprehensive audit of your medical website identifying opportunities and technical issues.', icon: Stethoscope },
      { step: '02', title: 'Medical Strategy Development', description: 'Customized healthcare SEO strategy based on medical keywords and competitor analysis.', icon: Target },
      { step: '03', title: 'SEO Implementation', description: 'Medical on-page optimizations, technical fixes, and healthcare content improvements.', icon: Zap },
      { step: '04', title: 'Link Building & Outreach', description: 'High-quality medical backlinks through strategic outreach and partnerships.', icon: LinkIcon },
      { step: '05', title: 'Continuous Monitoring', description: 'Monitor performance, track rankings, and analyze patient traffic growth.', icon: Eye },
      { step: '06', title: 'Reporting & Optimization', description: 'Detailed SEO reports and data-driven optimizations for growth.', icon: BarChart3 },
    ],
  },
  testimonials: {
    id: 'casestudies',
    badge: 'Success Stories',
    title: 'Trusted by Healthcare Professionals',
    subtitle: 'See how our healthcare SEO services have helped medical practices succeed online.',
    items: [
      { name: 'Dr. Ankit Verma', role: 'Cardiologist, HeartCare Specialists', content: 'Our clinic saw a 350% increase in patient inquiries within 6 months of starting their healthcare SEO service. Highly recommended!', rating: 5 },
      { name: 'Dr. Priya Singh', role: 'Dental Clinic Owner, SmileCare Dental', content: 'The local SEO strategy helped us dominate search results in our area. We now get 80% of our appointments from online searches.', rating: 5 },
      { name: 'Rahul Mehta', role: 'Hospital Administrator, City Multi-specialty', content: 'Their healthcare-specific approach to SEO has transformed our online presence. Patient inquiries have tripled since we started.', rating: 5 },
    ],
  },
  pricing: {
    title: 'Healthcare SEO Packages',
    subtitle: 'Choose the perfect SEO package for your medical practice with clear pricing and comprehensive features.',
    items: [
      {
        name: 'Clinic SEO Starter',
        price: '₹19,000',
        period: '/month',
        description: 'Perfect for small clinics and individual practitioners.',
        features: ['Up to 15 medical keywords', 'Basic on-page optimization', 'Healthcare technical SEO', 'Monthly ranking reports', 'Google Business Profile setup', '3 months minimum contract', 'Weekly monitoring'],
        cta: 'Start Clinic SEO',
      },
      {
        name: 'Practice SEO Growth',
        price: '₹49,000',
        period: '/month',
        description: 'Ideal for growing medical practices and clinics.',
        features: ['Up to 35 medical keywords', 'Advanced medical on-page SEO', 'Healthcare link building', 'Medical content creation', 'Local healthcare SEO', 'Competitor analysis', '6 months minimum contract', 'Dedicated SEO expert'],
        popular: true,
        cta: 'Grow Your Practice',
      },
      {
        name: 'Hospital SEO Enterprise',
        price: 'Custom',
        period: 'quote',
        description: 'Comprehensive SEO solutions for hospitals and large organizations.',
        features: ['Unlimited medical keywords', 'Custom healthcare strategies', 'Advanced technical SEO', 'Multi-location optimization', 'Enterprise-level reporting', 'Dedicated SEO manager', '12 months minimum contract', '24/7 priority support'],
        cta: 'Get Enterprise Quote',
      },
    ],
  },
  cta: {
    icon: TrendingUp,
    title: 'Ready to Dominate Medical Search Results?',
    description:
      'Join 150+ healthcare providers who trust us with their SEO. Get your free, no-obligation healthcare SEO audit today.',
    primary: { label: 'Get Free SEO Audit', href: '/quote' },
    badges: [
      { icon: ShieldCheck, text: 'Healthcare Specialized' },
      { icon: Clock, text: '24/7 Monitoring' },
      { icon: Award, text: 'Certified SEO Experts' },
      { icon: LineChart, text: 'Transparent Reporting' },
    ],
  },
};

export default function HealthcareSEOServicesPage() {
  return <ServicePage {...props} />;
}
