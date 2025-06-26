import Image from "next/image";

type QuoteProps = {
  quote: string;
  author: string;
  info: string;
  image?: string;
};

export default function Quote({ quote, author, info, image }: QuoteProps) {
  return (
    <div className="mt-8 md:mt-14 relative max-w-[85rem] px-8 py-10 lg:py-14 mx-auto">
      <blockquote className="lg:flex lg:items-center lg:justify-between lg:gap-x-10 text-left lg:mx-auto lg:w-4/5">
        <div className="relative lg:w-3/4">
        <svg className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"/>
          </svg>

          <p className="relative text-lg sm:text-xl md:text-2xl md:leading-normal font-medium text-gray-800 italic">
            <svg
              className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-100"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* quote marks path */}
              <path d="M7.39762 10.3C..." fill="currentColor" />
            </svg>
            <span className="relative z-10">{quote}</span>
          </p>
        </div>

        <footer className="mt-10 lg:mt-0 lg:w-1/4 flex items-center gap-x-4">
          <div className="shrink-0">
            <Image
              className="size-16 rounded-full"
              width={64}
              height={64}
              src={image}
              alt="Avatar"
            />
          </div>
          <div className="grow">
            <div className="font-semibold text-gray-800">{author}</div>
            <div className="text-sm text-gray-500">{info}</div>
          </div>
        </footer>
      </blockquote>
    </div>
  );
}


{/* Blockquote */}
        <blockquote className="relative">
            <svg className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"/>
            </svg>

            <div className="relative z-10">
            <p className="text-xl italic text-gray-800">
                Amazing people to work with. Very fast and professional partner.
            </p>
            </div>

            <footer className="mt-6">
            <div className="flex items-center gap-x-4">
                <div className="shrink-0">
                <Image 
                className="size-8 rounded-full" 
                width={100}
                height={100}
                src="/spencer-headshot.jpg" 
                alt="Avatar" />
                </div>
                <div className="grow">
                <div className="font-semibold text-gray-800">Spencer</div>
                <div className="text-xs text-gray-500">Founder</div>
                </div>
            </div>
            </footer>
        </blockquote>
        {/* End Blockquote */}