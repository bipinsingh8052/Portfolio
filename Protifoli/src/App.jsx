import About from "./Component/About"
import AboutPage from "./Component/AboutPage"
import Blog from "./Component/Blog"
import Contact from "./Component/Contact"
import ContactPage from "./Component/ContactPage"
import Home from "./Component/Home"
import Project from "./Component/Project"
import Services from "./Component/Services"
import ServicesPage from "./Component/ServicesPage"
import Skills from "./Component/Skills"
import Layout from "./Layout"
import Footer from "./pages/Footer"
import HeroSection from "./pages/HeroSection"
import Navbartoo from "./pages/Navbartoo"

import {BrowserRouter ,Routes,Route} from 'react-router-dom'
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="service" element={<ServicesPage/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="skills" element={<Skills/>}/>
        <Route path="project" element={<Project/>}/>
        <Route path="*" element={<ContactPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
