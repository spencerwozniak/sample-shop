// components/WhyChooseUs.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { FaChevronRight } from "react-icons/fa";

const features = [

    {
      title: "Service, Education & Trust",
      description:
        "Our team is passionate about helping you make informed choices. We prioritize honest advice, hands-on guidance, and sharing our expertise. Whether you're buying or just curious, you’ll always find a welcoming atmosphere and support!",
    },
    {
      title: "Local in Coronado",
      description:
        "As Coronado’s neighborhood jeweler for over a century, we’re a small business with deep roots. Our size means personal service, familiar faces, and a genuine investment in our neighbors’ lives and milestones.",

    },
  ];

export default function WhyChooseUs() {
  return (
    
    <>
      <section className="mx-auto pt-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left: Text Block */}
            <div className="px-4 order-2 md:order-1 flex flex-col gap-4 text-center items-center">
            <h2 className="text-2xl font-medium text-center tracking-tight text-black">
            A Century of Local, Family Ownership
            </h2>
            <p className="text-xs font-100 text-black max-w-prose leading-5">
            Serving Coronado for over 100 years, Muhl Jewelers has been passed down through three families: each dedicated to quality, integrity, and community.
            </p>
            <Link
            href="#history"
            target="_self"
            className="text-black text-center px-6 pt-2 font-medium text-sm"
            >
            <span className="animated-underline flex items-center">
                Learn More
                <FaChevronRight className="inline w-2 h-2 mb-0.5 ml-2" />
            </span>
            </Link>

            </div>
            {/* Right: Images */}
            <div className="md:col-span-2 order-1 md:order-2 flex">
            <div className="flex-1">
                <Image
                src="/muhl-storefront.jpeg"
                alt="Jewelry piece 1"
                width={600}
                height={700}
                className="w-full h-100 md:h-150 object-cover shadow"
                />
            </div>
            <div className="flex-1">
                <Image
                src="/grandma-at-muhl.jpg"
                alt="Jewelry piece 2"
                width={600}
                height={700}
                className="w-full h-100 md:h-150 object-cover shadow"
                />
            </div>
            </div>
        </div>
      </section>
      <section className="mx-auto pt-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left: Images */}
            <div className="md:col-span-2 order-1 md:order-1 flex">
            <div className="flex-1">
                <Image
                src="/necklace-2.jpg"
                alt="Jewelry piece 1"
                width={600}
                height={700}
                className="w-full h-100 md:h-150 object-cover shadow"
                />
            </div>
            <div className="flex-1">
                <Image
                src="/ring.jpg"
                alt="Jewelry piece 2"
                width={600}
                height={700}
                className="w-full h-100 md:h-150 object-cover shadow"
                />
            </div>
            </div>
            {/* Right: Text Block */}
            <div className="px-4 order-2 md:order-2 flex flex-col gap-4 text-center items-center">
            <h2 className="text-2xl font-medium text-center tracking-tight text-black">
            Jewelry for Every Budget
            </h2>
            <p className="text-xs font-100 text-black max-w-prose leading-5">
            We believe everyone deserves something special. From modest gifts to heirloom pieces, our collection includes quality jewelry at every price point.
            </p>
            <Link
            href="/shop"
            target="_self"
            className="text-black text-center px-6 pt-2 font-medium text-sm"
            >
            <span className="animated-underline flex items-center">
                Shop Now
                <FaChevronRight className="inline w-2 h-2 mb-0.5 ml-2" />
            </span>
            </Link>
            </div>
        </div>
        </section>
        <section className="mx-auto pt-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left: Text Block */}
            <div className="px-4 order-2 md:order-1 flex flex-col gap-4 text-center items-center">
            <h2 className="text-2xl font-medium text-center tracking-tight text-black">
            A Century of Local, Family Ownership
            </h2>
            <p className="text-xs font-100 text-black max-w-prose leading-5">
            Serving Coronado for over 100 years, Muhl Jewelers has been passed down through three families: each dedicated to quality, integrity, and community.
            </p>
            <Link
            href="#history"
            target="_self"
            className="text-black text-center px-6 py-2 font-medium text-sm"
            >
            <span className="animated-underline flex items-center">
            Shop Now
                <FaChevronRight className="inline w-2 h-2 mb-0.5 ml-2" />
            </span>
            </Link>

            </div>
            {/* Right: Images */}
            <div className="md:col-span-2 order-1 md:order-2 flex">
            <div className="flex-1">
                <Image
                src="/grandma-at-muhl.jpg"
                alt="Jewelry piece 1"
                width={600}
                height={700}
                className="w-full h-100 md:h-150 object-cover shadow"
                />
            </div>
            <div className="flex-1">
                <Image
                src="/team.jpg"
                alt="Jewelry piece 2"
                width={600}
                height={700}
                className="w-full h-100 md:h-150 object-cover shadow"
                />
            </div>
            </div>
        </div>
      </section>
    </>
  );
}
