import About from "./Component/About"
import Contact from "./Component/Contact"
import Services from "./Component/Services"
import Skills from "./Component/Skills"
import HeroSection from "./pages/HeroSection"
import Navbartoo from "./pages/Navbartoo"


function App() {
  
  return (
    <>
     <Navbartoo/><HeroSection/>
     <About/>
     <Skills/>
     <Contact/><Services/>
    </>
  )
}

export default App
