'use client';

import Link from 'next/link';
import { FC } from 'react';

type BreadcrumbItem = {
  label: string;
  href?: string; // If no href, it will be treated as the current page
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 font-semibold">
      <ol className="flex items-center gap-1 text-sm text-[#333]">
        <li>
          <Link href="/" className="block transition-colors hover:text-gray-900" aria-label="Home">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20.25l6-16.5" />
            </svg>

            {item.href ? (
              <Link href={item.href} className="block font-bold transition-colors hover:text-gray-900">
                {item.label}
              </Link>
            ) : (
              <span className="truncate max-w-[200px] text-[#333]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;