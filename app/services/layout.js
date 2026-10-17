// app/services/layout.js

export const metadata = {
  title: 'Healthcare IT Services & Software Solutions | Web Leading India – Custom Development for Healthcare Providers',
  description: 'Web Leading India offers specialized IT and software solutions for healthcare providers. We build custom healthcare software, mobile apps, patient management systems, and digital marketing services tailored for the healthcare industry.',
  keywords: [
    'healthcare IT services',
    'healthcare software development',
    'patient management systems',
    'custom healthcare software',
    'healthcare mobile app development',
    'digital marketing for healthcare',
    'healthcare IT solutions',
    'hospital software development',
    'clinic management software',
    'Web Leading India healthcare IT'
  ],
  openGraph: {
    title: 'Healthcare IT Services & Solutions | Web Leading India – Custom Software for Healthcare Providers',
    description: 'Transform your healthcare practice with Web Leading India custom IT solutions, including patient management systems, healthcare apps, and digital marketing services.',
    url: 'https://www.webleadingindia.com/services',
    siteName: 'Web Leading India',
    images: [
      {
        url: 'https://www.webleadingindia.com/images/og-healthcare-it-services-webleindia.jpg',
        width: 1200,
        height: 630,
        alt: 'Healthcare IT Services'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare IT & Software Solutions | Web Leading India',
    description: 'Get custom healthcare IT services including software development, mobile apps, and patient management systems. Digital transformation for healthcare providers.',
    images: ['https://www.webleadingindia.com/images/twitter-healthcare-it-services-webleindia.jpg'],
  },
  alternates: {
    canonical: 'https://www.webleadingindia.com/services',
  },
}

export default function ServicesLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}
