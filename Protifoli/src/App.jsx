import About from "./Component/About"
import Contact from "./Component/Contact"
import Skills from "./Component/Skills"
import HeroSection from "./pages/HeroSection"
import Navbartoo from "./pages/Navbartoo"


function App() {
  
  return (
    <>
     <Navbartoo/><HeroSection/>
     <About/>
     <Skills/>
     <Contact/>
    </>
  )
}

export default App
