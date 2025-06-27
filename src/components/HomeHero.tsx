// app/components/HomeHero.tsx

'use client';

import React from 'react';
import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="w-full bg-white mt-45">
      <div className="max-w-8xl mx-auto md:pr-10 lg:pr-20 xl:px-30 flex flex-col md:flex-row items-center gap-10">
        {/* Video Section */}
        <div className="w-full md:w-3/4 flex-shrink-0">
          <div className="
            aspect-square
            md:aspect-15/9
            w-full
            overflow-hidden
            bg-gray-100
          ">
            <video
              className="w-full h-full object-cover"
              src="/jewelery-sample.mp4"
              poster="/jewelery-sample.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="px-2 md:px-0 w-full md:w-1/2 flex flex-col items-center text-center">
          <h1 className="text-2xl xl:text-3xl font-semibold mb-4 tracking-tight text-black">
          Timeless Jewelry, <br className='hidden md:block'/>Modern Designs
          </h1>
          <p className="mb-5 text-md font-light text-black max-w-prose leading-7">
          Muhl Jewelers has been family-run since 1921 and offers one of-a-kind pieces, taking old family jewelry and turning it into modern designs.
          </p>
          <Link
            href="https://www.tiffany.com/jewelry/shop/most-popular-jewelry/"
            target="_self"
            className="inline-block text-black px-6 py-2 border border-black font-medium text-sm"
          >
            <span className='animated-underline'>
            Shop Now
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
