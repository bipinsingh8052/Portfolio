import React, { useState, useEffect,useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import "../css/Project.css";

const projects = [
  {
    title: "E-Commerce Website",
    image: "data:image/jpeg;base64,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",
    description: "A fully functional e-commerce platform with payment integration.",
    demoLink: "https://example.com/demo",
    githubLink: "https://github.com/example/ecommerce",
  },
  {
    title: "Portfolio Website",
    image: "https://source.unsplash.com/400x300/?portfolio,website",
    description: "A personal portfolio website showcasing projects and skills.",
    demoLink: "https://example.com/portfolio",
    githubLink: "https://github.com/example/portfolio",
  },
  {
    title: "Weather App",
    image: "https://source.unsplash.com/400x300/?weather,forecast",
    description: "A real-time weather forecasting app using OpenWeather API.",
    demoLink: "https://example.com/weather",
    githubLink: "https://github.com/example/weather-app",
  },{
    title: "Login And SingUp ",
    image: "https://source.unsplash.com/400x300/?weather,forecast",
    description: "A real-time weather forecasting app using OpenWeather API.",
    demoLink: "https://login-and-sign-up-page-murex.vercel.app/r",
    githubLink: "https://github.com/example/weather-app",
  },{
    title: "Weather App",
    image: "https://source.unsplash.com/400x300/?weather,forecast",
    description: "A real-time weather forecasting app using OpenWeather API.",
    demoLink: "https://example.com/weather",
    githubLink: "https://github.com/example/weather-app",
  },{
    title: "Weather App",
    image: "https://source.unsplash.com/400x300/?weather,forecast",
    description: "A real-time weather forecasting app using OpenWeather API.",
    demoLink: "https://example.com/weather",
    githubLink: "https://github.com/example/weather-app",
  },{
    title: "Weather App",
    image: "https://source.unsplash.com/400x300/?weather,forecast",
    description: "A real-time weather forecasting app using OpenWeather API.",
    demoLink: "https://example.com/weather",
    githubLink: "https://github.com/example/weather-app",
  },{
    title: "Weather App",
    image: "https://source.unsplash.com/400x300/?weather,forecast",
    description: "A real-time weather forecasting app using OpenWeather API.",
    demoLink: "https://example.com/weather",
    githubLink: "https://github.com/example/weather-app",
  },{
    title: "Weather App",
    image: "https://source.unsplash.com/400x300/?weather,forecast",
    description: "A real-time weather forecasting app using OpenWeather API.",
    demoLink: "https://example.com/weather",
    githubLink: "https://github.com/example/weather-app",
  },{
    title: "Weather App",
    image: "https://source.unsplash.com/400x300/?weather,forecast",
    description: "A real-time weather forecasting app using OpenWeather API.",
    demoLink: "https://example.com/weather",
    githubLink: "https://github.com/example/weather-app",
  },
];

const Project = () => {
    const controls = useAnimation();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    // Scroll Observer
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
        { threshold: 0.2 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => observer.disconnect();
    }, [controls]);
  
    return (
      <motion.section
        id="project-section"
        className="project-section"
        ref={sectionRef}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
        }}
      >
        {/* Title */}
        <motion.h2
          className="text-center"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
          }}
        >
          My <span className="highlight">Projects</span>
        </motion.h2>
  
        <div className="container">
          <div className="row">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="col-md-4 "
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0, transition: { duration: 1.2, delay: index * 0.3 } },
                }}
              >
                <div className="project-card">
                  <div className="project-card-inner">
                    {/* Front Side */}
                    <div className="project-card-front">
                      <img src={project.image} alt={project.title} />
                      <h4>{project.title}</h4>
                    </div>
                    {/* Back Side */}
                    <div className="project-card-back">
                      <p>{project.description}</p>
                      <div className="button-group">
                        <motion.a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-warning"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          Go To
                        </motion.a>
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-light"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          GitHub
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  
};

export default Project;
