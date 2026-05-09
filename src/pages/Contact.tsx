import { useState } from 'react'
import axios from 'axios'

const API_URL = 'https://medicares-backend-api.onrender.com/contact'


const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)  
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false) 
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
       ...formData,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e: React.SyntheticEvent<HTMLFormElement>) =>{
    e.preventDefault()

    if (!formData.fullName || !formData.email || !formData.message) {
        setMessage('Please fill in all fields.')
        setIsSuccess(false)
        return
    }
    try{
        setIsLoading(true)
        const response = await axios.post(API_URL, formData)

        console.log(response)
        setMessage(response.data.message);
        setIsSuccess(true)
        setFormData({
            fullName: '',
            email: '',
            message: ''
        })


    }catch(error){
        if (axios.isAxiosError(error)) {
            console.log(error.response?.data || error.message)
        } else {
            console.log(error)
        }
        setMessage('Something went wrong. Please try again later.')
        setIsSuccess(false)
    }finally {
        setIsLoading(false)
    }
  }


  return (
    <div>
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Get in Touch
                </h1>
                <p className="text-gray-600 text-lg">
                    We&apos;re here to help you with anything related to your health or our services.
                </p>
            </div>
        </section>

        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

                <div className="space-y-8">

                    <div>
                        <h2 className="text-2xl font-bold mb-3">Let&apos;s talk</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Whether you have questions, need support, or want to book a service,
                            our team is always ready to assist you quickly and professionally.
                        </p>
                    </div>

                    <div className="space-y-4 text-gray-600">
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#155dfc"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                            <p>support@medicares.com</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#22C55E"><path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                            <p>+234 800 000 0000</p>
                        </div>

                        <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F97316"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                            <p>Nigeria</p>
                        </div>
                    </div>

                </div>

                <form onSubmit={handleSubmit} id="contactForm" className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 space-y-5">

                    <div>
                        <label className="text-sm text-gray-600">Full Name</label>
                        <input name='fullName' value={formData.fullName} onChange={handleChange} id="fullNameInput" type="text" placeholder="Enter your name"
                            className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input name='email' value={formData.email} onChange={handleChange} id="emailInput" type="email" placeholder="Enter your email"
                            className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Message</label>
                        <textarea name='message' value={formData.message} onChange={handleChange} id="messageInput" rows={5} placeholder="How can we help you?"
                            className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                    </div>

                   <button
                        disabled={isLoading}
                        id="sendBtn"
                        className={`w-full bg-blue-600 text-white py-3 rounded-lg font-semibold ${
                            isLoading
                            ? 'cursor-not-allowed opacity-70'
                            : 'cursor-pointer hover:bg-blue-700'
                        } transition`}
                        >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>

                    <p id="messageBox" className={`text-sm text-center mt-4 ${isSuccess ? 'text-[#16a34a]': 'text-[#dc2626]'} font-medium`}>{message}</p>
                </form>

            </div>
        </section>
    </div>
  )
}

export default Contact
