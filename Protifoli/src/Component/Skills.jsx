import{ useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../css/Skills.css"


const Skills = () => {
 


  const skillsData = {
    frontend: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "ReactJs", level: 80 },
      { name: "jQuery", level: 70 },
    ],
    backend: [
      { name: "C++", level: 95 },
      { name: "Python", level: 85 },
      { name: "DSA", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "MySQL", level: 75 },
    ],
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Reset animation when out of view
    }
  }, [inView, controls]);

  const barVariants = {
    hidden: { width: "0%" },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeInOut" },
    }),
  };

  return (
    <section ref={ref} className="skills-section">
      {/* Animated Heading */}
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
      >
        My <span className="highlight">Skills</span>
      </motion.h2>

      <div className="skills-container">
        {/* Frontend Skills */}
        <div className="skills-box">
          <h3>Front End Skill</h3>
          {skillsData.frontend.map((skill, index) => (
            <div key={index} className="skill">
              <span>{skill.name}</span>
              <motion.div className="progress-bar">
                <motion.div
                  className="progress"
                  custom={skill.level}
                  variants={barVariants}
                  initial="hidden"
                  animate={controls}
                />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Backend Skills */}
        <div className="skills-box">
          <h3>Back End Skill</h3>
          {skillsData.backend.map((skill, index) => (
            <div key={index} className="skill">
              <span>{skill.name}</span>
              <motion.div className="progress-bar">
                <motion.div
                  className="progress"
                  custom={skill.level}
                  variants={barVariants}
                  initial="hidden"
                  animate={controls}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
