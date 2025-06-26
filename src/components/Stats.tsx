export default function Stats() {
    return(

    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Grid */}
    <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
        <div className="lg:col-span-5 lg:col-start-1">
        {/* Title */}
        <div className="mb-8">
            <h2 className="mb-2 text-3xl text-gray-800 font-bold lg:text-4xl">
            It’s all about speed
            </h2>
            <p className="text-gray-600">
            We provide you with a test account that can be set up in seconds. Our main focus is getting responses to you as soon as we can.
            </p>
        </div>
        {/* End Title */}

        
        </div>
        {/* End Col */}

        <div className="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
        <div className="space-y-6 sm:space-y-8">
            {/* List */}
            <ul className="grid grid-cols-2 divide-y divide-y-2 divide-x divide-x-2 divide-gray-200 overflow-hidden">
            <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
                45k+
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                users - from new startups to public companies
                </p>
            </li>

            <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
                <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                23%
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                increase in traffic on webpages with Looms
                </p>
            </li>

            <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
                <svg className="shrink-0 size-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                9.3%
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                boost in reply rates across sales outreach
                </p>
            </li>

            <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                <div className="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
                2x
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                faster than previous Preline versions
                </p>
            </li>
            </ul>
            {/* End List */}
        </div>
        </div>
        {/* End Col */}
    </div>
    {/* End Grid */}
    </div>

    );
}