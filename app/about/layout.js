// app/about/layout.js

export const metadata = {
  title: 'About Us | Web Leading India – Healthcare Digital Marketing & Technology Solutions',
  description: 'Founded in 2020, Web Leading India specializes in providing web development, SEO, and digital marketing services tailored to healthcare providers, hospitals, and clinics worldwide.',
  keywords: [
    'healthcare digital marketing',
    'hospital SEO services',
    'clinic web development',
    'healthcare web design',
    'SEO for healthcare',
    'patient engagement solutions',
    'healthcare IT solutions',
  ],
  openGraph: {
    title: 'About Us | Web Leading India – Digital Solutions for Healthcare Providers',
    description: 'Discover Web Leading India’s journey since 2020, offering specialized digital marketing, web development, and SEO services for healthcare providers, hospitals, and clinics globally.',
    url: 'https://www.webleadingindia.com/about-us',
    siteName: 'Web Leading India',
    images: [
      {
        url: 'https://www.webleadingindia.com/images/og-about-healthcare.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Web Leading India – Trusted Healthcare Digital Marketing Partner',
    description: 'Transforming healthcare with digital solutions: web development, SEO, and marketing expertise for hospitals and clinics since 2020.',
    images: ['https://www.webleadingindia.com/images/twitter-about-healthcare.jpg'],
  },
  alternates: {
    canonical: 'https://www.webleadingindia.com/about-us',
  },
}

export default function AboutLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}
