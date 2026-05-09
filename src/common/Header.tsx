import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <div>
        <header className="bg-white flex flex-col md:flex-row items-start md:items-center justify-between max-w-300 mx-auto px-4 py-4 md:py-6">
            <div className="flex justify-between items-center md:w-fit w-full">
                <Link to="/">
                    <h1 className="text-2xl font-bold text-gray-800">Medicares</h1>
                </Link>
                <label htmlFor="ham-menu" className="flex md:hidden cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1e2939"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </label>
            </div>
            <div className="mt-4 flex md:hidden divider w-full h-px bg-gray-300 max-w-300 mx-auto px-4"></div>

            <input type="checkbox" id="ham-menu" className="peer" hidden />
            <nav className="hidden peer-checked:flex md:flex md:flex-row flex-col items-start md:items-center gap-5 md:gap-10 my-6 md:my-0 w-full md:w-fit">
                <Link to="/" className="px-4 py-1 hover:bg-blue-200 hover:text-blue-600 rounded-md font-medium transition-colors duration-700 w-full">Home</Link>
                <HashLink to="/#services" className="px-4 py-1 hover:bg-blue-200 hover:text-blue-600 rounded-md font-medium transition-colors duration-700 w-full">Services</HashLink>
                <Link to="/about" className="px-4 py-1 hover:bg-blue-200 hover:text-blue-600 rounded-md font-medium transition-colors duration-700 w-full">About</Link>
            </nav>

            <div className="hidden peer-checked:flex md:flex md:w-fit w-full">
                <Link to="/contact" className='md:w-fit w-full'>
                    <button className="border border-gray-800 px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors duration-700 w-full">Contact Us</button>
                </Link>
            </div>  

        </header>
        <div className="hidden md:flex divider w-full h-px bg-gray-300 max-w-300 mx-auto px-4"></div>
    </div>
  )
}

export default Header
