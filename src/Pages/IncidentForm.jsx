
function IncidentForm() {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                {/* text - start */}
                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                        Incident Report Form
                    </h2>
                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                        Secure Web Reporting (SWR) is a community based platform to ensure only registered reporters
                        can report incidents in the community. For more information on this see the TOS. Please NOTE that
                        all reports are not anonymous and tied to your reporter account for safety and accountability.
                    </p>
                </div>
                {/* text - end */}
                {/* form - start */}
                <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">

                    <div className="flex flex-col">
                        <label htmlFor="crimeType" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Crime Type</label>
                        <input type="text" id="crimeType" name="crimeType" placeholder="e.g. theft, assault, vandalism" className="lowercase w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="incidentDate" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Date of Incident</label>
                        <input type="date" id="incidentDate" name="incidentDate" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div>
                        <label htmlFor="county" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">County Crime was Committed</label>
                        <input type="text" id="county" name="county" placeholder="e.g. dublin, cork, limerick, antrim" className="lowercase w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div>
                        <label htmlFor="locationDesc" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Description of Location</label>
                        <input type="text" id="locationDesc" name="locationDesc" placeholder="e.g. house no, first gate, opposite train station" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="incidentDesc"
                            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                        >
                            Incident Description
                        </label>
                        <textarea
                            id="incidentDesc"
                            name="incidentDesc"
                            className="h-32 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            defaultValue={""}
                        />
                    </div>

                    <div className="flex items-center justify-between sm:col-span-2">
                        <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                            Send
                        </button>
                        <span className="text-sm text-gray-500">Required</span>
                    </div>
                    <p className="text-xs text-gray-400">
                        By submitting this report you agree to our{" "}
                        <a
                            href="#"
                            className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                        >
                            Privacy Policy
                        </a>
                        .
                    </p>
                </form>
                {/* form - end */}
            </div>
        </div>
    )
}

export default IncidentForm