import { useState } from 'react'

function AdminDash() {

    const [activeTab, setActiveTab] = useState("reports")

    const [reports, setReports] = useState([
        { id: 1, crimeType: "theft", incidentDate: "2026-04-09", county: "dublin", locationDesc: "opposite train station", incidentDesc: "wallet stolen from back pocket while boarding the bus", dateSubmitted: "2026-04-10", status: "Pending", reporter: "Prince Eigbe" },
        { id: 2, crimeType: "assault", incidentDate: "2026-04-10", county: "cork", locationDesc: "near second gate", incidentDesc: "Old lady push off the sidewalk during rush hour morning", dateSubmitted: "2026-04-10", status: "Under Review", reporter: "Peter Lacey" },
        { id: 3, crimeType: "vandalism", incidentDate: "2026-04-11", county: "limerick", locationDesc: "main street car park", incidentDesc: "Graffiti sprayed on the wall and street light smashed", dateSubmitted: "2026-04-10", status: "Resolved", reporter: "Sera Kiran" },
    ])

    const [users, setUsers] = useState([
        { id: 1, name: "Prince Eigbe", email: "prince@swr.com", role: "Reporter" },
        { id: 2, name: "Peter Lacey", email: "peter@swr.com", role: "Reporter" },
        { id: 3, name: "Admin one", email: "Admin@swr.com", role: "Admin" },
    ])

    const [search, setSearch] = useState("")

    const [filter, setFilter] = useState("All")

    const [newUser, setNewUser] = useState({ name: "", email: "", password: "", role: "Reporter" })


    const statusColor = (status) => {
        if (status === "Pending") return "bg-yellow-100 text-yellow-800"
        if (status === "Under Review") return "bg-blue-100 text-blue-800"
        if (status === "Resolved") return "bg-green-100 text-green-800"
        return "bg-gray-100 text-gray-800"
    }

    const handleStatusChange = (reportId, newStatus) => {
        setReports(reports.map(report => report.id === reportId ? { ...report, status: newStatus } : report))
    }

    const handleDeleteReport = (reportId) => {
        if (window.confirm("Delete this report? This action cannot be undone.")) {
            setReports(reports.filter(report => report.id !== reportId))
        }
    }

    const handleDeleteUser = (userId) => {
        if (window.confirm("Delete this user? This action cannot be undone.")) {
            setUsers(users.filter(user => user.id !== userId))
        }
    }

    const handleAddUser = (e) => {
        e.preventDefault()
        const newId = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1
        setUsers([...users, { id: newId, name: newUser.name, email: newUser.email, role: newUser.role }])
        setNewUser({ name: "", email: "", role: "Reporter" })
    }

    const filteredR = reports.filter(report => {
        if (!report.crimeType.includes(search.toLowerCase()) && !report.county.includes(search.toLowerCase())) return false
        if (filter === "All") return true
        return report.status === filter
    })

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="mx-auto max-w-screen-xl px-4 py-8 md:px-8 md:py-12">

                <div className="mb-10 text-center">
                    <h1 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">Admin Dashboard</h1>
                    <p className="text-gray-500 md:text-lg">Manage all Reports and User accounts</p>
                </div>

                <div className="mb-6 border-b border-gray-200">
                    <nav className="flex justify-center space-x-8">
                        <button onClick={() => setActiveTab("reports")}
                            className={
                                `py-3 px-1 text-sm font-medium border-b-2 transition duration-100 md:text-base ${activeTab === "reports"
                                    ? "border-blue-600 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700"}`
                            }>
                            Reports
                        </button>
                        <button onClick={() => setActiveTab("users")}
                            className={
                                `py-3 px-1 text-sm font-medium border-b-2 transition duration-100 md:text-base ${activeTab === "users"
                                    ? "border-blue-600 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700"}`
                            }>
                            User
                        </button>
                    </nav>
                </div>


                <div className="bg-white rounded-lg shadow">

                    {activeTab === "reports" && (
                        <div className="p-6 md:p-8">
                            <h2 className="mb-4 text-lg font-semibold text-gray-800 md:text-xl">All Reports</h2>

                            <div className="mb-4 flex flex-col gap-4 sm:flex-row">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search by Crime Type or County..."
                                    className="w-full sm:max-w-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                                />
                                <select
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                                >
                                    <option value="All">All statuses</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Under Review">Under Review</option>
                                    <option value="Resolved">Resolved</option>
                                </select>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm text-gray-700">
                                    <thead className="bg-gray-50 text-xs uppercase text-gray-600">
                                        <tr>
                                            <th className="px-4 py-3">Reporter</th>
                                            <th className="px-4 py-3">Crime Type</th>
                                            <th className="px-4 py-3">Date of Incident</th>
                                            <th className="px-4 py-3">County</th>
                                            <th className="px-4 py-3">Location</th>
                                            <th className="px-4 py-3">Incident Description</th>
                                            <th className="px-4 py-3">Date submitted</th>
                                            <th className="px-4 py-3">Status</th>
                                            <th className="px-4 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredR.map((report) => (
                                            <tr key={report.id} className="border-b">
                                                <td>{report.reporter}</td>
                                                <td>{report.crimeType}</td>
                                                <td>{report.incidentDate}</td>
                                                <td>{report.county}</td>
                                                <td>{report.locationDesc}</td>
                                                <td>{report.incidentDesc}</td>
                                                <td>{report.dateSubmitted}</td>
                                                <td>
                                                    <select
                                                        value={report.status}
                                                        onChange={(e) => handleStatusChange(report.id, e.target.value)}
                                                        className={`rounded-full px-3 py-1 text-xs font-medium border-0 ${statusColor(report.status)}`}
                                                    >
                                                        <option value="Pending">Pending</option>
                                                        <option value="Under Review">Under Review</option>
                                                        <option value="Resolved">Resolved</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDeleteReport(report.id)}
                                                        className="rounded bg-red-100 px-3 py-1 text-xs font-medium text-red-800 hover:bg-red-200">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {filteredR.length === 0 && (
                                <p className="mt-4 text-center text-sm text-gray-500">No Reports match your filter</p>
                            )}
                        </div>
                    )}

                    {
                        activeTab === "users" && (
                            <div className="p-6 md:p-8">
                                <h2 className="mb-4 text-lg font-semibold text-gray-800 md:text-xl">Users</h2>

                                <form onSubmit={handleAddUser} className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
                                    <h3 className="mb-3 text-sm font-medium text-gray-800">Add New User</h3>
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                                        <input
                                            type="text"
                                            value={newUser.name}
                                            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                            placeholder="Full Name" required
                                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                                        />

                                        <input
                                            type="email"
                                            value={newUser.email}
                                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                            placeholder="Email" required
                                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                                        />

                                        <input
                                            type="password"
                                            value={newUser.password}
                                            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                            placeholder="Password" required
                                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                                        />

                                        <select
                                            value={newUser.role}
                                            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                                        >
                                            <option value="Reporter">Reporter</option>
                                            <option value="Admin">Admin</option>
                                        </select>
                                        <button type="submit"
                                            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                                            Add User
                                        </button>
                                    </div>
                                </form>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm text-gray-700">
                                        <thead className="bg-gray-50 text-xs uppercase text-gray-600">
                                            <tr>
                                                <th className="px-4 py-3">Name</th>
                                                <th className="px-4 py-3">Email</th>
                                                <th className="px-4 py-3">Role</th>
                                                <th className="px-4 py-3">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map((user) => (
                                                    <tr key={user.id} className="border-b">
                                                        <td className="px-4 py-3">{user.name}</td>
                                                        <td className="px-4 py-3">{user.email}</td>
                                                        <td className="px-4 py-3">
                                                            <span className={`rounded-full px-3 py-1 text-xs font-medium ${user.role === "Admin" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-800"}`}>
                                                                {user.role}
                                                            </span>
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <button onClick={() => handleDeleteUser(user.id)}
                                                                className="rounded bg-red-100 px-3 py-1 text-xs font-medium text-red-800 hover:bg-red-200">
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                </div>
            </div>

        </div>

    )
}


export default AdminDash