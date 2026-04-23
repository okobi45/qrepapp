import { useState } from "react"

function IncidentForm() {

    const [crimeType, setCrimeType] = useState("")
    const [incidentDate, setIncidentDate] = useState("")
    const [county, setCounty] = useState("")
    const [locationDesc, setLocationDesc] = useState("")
    const [incidentDesc, setIncidentDesc] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setSuccess("")

        const user = JSON.parse(localStorage.getItem("user"))
        if (!user) {
            setError("You must be logged in to submit a report")
            return
        }

        try {
            const response = await fetch("http://localhost:5002/api/reports", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },

                body: JSON.stringify({
                    crimeType: crimeType.toLowerCase(),
                    incidentDate,
                    county: county.toLowerCase(),
                    locationDesc,
                    incidentDesc
                })
            })

            const data = await response.json()
            if (!response.ok) {
                setError(data.message)
                return
            }

            setSuccess("Report submitted successfully")
            setCrimeType("")
            setIncidentDate("")
            setCounty("")
            setLocationDesc("")
            setIncidentDesc("")
        } catch (error) {
            setError("Connection failed. Try again")
        }
    }


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
                {error && <p className="text-center text-sm text-red-600 mb-4">{error}</p>}
                {success && <p className="text-center text-sm text-green-600 mb-4">{success}</p>}
                <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>

                    <div className="flex flex-col">
                        <label htmlFor="crimeType" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Crime Type</label>
                        <input type="text" id="crimeType" name="crimeType" value={crimeType} onChange={(e) => setCrimeType(e.target.value)} placeholder="e.g. theft, assault, vandalism" className="lowercase w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="incidentDate" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Date of Incident</label>
                        <input type="date" id="incidentDate" name="incidentDate" value={incidentDate} onChange={(e) => setIncidentDate(e.target.value)} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5" />
                    </div>

                    <div>
                        <label htmlFor="county" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">County Crime was Committed</label>
                        <input type="text" id="county" name="county" value={county} onChange={(e) => setCounty(e.target.value)} placeholder="e.g. dublin, cork, limerick, antrim" className="lowercase w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" />
                    </div>

                    <div>
                        <label htmlFor="locationDesc" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Description of Location</label>
                        <input type="text" id="locationDesc" name="locationDesc" value={locationDesc} onChange={(e) => setLocationDesc(e.target.value)} placeholder="e.g. house no, first gate, opposite train station" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" />
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
                            value={incidentDesc}
                            onChange={(e) => setIncidentDesc(e.target.value)}
                            className="h-32 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
                        />
                    </div>

                    <div className="flex items-center justify-between sm:col-span-2">
                        <button className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-blue-300 transition duration-100 hover:bg-blue-700 focus-visible:ring active:bg-blue-800 md:text-base">
                            Send
                        </button>
                        <span className="text-sm text-gray-500">Required</span>
                    </div>
                    <p className="text-xs text-gray-400">
                        By submitting this report you agree to our{" "}
                        <a
                            href="#"
                            className="underline transition duration-100 hover:text-blue-500 active:text-blue-600"
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