import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Healthcare Marketing Agency for Hospitals & Clinics in India',
  description:
    'We are a healthcare marketing agency helping hospitals and clinics grow patients, online visibility and trust through digital marketing and SEO services.',
  keywords:
    'healthcare marketing agency india, hospital marketing agency, clinic marketing services, hospital digital marketing, clinic digital marketing, healthcare SEO services india, hospital website development, clinic website development, patient marketing for hospitals',
  authors: [{ name: 'Web Leading India' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Healthcare Marketing Agency for Hospitals & Clinics in India',
    description:
      'Helping hospitals and clinics grow patients and visibility with healthcare-focused digital marketing, SEO and website development.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Web Leading India',
    url: 'https://webleadingindia.com/'
  },
  verification: {
    google: '1brxspwUE3zQFMqyaqosYijcMbFDYR2ixPh-0y1Ssig'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G19GZRZ9BL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G19GZRZ9BL');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1191664562646071');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Organization Schema */}
        <div itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="Web Leading India" />
          <meta
            itemProp="description"
            content="Healthcare marketing agency for hospitals and clinics providing digital marketing, SEO and website development services to grow patients and visibility."
          />
          <meta itemProp="url" content="https://webleadingindia.com/" />
          <meta itemProp="areaServed" content="India" />
        </div>
      </head>

      <body className={inter.className}>
        {/* NoScript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1191664562646071&ev=PageView&noscript=1"
            alt="facebook-pixel-noscript"
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}