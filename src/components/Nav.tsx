'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import navData from '@/data/navData.json'; // adjust the path as needed

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-4 inset-x-0 before:absolute before:inset-0 before:max-w-6xl before:mx-2 lg:before:mx-auto before:rounded-4xl before:border before:border-gray-200 after:absolute after:inset-0 after:-z-1 after:max-w-6xl after:mx-2 lg:after:mx-auto after:rounded-4xl after:bg-white flex flex-wrap justify-start flex-nowrap z-50 w-full">
      <nav className="relative max-w-6xl w-full flex items-center justify-between gap-3 ps-5 pe-2 mx-2 lg:mx-auto py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-none font-semibold text-xl text-black">
            <Image
              src='/woz-foundation.png'
              alt='Woz Foundation Logo'
              width={30}
              height={30}
            />

          </Link>

          <div className="hidden">
            <button
              type="button"
              className="relative size-9 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100"
              aria-label="Toggle navigation"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>

        <div className={`${isOpen ? 'block' : 'mr-4'} block transition-all duration-300 basis-full grow`}>
          <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <div className="py-0 flex flex-col flex-row items-center justify-end gap-0.5 gap-1">
              {navData.map(({ label, link }) => (
                <Link
                  key={label}
                  href={link}
                  className="p-2 flex items-center text-sm text-gray-800 hover:text-blue-600"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
