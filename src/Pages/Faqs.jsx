
export default function Faqs() {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracki text-center uppercase">
                        How it works
                    </p>
                    <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">
                                How do I report a crime or an emergency using the QREP Crime ReportSystem app?
                            </summary>
                            <div className="px-4 pb-4">
                                <p>
                                    To report a crime or an emergency, open the QREP Crime ReportSystem app and navigate to the Report
                                    or Emergency section. Follow the prompts to provide essential information about the incident,
                                    such as location, description, and any other relevant details. Your report will be submitted to
                                    the appropriate authorities for action.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">
                                Can I remain anonymous when reporting a crime through the app?
                            </summary>
                            <div className="px-4 pb-4">
                                <p>
                                    Yes, you can choose to remain anonymous when reporting a crime
                                    through the QREP Crime ReportSystem app. We understand the importance of
                                    confidentiality and offer an anonymous reporting option to protect your identity.
                                    Your safety and privacy are our priorities.

                                </p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">
                                What should I do if I have submitted a false report accidentally or with incorrect information?
                            </summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>
                                    If you have submitted a report with inaccurate information,
                                    please contact our support team as soon as possible.
                                    We understand that mistakes can happen, and
                                    it is crucial to rectify them promptly.
                                </p>
                                <p>
                                    We will assist you in updating or correcting the report to ensure the accuracy of
                                    the information provided.
                                </p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
}
