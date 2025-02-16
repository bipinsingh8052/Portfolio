import { useState } from "react";
import "../css/Navbar.css"

import { Link } from "react-router-dom";
export default function Navbartoo() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <Link className="navbar-brand " to="/">
         Bipin <span>Singh</span> 
        </Link>
        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to='home'>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="service">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="skills">
                Skills
              </Link>
            </li><li className="nav-item">
              <Link className="nav-link"  to="project">
                Project
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
