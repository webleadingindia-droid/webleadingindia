// app/contact/layout.js

export const metadata = {
  title: 'Contact Us | Web Leading India – Healthcare Digital Marketing & Web Solutions',
  description: 'Get in touch with Web Leading India for custom web development, SEO, digital marketing, and patient engagement solutions tailored to healthcare providers, hospitals, and clinics.',
  keywords: [
    'contact Web Leading India',
    'healthcare digital marketing',
    'hospital website development',
    'clinic SEO services',
    'healthcare web design',
    'patient engagement solutions',
    'healthcare IT support',
    'digital solutions for healthcare',
  ],
  openGraph: {
    title: 'Contact Us | Web Leading India – Healthcare Digital Solutions',
    description: 'Reach out to Web Leading India’s team for healthcare-focused web development, SEO, and digital marketing services to enhance your hospital or clinic’s online presence.',
    url: 'https://www.webleadingindia.com/contact-us',
    siteName: 'Web Leading India',
    images: [
      {
        url: 'https://www.webleadingindia.com/images/og-contact-healthcare.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Web Leading India for Healthcare Solutions',
    description: 'Looking for healthcare digital marketing or web development? Get in touch with Web Leading India’s team to discuss your project.',
    images: ['https://www.webleadingindia.com/images/twitter-contact-healthcare.jpg'],
  },
  alternates: {
    canonical: 'https://www.webleadingindia.com/contact-us',
  },
}

export default function ContactLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}
