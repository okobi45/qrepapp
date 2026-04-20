export default function Faqs() {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
                        How it works
                    </p>
                    <h2 className="mb-12 text-4xl font-bold leading-tight text-center sm:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">
                                How do I report a crime or an emergency using the SWR (Secure Web Report) app?
                            </summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>
                                    To report a crime or an emergency, open the SWR (Secure Web Report) app and
                                    navigate to the Report or Emergency section. Follow the prompts to provide
                                    essential information about the incident, such as location, description, and
                                    any other relevant details.
                                </p>
                                <p>
                                    SWR is an internal, community-managed platform, so your report is first
                                    reviewed and verified within the community. Where appropriate, information
                                    may be shared with law enforcement on request.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">
                                Can I remain anonymous when reporting a crime through the app?
                            </summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>
                                    No. Reports submitted through SWR (Secure Web Report) cannot be made
                                    anonymously. SWR is an internal, community-based platform, and every report
                                    is tied to a verified user account to help us maintain the integrity of the
                                    information shared within the community.
                                </p>
                                <p>
                                    All submissions are subject to verification before any action is taken, and
                                    requiring identifiable accounts helps us prevent false reports, abuse of the
                                    system, and the spread of misinformation. Day to day, reports are handled
                                    internally by the community; however, your personal details and report data
                                    may be disclosed to law enforcement if lawfully requested, in line with our
                                    Privacy Policy.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">
                                What should I do if I have submitted a false report accidentally or with incorrect information?
                            </summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>
                                    If you have submitted a report with inaccurate information, please contact our
                                    support team as soon as possible. We understand that mistakes can happen, and
                                    it is important to rectify them promptly.
                                </p>
                                <p>
                                    Because SWR is a verified, community-managed platform, keeping report data
                                    accurate is essential | both for internal trust within the community and
                                    because records may later be shared with law enforcement if requested. Our
                                    team will work with you to update or correct the report so the information
                                    held on the platform remains reliable.
                                </p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
}