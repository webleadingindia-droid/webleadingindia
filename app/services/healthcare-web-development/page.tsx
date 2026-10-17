'use client';

import ServicePage, { ServicePageProps } from '@/components/healthcare/service-page';
import {
  Activity,
  Award,
  BadgeCheck,
  Boxes,
  Clock,
  Cloud,
  Code,
  Cpu,
  Database,
  Globe,
  HardDrive,
  Layers,
  Monitor,
  Rocket,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Terminal,
  Zap,
} from 'lucide-react';

const props: ServicePageProps = {
  hero: {
    badge: { icon: ShieldCheck, text: 'Secure Healthcare Development' },
    before: 'Professional',
    accent: 'Healthcare Web Development',
    description:
      'Transform your medical practice with custom healthcare web solutions built on modern technologies. We create fast, secure websites and systems that protect patient data.',
    primary: { label: 'Start Healthcare Project', href: '/quote' },
    secondary: { label: 'View Portfolio', href: '../portfolio', icon: Monitor },
    trust: 'Trusted by 200+ Healthcare Providers',
    rating: '4.8/5 Rating',
  },
  dashboard: {
    icon: Activity,
    title: 'Medical System Analytics',
    subtitle: 'Real-time Performance Metrics',
    badge: 'Live',
    rows: [
      { label: 'System Uptime', value: '99.98%', change: 'This Month' },
      { label: 'Response Time', value: '0.12s', change: '-45ms' },
      { label: 'Active Patients', value: '2.4K', change: '+320' },
      { label: 'Security Score', value: '98/100', change: 'Audited' },
    ],
    footerLabel: 'System Health',
    footerValue: 'Optimal Performance',
    footerIcon: ShieldCheck,
  },
  stats: [
    { value: '200+', label: 'Medical Projects', icon: Code },
    { value: '99.9%', label: 'Uptime Guarantee', icon: Server },
    { value: '24/7', label: 'Healthcare Support', icon: Clock },
    { value: '100%', label: 'Secure Data Handling', icon: ShieldCheck },
  ],
  services: {
    badge: 'Healthcare Development Experts',
    badgeIcon: BadgeCheck,
    title: 'Our Healthcare Development Services',
    subtitle:
      'Comprehensive healthcare web development solutions tailored to your medical business needs and patient requirements.',
    defaultCta: 'View Details',
    defaultHref: '#contact',
    items: [
      {
        icon: Globe,
        title: 'Healthcare Website Development',
        description: 'Tailored medical websites built from scratch for your specific healthcare requirements, with security built in.',
        features: ['Responsive Medical Design', 'Healthcare SEO', 'Fast Loading', 'Cross-browser'],
        accent: 'from-emerald-500 to-teal-500',
      },
      {
        icon: Smartphone,
        title: 'Medical Mobile Applications',
        description: 'App-like healthcare experiences that work seamlessly across devices with medical functionality.',
        features: ['Offline Functionality', 'Push Notifications', 'App Store Ready', 'Native Feel'],
        accent: 'from-violet-500 to-fuchsia-500',
      },
      {
        icon: Database,
        title: 'Healthcare Management Systems',
        description: 'Complete medical management solutions with patient records, scheduling, and data management.',
        features: ['Patient Data Management', 'Medical Inventory', 'Appointment Scheduling', 'Admin Dashboard'],
        accent: 'from-green-500 to-lime-500',
      },
      {
        icon: Shield,
        title: 'Healthcare Web Applications',
        description: 'Complex healthcare applications with advanced functionality and real-time updates.',
        features: ['Patient Authentication', 'Role Management', 'API Integration', 'Real-time Updates'],
        accent: 'from-orange-500 to-amber-500',
      },
      {
        icon: Server,
        title: 'Medical API Development',
        description: 'Secure healthcare APIs for data exchange, third-party integrations, and mobile applications.',
        features: ['RESTful APIs', 'GraphQL Endpoints', 'WebSocket Support', 'API Security'],
        accent: 'from-sky-500 to-indigo-500',
      },
      {
        icon: Cloud,
        title: 'Healthcare Cloud Solutions',
        description: 'Cloud-based medical systems with scalability, reliability, and strong security.',
        features: ['AWS/Azure/GCP', 'Containerization', 'CI/CD Pipeline', 'Monitoring'],
        accent: 'from-rose-500 to-pink-500',
      },
    ],
  },
  tools: {
    title: 'Healthcare Technologies We Use',
    subtitle: 'The latest, most reliable technologies for robust and secure medical web solutions.',
    tabs: [
      {
        key: 'frontend',
        label: 'Frontend',
        icon: Monitor,
        items: [
          { name: 'React.js for Healthcare', description: 'Modern UI for medical applications with TypeScript support.', icon: Code },
          { name: 'Next.js Medical Apps', description: 'Full-stack healthcare solutions with server-side rendering.', icon: Layers },
          { name: 'Vue.js Healthcare UI', description: 'Progressive frameworks for interactive medical applications.', icon: Monitor },
          { name: 'Angular Medical Systems', description: 'Enterprise healthcare applications with robust architecture.', icon: Boxes },
        ],
      },
      {
        key: 'backend',
        label: 'Backend',
        icon: Server,
        items: [
          { name: 'Node.js Healthcare APIs', description: 'Medical data processing and RESTful API development.', icon: Terminal },
          { name: 'Python for Healthcare', description: 'Medical data analysis, AI integration, and ML models.', icon: Cpu },
          { name: '.NET Medical Systems', description: 'Enterprise healthcare solutions with C# and ASP.NET.', icon: Server },
          { name: 'Java Healthcare Solutions', description: 'Secure enterprise medical systems with Spring Boot.', icon: Settings },
        ],
      },
      {
        key: 'database',
        label: 'Database',
        icon: Database,
        items: [
          { name: 'MongoDB for Healthcare', description: 'NoSQL database for flexible medical data storage.', icon: Database },
          { name: 'MySQL Medical Records', description: 'Relational healthcare database with ACID compliance.', icon: HardDrive },
          { name: 'PostgreSQL Healthcare', description: 'Advanced medical data storage with JSON support.', icon: Database },
          { name: 'Redis Medical Cache', description: 'In-memory data store for healthcare performance.', icon: Zap },
        ],
      },
      {
        key: 'devops',
        label: 'DevOps',
        icon: Cloud,
        items: [
          { name: 'Docker Healthcare Containers', description: 'Containerization for medical application deployment.', icon: Boxes },
          { name: 'Kubernetes Medical Clusters', description: 'Orchestration for scalable healthcare systems.', icon: Layers },
          { name: 'AWS Healthcare Cloud', description: 'Secure cloud infrastructure for medical applications.', icon: Cloud },
          { name: 'Azure Medical Services', description: 'Microsoft cloud for secure, compliant medical solutions.', icon: Cloud },
        ],
      },
    ],
  },
  process: {
    badge: 'Proven Process',
    badgeIcon: Zap,
    title: 'Our Healthcare Development Process',
    subtitle: 'A proven methodology that ensures successful project delivery with compliance and security.',
    items: [
      { step: '01', title: 'Healthcare Discovery', description: 'Analyze medical requirements, patient needs, and healthcare goals for a comprehensive strategy.', icon: Stethoscope },
      { step: '02', title: 'Technical Architecture', description: 'Design system architecture with security, scalability, and compliance in mind.', icon: Cpu },
      { step: '03', title: 'Medical Development', description: 'Build your healthcare solution with modern technologies and compliance testing.', icon: Terminal },
      { step: '04', title: 'Quality Assurance', description: 'Rigorous testing for functionality, security, and healthcare compliance standards.', icon: Shield },
      { step: '05', title: 'Deployment & Launch', description: 'Deploy your healthcare website with monitoring and performance optimization.', icon: Rocket },
      { step: '06', title: 'Maintenance & Support', description: 'Ongoing maintenance, updates, security patches, and technical support.', icon: Settings },
    ],
  },
  testimonials: {
    id: 'portfolio',
    badge: 'Success Stories',
    title: 'Trusted by Healthcare Providers',
    subtitle: "See how we've helped healthcare providers achieve their goals through innovative medical web solutions.",
    items: [
      { name: 'Dr. Ankit Verma', role: 'Cardiologist, HeartCare Specialists', content: 'Our clinic saw a 350% increase in patient inquiries within 6 months of starting their healthcare SEO service. Highly recommended!', rating: 5 },
      { name: 'Dr. Priya Singh', role: 'Dental Clinic Owner, SmileCare Dental', content: 'The local SEO strategy helped us dominate search results in our area. We now get 80% of our appointments from online searches.', rating: 5 },
      { name: 'Rahul Mehta', role: 'Hospital Administrator, City Multi-specialty', content: 'Their healthcare-specific approach to SEO has transformed our online presence. Patient inquiries have tripled since we started.', rating: 5 },
    ],
  },
  pricing: {
    title: 'Healthcare Development Packages',
    subtitle: 'Choose the perfect healthcare package for your medical practice needs.',
    items: [
      {
        name: 'Clinic Website Development',
        price: '₹35,000',
        period: 'one-time',
        description: 'Perfect for small clinics and individual practitioners.',
        features: ['Up to 5 medical pages', 'Responsive healthcare design', 'Medical contact form', 'Basic healthcare SEO', '3 months medical support', 'Mobile responsive', 'Fast loading optimization'],
        cta: 'Start Clinic Website',
      },
      {
        name: 'Practice Management System',
        price: '₹75,000',
        period: 'one-time',
        description: 'Ideal for growing medical practices and clinics.',
        features: ['Up to 15 medical pages', 'Healthcare CMS integration', 'Advanced medical SEO', 'Healthcare analytics', '6 months support', 'Patient portal', 'Admin dashboard', 'Appointment system'],
        popular: true,
        cta: 'Build Practice System',
      },
      {
        name: 'Hospital Enterprise Solution',
        price: 'Custom',
        period: 'quote',
        description: 'Tailored for hospitals and large healthcare organizations.',
        features: ['Unlimited medical pages', 'Custom healthcare functionality', 'Medical API integrations', 'Advanced security', '12 months premium support', 'Dedicated project manager', 'Multi-location support', '24/7 monitoring'],
        cta: 'Get Enterprise Quote',
      },
    ],
  },
  cta: {
    icon: Code,
    title: 'Ready to Start Your Healthcare Web Development Project?',
    description:
      "Let's discuss your medical requirements and create a powerful healthcare web solution that drives your practice forward.",
    primary: { label: 'Get Free Consultation', href: '/quote' },
    badges: [
      { icon: ShieldCheck, text: 'Security First' },
      { icon: Server, text: '99.9% Uptime' },
      { icon: Clock, text: '24/7 Support' },
      { icon: Award, text: 'Certified Developers' },
    ],
  },
};

export default function HealthcareWebDevelopmentPage() {
  return <ServicePage {...props} />;
}
