import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))

    const handleLogout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <nav className="bg-blue-500 py-6">
            <div className="mx-auto max-w-screen-xl flex justify-between items-center">
                <Link to="/" className="text-white text-3xl font-semibold px-6">
                    SWR
                </Link>
                <div className="flex space-x-6">
                    <Link to="/" className="text-white hover:text-gray-900">Home</Link>
                    <Link to="/about" className="text-white hover:text-gray-900">About Us</Link>
                    <Link to="/contact" className="text-white hover:text-gray-900">Contact Us</Link>
                    {user ? (
                        <>
                            <Link to={user.role === "admin" ? "/adminpanel" : "/rdashboard"} className="text-white hover:text-gray-900">
                                Dashboard
                            </Link>
                            <button onClick={handleLogout} className="text-white hover:text-gray-900">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-white hover:text-gray-900">Login</Link>
                            <Link to="/register" className="text-white hover:text-gray-900">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
