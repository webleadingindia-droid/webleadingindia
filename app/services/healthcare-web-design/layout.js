// app/web-designing/layout.js

export const metadata = {
  title: 'Healthcare Web Designing Services for Hospitals & Clinics | Web Leading India',
  description:
    'Build responsive, user-friendly websites for hospitals, clinics, and healthcare professionals with Web Leading India’s expert healthcare web design services.',
  keywords: [
    'healthcare web designing services',
    'web design for hospitals',
    'web design for clinics',
    'responsive healthcare websites',
    'UI/UX design for doctors',
    'hospital website design company',
    'medical website design services',
    'Web Leading India healthcare web design'
  ],
  openGraph: {
    title: 'Healthcare Web Designing Services for Hospitals & Clinics | Web Leading India',
    description:
      'Boost your healthcare online presence with responsive, user-friendly websites designed for hospitals, clinics, and healthcare professionals.',
    url: 'https://www.webleadingindia.com/web-designing',
    siteName: 'Web Leading India',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Web Designing Services for Hospitals & Clinics | Web Leading India',
    description:
      'Get expert healthcare web design services from Web Leading India. We build responsive, user-friendly websites that engage and convert patients.',
  },
  alternates: {
    canonical: 'https://www.webleadingindia.com/web-designing'
  }
};

export default function WebDesigningLayout({ children }) {
  return <>{children}</>;
}
