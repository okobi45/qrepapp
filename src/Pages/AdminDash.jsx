import { useState, useEffect } from 'react'

function AdminDash() {

    const [activeTab, setActiveTab] = useState("reports")
    const [reports, setReports] = useState([])
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("All")
    const [newUser, setNewUser] = useState({ name: "", email: "", password: "", role: "reporter" })


    const statusColor = (status) => {
        if (status === "Pending") return "bg-yellow-100 text-yellow-800"
        if (status === "Under Review") return "bg-blue-100 text-blue-800"
        if (status === "Resolved") return "bg-green-100 text-green-800"
        return "bg-gray-100 text-gray-800"
    }

    const fetchReports = async () => {
        try {
            const response = await fetch("http://localhost:5002/api/reports", {
                headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
            })
            const data = await response.json()
            setReports(data)
        } catch (error) {
            console.error("Failed to fetch reports:", error)
        }
    }

    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:5002/api/users", {
                headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
            })
            const data = await response.json()
            setUsers(data)
        } catch (error) {
            console.error("Failed to fetch users:", error)
        }
    }

    useEffect(() => {
        fetchReports()
        fetchUsers()
    }, [])

    const handleStatusChange = async (reportId, newStatus) => {
        try {
            await fetch(`http://localhost:5002/api/reports/${reportId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                body: JSON.stringify({ status: newStatus })
            })
            fetchReports()
        } catch (error) {
            console.error("Failed to update status:", error)
        }
    }

    const handleDeleteReport = async (reportId) => {
        if (window.confirm("Delete this report? This action cannot be undone.")) {
            try {
                await fetch(`http://localhost:5002/api/reports/${reportId}`, {
                    method: "DELETE",
                    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
                })
                fetchReports()
            } catch (error) {
                console.error("Failed to delete report:", error)
            }
        }
    }

    const handleDeleteUser = async (userId) => {
        if (window.confirm("Delete this user? This action cannot be undone.")) {
            try {
                await fetch(`http://localhost:5002/api/users/${userId}`, {
                    method: "DELETE",
                    headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
                })
                fetchUsers()
            } catch (error) {
                console.error("Failed to delete user:", error)
            }
        }
    }

    const handleAddUser = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:5002/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                body: JSON.stringify(newUser)
            })
            if (response.ok) {
                setNewUser({ name: "", email: "", password: "", role: "reporter" })
                fetchUsers()
            }
        } catch (error) {
            console.error("Failed to add user:", error)
        }
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
                            Users
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
                                            <th className="px-4 py-3">Date Submitted</th>
                                            <th className="px-4 py-3">Status</th>
                                            <th className="px-4 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredR.map((report) => (
                                            <tr key={report._id} className="border-b">
                                                <td>{report.reporter?.name || "Unknown"}</td>
                                                <td>{report.crimeType}</td>
                                                <td>{new Date(report.incidentDate).toLocaleDateString()}</td>
                                                <td>{report.county}</td>
                                                <td>{report.locationDesc}</td>
                                                <td>{report.incidentDesc}</td>
                                                <td>{new Date(report.createdAt).toLocaleDateString()}</td>
                                                <td>
                                                    <select
                                                        value={report.status}
                                                        onChange={(e) => handleStatusChange(report._id, e.target.value)}
                                                        className={`rounded-full px-3 py-1 text-xs font-medium border-0 ${statusColor(report.status)}`}
                                                    >
                                                        <option value="Pending">Pending</option>
                                                        <option value="Under Review">Under Review</option>
                                                        <option value="Resolved">Resolved</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDeleteReport(report._id)}
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

                    {activeTab === "users" && (
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
                                        <option value="reporter">Reporter</option>
                                        <option value="admin">Admin</option>
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
                                        {users.map((user) => (
                                            <tr key={user._id} className="border-b">
                                                <td className="px-4 py-3">{user.name}</td>
                                                <td className="px-4 py-3">{user.email}</td>
                                                <td className="px-4 py-3">
                                                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${user.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-800"}`}>
                                                        {user.role}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <button onClick={() => handleDeleteUser(user._id)}
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