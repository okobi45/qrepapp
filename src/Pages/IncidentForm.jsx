
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
                        Please be aware that this form is designed for anonymous reporting, and you
                        will not be able to monitor or modify any information submitted. To keep track or update
                        any of your reports, please consider signing up.
                    </p>
                </div>
                {/* text - end */}
                {/* form - start */}
                <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">

                    <div className="flex flex-col">
                        <label htmlFor="countries" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Select Crime Type</label>
                        <select id="countries" className="w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Crime Type</option>
                            <option value="US">Misdemenor</option>
                            <option value="CA">Attack</option>
                            <option value="FR">Rape</option>
                            <option value="DE">Killing</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="countries" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">State Crime was Commited</label>
                        <select name="state" id="state" className="block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" disabled selected>Select your state</option>
                            <option value="Abia">Abia</option>
                            <option value="Adamawa">Adamawa</option>
                            <option value="Akwa Ibom">Akwa Ibom</option>
                            <option value="Anambra">Anambra</option>
                            <option value="Bauchi">Bauchi</option>
                            <option value="Bayelsa">Bayelsa</option>
                            <option value="Benue">Benue</option>
                            <option value="Borno">Borno</option>
                            <option value="Cross River">Cross River</option>
                            <option value="Delta">Delta</option>
                            <option value="Ebonyi">Ebonyi</option>
                            <option value="Edo">Edo</option>
                            <option value="Ekiti">Ekiti</option>
                            <option value="Enugu">Enugu</option>
                            <option value="Gombe">Gombe</option>
                            <option value="Imo">Imo</option>
                            <option value="Jigawa">Jigawa</option>
                            <option value="Kaduna">Kaduna</option>
                            <option value="Kano">Kano</option>
                            <option value="Katsina">Katsina</option>
                            <option value="Kebbi">Kebbi</option>
                            <option value="Kogi">Kogi</option>
                            <option value="Kwara">Kwara</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Nasarawa">Nasarawa</option>
                            <option value="Niger">Niger</option>
                            <option value="Ogun">Ogun</option>
                            <option value="Ondo">Ondo</option>
                            <option value="Osun">Osun</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Plateau">Plateau</option>
                            <option value="Rivers">Rivers</option>
                            <option value="Sokoto">Sokoto</option>
                            <option value="Taraba">Taraba</option>
                            <option value="Yobe">Yobe</option>
                            <option value="Zamfara">Zamfara</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="countries" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Crime Type</label>
                        <select id="countries" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select Type of Crime</option>
                            <option value="US">Misdemenor</option>
                            <option value="CA">Attack</option>
                            <option value="FR">Rape</option>
                            <option value="DE">Killing</option>
                        </select>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                        >
                            Description of Location*
                        </label>
                        <textarea
                            name="message"
                            className="h-24 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            defaultValue={""}
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                        >
                            Incident*
                        </label>
                        <textarea
                            name="message"
                            className="h-24 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            defaultValue={""}
                        />
                    </div>

                    <div>
                        <label htmlFor="countries" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Security Agency</label>
                        <select id="countries" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select Name of Agency</option>
                            <option value="US">Police</option>
                            <option value="CA">NSCDC</option>
                            <option value="FR">EFCC</option>
                            <option value="DE">ICPC</option>
                        </select>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                        >
                            Progress Notes*
                        </label>
                        <textarea
                            name="message"
                            className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            defaultValue={""}
                        />
                    </div>
                    <div className="flex items-center justify-between sm:col-span-2">
                        <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                            Send
                        </button>
                        <span className="text-sm text-gray-500">*Required</span>
                    </div>
                    <p className="text-xs text-gray-400">
                        By submiting this report you agree to our{" "}
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