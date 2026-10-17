// app/digital-marketing/layout.js

export const metadata = {
  title: 'Healthcare Digital Marketing Services for Hospitals & Clinics',
  description:
    'We provide healthcare digital marketing services for hospitals and clinics including SEO, Google Ads, social media marketing and patient lead generation.',
  keywords: [
    'healthcare digital marketing services',
    'hospital digital marketing services',
    'clinic digital marketing services',
    'healthcare SEO services',
    'hospital Google Ads marketing',
    'clinic social media marketing',
    'medical digital marketing agency',
    'patient lead generation healthcare'
  ],
  openGraph: {
    title: 'Healthcare Digital Marketing Services for Hospitals & Clinics',
    description:
      'Digital marketing solutions for hospitals and clinics including healthcare SEO, Google Ads, social media marketing and patient lead generation.',
    url: 'https://www.webleadingindia.com/services/digital-marketing',
    siteName: 'Web Leading India',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Digital Marketing Services for Hospitals & Clinics',
    description:
      'Grow your hospital or clinic with healthcare-focused digital marketing services including SEO, paid ads and social media marketing.'
  },
  alternates: {
    canonical: 'https://www.webleadingindia.com/services/digital-marketing'
  }
};

export default function DigitalMarketingLayout({ children }) {
  return <>{children}</>;
}
