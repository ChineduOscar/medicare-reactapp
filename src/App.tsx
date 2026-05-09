import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Header from './common/Header'
import Footer from "./common/Footer"
import { Routes, Route } from "react-router-dom"

function App(){
  return(
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App