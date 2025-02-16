import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../css/Footer.css"; // Import CSS file for animation

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`footer  text-light py-3 ${showFooter ? "show" : "hide"}`}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">&copy; 2024 All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0">
              Developed by{" "}
              <a href="/" className="text-warning text-decoration-none fw-bold">
                Bipinsingh.dev
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
