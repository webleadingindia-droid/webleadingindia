// app/privacy-policy/layout.js

export const metadata = {
  title: 'Privacy Policy | Web Leading India – Data Protection & Security',
  description: 'Read Web Leading India’s Privacy Policy to understand how we collect, use, and protect your personal information. Your data security is our priority. We adhere to industry standards for data privacy and protection.',
  keywords: [
    'privacy policy Web Leading India',
    'data protection policy India',
    'Web Leading India privacy',
    'data security policy',
    'personal information protection',
    'GDPR compliance India',
    'HIPAA compliance India',
    'data privacy terms',
    'information security policy',
    'data protection best practices',
    'patient data security'
  ],
  openGraph: {
    title: 'Privacy Policy | Web Leading India – Data Protection & Security',
    description: 'Learn how Web Leading India protects your personal data and ensures privacy compliance through our comprehensive privacy policy, including GDPR and HIPAA compliance.',
    url: 'https://www.webleadingindia.com/privacy-policy',
    siteName: 'Web Leading India',
    images: [
      {
        url: 'https://www.webleadingindia.com/images/og-privacy-policy-webleadingindia.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Leading India Privacy Policy'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Web Leading India – Your Data Security Matters',
    description: 'Understand how Web Leading India safeguards your personal information through a transparent privacy policy and strict data protection practices.',
    images: ['https://www.webleadingindia.com/images/twitter-privacy-policy-webleadingindia.jpg'],
  },
  alternates: {
    canonical: 'https://www.webleadingindia.com/privacy-policy',
  },
}

export default function PrivacyPolicyLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}
