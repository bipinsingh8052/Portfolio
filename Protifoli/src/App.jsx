import About from "./Component/About"
import Blog from "./Component/Blog"
import Contact from "./Component/Contact"
import Project from "./Component/Project"
import Services from "./Component/Services"
import Skills from "./Component/Skills"
import Footer from "./pages/Footer"
import HeroSection from "./pages/HeroSection"
import Navbartoo from "./pages/Navbartoo"


function App() {
  
  return (
    <>
     <Navbartoo/><HeroSection/>
     <About/>
     <Skills/>
     <Project/>
     <Blog/>
     <Contact/><Services/><Footer/>
    </>
  )
}

export default App
