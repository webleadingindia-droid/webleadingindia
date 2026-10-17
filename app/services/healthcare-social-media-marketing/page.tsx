'use client';

import ServicePage, { ServicePageProps } from '@/components/healthcare/service-page';
import {
  Award,
  BadgeCheck,
  BarChart3,
  Camera,
  Clock,
  Eye,
  Facebook,
  FileText,
  Hash,
  Heart,
  Image as ImageIcon,
  Instagram,
  Linkedin,
  Megaphone,
  MessageSquare,
  Share2,
  ShieldCheck,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  Video,
  Youtube,
  Settings,
} from 'lucide-react';

const props: ServicePageProps = {
  hero: {
    badge: { icon: ShieldCheck, text: 'Healthcare Social Media Experts' },
    before: 'Professional',
    accent: 'Healthcare SMO Services',
    description:
      'Build trust and engage with patients through strategic healthcare social media marketing. We help medical practices establish a strong social presence and connect with patients.',
    primary: { label: 'Get Free SMO Audit', href: '/quote' },
    secondary: { label: 'Contact Us', href: '../contact', icon: Video },
    trust: 'Trusted by 120+ Healthcare Providers',
    rating: '4.8/5 Rating',
  },
  dashboard: {
    icon: TrendingUp,
    title: 'Social Media Metrics',
    subtitle: 'Real-time Engagement Analytics',
    badge: 'Live',
    rows: [
      { label: 'Monthly Patient Reach', value: '45.8K', change: '+82%' },
      { label: 'Engagement Rate', value: '8.2%', change: '+2.4%' },
      { label: 'Appointment Inquiries', value: '128', change: '+65%' },
      { label: 'Patient Trust Score', value: '4.8', change: '+0.7' },
    ],
    footerLabel: 'Social Growth (4 Months)',
    footerValue: '450% Increase',
    footerIcon: TrendingUp,
  },
  stats: [
    { value: '500%', label: 'Average Engagement Growth', icon: TrendingUp },
    { value: '200+', label: 'Medical Campaigns Managed', icon: Target },
    { value: '24/7', label: 'Community Management', icon: Clock },
    { value: '95%', label: 'Patient Satisfaction', icon: Heart },
  ],
  services: {
    badge: 'Healthcare Social Media Specialists',
    badgeIcon: BadgeCheck,
    title: 'Comprehensive Healthcare SMO Services',
    subtitle:
      'Specialized social media solutions for healthcare providers to build trust, educate patients, and grow medical communities.',
    defaultCta: 'View Details',
    defaultHref: '../contact',
    items: [
      {
        icon: Share2,
        title: 'Healthcare Social Media Strategy',
        description: 'Comprehensive strategies for healthcare providers to build trust and engage with patients.',
        features: ['Platform Strategy', 'Content Planning', 'Brand Voice', 'Audience Targeting'],
        accent: 'from-emerald-500 to-teal-500',
      },
      {
        icon: Camera,
        title: 'Medical Content Creation & Design',
        description: 'Professional healthcare content including medical graphics, educational videos, and patient stories.',
        features: ['Medical Graphics', 'Video Production', 'Patient Education', 'Medical Copywriting'],
        accent: 'from-violet-500 to-fuchsia-500',
      },
      {
        icon: Users,
        title: 'Patient Community Management',
        description: 'Active community management to build relationships and trust with healthcare audiences.',
        features: ['Daily Engagement', 'Comment Management', 'Community Building', 'Patient Support'],
        accent: 'from-green-500 to-lime-500',
      },
      {
        icon: BarChart3,
        title: 'Healthcare Social Media Analytics',
        description: 'Analytics and reporting to track your medical social media performance.',
        features: ['Performance Metrics', 'Audience Insights', 'Engagement Analysis', 'Monthly Reports'],
        accent: 'from-orange-500 to-amber-500',
      },
      {
        icon: Video,
        title: 'Medical Video Marketing',
        description: 'Healthcare video content for patient education and medical awareness.',
        features: ['Educational Videos', 'Patient Stories', 'Procedure Explanations', 'Live Q&A'],
        accent: 'from-rose-500 to-pink-500',
      },
      {
        icon: Target,
        title: 'Healthcare Campaign Management',
        description: 'Targeted campaigns for specific medical services and patient awareness.',
        features: ['Awareness Campaigns', 'Service Promotions', 'Event Marketing', 'Influencer Collaborations'],
        accent: 'from-sky-500 to-indigo-500',
      },
    ],
  },
  tools: {
    title: 'Advanced Healthcare SMO Tools & Platforms',
    subtitle: 'Specialized healthcare SMO tools and proven medical strategies for exceptional social media results.',
    tabs: [
      {
        key: 'content',
        label: 'Content Tools',
        icon: Camera,
        items: [
          { name: 'Medical Content Creation', description: 'Healthcare education and awareness content creation.', icon: FileText },
          { name: 'Healthcare Visual Design', description: 'Medical graphics, infographics, and healthcare visuals.', icon: ImageIcon },
          { name: 'Medical Video Production', description: 'Healthcare educational videos and patient stories.', icon: Video },
          { name: 'Healthcare Hashtag Strategy', description: 'Medical industry-specific hashtag research and optimization.', icon: Hash },
        ],
      },
      {
        key: 'engagement',
        label: 'Engagement Tools',
        icon: Users,
        items: [
          { name: 'Patient Community Management', description: 'Active engagement with patients and the healthcare community.', icon: Users },
          { name: 'Healthcare Influencer Outreach', description: 'Collaborations with medical professionals and influencers.', icon: Share2 },
          { name: 'Medical Awareness Campaigns', description: 'Health education and awareness social media campaigns.', icon: Megaphone },
          { name: 'Patient Support Management', description: 'Healthcare customer service and patient support.', icon: MessageSquare },
        ],
      },
      {
        key: 'analytics',
        label: 'Analytics Tools',
        icon: BarChart3,
        items: [
          { name: 'Healthcare Performance Tracking', description: 'Medical social media analytics and performance metrics.', icon: BarChart3 },
          { name: 'Patient Audience Insights', description: 'Healthcare demographics and patient behavior analysis.', icon: Eye },
          { name: 'Medical ROI Measurement', description: 'Social media return on investment tracking.', icon: TrendingUp },
          { name: 'Healthcare Competitor Analysis', description: 'Medical social media competitive intelligence.', icon: Target },
        ],
      },
      {
        key: 'platforms',
        label: 'Social Platforms',
        icon: Share2,
        items: [
          { name: 'Facebook for Healthcare', description: 'Medical practice promotion and patient community building.', icon: Facebook },
          { name: 'Instagram Health Campaigns', description: 'Visual healthcare content and medical awareness.', icon: Instagram },
          { name: 'LinkedIn Medical Professional', description: 'Healthcare professional networking and B2B marketing.', icon: Linkedin },
          { name: 'YouTube Medical Education', description: 'Healthcare educational videos and patient tutorials.', icon: Youtube },
        ],
      },
    ],
  },
  process: {
    badge: 'Proven Process',
    badgeIcon: Settings,
    title: 'Our Healthcare SMO Process',
    subtitle: 'A structured, results-driven approach designed specifically for healthcare social media success.',
    items: [
      { step: '01', title: 'Healthcare Social Media Audit', description: 'Comprehensive audit of your current social presence and competitor analysis.', icon: Stethoscope },
      { step: '02', title: 'Medical Content Strategy', description: 'Healthcare content strategy with engaging patient education and awareness content.', icon: Share2 },
      { step: '03', title: 'Content Creation & Design', description: 'Create and design medical content including graphics, videos, and educational posts.', icon: Camera },
      { step: '04', title: 'Platform Optimization', description: 'Optimize healthcare profiles across all relevant social platforms.', icon: Settings },
      { step: '05', title: 'Community Management', description: 'Active patient community engagement and healthcare support management.', icon: Users },
      { step: '06', title: 'Analytics & Optimization', description: 'Monitor performance, track engagement, and optimize strategies.', icon: BarChart3 },
    ],
  },
  testimonials: {
    id: 'casestudies',
    badge: 'Client Success Stories',
    title: 'Trusted by Healthcare Professionals',
    subtitle: 'See how our healthcare SMO services have helped medical practices succeed on social media.',
    items: [
      { name: 'Dr. Ankit Verma', role: 'Cardiologist, HeartCare Specialists', content: 'Our clinic saw a 350% increase in patient inquiries within 6 months of starting their healthcare SEO service. Highly recommended!', rating: 5, tag: 'Facebook' },
      { name: 'Dr. Priya Singh', role: 'Dental Clinic Owner, SmileCare Dental', content: 'The local SEO strategy helped us dominate search results in our area. We now get 80% of our appointments from online searches.', rating: 5, tag: 'Instagram' },
      { name: 'Rahul Mehta', role: 'Hospital Administrator, City Multi-specialty', content: 'Their healthcare-specific approach to SEO has transformed our online presence. Patient inquiries have tripled since we started.', rating: 5, tag: 'LinkedIn' },
    ],
  },
  pricing: {
    title: 'Healthcare SMO Packages',
    subtitle: 'Choose the perfect SMO package for your medical practice with clear pricing and comprehensive features.',
    items: [
      {
        name: 'Clinic Social Media Starter',
        price: '₹15,000',
        period: '/month',
        description: 'Perfect for small clinics and individual practitioners.',
        features: ['Up to 3 healthcare platforms', '15 medical posts per month', 'Basic healthcare graphic design', 'Patient community management', 'Monthly healthcare analytics', 'Content calendar planning', '3 months minimum contract'],
        cta: 'Start Clinic SMO',
      },
      {
        name: 'Practice Social Media Growth',
        price: '₹35,000',
        period: '/month',
        description: 'Ideal for growing medical practices and clinics.',
        features: ['Up to 5 healthcare platforms', '30 medical posts per month', 'Advanced healthcare content', 'Medical video production', 'Healthcare influencer collaborations', 'Patient review management', '6 months minimum contract', 'Dedicated SMO expert'],
        popular: true,
        cta: 'Grow Your Practice',
      },
      {
        name: 'Hospital Social Media Enterprise',
        price: 'Custom',
        period: 'quote',
        description: 'Comprehensive SMO solutions for hospitals and large organizations.',
        features: ['All healthcare platforms', 'Unlimited medical content', 'Custom healthcare campaigns', 'Multi-location management', 'Advanced analytics dashboard', 'Dedicated SMO manager', '12 months minimum contract', '24/7 priority support'],
        cta: 'Get Enterprise Quote',
      },
    ],
  },
  cta: {
    icon: Users,
    title: 'Ready to Build Patient Trust on Social Media?',
    description:
      'Join 120+ healthcare providers who trust us with their social media. Get your free, no-obligation healthcare SMO audit today.',
    primary: { label: 'Get Free SMO Audit', href: '/quote' },
    badges: [
      { icon: ShieldCheck, text: 'Healthcare Compliance' },
      { icon: Camera, text: 'Professional Content' },
      { icon: Clock, text: '24/7 Community Management' },
      { icon: Award, text: 'Certified SMO Experts' },
    ],
  },
};

export default function HealthcareSMOServicesPage() {
  return <ServicePage {...props} />;
}
