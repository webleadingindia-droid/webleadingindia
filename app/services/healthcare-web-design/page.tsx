'use client';

import ServicePage, { ServicePageProps } from '@/components/healthcare/service-page';
import {
  Accessibility,
  Award,
  BadgeCheck,
  Brush,
  Cpu,
  Eye,
  Figma,
  Heart,
  Layers,
  Layout,
  Lightbulb,
  Monitor,
  Palette,
  Pencil,
  Settings,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

const props: ServicePageProps = {
  hero: {
    badge: { icon: ShieldCheck, text: 'Healthcare Design Specialists' },
    before: 'Professional',
    accent: 'Healthcare Web Design',
    description:
      'Transform your medical digital presence with beautiful, patient-centered designs that build trust, enhance accessibility, and drive meaningful healthcare engagement.',
    primary: { label: 'Start Design Project', href: '/quote' },
    secondary: { label: 'View Portfolio', href: '../portfolio', icon: Eye },
    trust: 'Trusted by 150+ Healthcare Providers',
    rating: '4.9/5 Rating',
  },
  dashboard: {
    icon: Palette,
    title: 'Medical Website Design',
    subtitle: 'Patient-Centered Healthcare UI',
    badge: 'Preview',
    rows: [
      { label: 'Accessibility Score', value: '98%', change: 'WCAG AA' },
      { label: 'Mobile Responsiveness', value: '100%', change: 'All Devices' },
      { label: 'Patient Satisfaction', value: '95%', change: '+25%' },
      { label: 'Loading Speed', value: '0.8s', change: 'Optimized' },
    ],
    footerLabel: 'Design Impact',
    footerValue: '40% More Appointments',
    footerIcon: TrendingUp,
  },
  stats: [
    { value: '200+', label: 'Healthcare Projects', icon: Palette },
    { value: '95%', label: 'Patient Satisfaction', icon: Heart },
    { value: '50%', label: 'Engagement Increase', icon: TrendingUp },
    { value: '100%', label: 'Accessibility Focused', icon: Accessibility },
  ],
  services: {
    badge: 'Healthcare Design Experts',
    badgeIcon: BadgeCheck,
    title: 'Our Healthcare Design Services',
    subtitle:
      'Comprehensive healthcare design solutions that bring your medical vision to life and create exceptional patient experiences.',
    defaultCta: 'View Samples',
    defaultHref: '../contact',
    items: [
      {
        icon: Palette,
        title: 'Healthcare UI/UX Design',
        description: 'Intuitive, patient-friendly healthcare interfaces that enhance user experience while respecting medical compliance.',
        features: ['Patient Research', 'Medical Wireframing', 'Healthcare Visual Design', 'Medical Prototyping'],
        accent: 'from-emerald-500 to-teal-500',
      },
      {
        icon: Smartphone,
        title: 'Medical Mobile App Design',
        description: 'Beautiful healthcare mobile apps that work seamlessly across devices while keeping patient data secure.',
        features: ['iOS Medical Design', 'Android Healthcare Apps', 'Cross-platform Medical', 'App Store Ready'],
        accent: 'from-violet-500 to-fuchsia-500',
      },
      {
        icon: Monitor,
        title: 'Healthcare Website Design',
        description: 'Stunning medical website designs that capture your brand and present essential information accessibly.',
        features: ['Responsive Medical Design', 'Healthcare Landing Pages', 'Patient Portal Design', 'Medical Brand Integration'],
        accent: 'from-green-500 to-lime-500',
      },
      {
        icon: Eye,
        title: 'Healthcare Brand Identity',
        description: 'Comprehensive medical brand design including logos, color palettes, typography, and guidelines.',
        features: ['Medical Logo Design', 'Healthcare Color Palette', 'Medical Typography', 'Healthcare Brand Guidelines'],
        accent: 'from-orange-500 to-amber-500',
      },
      {
        icon: Layout,
        title: 'Medical Dashboard Design',
        description: 'Healthcare dashboard and data visualization interfaces for medical professionals and administrators.',
        features: ['Data Visualization', 'Healthcare Analytics', 'Medical Reporting', 'Patient Management'],
        accent: 'from-sky-500 to-indigo-500',
      },
      {
        icon: Cpu,
        title: 'Healthcare Prototyping',
        description: 'Interactive medical prototypes that allow user testing and validation before development.',
        features: ['Interactive Mockups', 'User Flow Testing', 'Medical User Testing', 'Design Validation'],
        accent: 'from-rose-500 to-pink-500',
      },
    ],
  },
  tools: {
    title: 'Healthcare Design Tools & Platforms',
    subtitle: 'Industry-leading design tools and methodologies to create exceptional patient experiences.',
    tabs: [
      {
        key: 'visual',
        label: 'Visual Design',
        icon: Palette,
        items: [
          { name: 'Medical UI Design', description: 'Healthcare-specific interface design with an accessibility focus.', icon: Layout },
          { name: 'Healthcare Branding', description: 'Medical brand identity and visual design system.', icon: Brush },
          { name: 'Medical Illustration', description: 'Healthcare graphics, icons, and medical illustrations.', icon: Pencil },
          { name: 'Accessibility Design', description: 'Accessibility-first design following WCAG standards.', icon: Accessibility },
        ],
      },
      {
        key: 'ux',
        label: 'UX Process',
        icon: Users,
        items: [
          { name: 'Patient Research', description: 'Understanding patient needs and medical user behaviors.', icon: Users },
          { name: 'Medical Wireframing', description: 'Structural planning and information architecture.', icon: Layout },
          { name: 'Healthcare Prototyping', description: 'Interactive medical design mockups and user testing.', icon: Cpu },
          { name: 'Medical Usability Testing', description: 'Patient experience validation and healthcare user testing.', icon: Eye },
        ],
      },
      {
        key: 'tools',
        label: 'Design Tools',
        icon: Settings,
        items: [
          { name: 'Figma for Healthcare', description: 'Medical design collaboration and prototyping tool.', icon: Figma },
          { name: 'Adobe Creative Suite', description: 'Professional design software suite for healthcare visuals.', icon: Layers },
          { name: 'Medical Design Systems', description: 'Healthcare component libraries and design tokens.', icon: Settings },
          { name: 'Accessibility Checkers', description: 'Compliance testing and accessibility tools.', icon: Accessibility },
        ],
      },
      {
        key: 'platforms',
        label: 'Platforms',
        icon: Monitor,
        items: [
          { name: 'Web Design', description: 'Responsive healthcare website design and development.', icon: Monitor },
          { name: 'Mobile Apps', description: 'Medical mobile application design for iOS & Android.', icon: Smartphone },
          { name: 'Healthcare Dashboards', description: 'Medical dashboard and data visualization design.', icon: Layout },
          { name: 'Patient Portals', description: 'Healthcare portal and patient management interfaces.', icon: Users },
        ],
      },
    ],
  },
  process: {
    badge: 'Proven Process',
    badgeIcon: Zap,
    title: 'Our Healthcare Design Process',
    subtitle: 'A systematic approach ensuring every design decision is purposeful, accessible, and impactful.',
    items: [
      { step: '01', title: 'Healthcare Research & Discovery', description: 'Understand your medical brand, patient demographics, and design goals through comprehensive research.', icon: Stethoscope },
      { step: '02', title: 'Medical Concept & Strategy', description: 'Develop design concepts and a strategic approach aligned with your business objectives.', icon: Lightbulb },
      { step: '03', title: 'Wireframing & Structure', description: 'Create structural planning and information architecture for your healthcare website.', icon: Layout },
      { step: '04', title: 'Healthcare Visual Design', description: 'Design high-fidelity medical interfaces with accessibility and patient focus.', icon: Brush },
      { step: '05', title: 'Prototyping & Testing', description: 'Build interactive prototypes and run usability testing with patients.', icon: Cpu },
      { step: '06', title: 'Delivery & Handoff', description: 'Provide design assets, style guides, and development handoff.', icon: Layers },
    ],
  },
  testimonials: {
    id: 'portfolio',
    badge: 'Design Success Stories',
    title: 'Trusted by Healthcare Providers',
    subtitle: 'See how our healthcare design services have transformed medical practices and delighted patients.',
    items: [
      { name: 'Dr. Ankit Verma', role: 'Cardiologist, HeartCare Specialists', content: 'Our clinic saw a 350% increase in patient inquiries within 6 months of starting their healthcare SEO service. Highly recommended!', rating: 5, tag: 'Cardiology Website' },
      { name: 'Dr. Priya Singh', role: 'Dental Clinic Owner, SmileCare Dental', content: 'The local SEO strategy helped us dominate search results in our area. We now get 80% of our appointments from online searches.', rating: 5, tag: 'Dental Clinic App' },
      { name: 'Rahul Mehta', role: 'Hospital Administrator, City Multi-specialty', content: 'Their healthcare-specific approach to SEO has transformed our online presence. Patient inquiries have tripled since we started.', rating: 5, tag: 'Hospital Portal' },
    ],
  },
  pricing: {
    title: 'Healthcare Design Packages',
    subtitle: 'Choose the perfect design package that fits your medical project needs and budget.',
    items: [
      {
        name: 'Clinic Design Starter',
        price: '₹25,000',
        period: 'one-time',
        description: 'Perfect for small clinics and individual practitioners.',
        features: ['Up to 5 medical page designs', 'Mobile responsive healthcare design', 'Basic medical branding', 'Healthcare style guide', '2 design revisions', 'Figma source files', '3 months support'],
        cta: 'Start Clinic Design',
      },
      {
        name: 'Practice Design Pro',
        price: '₹39,000',
        period: 'one-time',
        description: 'Ideal for growing medical practices and clinics.',
        features: ['Up to 15 medical page designs', 'Advanced healthcare UI/UX', 'Medical brand identity package', 'Interactive medical prototypes', '5 design revisions', 'Healthcare design system', 'Patient usability testing', '6 months support'],
        popular: true,
        cta: 'Design Your Practice',
      },
      {
        name: 'Hospital Design Enterprise',
        price: 'Custom',
        period: 'quote',
        description: 'Tailored for hospitals and large healthcare organizations.',
        features: ['Unlimited medical designs', 'Custom healthcare design system', 'Comprehensive patient testing', 'Advanced medical prototyping', 'Unlimited design revisions', 'Dedicated design team', 'Multi-platform designs', '12 months premium support'],
        cta: 'Get Enterprise Quote',
      },
    ],
  },
  cta: {
    icon: Palette,
    title: 'Ready to Transform Your Healthcare Digital Presence?',
    description:
      'Join 150+ healthcare providers who trust us with their design. Get your free, no-obligation healthcare design consultation today.',
    primary: { label: 'Get Free Design Consultation', href: '/quote' },
    badges: [
      { icon: Accessibility, text: 'Accessibility Focused' },
      { icon: Heart, text: 'Patient-Centered Design' },
      { icon: ShieldCheck, text: 'Healthcare Compliance' },
      { icon: Award, text: 'Certified Designers' },
    ],
  },
};

export default function HealthcareWebDesignPage() {
  return <ServicePage {...props} />;
}
