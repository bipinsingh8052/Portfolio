import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "../css/Hersection.css";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
  
        <section className="hero-section d-flex flex-column flex-md-row align-items-center justify-content-center text-white p-5">
          {/* Left Side - Profile Image */}
          <div className="position-relative text-center text-md-start mb-4 mb-md-0">
            <div className="orange-circle animate__animated animate__zoomIn"></div>
            <img
              src="https://i.imgur.com/4M34hi2.png"
              alt="Profile"
              className="profile-img animate__animated animate__fadeInLeft"
            />
          </div>
    
          {/* Right Side - Introduction */}
          <div className="ms-md-5 text-center text-md-start">
            <p className="text-uppercase text-secondary animate__animated animate__fadeInDown">Introduction</p>
            <h1 className="fw-bold animate__animated animate__fadeInRight">
              Hi, I'm <span className="text-warning">Satyam Badal</span>
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
            <a href="#about" className="btn btn-warning fw-bold animate__animated animate__bounceIn animate__delay-3s">
              About Me
            </a>
          </div>
        </section>

  )
}
