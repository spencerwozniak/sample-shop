import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  data: FAQItem[];
}

export default function FAQSection({ data }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-8xl px-30 py-20 md:px-6 xl:px-40 mx-auto">
      <div className="grid md:grid-cols-5 gap-6">
        {/* Left side: Heading and subtitle */}
        <div className="md:col-span-2 flex items-start">
          <div className="">
            <h2 className="text-2xl xl:text-3xl font-semibold tracking-tight text-black">
              Frequently Asked Questions
            </h2>
            <p className="mt-1 md:block text-gray-600">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>
        {/* Right side: Accordion */}
        <div className="md:col-span-3">
          <div className="hs-accordion-group divide-y divide-gray-200">
            {data.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`hs-accordion pb-3 pt-6 ${index === 0 ? "pt-0" : ""}`}
                >
                  <button
                    className="hs-accordion-toggle cursor-pointer group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    {faq.question}
                    {/* Down Chevron (closed) */}
                    <svg
                      className={`hs-accordion-active:hidden ${isOpen ? "hidden" : "block"} shrink-0 size-5 text-gray-600 group-hover:text-gray-500`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    {/* Up Chevron (open) */}
                    <svg
                      className={`hs-accordion-active:block ${isOpen ? "block" : "hidden"} shrink-0 size-5 text-gray-600 group-hover:text-gray-500`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  {isOpen && (
                  <div
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 text-gray-800 font-medium"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
