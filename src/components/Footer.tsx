'use client';

import Image from 'next/image';
import Link from 'next/link';
import navData from '../data/navData.json'; // Update path as needed

import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/muhl-logo-black.png"
                alt="Company Logo"
                width={320}
                height={320}
                className="h-25 w-70 object-contain"
                priority
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Navigation from navData */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Pages
              </h2>
              <ul className="text-gray-500 font-medium">
                {navData.map((item) => (
                  <li className="mb-4" key={item.label}>
                    <Link href={item.link} className="hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="https://tailwindcss.com/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                    Tailwind CSS
                  </a>
                </li>
                <li>
                  <a href="https://nextjs.org/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                    Next.js
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline font-semibold">
              Muhl Jewelers
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-5">
            {/* Socials: swap links as needed */}
            <a href="https://www.facebook.com/p/Muhl-Jewelers-100057400812240/" className="text-gray-500 hover:text-gray-900" aria-label="Facebook">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.instagram.com/muhl.jewelers/" className="text-gray-500 hover:text-gray-900" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
