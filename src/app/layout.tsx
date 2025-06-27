// src/app/layout.tsx

import './globals.css';
import { Raleway } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-body',
});

export const metadata = {
  title: 'Muhl Jewelers | Family Jeweler in Coronado, California',
  description:
    'Muhl Jewelers is Coronado’s trusted family-owned jewelry store since 1921, offering custom designs, repairs, and heirloom restoration. Located on Orange Avenue in the historic Coronado Bank Building.',
  icons: {
    icon: '/crown-square.png',
    shortcut: '/crown-square.png',
    apple: '/crown-square.png'
  },
  keywords: [
    'Muhl Jewelers',
    'Coronado jeweler',
    'family jeweler Coronado',
    'jewelry repair',
    'custom jewelry Coronado',
    'engagement rings',
    'heirloom restoration',
    'Coronado small business',
    'San Diego jewelry'
  ],
  authors: [{ name: 'Muhl Jewelers', url: 'https://www.facebook.com/p/Muhl-Jewelers-100057400812240/' }],
  creator: 'Muhl Jewelers',
  metadataBase: new URL('https://muhljewelers.com'),
  openGraph: {
    title: 'Muhl Jewelers | Family Jeweler in Coronado, California',
    description:
      'Muhl Jewelers is Coronado’s trusted family-owned jewelry store since 1921, offering custom designs, repairs, and heirloom restoration. Located on Orange Avenue in the historic Coronado Bank Building.',
    url: 'https://muhljewelers.com',
    siteName: 'Muhl Jewelers',
    images: [
      {
        url: 'https://muhljewelers.com/muhl-logo-white.png',
        width: 1200,
        height: 630,
        alt: 'Muhl Jewelers Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhl Jewelers | Family Jeweler in Coronado, California',
    description:
      'Muhl Jewelers is Coronado’s trusted family-owned jewelry store since 1921, offering custom designs, repairs, and heirloom restoration. Located on Orange Avenue in the historic Coronado Bank Building.',
    site: '@muhljewelers',
    creator: '@muhljewelers',
    images: ['https://muhljewelers.com/muhl-logo-white.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={raleway.variable}>
      <head>
        {/* ✅ JSON-LD Structured Data for Local Business */}
        <link rel="canonical" href="https://muhljewelers.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JewelryStore",
              "name": "Muhl Jewelers",
              "image": "https://muhljewelers.com/crown-square.png",
              "description": "Muhl Jewelers is Coronado’s trusted family-owned jewelry store since 1921, offering custom designs, repairs, and heirloom restoration.",
              "telephone": "+16194354541",
              "url": "https://muhljewelers.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1130 Orange Ave",
                "addressLocality": "Coronado",
                "addressRegion": "CA",
                "postalCode": "92118",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://www.facebook.com/p/Muhl-Jewelers-100057400812240/",
                "https://www.instagram.com/muhl.jewelers/"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "10:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "15:00"
                }
                // Sunday and Monday omitted = closed
              ],
              "parentOrganization": {
                "@type": "Organization",
                "name": "Muhl Jewelers"
              }
            })
          }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="PLACEHOLDER" />
    </html>
  );
}
