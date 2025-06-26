import { FaLinkedin } from "react-icons/fa";
import { PiGlobe } from "react-icons/pi";

import Link from "next/link";

export default function AboutPage() {
    return(
    <main className="mt-10">
        <section className="max-w-4xl mx-auto px-5 my-2">
            <div className="flex items-center gap-x-3">
            <div className="shrink-0">
                <img className="shrink-0 size-16 rounded-full" src="/spencer-headshot.jpg" alt="Avatar" />
            </div>

            <div className="grow">
                <h1 className="text-lg font-medium text-gray-800">
                Spencer Wozniak
                </h1>
                <p className="text-sm text-gray-600">
                Co-Founder
                </p>
            </div>
            </div>


            {/* About */}
            <div className="mt-8">
            <p className="text-sm text-gray-600">
            I’m a Catholic Christian, a relentless explorer of ideas, and a builder at heart. My path has led me from working hands-on with autistic children to researching the frontiers of AI in healthcare, all guided by a deep desire to serve.
            </p>

            <p className="mt-3 text-sm text-gray-600">
            I founded the Woz-Arnold Foundation to rally our community around those most in need, empowering kids and families through grassroots action and innovation.
            </p>

            <ul className="mt-5 flex flex-col gap-y-3">
                <li className="flex items-center gap-x-2.5">
                <FaLinkedin />
                <Link className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2" href="https://www.linkedin.com/in/spencerwozniak/">
                 linkedin.com/in/spencerwozniak
                </Link>
                </li>

                <li className="flex items-center gap-x-2.5">
                <PiGlobe />
                <Link className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2" href="https://www.spencerwozniak.com/">
                spencerwozniak.com
                </Link>
                </li>
            </ul>
            </div>
        </section>

        <section className="max-w-4xl mx-auto px-5 my-10">
        <div className="flex items-center gap-x-3">
        <div className="shrink-0">
            <img className="shrink-0 size-16 rounded-full" src="/matt-headshot.JPG" alt="Avatar" />
        </div>

        <div className="grow">
            <h1 className="text-lg font-medium text-gray-800">
            Matthew Arnold
            </h1>
            <p className="text-sm text-gray-600">
            Co-Founder
            </p>
        </div>
        </div>


        {/* About */}
        <div className="mt-8">
        <p className="text-sm text-gray-600">
        I’m a committed leader and an advocate for justice. My years in Catholic leadership roles have shaped my calling to serve others, which I now carry into my work as a law student and associate at a free legal clinic.
        </p>

        <p className="mt-3 text-sm text-gray-600">
        As co-founder of the Woz-Arnold Foundation, I’m dedicated to uplifting those on the margins, empowering kids and families in our community through compassion, advocacy, and leadership.
        </p>


        <ul className="mt-5 flex flex-col gap-y-3">
            <li className="flex items-center gap-x-2.5">
            <FaLinkedin />
            <Link className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2" href="#">
            ...
            </Link>
            </li>

            <li className="flex items-center gap-x-2.5">
            <PiGlobe />
            <Link className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2" href="#">
            ...
            </Link>
            </li>
        </ul>
        </div>
        </section>
    </main>
    );
}