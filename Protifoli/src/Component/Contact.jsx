import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../css/Contact.css";

const Contact = () => {
    let [input,setinput]=useState({})
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });

  const handleinput=(e)=>{
    let{name,value}=e.target;
    setinput(values=>({...values,[name]:value}))
  }

  const Fromsubmit=(e)=>{
    e.preventDefault();
  }
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Reset animation when out of view
    }
  }, [inView, controls]);

  return (
    <section ref={ref} className="contact-section">
      {/* Animated Heading */}
      <motion.h2
        className="contact-title"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -80 },
          visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
        }}
      >
        My <span className="highlight">Contact</span>
      </motion.h2>

      <p className="contact-text">
        Please fill out the form to contact me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday.
      </p>

      <div className="contact-container">
        {/* Left Section - Contact Details */}
        <motion.div
          className="contact-details"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
          }}
        >
          <div className="contact-info">
            <div className="icon">📍</div>
            <div>
              <h3>Address</h3>
              <p>Bhopal, Madhya Pradesh</p>
            </div>
          </div>

          <div className="contact-info">
            <div className="icon">📧</div>
            <div>
              <h3>Email Us</h3>
              <p>bipinsingh8052@gmail.com</p>
            </div>
          </div>

          <div className="contact-info">
            <div className="icon">📞</div>
            <div>
              <h3>Call Me</h3>
              <p>+91 8052056711</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.form
          className="contact-form"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
          }}
        >
          <div className="form-group">
            <input type="text" placeholder="Your Name" required  name="name" onChange={handleinput}/>
            <input type="text" placeholder="Your Mobile Number" required  name="no" onChange={handleinput}/>
          </div>
          <input type="email" placeholder="Your Email Address" required name="email" onChange={handleinput} />
          <textarea placeholder="Message" rows="5" required name="descripation" onChange={handleinput} />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="submit-btn"
            onClick={Fromsubmit}
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
