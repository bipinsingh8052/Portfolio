import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import CV from '../images/NewBsc.pdf'
import dp from '../images/dp.jpg'
import "../css/Hersection.css";
import { motion } from "framer-motion";
export default function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = 'https://drive.google.com/file/d/17KV-ppUlZDjmhP5RGL1kdU2fx47g31C6/view?usp=drive_link'; // Path from public folder
    link.download = "My_CV.pdf"; // Download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
  
        <section className="hero-section d-flex flex-column flex-md-row align-items-center justify-content-center text-white p-5">
          {/* Left Side - Profile Image */}
          <div className="position-relative text-center text-md-start mb-4 mb-md-0">
            <div className="orange-circle animate__animated animate__zoomIn"></div>
            <img
              src={dp}
              alt="Profile"
              className="profile-img animate__animated animate__fadeInLeft"
            />
          </div>
    
          {/* Right Side - Introduction */}
          <div className="ms-md-5 text-center text-md-start">
            <p className="text-uppercase text-secondary animate__animated animate__fadeInDown">Introduction</p>
            <h1 className="fw-bold animate__animated animate__fadeInRight">
              Hi, I'm <span className="text-warning">Bipin singh</span>
            </h1>
            {/* <h2 className="animate__animated animate__fadeInUp animate__delay-2s">A <span className="highlight">Web Developer</span></h2> */}
            <h3 className="fw-bold text-danger animate__animated animate__zoomIn">A Web Developer</h3>


            <motion.h3
              className="fw-bold text-danger"
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              A Web Developer


            </motion.h3>
            <p className="text-light mt-3 animate__animated animate__fadeInUp animate__delay-1s">
              Experienced Full Stack Web Developer proficient in front-end and back-end
              technologies. Skilled in creating responsive, user-friendly interfaces and
              developing robust server-side logic.
            </p>
    
            {/* Animated Button */}
            <a href="https://drive.google.com/file/d/17KV-ppUlZDjmhP5RGL1kdU2fx47g31C6/view?usp=drive_link" download="My_CV.pdf" className="btn btn-warning fw-bold animate__animated animate__bounceIn animate__delay-3s">
              Download CV
            </a>
          </div>
        </section>

  )
}
