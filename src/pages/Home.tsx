import doctorOne from '../assets/doc1.png'
import doctorTwo from '../assets/doc2.png'
import doctorThree from '../assets/doc3.png'
import doctorFour from '../assets/doc4.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const API_URL = "https://medicares-backend-api.onrender.com/subscribe/send";

export default function Home() {
  const [email, setEmail] = useState('') 
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  
  const handleSubmit = async(e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(email)

    if (!email) {
        setMessage("Please enter your email address.");
        setIsSuccess(false)
        return;
    }

    try{
        setIsLoading(true)
        const response = await axios.post(API_URL, {email})

        console.log(response)
        setMessage(response.data.message);
        setIsSuccess(true)
        setEmail('')
    }catch(error){
        if (axios.isAxiosError(error)) {
            console.log(error.response?.data || error.message)
        } else {
            console.log(error)
        }
        setMessage('Something went wrong. Please try again later.')
        setIsSuccess(false)
    }finally{
        setIsLoading(false)
    }
  }

  return (
    <div className="bg-white text-gray-800">
        <section className="flex md:flex-row flex-col items-center justify-between gap-5 md:gap-10 max-w-300 mx-auto px-4 py-4 md:py-6">
            <div className="space-y-4">
                <h5 className="text-blue-500 font-bold uppercase tracking-wide text-center md:text-start">
                    We are here for you
                </h5>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight text-center md:text-start">
                    Welcome to Medicares
                </h1>

                <p className="text-gray-600 leading-relaxed text-center md:text-start">
                    At Medicares, your health and well-being come first.
                    We provide reliable and modern healthcare services
                    designed to support you and your loved ones every
                    step of the way.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer">
                        Contact a Doctor
                    </button>
                    </Link>

                    <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                    <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 cursor-pointer">
                        Learn More About Us
                    </button>
                    </Link>
                </div>
            </div>

            <div className="flex items-center gap-5 md:gap-10 w-full md:w-[95%]">
            <div>
                <img
                src={doctorThree}
                alt="Doctor"
                className="bg-[#014bec] rounded-xl"
                />
            </div>

            <div className="flex flex-col items-center gap-5">
                <img
                src={doctorOne}
                alt="Doctor"
                className="bg-[#0335a1] rounded-xl"
                />

                <img
                src={doctorTwo}
                alt="Doctor"
                className="bg-[#e17979] rounded-xl"
                />
            </div>
            </div>
        </section>

        {/* Services */}
        <section
            id="services"
            className="max-w-300 mx-auto px-4 py-6 md:py-12"
        >
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Our Services
                </h1>

                <p className="text-gray-600 mt-3">
                    Our patients are our priority. We provide quality
                    healthcare services you can trust.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-3 bg-blue-50 p-4 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                <div className="bg-blue-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#155dfc"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                </div>
                <p className="font-medium text-gray-800 text-center">Find a Specialist</p>
            </div>

            <div className="flex flex-col items-center gap-3 bg-green-50 p-4 rounded-lg cursor-pointer hover:bg-green-100 transition">
                <div className="bg-green-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#22C55E"><path d="M200-640h560v-80H200v80Zm0 0v-80 80Zm0 560q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v227q-19-9-39-15t-41-9v-43H200v400h252q7 22 16.5 42T491-80H200Zm378.5-18.5Q520-157 520-240t58.5-141.5Q637-440 720-440t141.5 58.5Q920-323 920-240T861.5-98.5Q803-40 720-40T578.5-98.5ZM787-145l28-28-75-75v-112h-40v128l87 87Z"/></svg>
                </div>
                <p className="font-medium text-gray-800 text-center">Book Appointment</p>
            </div>

                <div className="flex flex-col items-center gap-3 bg-purple-50 p-4 rounded-lg cursor-pointer hover:bg-purple-100 transition">
                <div className="bg-purple-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9810fa"><path d="m414-280 226-226-58-58-169 169-84-84-57 57 142 142ZM260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm0-80h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41Zm220-240Z"/></svg>
                </div>
                <p className="font-medium text-gray-800 text-center">Online Consultation</p>
                </div>

                <div className="flex flex-col items-center gap-3 bg-red-50 p-4 rounded-lg cursor-pointer hover:bg-red-100 transition">
                <div className="bg-red-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F97316"><path d="M440-800v-160h80v160h-80Zm-177 57L143-863l57-57 120 120-57 57ZM160-40q-17 0-28.5-11.5T120-80v-320l84-240q6-18 21.5-29t34.5-11h100v-80h131q-24 34-37.5 74.5T440-600H274l-59 160h276q17 24 38 44.5t47 35.5H200v160h560v-123q21-3 41-9t39-15v267q0 17-11.5 28.5T800-40h-40q-17 0-28.5-11.5T720-80v-40H240v40q0 17-11.5 28.5T200-40h-40Zm80-200h120q17 0 28.5-11.5T400-280q0-17-11.5-28.5T360-320H240v80Zm480 0v-80H600q-17 0-28.5 11.5T560-280q0 17 11.5 28.5T600-240h120ZM200-360v160-160Zm491-150 139-138-42-42-97 95-39-39-42 43 81 81Zm170.5-231.5Q920-683 920-600t-58.5 141.5Q803-400 720-400t-141.5-58.5Q520-517 520-600t58.5-141.5Q637-800 720-800t141.5 58.5Z"/></svg>
                </div>
                <p className="font-medium text-gray-800 text-center">Emergency Care</p>
                </div>
            </div>
        </section>

        {/* About */}
        <section className="bg-white py-16 px-4">
            <div className="max-w-300 mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                We Truly Care About Your Health
                </h2>

                <p className="text-gray-600 leading-relaxed">
                At Medicares, every patient matters. Our team of
                dedicated doctors and healthcare professionals are
                committed to providing compassionate, reliable,
                and personalized care whenever you need it.
                </p>

                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
                    Learn More
                </button>
                </Link>
            </div>

            <div className="flex justify-center">
                <img
                src={doctorFour}
                alt="Doctor"
                className="rounded-xl shadow-lg w-full max-w-md object-cover"
                />
            </div>
            </div>
        </section>

        {/* Newsletter */}
        <section className="bg-white py-6 md:py-12 px-4">
            <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Subscribe for Latest Doctor Updates
            </h2>

            <p className="text-gray-600">
                Get health tips, doctor availability, and important
                updates delivered straight to your inbox.
            </p>

            <div className="mt-6">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <input
                    type="email"
                    value={email}
                    onChange= {(e)=> setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-lg border border-gray-300 w-full sm:w-80 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    disabled={isLoading}
                    id="sendBtn"
                    className={`bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold ${
                        isLoading
                        ? 'cursor-not-allowed opacity-70'
                        : 'cursor-pointer hover:bg-blue-700'
                    } transition`}
                    >
                    {isLoading? 'Subscribing...' : 'Subscribe'}
                </button>

                </form>

                <p className={`text-sm mt-4 ${isSuccess ? 'text-[#16a34a]': 'text-[#dc2626]'} font-medium`}>{message}</p>
            </div>
            </div>
        </section>
    </div>
  );
}