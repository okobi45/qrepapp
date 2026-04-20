function About() {
    return (
        <div>
            <section>
                <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-col w-full max-w-4xl mx-auto prose text-left prose-blue">
                        <div className="w-full mx-auto text-center">
                            <h1 className="text-4xl mt-5 mb-4">About SWR</h1>
                            <p>SWR (Secure Web Report) is more than just a crime reporting app. it is a comprehensive, community managed solutions app designed to help communities actively participate in crime prevention and reporting.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="w-10 h-10" viewBox="0 0 24 24">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="12" r="9"></circle>
                                <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                            </svg>
                        </div>
                        <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                            <h2>Real-time Updates</h2>
                            <p>Stay informed about safety issues and incidents in your area with real-time notifications and alerts. SWR keeps you in the know about what is happening in your community.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="w-10 h-10" viewBox="0 0 24 24">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="12" r="9"></circle>
                                <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                            </svg>
                        </div>
                        <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                            <h2>Community Engagement</h2>
                            <p>SWR promotes a sense of unity and responsibility within communities. Users can share information, safety tips, and alerts with neighbors, fostering a safer and more connected neighborhood.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="w-10 h-10" viewBox="0 0 24 24">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="12" r="9"></circle>
                                <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                            </svg>
                        </div>
                        <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                            <h2>Verified Reporting</h2>
                            <p>We take trust and accountability seriously. SWR requires every report to be tied to a verified user account so the community can rely on the information shared. Your personal details are protected in line with our Privacy Policy and are only disclosed to law enforcement when lawfully requested.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About