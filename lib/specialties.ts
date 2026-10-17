import type { ServicePageProps, IconType } from '@/components/healthcare/service-page';
import {
  Activity, Award, BadgeCheck, BarChart3, Baby, Boxes, Building2, CalendarCheck, Clock, Cloud,
  Eye, FileText, Globe, HeartPulse, Layers, Megaphone, MapPin, MessageCircle, Monitor, Rocket,
  Search, Settings, ShieldCheck, Smile, Sparkles, Star, Stethoscope, Target, TrendingUp, Users,
  Video, Zap, Camera, ClipboardCheck, Phone,
  Bone, Brain, Droplet, Droplets, Ear, Flower2, Heart, HeartHandshake, Leaf, Microscope, Pill,
  Salad, Scale, Scissors, ToyBrick, Wand2, Wind,
} from 'lucide-react';

/* ---------- Shared pieces ---------- */

const accents = [
  'from-emerald-500 to-teal-500',
  'from-violet-500 to-fuchsia-500',
  'from-green-500 to-lime-500',
  'from-orange-500 to-amber-500',
  'from-sky-500 to-indigo-500',
  'from-rose-500 to-pink-500',
];

type Svc = [IconType, string, string, [string, string, string, string]];
type Row = { label: string; value: string; change: string };
type Review = { name: string; role: string; content: string; rating: number; tag?: string };

interface SpecialtyConfig {
  slug: string;
  name: string; // e.g. "Dental Clinic"
  metaTitle: string;
  metaDescription: string;
  heroIcon: IconType;
  badgeText: string;
  before: string;
  accent: string;
  heroDescription: string;
  trust: string;
  dashboardTitle: string;
  dashboardRows: Row[];
  footerValue: string;
  stat1: { value: string; label: string };
  services: Svc[];
  reviews: Review[];
  priceNotes: { starter: string; growth: string };
}

const config: SpecialtyConfig[] = [
  {
    slug: 'hospital-marketing',
    name: 'Hospital',
    metaTitle: 'Hospital Marketing Services in India | Web Leading India',
    metaDescription:
      'Multi-specialty hospital marketing: SEO, ads, reputation and patient-journey funnels that fill OPDs and grow departments.',
    heroIcon: Building2,
    badgeText: 'Marketing for Hospitals & Multi-specialty Centres',
    before: 'Fill Your OPD With',
    accent: 'Hospital Marketing',
    heroDescription:
      'Department-wise SEO, performance ads and reputation management that bring qualified patients to your hospital - and show you exactly which campaign produced which admission.',
    trust: 'Trusted by 50+ Hospitals & Nursing Homes',
    dashboardTitle: 'Hospital Growth Dashboard',
    dashboardRows: [
      { label: 'OPD Enquiries', value: '1.8K', change: '+42% MoM' },
      { label: 'Cost / Enquiry', value: '₹210', change: '-31%' },
      { label: 'Departments Ranked', value: '14', change: 'Top 3' },
      { label: 'Google Rating', value: '4.7', change: '+0.6' },
    ],
    footerValue: 'Growing Steadily',
    stat1: { value: '50+', label: 'Hospitals Served' },
    services: [
      [Search, 'Department-wise SEO', 'Rank each department (cardiology, ortho, neuro) for high-intent local searches.', ['Service Pages', 'Doctor Profiles', 'Schema Markup', 'Local SEO']],
      [Target, 'Patient Acquisition Ads', 'Google and Meta campaigns tuned to treatments, not just clicks.', ['Google Ads', 'Meta Ads', 'Call Tracking', 'Landing Pages']],
      [Star, 'Reputation Management', 'Collect genuine reviews and respond professionally across platforms.', ['Review Requests', 'Response Templates', 'Google Business Profile', 'Alerts']],
      [Globe, 'Hospital Website', 'Fast, accessible website with doctor search and online appointments.', ['Doctor Directory', 'Appointment Booking', 'Health Packages', 'Multi-language']],
      [Video, 'Content & Social', 'Doctor videos, health awareness and campaign calendars for every channel.', ['Doctor Videos', 'Health Camps', 'Social Calendar', 'WhatsApp Broadcast']],
      [BarChart3, 'Reporting & Analytics', 'Track enquiries to appointments to admissions in one view.', ['GA4 Setup', 'Lead Tracking', 'Monthly Reports', 'ROI Dashboard']],
    ],
    reviews: [
      { name: 'Rahul Mehta', role: 'Administrator, City Multi-specialty Hospital', content: 'Department-wise campaigns gave us a clear view of where each patient came from. Enquiries tripled in four months.', rating: 5 },
      { name: 'Dr. Neha Kapoor', role: 'Medical Director, Lifeline Hospital', content: 'Our cardiology and orthopaedic pages now rank on the first page for local searches.', rating: 5 },
      { name: 'Sandeep Rao', role: 'CEO, Rao Nursing Home', content: 'Honest reporting and a team that understands healthcare. Our Google rating went up and so did bookings.', rating: 5 },
    ],
    priceNotes: { starter: 'Single-location nursing homes', growth: 'Multi-department hospitals' },
  },
  {
    slug: 'dental-marketing',
    name: 'Dental Clinic',
    metaTitle: 'Dental Marketing Services | Get More Dental Patients',
    metaDescription:
      'Dental clinic marketing: local SEO, Google Ads and review growth that bring in implant, braces and cosmetic dentistry patients.',
    heroIcon: Smile,
    badgeText: 'Marketing for Dental Clinics',
    before: 'Book More Patients With',
    accent: 'Dental Marketing',
    heroDescription:
      'Be the dentist people find first for implants, braces, root canals and smile makeovers. Local SEO, ads and reviews working together for your clinic.',
    trust: 'Trusted by 80+ Dental Clinics',
    dashboardTitle: 'Dental Clinic Dashboard',
    dashboardRows: [
      { label: 'New Patients', value: '96', change: '+38% MoM' },
      { label: 'Cost / Booking', value: '₹340', change: '-27%' },
      { label: 'Map Pack Rank', value: '#2', change: 'Local' },
      { label: 'Reviews', value: '412', change: '+58' },
    ],
    footerValue: 'Calendar Filling Up',
    stat1: { value: '80+', label: 'Dental Clinics' },
    services: [
      [MapPin, 'Local SEO for Dentists', 'Show up in the map pack for "dentist near me" and treatment searches.', ['Google Business Profile', 'Citations', 'Treatment Pages', 'Map Ranking']],
      [Target, 'Implant & Braces Ads', 'High-value treatment campaigns with tracked phone calls and forms.', ['Google Ads', 'Meta Ads', 'Call Tracking', 'Offer Pages']],
      [Camera, 'Before / After Content', 'Compliant smile-case content that builds trust on social media.', ['Case Photos', 'Reels', 'Consent Templates', 'Content Calendar']],
      [Star, 'Review Growth', 'Simple systems that turn happy patients into 5-star reviews.', ['SMS / WhatsApp Requests', 'QR Cards', 'Reply Templates', 'Monitoring']],
      [Globe, 'Dental Website', 'Clean website with online booking and treatment pricing guides.', ['Online Booking', 'Treatment Pages', 'Smile Gallery', 'Fast Loading']],
      [CalendarCheck, 'Recall & Retention', 'Reminders and campaigns that bring patients back for check-ups.', ['Recall Reminders', 'WhatsApp Flows', 'Referral Offers', 'Birthday Wishes']],
    ],
    reviews: [
      { name: 'Dr. Priya Singh', role: 'Owner, SmileCare Dental', content: 'We now get most of our appointments from online searches. Implant enquiries have doubled.', rating: 5 },
      { name: 'Dr. Arjun Malhotra', role: 'Orthodontist, Align Dental Studio', content: 'The braces campaign brought quality leads, not just clicks. Booking process is much smoother too.', rating: 5 },
      { name: 'Dr. Kavita Jain', role: 'Founder, Pearl Dental Care', content: 'Our review count and Google ranking improved within three months.', rating: 5 },
    ],
    priceNotes: { starter: 'Single-chair and solo practices', growth: 'Multi-chair and multi-city clinics' },
  },
  {
    slug: 'eye-hospital-marketing',
    name: 'Eye Hospital',
    metaTitle: 'Eye Hospital & Ophthalmology Marketing | Web Leading India',
    metaDescription:
      'Marketing for eye hospitals and eye clinics: LASIK, cataract and retina campaigns powered by SEO, ads and trust-building content.',
    heroIcon: Eye,
    badgeText: 'Marketing for Eye Hospitals & Clinics',
    before: 'Grow Your Practice With',
    accent: 'Eye Care Marketing',
    heroDescription:
      'Reach patients searching for cataract surgery, LASIK, retina and paediatric eye care. We build trust first, then turn searches into consultations.',
    trust: 'Trusted by 30+ Eye Care Centres',
    dashboardTitle: 'Eye Care Growth Dashboard',
    dashboardRows: [
      { label: 'Consult Requests', value: '640', change: '+44% MoM' },
      { label: 'LASIK Leads', value: '118', change: '+61%' },
      { label: 'Cost / Lead', value: '₹290', change: '-29%' },
      { label: 'Google Rating', value: '4.8', change: '+0.4' },
    ],
    footerValue: 'Consultations Rising',
    stat1: { value: '30+', label: 'Eye Care Centres' },
    services: [
      [Search, 'Procedure-focused SEO', 'Rank for cataract, LASIK, retina and glaucoma searches in your city.', ['Procedure Pages', 'FAQ Schema', 'Local SEO', 'Doctor Profiles']],
      [Target, 'LASIK & Cataract Ads', 'Campaigns built around high-value procedures with qualified lead filters.', ['Google Ads', 'Meta Ads', 'Lead Forms', 'Retargeting']],
      [Video, 'Patient Education Videos', 'Short explainers that reduce fear around eye surgery and build trust.', ['Procedure Explainers', 'Surgeon Intros', 'Reels', 'YouTube SEO']],
      [Star, 'Reputation Building', 'Patient stories and reviews that reassure first-time visitors.', ['Review Requests', 'Testimonial Videos', 'Reply Management', 'Alerts']],
      [Globe, 'Eye Care Website', 'Accessible website with large type, appointment booking and vision-test CTAs.', ['Online Booking', 'Accessibility', 'Insurance Info', 'Fast Loading']],
      [BarChart3, 'Lead Tracking', 'See which procedure and channel produced each consultation.', ['Call Tracking', 'GA4 Setup', 'Monthly Reports', 'ROI View']],
    ],
    reviews: [
      { name: 'Dr. Sameer Khanna', role: 'Cataract Surgeon, ClearView Eye Centre', content: 'Cataract and LASIK enquiries are steady every week now. The team understands patient hesitation.', rating: 5 },
      { name: 'Meenal Joshi', role: 'Manager, Netra Eye Hospital', content: 'Video explainers made patients far more comfortable booking surgery consultations.', rating: 5 },
      { name: 'Dr. Rohit Bansal', role: 'Retina Specialist, VisionPlus', content: 'We finally see exactly which channels bring consultations. Very transparent reporting.', rating: 5 },
    ],
    priceNotes: { starter: 'Single eye clinics', growth: 'Eye hospitals with surgical programmes' },
  },
  {
    slug: 'ivf-marketing',
    name: 'Fertility & IVF Clinic',
    metaTitle: 'IVF & Fertility Clinic Marketing | Web Leading India',
    metaDescription:
      'Sensitive, ethical marketing for IVF and fertility clinics: SEO, ads and patient-education content that build trust with couples.',
    heroIcon: Baby,
    badgeText: 'Marketing for Fertility & IVF Clinics',
    before: 'Reach Couples Through',
    accent: 'IVF Clinic Marketing',
    heroDescription:
      'Couples research for months before choosing a clinic. We create compassionate, compliant content and campaigns that earn trust at every stage of that journey.',
    trust: 'Trusted by 25+ Fertility Centres',
    dashboardTitle: 'Fertility Clinic Dashboard',
    dashboardRows: [
      { label: 'Couple Enquiries', value: '310', change: '+36% MoM' },
      { label: 'Consult Bookings', value: '88', change: '+52%' },
      { label: 'Cost / Consult', value: '₹1.1K', change: '-24%' },
      { label: 'Content Reach', value: '240K', change: '+90K' },
    ],
    footerValue: 'Trust Building',
    stat1: { value: '25+', label: 'Fertility Clinics' },
    services: [
      [Search, 'Fertility SEO', 'Rank for IVF, IUI, ICSI and male infertility searches with accurate content.', ['Treatment Pages', 'Medical Review', 'Local SEO', 'FAQ Schema']],
      [Target, 'Compliant IVF Ads', 'Ads that follow platform healthcare policies and respect patient sensitivity.', ['Google Ads', 'Meta Ads', 'Policy Review', 'Retargeting']],
      [Video, 'Patient Education', 'Doctor-led explainers on the IVF journey, costs and success factors.', ['Doctor Videos', 'Process Guides', 'Webinars', 'YouTube SEO']],
      [MessageCircle, 'Counselling Funnels', 'WhatsApp and call flows that guide couples gently to a first consultation.', ['WhatsApp Flows', 'Call Scripts', 'Reminders', 'CRM Setup']],
      [Star, 'Reputation & Stories', 'Respectful success stories and reviews, shared with full consent.', ['Consent Templates', 'Review Management', 'Story Videos', 'Alerts']],
      [BarChart3, 'Journey Analytics', 'Track the path from first search to consultation to treatment.', ['GA4 Setup', 'Lead Tracking', 'Monthly Reports', 'ROI View']],
    ],
    reviews: [
      { name: 'Dr. Anjali Sharma', role: 'Fertility Specialist, Aasha IVF Centre', content: 'The content is sensitive and accurate. Couples tell us they felt informed before they even called.', rating: 5 },
      { name: 'Pooja Arora', role: 'Director, Garbh Fertility Clinic', content: 'Consultation bookings grew steadily and the leads were much more serious.', rating: 5 },
      { name: 'Dr. Vikram Sethi', role: 'IVF Consultant, NewLife Hospital', content: 'They understand the compliance side of fertility advertising, which saved us a lot of worry.', rating: 5 },
    ],
    priceNotes: { starter: 'Single IVF clinics', growth: 'Multi-centre fertility groups' },
  },
  {
    slug: 'dermatology-marketing',
    name: 'Dermatology & Skin Clinic',
    metaTitle: 'Dermatology & Skin Clinic Marketing | Web Leading India',
    metaDescription:
      'Marketing for dermatologists and skin clinics: acne, hair, laser and cosmetic treatment campaigns using SEO, ads and social content.',
    heroIcon: Sparkles,
    badgeText: 'Marketing for Dermatology & Skin Clinics',
    before: 'Attract Patients With',
    accent: 'Dermatology Marketing',
    heroDescription:
      'From acne and hair loss to laser and anti-ageing, we help skin clinics rank, advertise and build a trusted brand online.',
    trust: 'Trusted by 40+ Skin & Cosmetic Clinics',
    dashboardTitle: 'Skin Clinic Dashboard',
    dashboardRows: [
      { label: 'New Enquiries', value: '520', change: '+47% MoM' },
      { label: 'Laser Leads', value: '140', change: '+55%' },
      { label: 'Cost / Lead', value: '₹260', change: '-33%' },
      { label: 'Instagram Reach', value: '180K', change: '+70K' },
    ],
    footerValue: 'Strong Momentum',
    stat1: { value: '40+', label: 'Skin Clinics' },
    services: [
      [Search, 'Skin & Hair SEO', 'Rank for acne, pigmentation, hair fall and laser treatment searches.', ['Treatment Pages', 'Local SEO', 'Blog Strategy', 'Schema Markup']],
      [Target, 'Treatment Campaigns', 'Performance ads for laser, PRP, peels and anti-ageing packages.', ['Google Ads', 'Meta Ads', 'Offer Funnels', 'Retargeting']],
      [Camera, 'Social & Reels', 'Doctor-led reels and result stories on Instagram and YouTube.', ['Reels', 'Result Stories', 'Consent Templates', 'Content Calendar']],
      [Megaphone, 'Influencer & Brand', 'Responsible collaborations that build clinic authority.', ['Doctor Branding', 'Collaborations', 'PR Mentions', 'Brand Kit']],
      [Globe, 'Clinic Website', 'Elegant website with treatment menus and instant booking.', ['Online Booking', 'Treatment Menus', 'Gallery', 'Fast Loading']],
      [Star, 'Reviews & Retention', 'Follow-up flows that bring patients back for treatment courses.', ['Review Requests', 'Follow-up Reminders', 'WhatsApp Flows', 'Loyalty Offers']],
    ],
    reviews: [
      { name: 'Dr. Ritu Agarwal', role: 'Dermatologist, GlowSkin Clinic', content: 'Laser and hair treatment enquiries jumped within weeks. The reels strategy really worked for us.', rating: 5 },
      { name: 'Dr. Manish Gupta', role: 'Cosmetologist, Derma Studio', content: 'Ads brought patients who actually booked treatment packages, not just price shoppers.', rating: 5 },
      { name: 'Shreya Nair', role: 'Manager, Aura Skin & Hair', content: 'Clear reporting and a content calendar we did not have to chase. Highly recommended.', rating: 5 },
    ],
    priceNotes: { starter: 'Solo dermatologists', growth: 'Skin and cosmetic clinic chains' },
  },
  {
    slug: 'physiotherapy-marketing',
    name: 'Physiotherapy Clinic',
    metaTitle: 'Physiotherapy Clinic Marketing | Web Leading India',
    metaDescription:
      'Marketing for physiotherapy and rehab centres: local SEO, ads and WhatsApp follow-ups that keep your appointment book full.',
    heroIcon: Activity,
    badgeText: 'Marketing for Physiotherapy & Rehab Centres',
    before: 'Keep Your Schedule Full With',
    accent: 'Physiotherapy Marketing',
    heroDescription:
      'Back pain, sports injuries, post-surgery rehab - we help patients find your clinic and stick with their full treatment plan.',
    trust: 'Trusted by 45+ Physio & Rehab Clinics',
    dashboardTitle: 'Physio Clinic Dashboard',
    dashboardRows: [
      { label: 'New Patients', value: '120', change: '+41% MoM' },
      { label: 'Home Visits', value: '64', change: '+22' },
      { label: 'Cost / Booking', value: '₹180', change: '-26%' },
      { label: 'Repeat Visits', value: '78%', change: '+12%' },
    ],
    footerValue: 'Schedule Filling Up',
    stat1: { value: '45+', label: 'Physio Clinics' },
    services: [
      [MapPin, 'Local SEO', 'Appear in map results for "physiotherapist near me" and condition searches.', ['Google Business Profile', 'Condition Pages', 'Citations', 'Map Ranking']],
      [Target, 'Condition-based Ads', 'Campaigns for back pain, knee pain, sciatica and sports injuries.', ['Google Ads', 'Meta Ads', 'Call Tracking', 'Landing Pages']],
      [Video, 'Exercise & Education', 'Short exercise and posture videos that build authority.', ['Exercise Reels', 'Posture Tips', 'YouTube SEO', 'Content Calendar']],
      [MessageCircle, 'WhatsApp Follow-ups', 'Reminders and progress check-ins that improve treatment completion.', ['Session Reminders', 'Progress Updates', 'Feedback Flows', 'Referral Offers']],
      [Globe, 'Clinic Website', 'Simple website with online booking and home-visit requests.', ['Online Booking', 'Home Visit Form', 'Service Pages', 'Fast Loading']],
      [Star, 'Reviews & Referrals', 'Turn recovered patients into reviews and word-of-mouth referrals.', ['Review Requests', 'Referral Program', 'Reply Templates', 'Monitoring']],
    ],
    reviews: [
      { name: 'Dr. Aman Chawla', role: 'Physiotherapist, MotionFirst Clinic', content: 'Bookings from Google doubled and patients now complete their full treatment plans.', rating: 5 },
      { name: 'Dr. Sneha Pillai', role: 'Founder, RehabPoint', content: 'The WhatsApp follow-up system alone was worth it. Fewer no-shows and more repeat visits.', rating: 5 },
      { name: 'Karan Bedi', role: 'Owner, SportsCare Physio', content: 'We rank for sports injury searches in our area now. Great team, clear communication.', rating: 5 },
    ],
    priceNotes: { starter: 'Solo physiotherapists', growth: 'Multi-clinic and home-care teams' },
  },
];


/* ---------- Compact specialties (generated from a short spec) ---------- */

interface LiteSpec {
  slug: string;
  name: string; // clinic noun, e.g. "Cardiology Clinic"
  spec: string; // e.g. "Cardiology"
  icon: IconType;
  treatments: [string, string, string, string];
  count: number; // trust number shown in hero
  reviewers: [[string, string], [string, string], [string, string]];
}

const lite: LiteSpec[] = [
  { slug: 'cardiology-marketing', name: 'Cardiology Clinic', spec: 'Cardiology', icon: HeartPulse, treatments: ['angioplasty', 'heart check-ups', 'bypass surgery', 'ECG & echo'], count: 30, reviewers: [['Dr. Ankit Verma', 'Cardiologist, HeartCare Specialists'], ['Dr. Suresh Menon', 'Interventional Cardiologist, Cardio Plus'], ['Ritika Sood', 'Manager, Heartline Hospital']] },
  { slug: 'orthopedic-marketing', name: 'Orthopedic Clinic', spec: 'Orthopedic', icon: Bone, treatments: ['knee replacement', 'spine surgery', 'sports injury', 'fracture care'], count: 45, reviewers: [['Dr. Rajiv Chauhan', 'Orthopedic Surgeon, BoneCare Centre'], ['Dr. Hemant Kulkarni', 'Joint Replacement Specialist, Ortho One'], ['Alka Dubey', 'Director, Spine & Joint Clinic']] },
  { slug: 'gynecology-marketing', name: 'Gynecology & Maternity Clinic', spec: 'Gynecology & Maternity', icon: Flower2, treatments: ['pregnancy care', 'normal delivery', 'PCOS treatment', 'laparoscopy'], count: 55, reviewers: [['Dr. Sunita Rao', 'Gynecologist, Janani Maternity Home'], ['Dr. Pallavi Desai', 'Obstetrician, MotherCare Hospital'], ['Nisha Kapoor', 'Manager, WomenFirst Clinic']] },
  { slug: 'pediatric-marketing', name: 'Pediatric Clinic', spec: 'Pediatric', icon: ToyBrick, treatments: ['child vaccination', 'newborn care', 'child nutrition', 'paediatric emergency'], count: 40, reviewers: [['Dr. Mohit Taneja', 'Pediatrician, LittleSteps Clinic'], ['Dr. Shalini Iyer', 'Neonatologist, Kids Care Hospital'], ['Anuj Saxena', 'Admin, Bachpan Child Centre']] },
  { slug: 'ent-marketing', name: 'ENT Clinic', spec: 'ENT', icon: Ear, treatments: ['sinus surgery', 'hearing aids', 'tonsil surgery', 'cochlear implant'], count: 20, reviewers: [['Dr. Varun Bhatia', 'ENT Surgeon, ClearAir ENT Centre'], ['Dr. Leena Thomas', 'Audiologist, SoundWell Clinic'], ['Gaurav Mittal', 'Manager, Sai ENT Hospital']] },
  { slug: 'neurology-marketing', name: 'Neurology Centre', spec: 'Neurology', icon: Brain, treatments: ['stroke care', 'epilepsy treatment', 'migraine care', 'neurosurgery'], count: 18, reviewers: [['Dr. Karthik Nair', 'Neurologist, NeuroCare Institute'], ['Dr. Isha Bajaj', 'Neurosurgeon, BrainWell Hospital'], ['Rohan Pandey', 'Director, Mind & Nerve Clinic']] },
  { slug: 'oncology-marketing', name: 'Cancer Care Centre', spec: 'Oncology', icon: HeartHandshake, treatments: ['chemotherapy', 'radiation therapy', 'cancer screening', 'second opinion'], count: 15, reviewers: [['Dr. Vivek Arora', 'Oncologist, HopeCare Cancer Centre'], ['Dr. Madhuri Sen', 'Radiation Oncologist, Aarogya Cancer Hospital'], ['Tarun Goyal', 'Administrator, Jeevan Oncology']] },
  { slug: 'diabetes-marketing', name: 'Diabetes Clinic', spec: 'Diabetes & Endocrinology', icon: Droplets, treatments: ['diabetes management', 'thyroid care', 'diabetic foot care', 'diet counselling'], count: 25, reviewers: [['Dr. Ashok Reddy', 'Diabetologist, SugarCare Clinic'], ['Dr. Farah Khan', 'Endocrinologist, Thyro & Diabetes Centre'], ['Mahesh Iyer', 'Manager, Madhumeha Diabetes Care']] },
  { slug: 'gastroenterology-marketing', name: 'Gastroenterology Clinic', spec: 'Gastroenterology', icon: Salad, treatments: ['endoscopy', 'liver care', 'piles & fissure care', 'colonoscopy'], count: 22, reviewers: [['Dr. Nikhil Jain', 'Gastroenterologist, GutCare Clinic'], ['Dr. Rekha Menon', 'Hepatologist, LiverWell Centre'], ['Sumit Walia', 'Director, Digestive Health Hospital']] },
  { slug: 'urology-marketing', name: 'Urology & Kidney Clinic', spec: 'Urology & Nephrology', icon: Droplet, treatments: ['kidney stone removal', 'prostate care', 'dialysis', 'laser urology'], count: 20, reviewers: [['Dr. Prashant Gupta', 'Urologist, KidneyCare Centre'], ['Dr. Anita Mathur', 'Nephrologist, RenalLife Hospital'], ['Deepak Rawat', 'Manager, Uro & Stone Clinic']] },
  { slug: 'psychiatry-marketing', name: 'Mental Health Clinic', spec: 'Psychiatry & Mental Health', icon: Heart, treatments: ['depression treatment', 'anxiety counselling', 'de-addiction', 'child psychology'], count: 18, reviewers: [['Dr. Sanjana Kulshreshtha', 'Psychiatrist, MindEase Clinic'], ['Dr. Rahul Bhargava', 'Clinical Psychologist, Samvaad Centre'], ['Preeti Saini', 'Director, Manas Wellness']] },
  { slug: 'ayurveda-marketing', name: 'Ayurveda Clinic', spec: 'Ayurveda', icon: Leaf, treatments: ['panchakarma', 'joint pain therapy', 'skin & hair care', 'wellness retreat'], count: 35, reviewers: [['Vaidya Ramesh Tiwari', 'Ayurvedacharya, Prakriti Ayurveda'], ['Dr. Lakshmi Namboodiri', 'Founder, Kerala Ayurveda Centre'], ['Ajay Kapadia', 'Director, Ayu Wellness Resort']] },
  { slug: 'homeopathy-marketing', name: 'Homeopathy Clinic', spec: 'Homeopathy', icon: Pill, treatments: ['chronic disease care', 'allergy treatment', 'skin problems', 'paediatric homeopathy'], count: 28, reviewers: [['Dr. Pratibha Sharma', 'Homeopath, Healwell Homeopathy'], ['Dr. Naveen Chopra', 'Consultant, Natural Cure Clinic'], ['Sheetal Mehra', 'Manager, Sanjeevani Homeopathy']] },
  { slug: 'diagnostic-lab-marketing', name: 'Diagnostic Lab', spec: 'Diagnostic Lab & Pathology', icon: Microscope, treatments: ['full body check-ups', 'home sample collection', 'MRI & CT scan', 'blood tests'], count: 35, reviewers: [['Dr. Vandana Rastogi', 'Pathologist, TrueTest Diagnostics'], ['Amit Bhalla', 'Owner, QuickLab Diagnostics'], ['Dr. Sachin Joshi', 'Radiologist, ScanPoint Imaging']] },
  { slug: 'cosmetic-surgery-marketing', name: 'Cosmetic Surgery Clinic', spec: 'Cosmetic & Plastic Surgery', icon: Wand2, treatments: ['rhinoplasty', 'liposuction', 'breast surgery', 'facial contouring'], count: 22, reviewers: [['Dr. Aditya Kohli', 'Plastic Surgeon, Aesthetica Clinic'], ['Dr. Meera Sethi', 'Cosmetic Surgeon, Reshape Institute'], ['Nandini Roy', 'Manager, Belle Cosmetic Centre']] },
  { slug: 'hair-transplant-marketing', name: 'Hair Transplant Clinic', spec: 'Hair Transplant', icon: Scissors, treatments: ['FUE hair transplant', 'PRP therapy', 'beard transplant', 'hair fall treatment'], count: 30, reviewers: [['Dr. Gaurav Sinha', 'Hair Transplant Surgeon, RootsPlus Clinic'], ['Dr. Tanvi Oberoi', 'Trichologist, HairRevive Centre'], ['Manav Khurana', 'Director, Follicle Studio']] },
  { slug: 'weight-loss-marketing', name: 'Weight Loss Clinic', spec: 'Weight Loss & Bariatric', icon: Scale, treatments: ['bariatric surgery', 'diet & nutrition plans', 'obesity management', 'body composition tests'], count: 20, reviewers: [['Dr. Kunal Arora', 'Bariatric Surgeon, SlimCare Hospital'], ['Dr. Ruchi Vohra', 'Clinical Nutritionist, FitWell Clinic'], ['Samir Qureshi', 'Founder, LeanLife Centre']] },
  { slug: 'pulmonology-marketing', name: 'Chest & Pulmonology Clinic', spec: 'Pulmonology', icon: Wind, treatments: ['asthma care', 'sleep apnea', 'COPD treatment', 'lung function tests'], count: 15, reviewers: [['Dr. Yogesh Malik', 'Pulmonologist, BreatheEasy Clinic'], ['Dr. Shweta Pandit', 'Chest Physician, LungCare Hospital'], ['Rajat Anand', 'Manager, Pulmo Wellness']] },
  { slug: 'general-physician-marketing', name: 'General Physician Clinic', spec: 'General Physician', icon: Stethoscope, treatments: ['fever & infection care', 'health check-ups', 'chronic disease management', 'online consultation'], count: 60, reviewers: [['Dr. Harish Bhatt', 'General Physician, FamilyCare Clinic'], ['Dr. Neelam Soni', 'Consultant Physician, CityCare Polyclinic'], ['Imran Sheikh', 'Manager, Dhanvantari Clinic']] },
];

function fromLite(l: LiteSpec): SpecialtyConfig {
  const [t1, t2, t3, t4] = l.treatments;
  const lower = l.name.toLowerCase();
  return {
    slug: l.slug,
    name: l.name,
    metaTitle: `${l.spec} Marketing Services in India | Web Leading India`,
    metaDescription: `${l.spec} marketing for ${lower}s: local SEO, Google and Meta ads, reputation and lead tracking that bring ${t1} and ${t2} patients.`,
    heroIcon: l.icon,
    badgeText: `Marketing for ${l.spec} Practices`,
    before: 'Get More Patients With',
    accent: `${l.spec} Marketing`,
    heroDescription: `Reach patients searching for ${t1}, ${t2} and ${t3}. We build trust first and then turn searches into confirmed appointments for your ${lower}.`,
    trust: `Trusted by ${l.count}+ ${l.spec} Practices`,
    dashboardTitle: `${l.spec} Growth Dashboard`,
    dashboardRows: [
      { label: 'New Enquiries', value: '420', change: '+40% MoM' },
      { label: `${t1[0].toUpperCase()}${t1.slice(1)} Leads`, value: '96', change: '+52%' },
      { label: 'Cost / Lead', value: '₹275', change: '-28%' },
      { label: 'Google Rating', value: '4.7', change: '+0.5' },
    ],
    footerValue: 'Growing Steadily',
    stat1: { value: `${l.count}+`, label: `${l.spec} Practices` },
    services: [
      [Search, `${l.spec} SEO`, `Rank for ${t1}, ${t2} and other high-intent searches in your city.`, ['Treatment Pages', 'Doctor Profiles', 'Local SEO', 'Schema Markup']],
      [Target, 'Treatment Ads', `Google and Meta campaigns focused on ${t1} and ${t3} enquiries.`, ['Google Ads', 'Meta Ads', 'Call Tracking', 'Landing Pages']],
      [Video, 'Patient Education', `Doctor-led videos that explain ${t2} and build trust before the first visit.`, ['Doctor Videos', 'Reels', 'YouTube SEO', 'Content Calendar']],
      [Star, 'Reputation Management', 'Genuine reviews and professional replies across Google and other platforms.', ['Review Requests', 'Reply Templates', 'Google Business Profile', 'Alerts']],
      [Globe, `${l.spec} Website`, `Fast, patient-friendly website with online booking for ${t4}.`, ['Online Booking', 'Treatment Pages', 'Mobile First', 'Fast Loading']],
      [BarChart3, 'Lead Tracking & Reports', 'See which channel produced each call, enquiry and appointment.', ['GA4 Setup', 'Lead Tracking', 'Monthly Reports', 'ROI Dashboard']],
    ],
    reviews: [
      { name: l.reviewers[0][0], role: l.reviewers[0][1], content: `Enquiries for ${t1} have grown steadily every month. Reporting is clear and the team understands healthcare.`, rating: 5 },
      { name: l.reviewers[1][0], role: l.reviewers[1][1], content: `Our ${t2} and ${t3} pages now rank well locally, and patients arrive better informed.`, rating: 5 },
      { name: l.reviewers[2][0], role: l.reviewers[2][1], content: `Ads brought genuine ${t4} leads instead of random clicks, and our Google rating improved.`, rating: 5 },
    ],
    priceNotes: { starter: 'single-location practices', growth: 'multi-doctor and multi-location centres' },
  };
}

config.push(...lite.map(fromLite));

/* ---------- Builder ---------- */

function build(c: SpecialtyConfig): ServicePageProps {
  return {
    hero: {
      badge: { icon: c.heroIcon, text: c.badgeText },
      before: c.before,
      accent: c.accent,
      description: c.heroDescription,
      primary: { label: 'Get Free Marketing Audit', href: '/quote' },
      secondary: { label: 'See Case Studies', href: '/portfolio', icon: Monitor },
      trust: c.trust,
      rating: '4.8/5 Rating',
    },
    dashboard: {
      icon: Activity,
      title: c.dashboardTitle,
      subtitle: 'Sample monthly results',
      badge: 'Live',
      rows: c.dashboardRows,
      footerLabel: 'Campaign Health',
      footerValue: c.footerValue,
      footerIcon: TrendingUp,
    },
    stats: [
      { ...c.stat1, icon: Users },
      { value: '3x', label: 'Average Enquiry Growth', icon: TrendingUp },
      { value: '24/7', label: 'Lead Tracking', icon: Clock },
      { value: '100%', label: 'Patient Data Privacy', icon: ShieldCheck },
    ],
    services: {
      badge: `${c.name} Marketing Experts`,
      badgeIcon: BadgeCheck,
      title: `Our ${c.name} Marketing Services`,
      subtitle: `Everything your ${c.name.toLowerCase()} needs to get found, trusted and booked online.`,
      defaultCta: 'Get Started',
      defaultHref: '#contact',
      items: c.services.map(([icon, title, description, features], i) => ({
        icon,
        title,
        description,
        features,
        accent: accents[i % accents.length],
      })),
    },
    tools: {
      title: `Tools We Use for ${c.name} Growth`,
      subtitle: 'Proven platforms that make every campaign measurable.',
      tabs: [
        {
          key: 'seo',
          label: 'SEO & Analytics',
          icon: Search,
          items: [
            { name: 'Google Search Console', description: 'Monitor rankings, clicks and indexing health.', icon: Search },
            { name: 'GA4 & Tag Manager', description: 'Track enquiries, calls and bookings accurately.', icon: BarChart3 },
            { name: 'Semrush / Ahrefs', description: 'Keyword research and competitor tracking.', icon: Layers },
            { name: 'Looker Studio', description: 'Clear monthly dashboards you can actually read.', icon: Monitor },
          ],
        },
        {
          key: 'ads',
          label: 'Advertising',
          icon: Target,
          items: [
            { name: 'Google Ads', description: 'Intent-based search campaigns for treatments.', icon: Target },
            { name: 'Meta Ads', description: 'Facebook and Instagram campaigns for awareness and leads.', icon: Megaphone },
            { name: 'YouTube Ads', description: 'Video campaigns that explain procedures and build trust.', icon: Video },
            { name: 'Call Tracking', description: 'Know which ad produced every phone call.', icon: Phone },
          ],
        },
        {
          key: 'reputation',
          label: 'Reputation',
          icon: Star,
          items: [
            { name: 'Google Business Profile', description: 'Optimised listings, photos and posts.', icon: MapPin },
            { name: 'Review Automation', description: 'Request reviews right after a successful visit.', icon: Star },
            { name: 'Social Scheduling', description: 'Consistent posting across all channels.', icon: CalendarCheck },
            { name: 'Content Studio', description: 'Reels, graphics and doctor videos.', icon: Camera },
          ],
        },
        {
          key: 'automation',
          label: 'Automation',
          icon: Zap,
          items: [
            { name: 'WhatsApp Business API', description: 'Reminders, follow-ups and quick replies.', icon: MessageCircle },
            { name: 'CRM Setup', description: 'Never lose a lead between enquiry and appointment.', icon: Boxes },
            { name: 'Cloud Hosting', description: 'Fast, secure hosting for patient-facing sites.', icon: Cloud },
            { name: 'Workflow Automation', description: 'Auto-assign leads and trigger follow-ups.', icon: Settings },
          ],
        },
      ],
    },
    process: {
      badge: 'How We Work',
      badgeIcon: Zap,
      title: `Our ${c.name} Marketing Process`,
      subtitle: 'A clear, measurable plan from the first audit to monthly growth.',
      items: [
        { step: '01', title: 'Free Audit', description: `Review your ${c.name.toLowerCase()}'s website, rankings, reviews and competitors.`, icon: ClipboardCheck },
        { step: '02', title: 'Strategy', description: 'Choose priority treatments, channels and monthly targets.', icon: Target },
        { step: '03', title: 'Setup', description: 'Fix tracking, profiles and landing pages before spending on ads.', icon: Settings },
        { step: '04', title: 'Launch', description: 'Go live with SEO, ads and content in a coordinated plan.', icon: Rocket },
        { step: '05', title: 'Optimise', description: 'Weekly improvements based on real lead and booking data.', icon: TrendingUp },
        { step: '06', title: 'Report', description: 'Simple monthly reports showing enquiries, cost and growth.', icon: FileText },
      ],
    },
    testimonials: {
      id: 'results',
      badge: 'Client Results',
      title: `${c.name}s Trust Web Leading India`,
      subtitle: 'Real feedback from healthcare providers we have worked with.',
      items: c.reviews.map((r) => ({ rating: 5, ...r })),
    },
    pricing: {
      title: `${c.name} Marketing Packages`,
      subtitle: 'Simple monthly plans. No long lock-in contracts.',
      items: [
        {
          name: 'Starter',
          price: '₹15,000',
          period: '/month',
          description: `Best for ${c.priceNotes.starter.toLowerCase()}.`,
          features: ['Local SEO setup', 'Google Business Profile', 'Review growth system', '8 social posts / month', 'Monthly report'],
          cta: 'Start with Starter',
        },
        {
          name: 'Growth',
          price: '₹35,000',
          period: '/month',
          description: `Best for ${c.priceNotes.growth.toLowerCase()}.`,
          features: ['Everything in Starter', 'Google & Meta Ads management', 'Treatment landing pages', 'Call & lead tracking', 'WhatsApp follow-up flows', 'Fortnightly strategy call'],
          popular: true,
          cta: 'Choose Growth',
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: 'quote',
          description: 'For multi-location groups with larger targets.',
          features: ['Everything in Growth', 'Multi-location SEO', 'Dedicated account manager', 'Custom dashboards', 'Video production', 'Priority support'],
          cta: 'Get Custom Quote',
        },
      ],
    },
    cta: {
      icon: c.heroIcon,
      title: `Ready to Grow Your ${c.name}?`,
      description: 'Get a free audit and see exactly where your practice is losing patients online.',
      primary: { label: 'Get Free Marketing Audit', href: '/quote' },
      badges: [
        { icon: ShieldCheck, text: 'Patient Privacy First' },
        { icon: BarChart3, text: 'Transparent Reporting' },
        { icon: Clock, text: 'No Long Lock-in' },
        { icon: Award, text: 'Healthcare Specialists' },
      ],
    },
  };
}

export const specialtySlugs = config.map((c) => c.slug);

export const getSpecialtyMeta = (slug: string) => {
  const c = config.find((x) => x.slug === slug);
  return c ? { title: c.metaTitle, description: c.metaDescription } : null;
};

export const getSpecialtyProps = (slug: string): ServicePageProps | null => {
  const c = config.find((x) => x.slug === slug);
  return c ? build(c) : null;
};
