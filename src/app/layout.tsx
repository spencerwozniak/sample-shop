// src/app/layout.tsx

import './globals.css';
import { Raleway } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100','200','300','400', '500', '600', '700', '800', '900'], // You can customize this
  variable: '--font-body',
});

export const metadata = {
  title: 'Woz-Arnold Foundation | Charity Tournaments for San Diego',
  description: 
    'The Woz-Arnold Foundation organizes sporting tournaments in San Diego to raise funds for the community.',
  icons: {
    icon: '/woz-foundation.png',
    shortcut: '/woz-foundation.png',
    apple: '/woz-foundation.png'
  },
  keywords: [
    'Woz-Arnold Foundation',
    'San Diego charity events',
    'ping pong tournament San Diego',
    'homeless support San Diego',
    'charity sports events',
    'nonprofit organization San Diego',
    'fundraisers for the homeless',
    'community events San Diego'
  ],  
  authors: [{ name: 'Woz-Arnold Foundation Team', url: 'https://wozarnold.org' }],
  creator: 'Woz-Arnold Foundation',
  metadataBase: new URL('https://wozarnold.org'),
  openGraph: {
    title: 'Woz-Arnold Foundation | Charity Tournaments for San Diego',
    description: 
      'The Woz-Arnold Foundation organizes sporting tournaments in San Diego to raise funds for the community.',
    url: 'https://wozarnold.org',
    siteName: 'Woz-Arnold Foundation',
    images: [
      {
        url: 'https://wozarnold.org/woz-foundation.png',
        width: 1200,
        height: 630,
        alt: 'Woz-Arnold Foundation Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Woz-Arnold Foundation | Charity Tournaments for San Diego',
    description: 
      'The Woz-Arnold Foundation organizes sporting tournaments in San Diego to raise funds for the community.',
    site: '@wozfoundation',
    creator: '@wozfoundation',
    images: ['https://wozarnold.org/woz-foundation.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={raleway.variable}>
      <head>
        {/* ✅ JSON-LD Structured Data for Google Logo */}
        <link rel="canonical" href="https://wozarnold.org" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "Woz-Arnold Foundation",
              "description": "Woz-Arnold Foundation organizes local sports tournaments to raise money for the community.",
              "url": "https://www.wozfoundation.org",
              "logo": "https://www.wozfoundation.org/woz-foundation.png",
              "sameAs": [
                "https://www.spencerwozniak.com",
                "https://www.linkedin.com/company/woz-foundation"
              ],
              "founder": {
                "@type": "Person",
                "name": "Spencer Wozniak"
              },
              "location": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "San Diego",
                  "addressRegion": "CA",
                  "postalCode": "92101",
                  "addressCountry": "USA"
                }}
            })
          }}
        />

      </head>
      <body>
        <Nav />
          {children}
        <section>
          <Footer />
        </section> 
      </body>
      <GoogleAnalytics gaId="G-DQCNM0XVBZ" />
    </html>
  );
}
