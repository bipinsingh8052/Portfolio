import React, { useEffect, useRef, useState } from 'react'
import '../css/About.css'
import { motion, useAnimation } from "framer-motion";
export default function About() {
    const controls = useAnimation();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    // Observer to track visibility of the section
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        },
        { threshold: 0.2 } // Adjust threshold to trigger animation sooner or later
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => observer.disconnect();
    }, [controls]);
  
    return (
      <motion.section
        className="about-section"
        ref={sectionRef}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
        }}
      >
        {/* Animated Title */}
        <motion.h2
          className="title"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
          }}
        >
          About <span className="highlight">Me</span>
        </motion.h2>
  
        <div className="about-container">
          {/* Image Section */}
          <motion.div
            className="image-container"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } },
            }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <img src="https://mine-portfolio-olive.vercel.app/images/aboutmeimg.png" alt="About Me" />
          </motion.div>
  
          {/* Info Section */}
          <motion.div
            className="info-container"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0, transition: { duration: 1.2, delay: 0.5 } },
            }}
          >
            <h3>PERSONAL INFO:</h3>
            {[
              ["First Name:", "Bipin", "Last Name:", "Singh"],
              ["Birthdate:", "04 August 2004"],
              ["Nationality:", "Indian"],
              ["Experience:", "Fresher"],
              ["Freelance:", "Available"],
              ["Language:", "English"],
              ["Phone:", "+91 8052056711"],
              ["Email:", "bipinsingh8052@gmail.com"],
              ["Address:", "allahabad, Uttar Pradesh"],
            ].map(([label1, value1, label2, value2], index) => (
              <motion.p
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: index * 0.2 } },
                }}
              >
                <strong>{label1}</strong> {value1} {label2 && <strong>{label2}</strong>} {value2}
              </motion.p>
            ))}
  
            {/* Animated Button */}
            <motion.button
              className="hire-me"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Hire Me
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    );
  
}
