// app/enquiry/layout.js

export const metadata = {
  title: 'Send an Enquiry | Web Leading India – Healthcare Web Development Partner',
  description: 'Have questions about your healthcare web development project? Contact Web Leading India for expert consultations, pricing details, or support for healthcare solutions.',
  keywords: [
    'healthcare web development enquiry',
    'send healthcare enquiry Web Leading India',
    'healthcare web support',
    'consult healthcare web developer',
    'contact for healthcare website project',
    'healthcare enquiry',
    'hire healthcare development team',
    'healthcare IT solutions',
    'healthcare software solutions enquiry',
    'medical web development enquiry'
  ],
  openGraph: {
    title: 'Enquire Now | Web Leading India – Healthcare Web Development Experts',
    description: 'Use our healthcare enquiry form to discuss your medical or healthcare web development needs with Web Leading India’s expert team.',
    url: 'https://www.webleadingindia.com/enquiry',
    siteName: 'Web Leading India',
    images: [
      {
        url: 'https://www.webleadingindia.com/images/og-enquiry-healthcare-webleindia.jpg',
        width: 1200,
        height: 630,
        alt: 'Healthcare Web Development Enquiry - Web Leading India'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Web Development Enquiry | Web Leading India Experts',
    description: 'Send your healthcare web development enquiry to Web Leading India. Fast response. Trusted by global healthcare providers and organizations.',
    images: ['https://www.webleadingindia.com/images/twitter-enquiry-healthcare-webleindia.jpg'],
  },
  alternates: {
    canonical: 'https://www.webleadingindia.com/enquiry',
  },
}

export default function EnquiryLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}
