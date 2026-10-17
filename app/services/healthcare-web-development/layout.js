// app/web-development/layout.js

export const metadata = {
  title: 'Healthcare Web Development Services for Hospitals & Clinics | Web Leading India',
  description:
    'Build secure, scalable, and patient-friendly healthcare websites for hospitals, clinics, and doctors with Web Leading India’s expert web development services.',
  keywords: [
    'healthcare web development services',
    'hospital website development',
    'clinic website development',
    'custom healthcare website development',
    'doctor website development',
    'healthcare platform development',
    'medical website developers',
    'patient portal development',
    'healthcare application development'
  ],
  openGraph: {
    title: 'Healthcare Web Development Services for Hospitals & Clinics | Web Leading India',
    description:
      'Get secure, scalable, and custom web development solutions for hospitals, clinics, and healthcare professionals. Enhance patient experience online.',
    url: 'https://www.webleadingindia.com/web-development',
    siteName: 'Web Leading India',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Web Development Services for Hospitals & Clinics | Web Leading India',
    description:
      'Expert healthcare web development for hospitals, clinics, and doctors. Secure, patient-friendly, and scalable websites and platforms by Web Leading India.',
  },
  alternates: {
    canonical: 'https://www.webleadingindia.com/web-development'
  }
};

export default function WebDevelopmentLayout({ children }) {
  return <>{children}</>;
}
