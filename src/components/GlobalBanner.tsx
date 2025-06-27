'use client';

import React, { useState, useEffect, useRef } from 'react';

import Link from 'next/link';

import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

type BannerSlide = {
  message: React.ReactNode;
};

const slides: BannerSlide[] = [
  {
    message: (
      <p>
        Win a 1-carat, internally flawless, Fancy Yellow diamond! 
        Entry with every $1,000 purchase.
        &nbsp;
        <Link
          href="/raffle"
          className="underline"
        >
          Learn more
        </Link>
        .
      </p>
    ),
  },
  {
    message: (
      <p>
        Summer Sparkle Event: 
        15% off all custom jewelry through July 31st!
        &nbsp;
        <Link
          href="/shop"
          className="underline"
        >
          Shop now.
        </Link>
      </p>
    ),
  },
];

const ANIMATION_DURATION = 1000; // milliseconds

export default function GlobalBanner() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [nextIdx, setNextIdx] = useState<number | null>(null);

  // For auto-scroll
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Handlers for slide change
  const triggerSlide = (dir: "left" | "right") => {
    if (animating) return; // prevent stacking animations
    setDirection(dir);
    const newIdx =
      dir === "left"
        ? (current + 1) % slides.length
        : (current - 1 + slides.length) % slides.length;
    setNextIdx(newIdx);
    setAnimating(true);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      triggerSlide("left");
    }, 5000);
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
    // eslint-disable-next-line
  }, [current, animating]);

  // After animation, update current
  useEffect(() => {
    if (!animating) return;
    const timeout = setTimeout(() => {
      setCurrent(nextIdx!);
      setAnimating(false);
      setNextIdx(null);
    }, ANIMATION_DURATION);
    return () => clearTimeout(timeout);
  }, [animating, nextIdx]);

  // On manual click, pause and reset auto-advance
  const handleManual = (dir: "left" | "right") => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    triggerSlide(dir);
  };

  // Slide positioning logic
  const slideBase =
    "absolute w-full left-0 top-0 text-center text-base text-blue-900 font-medium min-h-[1.8em] flex items-center justify-center transition-transform duration-400";
  const getSlideClass = (slideType: "current" | "next") => {
    if (!animating) return "relative " + slideBase + " translate-x-0";
    if (slideType === "current") {
      // Outgoing slide
      return (
        slideBase +
        " " +
        (direction === "left"
          ? "-translate-x-full"
          : "translate-x-full")
      );
    } else {
      // Incoming slide
      return (
        slideBase +
        " " +
        (direction === "left"
          ? "translate-x-0"
          : "translate-x-0") + // We'll animate in below
        " " +
        (direction === "left"
          ? "translate-x-full"
          : "-translate-x-full") +
        " animate-slide-in"
      );
    }
  };

  return (
    <div className="text-xs font-medium text-black w-full bg-[#81d8d0] py-2 px-8 flex items-center justify-center relative overflow-hidden" style={{ minHeight: 46 }}>
      {/* Prev Button */}
      <button
        aria-label="Previous"
        onClick={() => handleManual("right")}
        className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded focus:outline-none z-10"
        tabIndex={0}
      >
        <FaChevronLeft />
      </button>

      {/* Animated Slides */}
      <div className="relative w-full min-h-[1.8em] ">
        {/* Outgoing/current slide */}
        <div
            className={
            (animating
                ? direction === "left"
                ? "animate-slide-out-left"
                : "animate-slide-out-right"
                : "translate-x-0"
            ) +
            " absolute inset-0 flex items-center justify-center text-center transition-transform duration-400"
            }
            key={current + "-out"}
        >
            {slides[current].message}
        </div>
        {/* Incoming/next slide */}
        {animating && nextIdx !== null && (
            <div
            className={
                (direction === "left"
                ? "animate-slide-in-right"
                : "animate-slide-in-left"
                ) +
                " absolute inset-0 flex items-center justify-center text-center transition-transform duration-400"
            }
            key={nextIdx + "-in"}
            >
            {slides[nextIdx].message}
            </div>
        )}
        </div>


      {/* Next Button */}
      <button
        aria-label="Next"
        onClick={() => handleManual("left")}
        className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded focus:outline-none z-10"
        tabIndex={0}
      >
        <FaChevronRight />
      </button>

      {/* Tailwind "arbitrary value" custom animations */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .animate-slide-out-left {
            animation: slideOutLeft ${ANIMATION_DURATION}ms cubic-bezier(0.77,0,0.18,1) forwards;
          }
          .animate-slide-out-right {
            animation: slideOutRight ${ANIMATION_DURATION}ms cubic-bezier(0.77,0,0.18,1) forwards;
          }
          .animate-slide-in-right {
            animation: slideInRight ${ANIMATION_DURATION}ms cubic-bezier(0.77,0,0.18,1) forwards;
          }
          .animate-slide-in-left {
            animation: slideInLeft ${ANIMATION_DURATION}ms cubic-bezier(0.77,0,0.18,1) forwards;
          }
          @keyframes slideOutLeft {
            to { transform: translateX(-100%); opacity: 0.7;}
          }
          @keyframes slideOutRight {
            to { transform: translateX(100%); opacity: 0.7;}
          }
          @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0.7;}
            to { transform: translateX(0); opacity: 1;}
          }
          @keyframes slideInLeft {
            from { transform: translateX(-100%); opacity: 0.7;}
            to { transform: translateX(0); opacity: 1;}
          }
        }
      `}</style>
    </div>
  );
}
