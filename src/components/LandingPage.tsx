'use client'

import HomeHero from './HomeHero';
import HomeServicesSection from './HomeServicesSection';
import WhyChooseUs from './WhyChooseUs';
import FAQSection from './FAQSection';
import faqData from '@/data/faqs.json';

export default function LandingPage() {
  return (
    <>
    <section>
      <HomeHero />
    </section>
    <section className=''>
      <HomeServicesSection />
    </section>
    <section className=''>
      <WhyChooseUs />
    </section>
    <section>
    <FAQSection data={faqData} />
    </section>
    </>
  );
}
