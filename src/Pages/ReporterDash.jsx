import { useState } from 'react'
import IncidentForm from './IncidentForm'

const ReporterDash = () => {

    const [activeTab, setActiveTab] = useState('reports');
    const [reports, setReports] = useState([
        { id: 1, dateSubmitted: "2026-04-10", crimeType: "theft", county: "dublin", incidentDate: "2026-04-09", status: "Pending" },
        { id: 2, dateSubmitted: "2026-04-11", crimeType: "assault", county: "cork", incidentDate: "2026-04-10", status: "Under Review" },
        { id: 3, dateSubmitted: "2026-04-12", crimeType: "vandalism", county: "limerick", incidentDate: "2026-04-11", status: "Resolved" },
    ]);

    const statusColor = (status) => {
        if (status === "Pending") return "bg-yellow-100 text-yellow-800"
        if (status === "Under Review") return "bg-blue-100 text-blue-800"
        if (status === "Resolved") return "bg-green-100 text-green-800"
        return "bg-gray-100 text-gray-800"
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="mx-auto max-w-screen-xl px-4 py-8 md:px-8 md:py-12">

                <div className="mb-10 text-center">
                    <h1 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
                        Welcome, Reporter
                    </h1>
                    <p className="text-gray-500 md:text-lg">
                        Manage your crime reports and submit new incidents.
                    </p>
                </div>

                <div className="mb-6 border-b border-gray-200">
                    <nav className="flex justify-center space-x-10">
                        <button onClick={() => setActiveTab("reports")}
                            className={
                                `py-3 px-1 text-sm font-medium border-b-2 transition duration-100 md:text-base ${activeTab === "reports"
                                    ? "border-blue-600 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700"}`
                            }>
                            My Reports
                        </button>
                        <button onClick={() => setActiveTab("form")}
                            className={
                                `py-3 px-1 text-sm font-medium border-b-2 transition duration-100 md:text-base ${activeTab === "form"
                                    ? "border-blue-600 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700"}`
                            }>
                            Submit New Report
                        </button>
                    </nav>
                </div>

                <div className="bg-white rounded-lg shadow">
                    {activeTab === "reports" && (
                        <div className="p-6 md:p-8">
                            <h2 className="mb-4 text-lg font-semibold text-gray-800 md:text-xl">My Reports</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-base text-gray-700">
                                    <thead className="bg-gray-50 text-xs uppercase text-gray-600">
                                        <tr>
                                            <th className="px-4 py-3">Date submitted</th>
                                            <th className="px-4 py-3">Crime Type</th>
                                            <th className="px-4 py-3">County</th>
                                            <th className="px-4 py-3">Date of Incident</th>
                                            <th className="px-4 py-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {reports.map((report) => (
                                            <tr key={report.id} className="border-b">
                                                <td className="px-4 py-3">{report.dateSubmitted}</td>
                                                <td className="px-4 py-3">{report.crimeType}</td>
                                                <td className="px-4 py-3">{report.county}</td>
                                                <td className="px-4 py-3">{report.incidentDate}</td>
                                                <td>
                                                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor(report.status)}`}>
                                                        {report.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                            <p className="mt-4 text-xs text-gray-400">Sample data created to test layout </p>
                        </div>
                    )}
                    {activeTab === "form" && <IncidentForm />}
                </div>
            </div>
        </div>
    )
}

export default ReporterDash