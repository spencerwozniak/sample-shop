// components/HomeServicesSection.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
    {
      title: 'Jewelry Creation',
      description: 'Work with Renae to create a custom piece—new or from family jewelry.',
      image: '/services/creation.png',
      href: '/services/design',
    },
    {
      title: 'Jewelry Repair',
      description: 'From resizing to restoration, our workshop is your workshop.',
      image: '/services/repair.png',
      href: '/services/repair',
    },
    {
      title: 'Heirloom Restoration',
      description: 'Revive pieces and let your family’s story shine for the next generation.',
      image: '/services/heirloom.png',
      href: '/services/heirloom',
    },
    {
      title: 'Historic Store Tour',
      description: 'Admire the original chandelier, display cases, safe, and cashier till.',
      image: '/services/tour.png',
      href: '/about#tour',
    },
  ];

export default function HomeServicesSection() {
  return (
    <section className="max-w-8xl px-4 pt-20 sm:px-10 lg:px-30 mx-auto">
      <div>
        <h2 className="text-2xl xl:text-3xl font-semibold mb-8 text-center tracking-tight text-black">
        What We Offer
        </h2>
      </div>
      <div
        className={`
          grid gap-4
          grid-cols-1
          sm:grid-cols-2
          ${services.length >= 4 ? 'lg:grid-cols-4' : services.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-1'}
        `}
      >
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="group flex flex-col items-center text-center h-full bg-[#fafafa] transition-transform"
          >
            <div className={`h-80 flex justify-center items-center overflow-hidden bg-gray-100`}>
              <Image
                src={service.image}
                alt={service.title}
                height={500}
                width={500}
                className="object-cover w-full h-full transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-3 text-xs font-100 text-black max-w-prose leading-5">{service.description}</p>
            </div>
            {service.href && (
              <div className="mt-auto mb-6">
                <Link
                    href={service.href}
                    target="_self"
                    className="inline-block text-black px-6 py-2 border border-black font-medium text-sm"
                >
                    <span className='animated-underline'>
                    Learn More
                    </span>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}