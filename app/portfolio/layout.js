// app/portfolio/healthcare/layout.js

export const metadata = {
  title: 'Healthcare Portfolio | Web Leading India – Transforming Healthcare with Technology',
  description: 'Explore Web Leading India’s portfolio of successful healthcare web applications, custom software solutions, and AI-powered tools, delivered globally with the RelyShore® model.',
  keywords: [
    'healthcare software development',
    'healthcare web applications',
    'custom healthcare solutions',
    'healthcare technology',
    'AI healthcare solutions',
    'healthcare RelyShore model',
    'medical software development',
    'telemedicine platforms',
    'healthcare IT outsourcing',
    'healthcare industry solutions'
  ],
  openGraph: {
    title: 'Healthcare Portfolio | Web Leading India – Custom Solutions for Healthcare',
    description: 'Browse Web Leading India’s healthcare portfolio showcasing successful medical software, telemedicine platforms, and healthcare AI tools, all delivered through our RelyShore® offshore model.',
    url: 'https://www.webleadingindia.com/portfolio/healthcare',
    siteName: 'Web Leading India',
    images: [
      {
        url: 'https://www.webleadingindia.com/images/og-healthcare-portfolio.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Web Solutions | Web Leading India Portfolio',
    description: 'Discover how Web Leading India is transforming healthcare through custom software, telemedicine platforms, and healthcare AI solutions. Explore our healthcare portfolio.',
    images: ['https://www.webleadingindia.com/images/twitter-healthcare-portfolio.jpg'],
  },
  alternates: {
    canonical: 'https://www.webleadingindia.com/portfolio/healthcare',
  },
}

export default function HealthcarePortfolioLayout({ children }) {
  return (
    <>{children}</>
  );
}
