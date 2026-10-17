'use client';

import ServicePage, { ServicePageProps } from '@/components/healthcare/service-page';
import {
  Award,
  BadgeCheck,
  BarChart3,
  Calendar,
  Clock,
  CreditCard,
  FileText,
  Globe,
  Lock,
  Monitor,
  Package,
  RefreshCw,
  Settings,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Stethoscope,
  TabletSmartphone,
  Tag,
  TrendingUp,
  Truck,
  Users,
  Zap,
} from 'lucide-react';

const props: ServicePageProps = {
  hero: {
    badge: { icon: ShieldCheck, text: 'Secure Healthcare Commerce' },
    before: 'Professional',
    accent: 'Healthcare E-commerce',
    after: 'Solutions',
    description:
      'Build specialized online stores for medical products, pharmacy items, and healthcare services. We create secure platforms that protect patient data and make medical transactions seamless.',
    primary: { label: 'Get Free Medical Store Audit', href: '/quote' },
    secondary: { label: 'View Medical Demo', href: '../contact', icon: TabletSmartphone },
    trust: 'Trusted by 200+ Healthcare Businesses',
    rating: '4.8/5 Rating',
  },
  dashboard: {
    icon: ShoppingCart,
    title: 'Medical Pharmacy Dashboard',
    subtitle: 'Real-time Healthcare Analytics',
    badge: 'Live Demo',
    rows: [
      { label: 'Daily Prescriptions', value: '156', change: '+28%' },
      { label: 'Medical Orders', value: '89', change: '+45%' },
      { label: 'Pharmacy Revenue', value: '₹2.4L', change: '+32%' },
      { label: 'Patient Satisfaction', value: '4.7', change: '+0.4' },
    ],
    footerLabel: 'Monthly Growth',
    footerValue: '38% Increase',
    footerIcon: TrendingUp,
  },
  stats: [
    { value: '200+', label: 'Medical Stores Built', icon: ShoppingCart },
    { value: '99.9%', label: 'Uptime Guarantee', icon: ShieldCheck },
    { value: '24/7', label: 'Healthcare Support', icon: Clock },
    { value: '50K+', label: 'Medical Products Sold', icon: Package },
  ],
  services: {
    badge: 'Healthcare Specialized',
    badgeIcon: BadgeCheck,
    title: 'Complete Healthcare E-commerce Services',
    subtitle:
      'Tailored e-commerce solutions for healthcare providers, pharmacies, and medical businesses, with compliance and security as priorities.',
    defaultCta: 'View Details',
    defaultHref: '#contact',
    items: [
      {
        icon: ShoppingCart,
        title: 'Healthcare E-commerce Development',
        description: 'Specialized online stores for medical products, pharmacy items, and healthcare services with strong data security.',
        features: ['Medical Product Catalog', 'Prescription Management', 'Patient Data Security', 'Healthcare Compliance'],
        accent: 'from-emerald-500 to-teal-500',
      },
      {
        icon: CreditCard,
        title: 'Healthcare Payment Solutions',
        description: 'Secure payment processing with healthcare-specific options, including insurance integration and medical EMI.',
        features: ['Insurance Integration', 'Secure Payments', 'PCI-aware Checkout', 'Multi-payment Options'],
        accent: 'from-green-500 to-lime-500',
      },
      {
        icon: Smartphone,
        title: 'Medical Mobile Commerce',
        description: 'Responsive healthcare stores and medical apps providing seamless shopping across all devices.',
        features: ['Medical Apps', 'Mobile-First Design', 'Healthcare PWA', 'Fast Loading'],
        accent: 'from-violet-500 to-fuchsia-500',
      },
      {
        icon: Package,
        title: 'Healthcare Inventory Management',
        description: 'Medical inventory system with real-time stock tracking and automated reordering.',
        features: ['Stock Management', 'Prescription Tracking', 'Automated Alerts', 'Healthcare Shipping'],
        accent: 'from-orange-500 to-amber-500',
      },
      {
        icon: Shield,
        title: 'Healthcare Security & Compliance',
        description: 'End-to-end security solutions for data protection and secure medical transactions.',
        features: ['Data Protection', 'Data Encryption', 'Security Audits', 'Regular Updates'],
        accent: 'from-sky-500 to-indigo-500',
      },
      {
        icon: BarChart3,
        title: 'Healthcare Analytics Dashboard',
        description: 'Analytics and reporting tools for medical sales, patient behavior, and business performance.',
        features: ['Sales Analytics', 'Patient Insights', 'Inventory Reports', 'Performance Tracking'],
        accent: 'from-rose-500 to-pink-500',
      },
    ],
  },
  tools: {
    title: 'Advanced Healthcare E-commerce Technologies',
    subtitle:
      'Industry-leading platforms and technologies for secure, compliant, and high-performance medical online stores.',
    tabs: [
      {
        key: 'platform',
        label: 'Medical Platforms',
        icon: ShoppingCart,
        items: [
          { name: 'Medical E-commerce Platforms', description: 'Specialized healthcare online store solutions with strong data security.', icon: ShoppingCart },
          { name: 'Pharmacy Management Systems', description: 'Complete pharmacy inventory, sales, and prescription platforms.', icon: Package },
          { name: 'Medical Equipment Stores', description: 'Healthcare equipment e-commerce with product certification.', icon: Stethoscope },
          { name: 'Healthcare Marketplace', description: 'Multi-vendor medical marketplace platforms.', icon: Globe },
        ],
      },
      {
        key: 'payment',
        label: 'Healthcare Payments',
        icon: CreditCard,
        items: [
          { name: 'Healthcare Payment Gateways', description: 'Secure medical payment processing with PCI compliance.', icon: CreditCard },
          { name: 'Insurance Integration', description: 'Health insurance claim processing and verification.', icon: FileText },
          { name: 'Medical Subscription Models', description: 'Recurring payment systems for healthcare services.', icon: RefreshCw },
          { name: 'EMI & Financing', description: 'Medical equipment financing and EMI solutions.', icon: Tag },
        ],
      },
      {
        key: 'features',
        label: 'Medical Features',
        icon: Settings,
        items: [
          { name: 'Medical Inventory Management', description: 'Healthcare product stock tracking with expiration alerts.', icon: Package },
          { name: 'Prescription Management', description: 'Digital prescription handling and verification system.', icon: FileText },
          { name: 'Patient Account Management', description: 'Secure healthcare customer profiles and history.', icon: Users },
          { name: 'Delivery & Logistics', description: 'Healthcare shipping and cold chain management.', icon: Truck },
        ],
      },
      {
        key: 'analytics',
        label: 'Healthcare Analytics',
        icon: BarChart3,
        items: [
          { name: 'Healthcare Sales Analytics', description: 'Medical sales data and patient purchase insights.', icon: BarChart3 },
          { name: 'Inventory Analytics', description: 'Medical stock performance and demand forecasting.', icon: TrendingUp },
          { name: 'Patient Insights', description: 'Healthcare customer behavior and preferences.', icon: Users },
          { name: 'Revenue Reports', description: 'Medical business performance and growth tracking.', icon: CreditCard },
        ],
      },
    ],
  },
  process: {
    badge: 'Structured Process',
    badgeIcon: Zap,
    title: 'Our Healthcare E-commerce Development Process',
    subtitle: 'A proven, structured approach to building secure and compliant healthcare e-commerce platforms.',
    items: [
      { step: '01', title: 'Healthcare Business Analysis', description: 'Analyze medical business requirements, patient needs, and healthcare market trends for the right e-commerce strategy.', icon: Stethoscope },
      { step: '02', title: 'Medical Design & UX', description: 'Create intuitive, patient-friendly designs with accessibility and brand consistency.', icon: Monitor },
      { step: '03', title: 'Healthcare Development', description: 'Develop your medical e-commerce platform with healthcare features, secure payments, and compliance.', icon: Settings },
      { step: '04', title: 'Integration & Testing', description: 'Integrate healthcare systems, run compliance testing, and verify security standards.', icon: Zap },
      { step: '05', title: 'Launch & Deployment', description: 'Launch your medical online store with performance optimization and monitoring.', icon: TrendingUp },
      { step: '06', title: 'Support & Growth', description: 'Ongoing healthcare support, updates, and growth strategies for your medical business.', icon: Users },
    ],
  },
  testimonials: {
    badge: 'Client Success Stories',
    title: 'Trusted by Healthcare Businesses',
    subtitle: "See how we've helped healthcare providers and medical businesses succeed online.",
    items: [
      { name: 'Dr. Ankit Verma', role: 'Cardiologist, HeartCare Specialists', content: 'Our clinic saw a 350% increase in patient inquiries within 6 months of starting their healthcare SEO service. Highly recommended!', rating: 5 },
      { name: 'Dr. Priya Singh', role: 'Dental Clinic Owner, SmileCare Dental', content: 'The local SEO strategy helped us dominate search results in our area. We now get 80% of our appointments from online searches.', rating: 5 },
      { name: 'Rahul Mehta', role: 'Hospital Administrator, City Multi-specialty', content: 'Their healthcare-specific approach to SEO has transformed our online presence. Patient inquiries have tripled since we started.', rating: 5 },
    ],
  },
  pricing: {
    title: 'Healthcare E-commerce Packages',
    subtitle: 'Choose the perfect package for your medical business with clear pricing and comprehensive features.',
    items: [
      {
        name: 'Clinic Pharmacy Store',
        price: '₹45,000',
        period: 'one-time',
        description: 'Perfect for small pharmacies and medical stores starting online.',
        features: ['Up to 100 medical products', 'Basic prescription management', 'Payment gateway integration', 'Mobile responsive design', 'Basic healthcare SEO', 'Security SSL certificate', '3 months free support'],
        cta: 'Start Pharmacy Store',
      },
      {
        name: 'Medical E-commerce Pro',
        price: '₹85,000',
        period: 'one-time',
        description: 'Ideal for growing medical businesses and multi-specialty clinics.',
        features: ['Up to 500 medical products', 'Advanced prescription system', 'Insurance integration', 'Patient account system', 'Medical inventory tracking', 'Advanced healthcare analytics', 'Mobile app integration', '6 months free support', 'Dedicated manager'],
        popular: true,
        cta: 'Grow Medical Business',
      },
      {
        name: 'Healthcare Enterprise',
        price: 'Custom',
        period: 'quote',
        description: 'Comprehensive solutions for hospitals and medical organizations.',
        features: ['Unlimited medical products', 'Multi-vendor marketplace', 'Custom healthcare integrations', 'Advanced security features', 'Multi-language support', 'API integrations', '24/7 priority support', '12 months premium support', 'Custom development'],
        cta: 'Get Enterprise Quote',
      },
    ],
  },
  cta: {
    icon: ShieldCheck,
    title: 'Launch Your Secure Healthcare Online Store Today',
    description:
      'Join 200+ healthcare businesses who trust us with their e-commerce solutions. Get your free, no-obligation healthcare store consultation today.',
    primary: { label: 'Get Free Medical Store Audit', href: '/quote' },
    badges: [
      { icon: ShieldCheck, text: 'Data Security First' },
      { icon: Lock, text: 'Secure Payments' },
      { icon: Clock, text: '24/7 Healthcare Support' },
      { icon: Award, text: 'Certified Developers' },
    ],
  },
};

export default function HealthcareEcommerceServicesPage() {
  return <ServicePage {...props} />;
}
