import About from "./Component/About"
import Blog from "./Component/Blog"
import Contact from "./Component/Contact"
import Project from "./Component/Project"
import Services from "./Component/Services"
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
        {/* <Route index element={<} */}
      </Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
