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
        <div>
            <div>

                <div>
                    <h1>Admin Dashboard</h1>
                    <p>Manage all Reports and User accounts</p>
                </div>

                <div>
                    <nav>
                        <button onClick={() => setActiveTab("reports")}>
                            Reports
                        </button>
                        <button onClick={() => setActiveTab("users")}>
                            User
                        </button>
                    </nav>
                </div>


                <div className="bg-white rounded-lg shadow">

                    {activeTab === "reports" && (
                        <div>
                            <h2 className="mb-4 text-lg font-semibold text-gray-800 md:text-xl">All Reports</h2>

                            <div>
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
                                    className=""
                                >
                                    <option value="All">All statuses</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Under Review">Under Review</option>
                                    <option value="Resolved">Resolved</option>
                                </select>
                            </div>

                            <div className="overflow-x-auto">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Reporter</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredR.map((report) => (
                                            <tr key={report.id} className="border-b">
                                                <td>{report.reporter}</td>
                                                <td>{report.crimeType}</td>
                                                <td>{report.incidentDate}</td>
                                                <td>
                                                    <select
                                                        value={report.status}
                                                        onChange={(e) => handleStatusChange(report.id, e.target.value)}
                                                        className=""
                                                    >
                                                        <option value="Pending">Pending</option>
                                                        <option value="Under Review">Under Review</option>
                                                        <option value="Resolved">Resolved</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDeleteReport(report.id)}>
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
                            <div>
                                <h2>Users</h2>

                                <form onSubmit={handleAddUser}>
                                    <h3>Add New User</h3>
                                    <div>
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

                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Role</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map((user) => (
                                                    <tr key={user.id} className="border-b">
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.role}</td>
                                                        <td>
                                                            <button onClick={() => handleDeleteUser(user.id)}>
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                )
                    }
                            </div>


            </div>
            </div>

        </div>

    )
}


export default AdminDash