'use client';

import ServicePage, { ServicePageProps } from '@/components/healthcare/service-page';
import {
  Award,
  BadgeCheck,
  BarChart3,
  Brain,
  Calendar,
  Clock,
  Eye,
  FileText,
  Layers,
  Mail,
  MessageSquare,
  MousePointer,
  PieChart,
  RefreshCw,
  Search,
  Share2,
  Shield,
  ShieldCheck,
  Star,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
} from 'lucide-react';

const props: ServicePageProps = {
  hero: {
    badge: { icon: ShieldCheck, text: 'Ethical Healthcare Marketing' },
    before: 'Healthcare',
    accent: 'Digital Marketing',
    after: 'That Attracts & Retains Patients',
    description:
      'We help healthcare providers, hospitals, and medical practices attract more patients, build trust, and grow their practice through proven, ethical healthcare marketing strategies.',
    primary: { label: 'Get Free Healthcare Audit', href: '/quote' },
    secondary: { label: 'Schedule Demo', href: '../contact', icon: Video },
    trust: 'Trusted by 50+ Healthcare Providers',
    rating: '4.9/5 Rating',
  },
  dashboard: {
    icon: Stethoscope,
    title: 'Medical Practice Growth',
    subtitle: 'Real-time Patient Analytics',
    badge: 'Live Dashboard',
    rows: [
      { label: 'New Patient Inquiries', value: '245', change: '+42%' },
      { label: 'Appointments Booked', value: '189', change: '+35%' },
      { label: 'Website Traffic', value: '12.4K', change: '+68%' },
      { label: 'Patient Satisfaction', value: '4.9', change: '+0.3' },
    ],
    footerLabel: 'Monthly Growth',
    footerValue: '47% Increase',
    footerIcon: TrendingUp,
  },
  stats: [
    { value: '300%', label: 'Average Patient Growth', icon: TrendingUp },
    { value: '24/7', label: 'Support Availability', icon: Clock },
    { value: '98%', label: 'Client Satisfaction', icon: Star },
    { value: '50+', label: 'Healthcare Clients', icon: Users },
  ],
  services: {
    badge: 'Specialized Services',
    badgeIcon: BadgeCheck,
    title: 'Comprehensive Healthcare Marketing Solutions',
    subtitle:
      'Tailored digital marketing services designed specifically for healthcare providers, with privacy and patient engagement at the core.',
    defaultCta: 'Learn More',
    defaultHref: '#contact',
    items: [
      {
        icon: Search,
        title: 'Medical SEO Services',
        description: 'Specialized SEO strategies for healthcare providers to rank higher in medical searches and attract qualified patients.',
        features: ['Medical Keyword Research', 'Local SEO for Clinics', 'Healthcare Content', 'Medical Directory Listings'],
        accent: 'from-emerald-500 to-teal-500',
      },
      {
        icon: Share2,
        title: 'Healthcare Social Media Marketing',
        description: 'Build trust and engage with patients through strategic healthcare social media marketing and community building.',
        features: ['Medical Content Strategy', 'Patient Education', 'Healthcare Community', 'Review Management'],
        accent: 'from-violet-500 to-fuchsia-500',
      },
      {
        icon: Target,
        title: 'Healthcare PPC Advertising',
        description: 'Drive immediate patient inquiries with targeted healthcare PPC campaigns across search and social platforms.',
        features: ['Patient Acquisition', 'Medical Ad Creation', 'Privacy-Aware Tracking', 'ROI Optimization'],
        accent: 'from-green-500 to-lime-500',
      },
      {
        icon: Mail,
        title: 'Medical Content Marketing',
        description: 'Establish thought leadership with authoritative healthcare content that nurtures patient relationships.',
        features: ['Medical Blog Writing', 'Patient Education', 'Healthcare FAQs', 'Treatment Guides'],
        accent: 'from-orange-500 to-amber-500',
      },
      {
        icon: Video,
        title: 'Healthcare Video Marketing',
        description: 'Engage patients with educational medical videos, procedure explanations, and doctor interviews.',
        features: ['Medical Procedure Videos', 'Patient Testimonials', 'Educational Content', 'Live Q&A Sessions'],
        accent: 'from-rose-500 to-pink-500',
      },
      {
        icon: Calendar,
        title: 'Appointment Booking Optimization',
        description: 'Streamline patient appointment scheduling with optimized booking systems and reminders.',
        features: ['Online Scheduling', 'Appointment Reminders', 'Waitlist Management', 'Follow-up Automation'],
        accent: 'from-sky-500 to-indigo-500',
      },
    ],
  },
  tools: {
    title: 'Advanced Healthcare Marketing Tools',
    subtitle:
      'We leverage industry-leading healthcare marketing tools and platforms to deliver exceptional results while keeping patient data secure.',
    tabs: [
      {
        key: 'seo',
        label: 'Medical SEO Tools',
        icon: Search,
        items: [
          { name: 'Medical Keyword Research', description: 'Specialized healthcare keyword analysis for medical procedures and conditions.', icon: Search },
          { name: 'Healthcare Local SEO', description: 'Optimize for local search visibility and Google Business Profile for medical practices.', icon: Target },
          { name: 'Medical Content Strategy', description: 'Healthcare-focused content planning and medical educational content.', icon: FileText },
          { name: 'Technical SEO for Healthcare', description: 'Website optimization for medical practices with a privacy-first approach.', icon: Layers },
        ],
      },
      {
        key: 'social',
        label: 'Healthcare Social Media',
        icon: Share2,
        items: [
          { name: 'Healthcare Content Creation', description: 'Medical education and awareness content across social platforms.', icon: Video },
          { name: 'Patient Community Building', description: 'Building engaged healthcare communities and support groups.', icon: Users },
          { name: 'Medical Review Management', description: 'Patient review and reputation management for healthcare providers.', icon: Star },
          { name: 'Healthcare Live Sessions', description: 'Medical Q&A sessions and health awareness webinars.', icon: MessageSquare },
        ],
      },
      {
        key: 'advertising',
        label: 'Medical Advertising',
        icon: Target,
        items: [
          { name: 'Healthcare PPC Campaigns', description: 'Targeted medical advertising with privacy-aware tracking.', icon: MousePointer },
          { name: 'Patient Acquisition Ads', description: 'Lead generation for healthcare services and appointment booking.', icon: Target },
          { name: 'Medical Remarketing', description: 'Patient follow-up campaigns for better conversion rates.', icon: RefreshCw },
          { name: 'Healthcare Display Ads', description: 'Medical brand awareness campaigns across networks.', icon: Eye },
        ],
      },
      {
        key: 'analytics',
        label: 'Analytics & Tracking',
        icon: PieChart,
        items: [
          { name: 'Patient Analytics Dashboard', description: 'Track patient acquisition, engagement, and conversion metrics.', icon: PieChart },
          { name: 'ROI Tracking', description: 'Measure marketing spend vs patient acquisition revenue.', icon: TrendingUp },
          { name: 'Performance Reports', description: 'Comprehensive monthly healthcare marketing reports.', icon: BarChart3 },
          { name: 'Competitor Analysis', description: 'Benchmark against other healthcare providers.', icon: Shield },
        ],
      },
    ],
  },
  process: {
    badge: 'Proven Process',
    badgeIcon: Zap,
    title: 'Our Healthcare Marketing Process',
    subtitle: 'A structured, results-driven approach designed specifically for healthcare marketing success.',
    items: [
      { step: '01', title: 'Healthcare Marketing Audit', description: 'Comprehensive analysis of your current digital presence, competitors, and patient demographics.', icon: Stethoscope },
      { step: '02', title: 'Patient Persona Development', description: 'Create detailed patient profiles to tailor marketing messages and content strategies.', icon: Users },
      { step: '03', title: 'Strategy & Planning', description: 'Develop customized healthcare marketing strategies aligned with your practice goals.', icon: Brain },
      { step: '04', title: 'Campaign Implementation', description: 'Launch integrated campaigns across SEO, social media, PPC, and content marketing.', icon: Zap },
      { step: '05', title: 'Monitoring & Optimization', description: 'Continuous performance tracking and data-driven optimizations for maximum results.', icon: PieChart },
      { step: '06', title: 'Reporting & Growth', description: 'Detailed analytics and strategic recommendations for ongoing practice growth.', icon: TrendingUp },
    ],
  },
  testimonials: {
    id: 'casestudies',
    badge: 'Client Success Stories',
    title: 'Trusted by Healthcare Professionals',
    subtitle: "See how we've helped healthcare providers transform their digital presence and patient acquisition.",
    items: [
      { name: 'Dr. Ankit Verma', role: 'Cardiologist, HeartCare Specialists', content: 'Our clinic saw a 350% increase in patient inquiries within 6 months of starting their healthcare SEO service. Highly recommended!', rating: 5 },
      { name: 'Dr. Priya Singh', role: 'Dental Clinic Owner, SmileCare Dental', content: 'The local SEO strategy helped us dominate search results in our area. We now get 80% of our appointments from online searches.', rating: 5 },
      { name: 'Rahul Mehta', role: 'Hospital Administrator, City Multi-specialty', content: 'Their healthcare-specific approach to SEO has transformed our online presence. Patient inquiries have tripled since we started.', rating: 5 },
    ],
  },
  pricing: {
    title: 'Healthcare Marketing Packages',
    subtitle: 'Choose the perfect package for your medical practice with clear pricing and comprehensive features.',
    items: [
      {
        name: 'Clinic Starter',
        price: '₹25,000',
        period: '/month',
        description: 'Perfect for small clinics and individual practitioners.',
        features: ['Basic Medical SEO', '2 Social Media Platforms', 'Google Business Profile Setup', 'Monthly Performance Reports', 'Review Management', 'Basic Content Creation', '3 months free support'],
        cta: 'Start Clinic Growth',
      },
      {
        name: 'Practice Growth',
        price: '₹45,000',
        period: '/month',
        description: 'Ideal for growing medical practices and multi-specialty clinics.',
        features: ['Comprehensive Medical SEO', '4 Social Media Platforms', 'Patient Acquisition PPC', 'Medical Content Marketing', 'Email Marketing Automation', 'Advanced Analytics Dashboard', 'Video Content Creation', '6 months free support', 'Dedicated Account Manager'],
        popular: true,
        cta: 'Grow Your Practice',
      },
      {
        name: 'Hospital Enterprise',
        price: 'Custom',
        period: 'quote',
        description: 'Comprehensive solutions for hospitals and healthcare networks.',
        features: ['Full-scale Healthcare Marketing', 'Multi-channel Campaign Management', 'Advanced Patient Analytics', 'Custom Reporting Dashboard', 'Influencer Marketing', 'Crisis Management', 'Brand Strategy', '12 months premium support', '24/7 Priority Support'],
        cta: 'Get Enterprise Quote',
      },
    ],
  },
  cta: {
    icon: BadgeCheck,
    title: 'Ready to Transform Your Healthcare Practice?',
    description:
      'Join 50+ healthcare providers who trust us with their digital marketing. Get your free, no-obligation healthcare marketing audit today.',
    primary: { label: 'Get Free Healthcare Audit', href: '/quote' },
    badges: [
      { icon: ShieldCheck, text: 'Privacy First' },
      { icon: Clock, text: '24/7 Support' },
      { icon: Award, text: 'Certified Specialists' },
    ],
  },
};

export default function HealthcareDigitalMarketingPage() {
  return <ServicePage {...props} />;
}