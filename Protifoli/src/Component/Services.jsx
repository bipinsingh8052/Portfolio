import React, { useEffect,useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../css/Service.css";
import { Container, Row, Col, Card } from "react-bootstrap";


const Services = () => {
    const [hoverIndex, setHoverIndex] = useState(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });

  const services = [
    { id: 1, title: "Web Design", icon: "✂️", description: "Modern and user-friendly designs for all devices." },
    { id: 2, title: "Front End Development", icon: "💻", description: "Interactive and engaging UI development." },
    { id: 3, title: "Back End Development", icon: "🛢️", description: "Powerful and secure backend development." },
    { id: 4, title: "Responsive Web Design", icon: "📱", description: "Optimized design for all screen sizes.", highlight: true },
    { id: 5, title: "E-Commerce Website", icon: "🛒", description: "Build and optimize your online store." },
    { id: 6, title: "Custom Website", icon: "🔧", description: "Tailor-made solutions for your business." },
  ];

  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden"); // Reset animation when out of view
      }
    }, [inView, controls]);
  
    return (
      <section ref={ref} className="services-section">
        <motion.h2
          className="services-title"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
          }}
        >
          My <span className="highlight">Services</span>
        </motion.h2>
  





        <Container className="text-center my-5">
      <Row className="g-4 mt-3">
        {services.map((service, index) => (
          
          <Col key={index} md={4} sm={6} >
            <Card className="bg-dark text-white p-3 border-0 cardservice">
              <Card.Body className="text-center">
                <div className="fs-2 text-warning">{service.icon}</div>
                <Card.Title className="mt-2">{service.title}</Card.Title>
                <Card.Text>{service.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
         
        ))}
      </Row>
    </Container>
      </section>
    );
};

export default Services;


  