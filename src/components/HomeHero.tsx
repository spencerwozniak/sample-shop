import { FaChevronRight } from 'react-icons/fa'
import Link from 'next/link'

export default function HomeHero() {
    return (

    <div className="z-10 py-10 relative overflow-hidden before:absolute before:top-0 before:left-[calc(47.5%)] before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-1 before:transform before:-translate-x-1/2">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Announcement Banner */}
        <div className="flex justify-center">
        <Link 
        className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-hidden focus:border-gray-300" 
        href="/events/summer-smash-2025"
        >
            Upcoming Pickleball Tournament
            <span className="flex items-center gap-x-1">
            <span className="border-s border-gray-200 text-blue-600 ps-2">Register</span>
            <svg className="shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </span>
        </Link>
        </div>
        {/* End Announcement Banner */}

        {/* Title */}
        <div className="mt-5 max-w-xl text-center mx-auto">
        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl">
            Woz-Arnold Foundation
        </h1>
        </div>
        {/* End Title */}

        <div className="mt-5 max-w-3xl text-center mx-auto">
        <p className="text-lg text-gray-600">
        We host local sporting tournaments in San Diego to raise money for the community.
        </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 gap-3 flex justify-center">
        <Link 
        className="!text-white inline-flex justify-center items-center gap-x-3 text-center bg-linear-to-tl from-blue-600 to-violet-600 !hover:from-violet-600 !hover:to-blue-600 focus:outline-hidden focus:from-violet-600 focus:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-4" 
        href="/events"
        >
            See Our Upcoming Events <FaChevronRight />
        </Link>
        </div>
        {/* End Buttons */}
    </div>
    </div>

    )
};
