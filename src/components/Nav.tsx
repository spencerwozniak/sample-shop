'use client';

import Image from 'next/image'
import Link from 'next/link'

// You can add a prop for navigation items if you want to make this dynamic!
const Nav = () => {
  return (
    <nav aria-label="Top" className="relative bg-white shadow-sm z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Link href="/" className="group" aria-label="Spur Jewelry Renovation">
              <Image
                alt="Spur Jewelry Renovation"
                src="https://cdn.sanity.io/images/rwscjoih/production/dc2efbe194c89435b8ac6db9bb926468280ab966-903x878.png?w=903&auto=format"
                width={50}
                height={48}
                className="rounded-lg border border-gray-200 shadow-md"
                style={{ aspectRatio: '903 / 878', width: '50px', height: 'auto' }}
                priority
              />
            </Link>
          </div>

          {/* Center Navigation (Desktop) */}
          <div className="hidden lg:flex flex-1 items-center justify-center space-x-8">
            <button
              type="button"
              className="border-b font-semibold uppercase tracking-wide transition-colors duration-200 hover:text-blue-700"
            >
              Shop
            </button>
            <button
              type="button"
              className="border-b font-semibold uppercase tracking-wide transition-colors duration-200 hover:text-blue-700"
            >
              Project Journal
            </button>
            <button
              type="button"
              className="border-b font-semibold uppercase tracking-wide transition-colors duration-200 hover:text-blue-700"
            >
              About Us
            </button>
            <Link
              href="/start"
              className="ml-8 px-4 py-2 rounded bg-blue-700 text-white uppercase font-bold tracking-wider hover:bg-blue-800 transition hidden lg:block"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="flex flex-1 items-center lg:hidden justify-between">
            <button
              className="p-2"
              type="button"
              aria-label="Open menu"
            >
              {/* Hamburger Icon */}
              <svg viewBox="0 0 20 20" className="w-7 h-7" fill="currentColor">
                <title>Menu</title>
                <line x1="3" x2="17" y1="6.375" y2="6.375" stroke="currentColor" strokeWidth="1.25" />
                <line x1="3" x2="17" y1="10.375" y2="10.375" stroke="currentColor" strokeWidth="1.25" />
                <line x1="3" x2="17" y1="14.375" y2="14.375" stroke="currentColor" strokeWidth="1.25" />
              </svg>
            </button>

            {/* Mobile Logo */}
            <Link href="/" className="group" aria-label="Spur Jewelry Renovation">
              <Image
                alt="Spur Jewelry Renovation"
                src="https://cdn.sanity.io/images/rwscjoih/production/dc2efbe194c89435b8ac6db9bb926468280ab966-903x878.png?w=903&auto=format"
                width={50}
                height={48}
                className="rounded-lg border border-gray-200 shadow-md"
                style={{ aspectRatio: '903 / 878', width: '50px', height: 'auto' }}
                priority
              />
            </Link>

            {/* Mobile: Book a Consultation */}
            <Link
              href="/start"
              className="text-right uppercase font-bold tracking-wider text-lg block lg:hidden ml-4"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Cart Icon (Always right) */}
          <div className="flex items-center justify-end">
            <button
              type="button"
              aria-label="Your Cart"
              className="inline-flex items-center justify-center rounded-lg size-11 hover:bg-gray-100 transition"
            >
              <span className="relative">
                <svg viewBox="0 0 20 20" className="w-6 h-6" fill="currentColor">
                  <title>Bag</title>
                  <path
                    fillRule="evenodd"
                    d="M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav