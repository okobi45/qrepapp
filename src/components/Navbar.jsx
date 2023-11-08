
export default function Navbar() {
    return (
        <div className="text-white bg-blue-500">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href="/" className="mr-5 hover:text-gray-900">Home</a>
                    <a href="/about" className="mr-5 hover:text-gray-900">About Us</a>
                    <a href="/contact" className="mr-5 hover:text-gray-900">Contact Us</a>
                </nav>
            </div>
        </div>
    )
}

