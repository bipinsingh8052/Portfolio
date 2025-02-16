import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import "../css/Blog.css"; // Import CSS for animations

const Blog = () => {
    const [isVisible, setIsVisible] = useState(false);
    // const sectionRef = useRef(null);
      const controls = useAnimation();
        const sectionRef = useRef(null);
        // const [isVisible, setIsVisible] = useState(false);
  
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
        { threshold: 0.3 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => observer.disconnect();
    }, [controls]);

  const blogs = [
    {
      title: "The Importance Of Web Design",
      image: "data:image/jpeg;base64,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",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Facere molestia praesentium...",
    },
    {
      title: "The Importance Of Web Design",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxRGPBFLbLrhozX3PLdnv0i3dMzzDB0rE8Q&s",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Facere molestia praesentium...",
    },
    {
      title: "The Importance Of Web Design",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlH5bpyDJaJR7FoLooFnmFVNLTGElLZe-bozGPYYo_O9le7AAnmQCxtXJ7Pohz2lQb3Hw&usqp=CAU",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Facere molestia praesentium...",
    },
  ];

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
      <Container>
        <div className="text-center mb-4">
          <p className="text-secondary">Check Out My Latest Blog Posts</p>
          <motion.h2
                    className=" text-white"
                    variants={{
                      hidden: { opacity: 0, y: -50 },
                      visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
                    }} >
            My <span className="text-warning">Blog</span>
           </motion.h2>
        </div>
        <Row>
          {blogs.map((blog, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="blog-card">
                <Card.Img variant="top" src={blog.image} />
                <div className="orange-line"></div>
                <Card.Body>
                  <Card.Title className="text-white">{blog.title}</Card.Title>
                  <Card.Text className="text-secondary">{blog.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    
      </motion.section>
  );
};

export default Blog;
