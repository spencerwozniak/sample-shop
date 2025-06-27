'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GlobalBanner from './GlobalBanner';
import navData from '../data/navData.json';
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

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
      <GlobalBanner />
      <nav className="w-full flex items-center justify-between px-4 md:px-6 lg:px-8 mx-auto py-5">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Toggle navigation"
            className="focus:outline-none cursor-pointer hover:text-gray-900"
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
        
        {/* Logo */}
        <div className="flex-1 flex justify-center items-center lg:justify-start lg:flex-none">
          <Link
            href="/"
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            aria-label="Preline"
          >
            <Image
              src='/muhl-logo-black.png'
              height={100}
              width={120}
              alt='Muhl Jewelers Logo'
            />
          </Link>
        </div>


        {/* Navigation Links (hidden on mobile, show on lg) */}
        <div
          className={`
            ${menuOpen ? 'block' : 'hidden'} 
            lg:block 
            overflow-hidden transition-all duration-300
            absolute top-full left-0 w-full bg-white z-40 lg:static lg:w-auto lg:bg-transparent
          `}
        >
          <div className="flex flex-col gap-y-4 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
            {navData.map(({ label, link }) => (
              <div key={label}>
                <Link href={link} className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600">
                  {label}
                </Link>
              </div>
            ))}
          </div>
        </div>


        {/* Action Icons */}
        <div className="flex items-center gap-x-4 lg:gap-x-6 py-1 lg:ps-6">
          <button type="button" className="focus:outline-none cursor-pointer hover:text-gray-900" aria-label="Search">
            <FiSearch className="text-xl" />
          </button>
          <button type="button" className="focus:outline-none cursor-pointer hover:text-gray-900" aria-label="Cart">
            <FiShoppingCart className="text-xl" />
          </button>
        </div>
      </nav>

    </header>
  );
}
