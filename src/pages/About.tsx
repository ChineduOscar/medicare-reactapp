import doctorFour from '../assets/doc4.jpg'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-white text-gray-800">

        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto text-center space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                    About Medicares
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We are a modern healthcare platform dedicated to making quality medical care accessible, 
                    affordable, and compassionate for everyone.
                </p>
            </div>
        </section>

        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                <div className="space-y-5">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Our Mission
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        At Medicares, our mission is simple to connect patients with trusted healthcare professionals 
                        quickly and easily. We believe healthcare should be accessible anytime, anywhere.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        We combine technology and compassion to ensure every patient receives the care they deserve.
                    </p>
                </div>

                <div>
                    <img src={doctorFour} alt="Doctors team" className="rounded-xl shadow-lg w-full object-cover" />
                </div>

            </div>
        </section>

        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <h3 className="font-semibold text-lg text-gray-800">Care</h3>
                    <p className="text-gray-600 text-sm mt-2">Every patient matters to us.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <h3 className="font-semibold text-lg text-gray-800">Trust</h3>
                    <p className="text-gray-600 text-sm mt-2">We build reliable healthcare connections.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <h3 className="font-semibold text-lg text-gray-800">Innovation</h3>
                    <p className="text-gray-600 text-sm mt-2">Modern solutions for better healthcare.</p>
                </div>

            </div>
        </section>

        <section className="py-16 px-4">
            <div className="max-w-3xl mx-auto text-center space-y-5">
                <h2 className="text-3xl font-bold text-gray-800">
                    Want to experience better healthcare?
                </h2>
                <p className="text-gray-600">
                    Join Medicares today and connect with trusted doctors instantly.
                </p>

                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
                        Contact Us
                    </button>
                </Link>
            </div>
        </section>
    </div>
  );
}