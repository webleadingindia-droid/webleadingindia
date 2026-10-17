// app/ecommerce-development/layout.js

export const metadata = {
  title: 'Healthcare Ecommerce Website Development for Hospitals & Clinics',
  description:
    'We build secure, scalable healthcare ecommerce websites for hospitals, clinics and pharmacies using Shopify, WooCommerce and custom solutions.',
  keywords: [
    'healthcare ecommerce website development',
    'hospital ecommerce development',
    'clinic ecommerce website',
    'pharmacy ecommerce website development',
    'medical ecommerce development company',
    'Shopify healthcare ecommerce',
    'WooCommerce healthcare ecommerce'
  ],
  openGraph: {
    title: 'Healthcare Ecommerce Website Development for Hospitals & Clinics',
    description:
      'Custom ecommerce website development for hospitals, clinics and pharmacies focused on security, scalability and patient-friendly experience.',
    url: 'https://www.webleadingindia.com/ecommerce-development',
    siteName: 'Web Leading India',
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Ecommerce Website Development for Hospitals & Clinics',
    description:
      'Launch a secure healthcare ecommerce website for hospitals, clinics and pharmacies with Shopify, WooCommerce or custom solutions.'
  },
  alternates: {
    canonical: 'https://www.webleadingindia.com/ecommerce-development'
  }
};

export default function EcommerceDevelopmentLayout({ children }) {
  return <>{children}</>;
}
