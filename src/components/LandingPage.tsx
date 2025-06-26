'use client'

import HomeHero from './HomeHero';
import Quote from './Quote';
import EventsBrowser from './EventsBrowser';

export default function LandingPage() {
  return (
    <>
    <section>
      <HomeHero />
    </section>
    <section>
      <Quote 
        quote="At The Woz-Arnold Foundation, we believe community can be built through sport. Every event we host helps provide hope to those living on the margins in San Diego."
        author="Spencer Wozniak"
        info="Co-Founder"
        image='/spencer-headshot.jpg'
      />
    </section>
    <section>
      <EventsBrowser />
    </section>
    </>
  );
}
