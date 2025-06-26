'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import navData from '../data/navData.json';

export default function Nav() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current <= 0) {
        setVisible(true);
      } else if (current > lastScroll.current) {
        // Scrolling down
        setVisible(false);
      } else if (current < lastScroll.current) {
        // Scrolling up
        setVisible(true);
      }
      lastScroll.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 w-full bg-white shadow transition-transform duration-300
        ${visible ? 'translate-y-0' : '-translate-y-full'}
      `}
      style={{ willChange: 'transform' }}
    >
      <nav className="max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto py-7">
        {/* Logo */}
        <div className="lg:col-span-3 flex items-center">
          <Link href="/" className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" aria-label="Preline">
            <Image
              src='/muhl-logo-black.png'
              height={100}
              width={100}
              alt='Muhl Jewelers Logo'
            />
          </Link>
        </div>
        {/* Action Buttons */}
        <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
          <button type="button" className="size-9.5 flex justify-center items-center rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100">
            <span className="sr-only">Search</span>
            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
          </button>
          <button type="button" className="size-9.5 flex justify-center items-center rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100">
            <span className="sr-only">Cart</span>
            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </button>
          <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-yellow-400 text-black hover:bg-yellow-500 transition">
            Sign in
          </button>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              aria-label="Toggle navigation"
              className="size-9.5 flex justify-center items-center rounded-xl border border-gray-200 text-black hover:bg-gray-100"
              onClick={() => setMenuOpen(v => !v)}
            >
              {menuOpen ? (
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
        {/* Navigation Links (Desktop + Mobile) */}
        <div
          className={`
            ${menuOpen ? 'block' : 'hidden'} 
            lg:block 
            overflow-hidden transition-all duration-300 basis-full grow lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6
          `}
        >
          <div className="flex flex-col gap-y-4 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
            {/* Home Link */}
            <div>
              <Link href="/" className="relative inline-block text-black focus:outline-none before:absolute before:bottom-0.5 before:left-0 before:-z-10 before:w-full before:h-1 before:bg-yellow-400">
                Home
              </Link>
            </div>
            {/* Render dynamic navData */}
            {navData.map(({ label, link }) => (
              <div key={label}>
                <Link href={link} className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600">
                  {label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
