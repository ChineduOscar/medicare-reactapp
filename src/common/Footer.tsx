import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-4 mt-12">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Medicares</h2>
                <p className="text-gray-600 mt-4 text-sm leading-relaxed max-w-sm">
                    Providing reliable and modern healthcare services to ensure your well-being at every step.
                </p>
            </div>

            <div>
                <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                    <li><Link to="/about" className="hover:text-blue-600 transition">About Us</Link></li>
                    <li><Link to="/about" className="hover:text-blue-600 transition">Our Mission</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                    <li>Email: <span className="text-gray-700">support@medicares.com</span></li>
                    <li>Phone: <span className="text-gray-700">+234 800 000 0000</span></li>
                    <li>Location: <span className="text-gray-700">Nigeria</span></li>
                </ul>
            </div>

        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
            © 2026 Medicares. All rights reserved.
        </div>

    </footer>
  )
}

export default Footer
